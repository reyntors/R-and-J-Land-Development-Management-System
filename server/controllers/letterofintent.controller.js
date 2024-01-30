const LetterOfIntent = require('../models/letterOfIntent.model');
const User = require('../models/user.model');
const { PDFDocument} = require('pdf-lib');// Import StandardFonts
const Inquiry = require('../models/inquiries.model');
const { S3Client, PutObjectCommand } = require("@aws-sdk/client-s3");
const axios = require('axios');
const Lot = require('../models/lot.model')



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
  
// Create a new letter of intent
exports.createLetterOfIntent = async (req, res, next) => {
    try {

        
        const letterOfIntentData = req.body;
        const username = req.user.username;
        

       
        const user = await User.findOne({ username });

        if (!user) {

            return res.status(404).json({message: 'User not found!'})
        }


       
         const pdfPath = await generateLetterOfIntentPDF(user, letterOfIntentData);


         const newLetterOfIntent = new LetterOfIntent({
            ...letterOfIntentData,
            date: formattedDate,
            createdBy: user.userId, 
            url: pdfPath,
            isSubmitted: true
        });
        

        // Save the LetterOfIntent to the database
        const savedLetterOfIntent = await newLetterOfIntent.save();


         // Update the user's letterOfIntent field with the savedLetterOfIntent
        user.letterOfIntent = savedLetterOfIntent;


         // Generate inquiryId
     const inquiryId = await generateInquiryId();

      const newInquiry = {
        inquiryId,
        name: user.fullname,
        subject: 'Submitted of Letter Of Intent',
        context: `${user.fullname}, Request an letter of intent form.`,
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

        const temp = user.letterOfIntent.lotNumber[0]

        const lotKey =  'lot' + temp;


        //this function is used when accountDetails is not existed
        if(!user.accountDetails || !user.accountDetails.details1 || JSON.stringify(user.accountDetails.details1) === '{}'){
        console.log("user account details is empty")
        // Schedule the task to rollback lot status to "sell" after 5 days
       await scheduleLotRollback(lotKey);

        }else {
            console.log("details1 is not empty");
            
        }


        const [firstItem] = await Lot.find();

        const updatedLot = firstItem ? firstItem.lots : {};


        if (!updatedLot) {
            return res.status(404).json({ message: "Lot not found" });
          }
        
        const lot = updatedLot.get(lotKey);


        if(lot) {
                
            if ('status' in lot) {
                lot.status = 'reserved';
              }


        }

        await firstItem.save();
        

        return res.status(200).send({
            message: `${username}! Your Letter of Intent successfully created!`,
            pdfPath: pdfPath,
            data: savedLetterOfIntent});

       
    } catch (error) {
        return next(error);
    }
};



 

async function  generateLetterOfIntentPDF( user, letterOfIntentData) {
    try {
        // Load existing PDF template from URL
        const pdfUrl = 'https://aws-bucket-nodejs.s3.amazonaws.com/uploads/templates/Letter_of_Intent.pdf';
        const response = await axios.get(pdfUrl, { responseType: 'arraybuffer' });
        const existingPdfBytes = new Uint8Array(response.data);
        const pdfDoc = await PDFDocument.load(existingPdfBytes);

        // Access the first page
        let fieldNames = pdfDoc.getForm().getFields()

        fieldNames = fieldNames.map((f) => f.getName())

        const form = pdfDoc.getForm()


        form.getTextField(fieldNames[0]).setText(formattedDate)
        form.getTextField(fieldNames[1]).setText(letterOfIntentData.project)
        const lotNumberText = letterOfIntentData.lotNumber.join(', ');
        form.getTextField(fieldNames[2]).setText(lotNumberText)
        form.getTextField(fieldNames[3]).setText(letterOfIntentData.fullname)
        form.getTextField(fieldNames[4]).setText(letterOfIntentData.citizenship)
        form.getTextField(fieldNames[5]).setText(letterOfIntentData.contactNo)
        form.getTextField(fieldNames[6]).setText(letterOfIntentData.emailAddress)
        form.getTextField(fieldNames[7]).setText(letterOfIntentData.messenger)
        form.getTextField(fieldNames[8]).setText(letterOfIntentData.viber)

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
            Key: `uploads/generatedForms/${user.userId}_${user.fullname}_letter_of_intent.pdf`, // Define the desired key (path) on S3
            Body: pdfBytes, 
        };

            await s3.send(new PutObjectCommand(s3Params));
            const pdfPath = `https://${process.env.AWS_BUCKET_NAME}.s3.${process.env.AWS_REGION}.amazonaws.com/${s3Params.Key}`;
            
            
            return pdfPath;
        

    } catch (error) {
        console.error('Error:', error);
    }
}

let rollbackTimeout;

// Function to update lot status to "sell" after 5 days if no reservation is submitted
async function scheduleLotRollback(lotKey) {
    // Schedule the task to run after 5 days
    rollbackTimeout = setTimeout(async () => {
        const [firstItem] = await Lot.find();

        if (!firstItem) {
            return console.error("Lot not found");
        }

        const updatedLot = firstItem.lots;

        if (!updatedLot) {
            return console.error("Lot not found");
        }

        const lot = updatedLot.get(lotKey);

        if (lot && 'status' in lot && lot.status === 'reserved') {
            // Update lot status to "sell" if it is still reserved after 5 days
            lot.status = 'sell';
            await firstItem.save();
            console.log(`Lot ${lotKey} status rolled back to "sell"`);
        }
    }, 3 * 60 * 1000); //   5 * 24 * 60 * 60 * 1000
}

// You can call this function to stop the rollback process
exports.stopLotRollback = async() => {
    console.log("the 5 days rollback is stopped!")
    clearTimeout(rollbackTimeout);
}


 






exports.getLetterOfIntentDetails = async (req, res, next) => {
    try {

    
        const { id } = req.params;

        if (id) {
           
            const letterOfIntent = await LetterOfIntent.findById(id);

            if (!letterOfIntent) {
                return res.status(404).json({ message: 'Letter of intent not found' });
            }

            return res.status(200).json({ message: 'Letter of intent found', data: letterOfIntent });
        } else {
            
            const letterOfIntents = await LetterOfIntent.find();

            return res.status(200).json({ message: 'All letter of intent records', data: letterOfIntents });
        }
    } catch (error) {
        return next(error);
    }
};


exports.updateLetterOfIntent = async (req, res, next) => {
    try {
        const letterOfIntentId = req.params.id;
        const updates = req.body;

        const updatedLetterOfIntent = await LetterOfIntent.findByIdAndUpdate(letterOfIntentId, updates, {
            new: true, 
        });

        if (!updatedLetterOfIntent) {
            return res.status(404).json({ message: 'Letter of intent not found' });
        }

        return res.status(200).json({ message: 'Letter of intent updated successfully', data: updatedLetterOfIntent });
    } catch (error) {
        return next(error);
    }
};


exports.deleteLetterOfIntent = async (req, res, next) => {
    try {
        const letterOfIntentId = req.params.id;

        const deletedLetterOfIntent = await LetterOfIntent.findByIdAndRemove(letterOfIntentId);

        if (!deletedLetterOfIntent) {
            return res.status(404).json({ message: 'Letter of intent not found' });
        }

        return res.status(200).json({ message: 'Letter of intent deleted successfully' });
    } catch (error) {
        return next(error);
    }
};