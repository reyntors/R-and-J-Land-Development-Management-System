const BirTinRequest = require('../models/birtinrequest.model');
const User = require('../models/user.model');
const { PDFDocument, rgb, StandardFonts } = require('pdf-lib'); // Import StandardFonts
const { S3Client, PutObjectCommand } = require("@aws-sdk/client-s3");
const Inquiry = require('../models/inquiries.model');
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
  

// Create a new letter of intent
exports.createBirTinRequest = async (req, res, next) => {
    try {
        const birTinRequestData = req.body;
        const username = req.user.username;
        

        const user = await User.findOne({ username });

         const pdfPath = await generateBirTinRequestPDF( user, birTinRequestData);
 
 
        
         const newBirTinRequest = new BirTinRequest({
            ...birTinRequestData,
            date: formattedDate,
            createdBy: user.username, 
            url: pdfPath,
            isSubmitted: true
        });
        

       
        const savedBirTinRequest = await newBirTinRequest.save();

        user.BirTinRequest = savedBirTinRequest;

                // Generate inquiryId
        const inquiryId = await generateInquiryId();
        
      const newInquiry = {
        inquiryId,
        name: user.fullname,
        subject: 'Submitted of BIR Tin Request',
        context: `${user.fullname}, Requested an BIR Tin Request.`,
        email: user.email,
        fblink: user.fbAccount,
        phonenumber: user.contactNumber,
        date: newBirTinRequest.date,
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


        await user.save();

        return res.status(200).send({
            message: `${username}! Your BIR Tin Request successfully created!`,
            data: savedBirTinRequest});

       
    } catch (error) {
        return next(error);
    }
};

// Function to generate PDF content for Letter of Intent
async function  generateBirTinRequestPDF( user, birTinRequestData) {

    try {
        // Load existing PDF template from URL
        const pdfUrl = 'https://aws-bucket-nodejs.s3.amazonaws.com/uploads/templates/R-J-BIR.pdf';
        const response = await axios.get(pdfUrl, { responseType: 'arraybuffer' });
        const existingPdfBytes = new Uint8Array(response.data);
        const pdfDoc = await PDFDocument.load(existingPdfBytes);

        // Access the first page
        let fieldNames = pdfDoc.getForm().getFields()

        fieldNames = fieldNames.map((f) => f.getName())

        console.log(fieldNames);

  
        const form = pdfDoc.getForm()

        form.getTextField(fieldNames[0]).setText(formattedDate)
        form.getTextField(fieldNames[1]).setText(birTinRequestData.name)
        form.getTextField(fieldNames[2]).setText(birTinRequestData.address)
        form.getTextField(fieldNames[3]).setText(birTinRequestData.birthday)
        form.getTextField(fieldNames[4]).setText(birTinRequestData.tinNumber)
        form.getTextField(fieldNames[5]).setText(birTinRequestData.respectfulYours)
       
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
            Key: `uploads/generatedForms/${user.fullname}_BIR.pdf`, // Define the desired key (path) on S3
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


exports.getBirTinRequest = async (req, res, next) => {
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


exports.updateBirTinRequest = async (req, res, next) => {
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


exports.deleteBirTinRequest = async (req, res, next) => {
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