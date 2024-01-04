const ApprovePayment = require('../models/approvePaymentScheme.model');
const { S3Client, PutObjectCommand } = require("@aws-sdk/client-s3");
const axios = require('axios');
const { PDFDocument } = require('pdf-lib');
const User = require('../models/user.model');
const {contractToSellSchema} = require('../models/user.model');

const date = new Date()
const year = date.getFullYear();
const month = String(date.getMonth() + 1).padStart(2, '0');
const day = String(date.getDate()).padStart(2, '0');
const formattedDate = `${year}-${month}-${day}`;


exports.createApprovePaymentScheme = async (req, res, next) => {
    try {
        const approvePaymentData = req.body;
        const username = req.user.username;
        const {id} = req.params;

 

        const staff = await User.findOne({ username  });

        if(!staff) {
            return res.status(404).json({message: 'user not found'});
        }

        const client = await User.findOne({ userId: id});

        if(!client) {
            return res.status(404).json({message: 'client not found!'});
        }

        const pdfPath = await generateApprovePaymentPDF( approvePaymentData, client);

        

        if(approvePaymentData.typePayment === 'cash'){

            const newApprovePayment = new ApprovePayment({
                ...approvePaymentData,
                cash: {...approvePaymentData},
                date: formattedDate,
                url: pdfPath,
                isSubmitted: true,
                createdBy: staff.username,
            });
            
            const savedPayment = await newApprovePayment.save();

            return res.status(200).json({
                message: 'Approve Payment Scheme created successfully',
                data: savedPayment
            });

        }else if(approvePaymentData.typePayment === 'installment'){

            const newApprovePayment = new ApprovePayment({
                ...approvePaymentData,
                installment: {...approvePaymentData},
                date: formattedDate,
                url: pdfPath,
                isSubmitted: true,
                createdBy: staff.username,
            });
            
            const savedPayment = await newApprovePayment.save();

            return res.status(200).json({
                message: 'Approve Payment Scheme created successfully',
                data: savedPayment
            });


        }else {
            const newApprovePayment = new ApprovePayment({
                ...approvePaymentData,
                others: {...approvePaymentData},
                date: formattedDate,
                url: pdfPath,
                isSubmitted: true,
                createdBy: staff.username,
            });
            
            const savedPayment = await newApprovePayment.save();

            return res.status(200).json({
                message: 'Approve Payment Scheme created successfully',
                data: savedPayment
            });
        }

        
    } catch (error) {
        
        throw  new Error('Failed To create Approvement Scheme' + error)
    }
}

async function generateApprovePaymentPDF(approvePaymentData, client){
    try {

        const pdfUrl = 'https://aws-bucket-nodejs.s3.amazonaws.com/uploads/templates/Approved-Payment.pdf';
        const response = await axios.get(pdfUrl, {responseType: 'arraybuffer'});
        const existingPdfBytes = new Uint8Array(response.data);
        const pdfDoc = await PDFDocument.load(existingPdfBytes);

        // Access the first page
      let fieldNames = pdfDoc.getForm().getFields()
      
      fieldNames = fieldNames.map((f) => f.getName())
     
      const form = pdfDoc.getForm()

      form.getTextField(fieldNames[0]).setText(approvePaymentData.name);
      form.getTextField(fieldNames[1]).setText(formattedDate);
      form.getTextField(fieldNames[2]).setText(approvePaymentData.blockNo);
      form.getTextField(fieldNames[3]).setText(approvePaymentData.phaseNo);
      form.getTextField(fieldNames[4]).setText(approvePaymentData.lotNo);
      form.getTextField(fieldNames[5]).setText(String(approvePaymentData.amount));
      form.getTextField(fieldNames[6]).setText(approvePaymentData.datePaid);
      
      if(approvePaymentData.typePayment === 'cash'){
        
        form.getCheckBox(fieldNames[7]).check()
        
        form.getTextField(fieldNames[8]).setText(String(approvePaymentData.contractPriceDiscountCash));
        form.getTextField(fieldNames[9]).setText(String(approvePaymentData.discountAvailCash));
        form.getTextField(fieldNames[10]).setText(String(approvePaymentData.totalCash));
      }

      if(approvePaymentData.typePayment === 'installment'){
    
        form.getCheckBox(fieldNames[11]).check()
        form.getTextField(fieldNames[12]).setText(String(approvePaymentData.PercentageDonwpayment));
        form.getTextField(fieldNames[13]).setText(String(approvePaymentData.DiscountOnDownpayment));
        form.getTextField(fieldNames[14]).setText(String(approvePaymentData.TotalDownpayment1));
        form.getTextField(fieldNames[15]).setText(String(approvePaymentData.TotalDownpayment2));
        form.getTextField(fieldNames[16]).setText(String(approvePaymentData.TotalbalanceOfAmortization1));
        form.getTextField(fieldNames[17]).setText(String(approvePaymentData.TotalbalanceOfAmortization2));
        form.getTextField(fieldNames[24]).setText(String(approvePaymentData.DueMonth1));
        form.getTextField(fieldNames[34]).setText(String(approvePaymentData.DueMonth2));
        form.getTextField(fieldNames[25]).setText(String(approvePaymentData.AmountDue1));
        form.getTextField(fieldNames[26]).setText(String(approvePaymentData.AmountDue2));
        form.getTextField(fieldNames[18]).setText(approvePaymentData.FirstDueDate);
        form.getTextField(fieldNames[19]).setText(approvePaymentData.EveryDate);
        form.getTextField(fieldNames[20]).setText(approvePaymentData.Term);
       
       
      }

      if(approvePaymentData.typePayment === 'others'){
       
        form.getCheckBox(fieldNames[21]).check()
        form.getTextField(fieldNames[22]).setText(String(approvePaymentData.totalReservationFee));
        form.getTextField(fieldNames[23]).setText(String(approvePaymentData.balancePayableIn));
        form.getTextField(fieldNames[27]).setText(approvePaymentData.FirstDueDate);
        form.getTextField(fieldNames[28]).setText(approvePaymentData.EveryDate);
        form.getTextField(fieldNames[29]).setText(approvePaymentData.Term);
        form.getTextField(fieldNames[30]).setText(String(approvePaymentData.AmountDue1));
        form.getTextField(fieldNames[31]).setText(String(approvePaymentData.AmountDue2));
        form.getTextField(fieldNames[32]).setText(String(approvePaymentData.DueMonth1));
        form.getTextField(fieldNames[33]).setText(String(approvePaymentData.DueMonth2));
  
      }

      pdfDoc
            .getForm()
            .getFields()
            .forEach((field) => field.enableReadOnly());

        // Save the modified PDF to a new file
        const pdfBytes = await pdfDoc.save();

           // AWS S3 configuration
        const s3 = new S3Client({
            accessKeyId: process.env.AWS_ACCESS_KEY_ID,
            secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
            region: process.env.AWS_REGION,
        });

        const s3Params = {
            Bucket: process.env.AWS_BUCKET_NAME,
            Key: `uploads/generatedForms/${client.username}_approve_payment_scheme.pdf`, // Define the desired key (path) on S3
            Body: pdfBytes, 
        };

            await s3.send(new PutObjectCommand(s3Params));
            const pdfPath = `https://${process.env.AWS_BUCKET_NAME}.s3.${process.env.AWS_REGION}.amazonaws.com/${s3Params.Key}`;
            
            
            return pdfPath;

        
    } catch (error) {
        console.log(error)
      throw error
    }
}

