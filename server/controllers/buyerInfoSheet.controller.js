const buyerInfoSheet = require('../models/buyerInfoSheet.model');
const User = require('../models/user.model');
const { PDFDocument} = require('pdf-lib');// Import StandardFonts
const Inquiry = require('../models/inquiries.model');
const { S3Client, PutObjectCommand } = require("@aws-sdk/client-s3");
const axios = require('axios');




async function generateInquiryId() {
    // Find all documents and their inquiries array
    const results = await Inquiry.find();
  
    let maxInquiryId = 0;
  
    // Iterate through the results to find the maximum inquiryId
    results.forEach((result) => {
      if (result.inquiries && result.inquiries.length > 0) {
        result.inquiries.forEach((inquiry) => {
          maxInquiryId = Math.max(maxInquiryId, inquiry.inquiryId);
        });
      }
    });
  
    // Increment the maximum inquiryId found or initialize to 1 if none exists
    const nextInquiryId = maxInquiryId + 1 || 1;
  
    return nextInquiryId;
  }

  const date = new Date()
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0'); // Month is 0-based, so add 1 and format as two digits
  const day = String(date.getDate()).padStart(2, '0');
  const formattedDate = `${year}-${month}-${day}`;
  



exports.createbuyerInfoSheet = async (req, res) => {

try{
    const username = req.user.username;
    const buyerInfoSheetData = req.body;


    const user = await User.findOne({username});

    if(!user){

        return res.status(404).json({message:'User not found'});

    }

    const pdfPath = await generateBuyerInfoSheetPDF(user, buyerInfoSheetData);



    const newbuyerInfoSheet = new buyerInfoSheet({
        ...buyerInfoSheetData,
        createdBy: user.userId, 
        url: pdfPath,
        isSubmitted: true
    });


    const savedBuyerInfoSheet = await newbuyerInfoSheet.save();

    user.buyerInfoSheet = savedBuyerInfoSheet;

    //add to profile details
    const newProfileDetails = {

        fullname: user.fullname,
        contactNumber: savedBuyerInfoSheet.buyerMobileNo,
        email: savedBuyerInfoSheet.buyerEmailAddress,
        birthday: savedBuyerInfoSheet.buyerBirthdate,
        address: savedBuyerInfoSheet.buyerPrimaryAddress,
        civilStatus: savedBuyerInfoSheet.buyerCivilStatus,
        spouseName: savedBuyerInfoSheet.spouseFirstname,
        occupation: savedBuyerInfoSheet.buyerEmploymentPosition,
        monthlyGrossIncome: savedBuyerInfoSheet.buyerEmploymentGrossMonthly,
        buyerSourceOfIncome: savedBuyerInfoSheet.buyerEmploymentType,
        typeOfEmployment: savedBuyerInfoSheet.buyerEmploymentType,
        employer: savedBuyerInfoSheet.buyerEmployerBusinessName,
        businessName: savedBuyerInfoSheet.buyerEmployerBusinessName,
        businessAddress: savedBuyerInfoSheet.buyerOfficeAddress,
     

    }

    user.profileDetails = newProfileDetails

      // Generate inquiryId
      const inquiryId = await generateInquiryId();

      const newInquiry = {
        inquiryId,
        name: user.fullname,
        subject: 'Submitted of Buyer Info Sheet',
        context: `${user.fullname}, Request an Buyer Info Sheet form.`,
        email: user.email,
        fblink: user.fbAccount,
        phonenumber: user.contactNumber,
        date: formattedDate,
        };

        const inquiries = await Inquiry.findOne()

        if (!inquiries) {
            // If inquiries object doesn't exist, create it
            const newInquiries = new Inquiry({ inquiries: [newInquiry] });
            await newInquiries.save();
        }else{

            inquiries.inquiries.push(newInquiry);
             //save to inquiries
            await inquiries.save();

        }


        // save to users record
        await user.save();


        return res.status(200).send({
            message: `${username}! Your Buyer Info Sheet successfully submitted!`,
            pdfPath: pdfPath,
            data: savedBuyerInfoSheet});

        }catch(error){
            console.log(error);
            throw error
        }

};



