const LetterOfIntent = require('../models/letterOfIntent.model');
const User = require('../models/user.model');
const { PDFDocument, rgb, StandardFonts } = require('pdf-lib'); // Import StandardFonts
const Inquiry = require('../models/inquiries.model');

const { S3Client, PutObjectCommand } = require("@aws-sdk/client-s3");


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
  
// Create a new letter of intent
exports.createLetterOfIntent = async (req, res, next) => {
    try {

        
        const letterOfIntentData = req.body;
        const username = req.user.username;
        

       
        const user = await User.findOne({ username });

        if (!user) {

            return res.status(404).json({message: 'User not found!'})
        }


         // Create a new PDF document
         const pdfDoc = await PDFDocument.create();
         const pdfPath = await generateLetterOfIntentPDF(pdfDoc, user, letterOfIntentData);


         const newLetterOfIntent = new LetterOfIntent({
            ...letterOfIntentData,
            createdBy: user._id, 
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
        date: newLetterOfIntent.date,
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
            message: `${username}! Your Letter of Intent successfully created!`,
            pdfPath: pdfPath,
            data: savedLetterOfIntent});

       
    } catch (error) {
        return next(error);
    }
};

// Function to generate PDF content for Letter of Intent
async function  generateLetterOfIntentPDF(pdfDoc, user, letterOfIntentData) {

    try {

   
    // Define A4 page dimensions
    const pageWidth = 595.276; 
    const pageHeight = 841.890; 
    const page = pdfDoc.addPage([pageWidth, pageHeight]); // Specify page dimensions

    
   // Create a font - Use StandardFonts.Helvetica
   const font = await pdfDoc.embedFont(StandardFonts.Helvetica);
   
   // Define coordinates for text placement
   let x = 50;
   let y = 850;


   let content = '';
   let projectContent = '';

   projectContent = `
     Project:
     [${letterOfIntentData.project === 'Northown' ? 'X' : ' '}] Northown [${letterOfIntentData.project === 'Northcrest' ? 'X' : ' '}] Northcrest  [${letterOfIntentData.project === 'Eden Ridge' ? 'X' : ' '}] Eden Ridge  [${letterOfIntentData.project === 'Narra Park Residence' ? 'X' : ' '}] Narra Park Residence   
       `;

   // Add content to the PDF page (simulate HTML content)
    content = `
                           

               ${' '.repeat(55)}Letter of Intent

     Date: ${letterOfIntentData.date}

     Alsons Development and Investment Corporation
     329 Bonifacio St, Davao City
     
     Gentlemen:
     I/We hereby manifest my/our intent to purchase ${letterOfIntentData.purchase} lot(s)/unit(s).

     ${projectContent}

     Location:
     PH: ${letterOfIntentData.locationPH}  Blk: ${letterOfIntentData.locationBlk}  Lot/Unit: ${letterOfIntentData.locationLotOrUnit}

     For your reference, please see my information below;
     Name: ${letterOfIntentData.name}
     Address: ${letterOfIntentData.address}
     Citizenship: ${letterOfIntentData.citizenship}
     Contact No.: ${letterOfIntentData.contactNo}
     Email Address: ${letterOfIntentData.emailAddress}

     I understand and agree on the following:
     - That this document does not signify official booking of the sale.
     - That the purpose of this document is only to BLOCK-OFF the lot/unit within SEVEN (7) WORKING DAYS.
     - That I must submit all complete requirements and reservation fee not later than ${letterOfIntentData.reservationTimeSpan} to 
       officially record the above-mentioned lot/unit as safe, otherwise, ALsons Deve will automatically open the 
       blocked-off lot/unit to other interested prospect buyers.

     Sincerely yours,
     __________________________                    ___________________
       Name of Client & Signature                          Date
    
     Received by:
     __________________________                    ___________________
           Name & Signature                                Date      
     
   `;

   // Split the content into lines and draw them on the page
   const lines = content.split('\n');
   lines.forEach((line) => {
       page.drawText(line, {
           x,
           y,
           size: 9,
           font,
           color: rgb(0, 0, 0),
       });
       y -= 20; // Adjust the vertical position for the next line
   });

   const pdfBytes = await pdfDoc.save();

   // AWS S3 configuration
        const s3 = new S3Client({
            accessKeyId: process.env.AWS_ACCESS_KEY_ID,
            secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
            region: process.env.AWS_REGION,
        });

        const s3Params = {
            Bucket: process.env.AWS_BUCKET_NAME,
            Key: `uploads/templates/${user.userId}_${user.fullname}_letter_of_intent.pdf`, // Define the desired key (path) on S3
            Body: pdfBytes, 
        };

            await s3.send(new PutObjectCommand(s3Params));
            const pdfPath = `https://${process.env.AWS_BUCKET_NAME}.s3.${process.env.AWS_REGION}.amazonaws.com/${s3Params.Key}`;
            
            
            return pdfPath;
        

    }catch (error) {
        throw error;
    }
    

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