exports.createContractToSell = async (req, res) => {
    try {

        const {id} = req.params;
        const username = req.user.username;

        const customer = await User.findOne({userId: id});

        if(!customer){

            return res.status(404).json({message: 'this customer is not found'});

        }

        const staff = await User.findOne({username});

        if(!staff){

            return res.status(404).json({message: 'this staff is not found'});
        }
      
        const  newContractToSell = {

            clientName: customer.approvePaymentScheme.name,
            projectName: customer.letterOfIntent.project,
            blockNo: customer.approvePaymentScheme.blockNo,
            area: customer.reservationAgreement.details1.area_1,
            downpayment: customer.reservationAgreement.details1.downpayment_1

        }


        const savedData =  customer.save(newContractToSell);

        const pdfPath =  await generateContractToSellPDF(newContractToSell, customer);





        return res.status(200),json({
            message: 'contract to sell  successfully created',
            pdfPath: pdfPath,
            data: savedData
        })

        
    } catch (error) {
        throw error
    }
}


async function generateContractToSellPDF(newContractToSell, customer){

        try {
            const pdfUrl = 'https://aws-bucket-nodejs.s3.amazonaws.com/uploads/templates/Contract-to-Sell.pdf';
            const response = await axios.get(pdfUrl, {responseType: 'arraybuffer'});
            const existingPdfBytes = new Uint8Array(response.data);
            const pdfDoc = await PDFDocument.load(existingPdfBytes);

            // Access the first page
        let fieldNames = pdfDoc.getForm().getFields()
        
        fieldNames = fieldNames.map((f) => f.getName())

        console.log(fieldNames)
        
        const form = pdfDoc.getForm()



        pdfDoc
        .getForm()
        .getFields()
        .forEach((field) => field.enableReadOnly());

    // Save the modified PDF to a new file
    const pdfBytes = await pdfDoc.save();

    // AWS S3 configuration
    const s3 = new S3Client({
        accessKeyId: process.env.AWS_ACCESS_KEY_ID,
        secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
        region: process.env.AWS_REGION,
    });

    const s3Params = {
        Bucket: process.env.AWS_BUCKET_NAME,
        Key: `uploads/generatedForms/${customer.username}_approve_payment_scheme.pdf`, // Define the desired key (path) on S3
        Body: pdfBytes, 
    };

        await s3.send(new PutObjectCommand(s3Params));
        const pdfPath = `https://${process.env.AWS_BUCKET_NAME}.s3.${process.env.AWS_REGION}.amazonaws.com/${s3Params.Key}`;
        
        
        return pdfPath;
        
    } catch (error) {
        
    }
}