async function  generateBuyerInfoSheetPDF( user, buyerInfoSheetData) {
    try {
        // Load existing PDF template from URL
        const pdfUrl = 'https://aws-bucket-nodejs.s3.amazonaws.com/uploads/templates/Buyer_Info_Sheet.pdf';
        const response = await axios.get(pdfUrl, { responseType: 'arraybuffer' });
        const existingPdfBytes = new Uint8Array(response.data);
        const pdfDoc = await PDFDocument.load(existingPdfBytes);

        // Access the first page
        let fieldNames = pdfDoc.getForm().getFields()

        fieldNames = fieldNames.map((f) => f.getName())

  
        const form = pdfDoc.getForm()

        // //buyer
        form.getTextField(fieldNames[0]).setText(buyerInfoSheetData.projectName); //project
        form.getTextField(fieldNames[35]).setText(buyerInfoSheetData.lotUnit) //lot No

        
        if(buyerInfoSheetData.purposePurchase === 'primary residence'){

            form.getCheckBox(fieldNames[57]).check(); //primary
        
        }
        else if(buyerInfoSheetData.purposePurchase === 'investment'){

           

            form.getCheckBox(fieldNames[58]).check() //investment
        }
        else if(buyerInfoSheetData.purposePurchase === 'tertiary residence'){

            form.getCheckBox(fieldNames[59]).check() //tertiary residence 
        }
        else if(buyerInfoSheetData.purposePurchase === 'secondary residence'){

            form.getCheckBox(fieldNames[60]).check() //secondary residence
        }
        else{

            form.getTextField(fieldNames[47]).setText(buyerInfoSheetData.purposePurchase) //others
        }

        //registered as

        if(buyerInfoSheetData.buyerDesirePurchase === 'sole'){

            form.getCheckBox(fieldNames[61]).check() 
        }
        else if(buyerInfoSheetData.buyerDesirePurchase === 'married'){

            form.getCheckBox(fieldNames[62]).check() 
        }
        else if(buyerInfoSheetData.buyerDesirePurchase === 'partnership'){

            form.getCheckBox(fieldNames[63]).check() 
        }
        else if(buyerInfoSheetData.buyerDesirePurchase === 'corporation'){

            form.getCheckBox(fieldNames[64]).check() 
        }

        
         form.getTextField(fieldNames[92]).setText(buyerInfoSheetData.buyerFirstname);
         form.getTextField(fieldNames[33]).setText(buyerInfoSheetData.buyerMiddlename)
         form.getTextField(fieldNames[43]).setText(buyerInfoSheetData.buyerLastname)
         form.getTextField(fieldNames[1]).setText(buyerInfoSheetData.buyerBirthdate)
         form.getTextField(fieldNames[2]).setText(buyerInfoSheetData.buyerReligion)
         form.getTextField(fieldNames[51]).setText(buyerInfoSheetData.buyerCitizenship)
         form.getTextField(fieldNames[53]).setText(buyerInfoSheetData.buyerTIN)
         form.getTextField(fieldNames[36]).setText(buyerInfoSheetData.buyerViberNo)

         if(buyerInfoSheetData.buyerGovtIssuedID === 'driver license'){

             form.getTextField(fieldNames[25]).setText(buyerInfoSheetData.buyerGovtIssuedIDNo) //driver's license
         }
         else if(buyerInfoSheetData.buyerGovtIssuedID === 'sss/gsis'){

             form.getTextField(fieldNames[37]).setText(buyerInfoSheetData.buyerGovtIssuedIDNo) //sss/gsis

         }
        

         // buyer civil status

         if(buyerInfoSheetData.buyerCivilStatus === 'single'){

            form.getCheckBox(fieldNames[65]).check() //Single
         }
         else if(buyerInfoSheetData.buyerCivilStatus === 'married'){

            form.getCheckBox(fieldNames[66]).check() //married

         }
         else if(buyerInfoSheetData.buyerCivilStatus === 'widow'){

              form.getCheckBox(fieldNames[67]).check() //widow
            
         }
        
         //buyer sex

         if(buyerInfoSheetData.buyerSex === 'female'){

             form.getCheckBox(fieldNames[68]).check() //female

         }
         else if(buyerInfoSheetData.buyerSex === 'male'){

             form.getCheckBox(fieldNames[69]).check() //male
         }
      
        
        form.getTextField(fieldNames[84]).setText(buyerInfoSheetData.buyerMobileNo)
        form.getTextField(fieldNames[87]).setText(buyerInfoSheetData.buyerMessengerAccount)
        form.getTextField(fieldNames[55]).setText(buyerInfoSheetData.buyerEmailAddress)
        form.getTextField(fieldNames[36]).setText(buyerInfoSheetData.buyerViberNo)
        form.getTextField(fieldNames[3]).setText(buyerInfoSheetData.buyerPassportNo)
        form.getTextField(fieldNames[5]).setText(buyerInfoSheetData.buyerOfficeAddress)
        form.getTextField(fieldNames[6]).setText(buyerInfoSheetData.buyerEmploymentIndustry)
        form.getTextField(fieldNames[7]).setText(buyerInfoSheetData.buyerEmploymentOfficeMobileNo)
        form.getTextField(fieldNames[17]).setText(buyerInfoSheetData.buyerEmployerBusinessName)
        form.getTextField(fieldNames[19]).setText(buyerInfoSheetData.buyerPrimaryAddress)
        form.getTextField(fieldNames[20]).setText(buyerInfoSheetData.buyerAbroadAddress)
        form.getTextField(fieldNames[23]).setText(buyerInfoSheetData.buyerPassportDateIssued)
        form.getTextField(fieldNames[24]).setText(buyerInfoSheetData.buyerPassportDateExpiration)
        form.getTextField(fieldNames[26]).setText(buyerInfoSheetData.buyerEmploymentOfficeEmail)
        form.getTextField(fieldNames[31]).setText(buyerInfoSheetData.buyerEmploymentPosition)
        form.getTextField(fieldNames[38]).setText(buyerInfoSheetData.buyerEmploymentGrossMonthly)

        //employment type
        if(buyerInfoSheetData.buyerEmploymentType === 'proprietor'){

            form.getCheckBox(fieldNames[74]).check() //proprietor
        }
        else if(buyerInfoSheetData.buyerEmploymentType === 'locally employed'){

              form.getCheckBox(fieldNames[75]).check() //locally employed
        }
        else if(buyerInfoSheetData.buyerEmploymentType === 'overseas'){

             form.getCheckBox(fieldNames[48]).check() //overseas contract
        }

        //buyerownership
        if(buyerInfoSheetData.buyerOwnershipCurrentResidence === 'owned'){

            form.getCheckBox(fieldNames[70]).check() //owned
        }
        else if(buyerInfoSheetData.buyerOwnershipCurrentResidence === 'rented'){

            form.getCheckBox(fieldNames[71]).check() //rented
        }
        else if(buyerInfoSheetData.buyerOwnershipCurrentResidence === 'living with relatives'){

            form.getCheckBox(fieldNames[72]).check() //living with relatives
        }
        else if(buyerInfoSheetData.buyerOwnershipCurrentResidence === 'mortgaged'){

            form.getCheckBox(fieldNames[73]).check() //mortgage
        }

        form.getTextField(fieldNames[44]).setText(buyerInfoSheetData.buyerEmploymentYearsService)
        form.getTextField(fieldNames[50]).setText(buyerInfoSheetData.buyerOwnershipCurrentResidenceYears)
        
  

        //spouse
        form.getTextField(fieldNames[8]).setText(buyerInfoSheetData.spouseFirstname)
        form.getTextField(fieldNames[34]).setText(buyerInfoSheetData.spouseMiddlename)
        form.getTextField(fieldNames[45]).setText(buyerInfoSheetData.spouseLastname)
        form.getTextField(fieldNames[9]).setText(buyerInfoSheetData.spouseBirthdate)//
        form.getTextField(fieldNames[10]).setText(buyerInfoSheetData.spouseReligion)
        form.getTextField(fieldNames[11]).setText(buyerInfoSheetData.spouseCitizenship)
        form.getTextField(fieldNames[12]).setText(buyerInfoSheetData.spouseTIN)
        form.getTextField(fieldNames[13]).setText(buyerInfoSheetData.spousePassportNo)
        form.getTextField(fieldNames[14]).setText(buyerInfoSheetData.spouseOfficeAddress)
        form.getTextField(fieldNames[15]).setText(buyerInfoSheetData.spouseEmploymentIndustry)
        form.getTextField(fieldNames[16]).setText(buyerInfoSheetData.spouseEmploymentOfficeMobileNo)
        form.getTextField(fieldNames[18]).setText(buyerInfoSheetData.spouseEmployerBusinessName)
        form.getTextField(fieldNames[21]).setText(buyerInfoSheetData.spousePrimaryAddress)
        form.getTextField(fieldNames[22]).setText(buyerInfoSheetData.spouseAbroadAddress)
        form.getTextField(fieldNames[27]).setText(buyerInfoSheetData.spousePassportDateIssued)
        form.getTextField(fieldNames[28]).setText(buyerInfoSheetData.spousePassportDateExpiration)
        form.getTextField(fieldNames[30]).setText(buyerInfoSheetData.spouseEmploymentOfficeEmail)
        form.getTextField(fieldNames[32]).setText(buyerInfoSheetData.spouseEmploymentPosition)
        form.getTextField(fieldNames[39]).setText(buyerInfoSheetData.spouseEmailAddress)
        form.getTextField(fieldNames[40]).setText(buyerInfoSheetData.spouseViberNo)
        form.getTextField(fieldNames[42]).setText(buyerInfoSheetData.spouseEmploymentGrossMonthly)
        form.getTextField(fieldNames[46]).setText(buyerInfoSheetData.spouseEmploymentYearsService)


        if(buyerInfoSheetData.spouseGovtIssuedID === 'drivers license'){

             form.getCheckBox(fieldNames[29]).setText(buyerInfoSheetData.spouseGovtIssuedIDNo)//drivers license
        }
        else if(buyerInfoSheetData.spouseGovtIssuedID === 'sss/gsis'){

             form.getTextField(fieldNames[41]).setText(buyerInfoSheetData.spouseGovtIssuedIDNo) //sss/gsis
        }


       
       
        if(buyerInfoSheetData.spouseEmploymentType === 'proprietor'){

              form.getCheckBox(fieldNames[79]).check() //proprietor
        }
        else if(buyerInfoSheetData.spouseEmploymentType === 'locally employed'){

            form.getCheckBox(fieldNames[80]).check() //locally employed

        }
        else if(buyerInfoSheetData.spouseEmploymentType === 'overseas'){

            form.getCheckBox(fieldNames[49]).check() //overseas

        }
        

        if(buyerInfoSheetData.spouseCivilStatus === 'single'){

             form.getCheckBox(fieldNames[76]).check() //single
        }
        else if(buyerInfoSheetData.spouseCivilStatus === 'married'){

            form.getCheckBox(fieldNames[77]).check() //married
        }
        else if(buyerInfoSheetData.spouseCivilStatus === 'widow'){

             form.getCheckBox(fieldNames[76]).check() //widow

        }
       
          

        if(buyerInfoSheetData.spouseSex === 'female'){

             form.getCheckBox(fieldNames[81]).check() //female
        }
        else if(buyerInfoSheetData.spouseSex === 'male'){

             form.getCheckBox(fieldNames[82]).check() //male

        }
        
 
        form.getTextField(fieldNames[85]).setText(buyerInfoSheetData.spouseMobileNo)
        form.getTextField(fieldNames[88]).setText(buyerInfoSheetData.spouseMessengerAccount)
        form.getTextField(fieldNames[46]).setText(buyerInfoSheetData.spouseEmploymentYearsService) 


        //spa
        form.getTextField(fieldNames[89]).setText(buyerInfoSheetData.spaMiddlename)
       
        form.getTextField(fieldNames[90]).setText(buyerInfoSheetData.spaLastName)
        form.getTextField(fieldNames[91]).setText(buyerInfoSheetData.spaFirstname)
        form.getTextField(fieldNames[93]).setText(buyerInfoSheetData.spaDateBirth);
        form.getTextField(fieldNames[94]).setText(buyerInfoSheetData.spaEmailAddress);
        form.getTextField(fieldNames[86]).setText(buyerInfoSheetData.spaMessengerAcc)
        form.getTextField(fieldNames[52]).setText(buyerInfoSheetData.spaPostalAddress)
        form.getTextField(fieldNames[54]).setText(buyerInfoSheetData.spaRelationToBuyer)
        form.getTextField(fieldNames[83]).setText(buyerInfoSheetData.spaMobileNo)
        
       

        if(buyerInfoSheetData.spaSex){

             form.getCheckBox(fieldNames[95]).check() //female
        }
        else if(buyerInfoSheetData.spaSex){

             form.getCheckBox(fieldNames[96]).check() //male
        }

       
       
        if(buyerInfoSheetData.spaCivilStatus === 'married'){

            form.getCheckBox(fieldNames[97]).check() //married
        }
        else if(buyerInfoSheetData.spaCivilStatus === 'widow'){

            form.getCheckBox(fieldNames[98]).check() //widow
        }
        else if(buyerInfoSheetData.spaCivilStatus === 'single'){

            form.getCheckBox(fieldNames[56]).check() //single

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
            Key: `uploads/generatedForms/${user.userId}_${user.fullname}_Buyer_Info_Sheet.pdf`, // Define the desired key (path) on S3
            Body: pdfBytes, 
        };

            await s3.send(new PutObjectCommand(s3Params));
            const pdfPath = `https://${process.env.AWS_BUCKET_NAME}.s3.${process.env.AWS_REGION}.amazonaws.com/${s3Params.Key}`;
            
            
            return pdfPath;
        

    } catch (error) {
        console.error('Error:', error);
        throw error
    }
}
