const BirTinRequest = require('../models/birtinrequest.model');
const User = require('../models/user.model');
const { PDFDocument, rgb, StandardFonts } = require('pdf-lib'); // Import StandardFonts
const fs = require('fs');
const path = require('path');
const Inquiry = require('../models/inquiries.model');


// Create a new letter of intent
exports.createBirTinRequest = async (req, res, next) => {
    try {
        const birTinRequestData = req.body;
        const username = req.user.username;
        
        

       
        const user = await User.findOne({ username });

          // Create a new PDF document
          const pdfDoc = await PDFDocument.create();
         await generateBirTinRequestPDF(pdfDoc, user, birTinRequestData);
 
 
        
         const newBirTinRequest = new BirTinRequest({
            ...birTinRequestData,
            createdBy: user._id, 
            isSubmitted: true
        });
        

       
        const savedBirTinRequest = await newBirTinRequest.save();

        user.BirTinRequest = savedBirTinRequest;

        
      const newInquiry = {

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
async function  generateBirTinRequestPDF(pdfDoc, user, birTinRequestData) {

    try {
    // Define A4 page dimensions
    const pageWidth = 595.276; 
    const pageHeight = 841.890; 

    const page1 = pdfDoc.addPage([pageWidth, pageHeight]); 
    const page2 = pdfDoc.addPage([pageWidth, pageHeight]);

    
   // Create a font - Use StandardFonts.Helvetica
   const font = await pdfDoc.embedFont(StandardFonts.Helvetica);
   
   // Define coordinates for text placement
   let x1 = 50;
   let y1 = 850;

   // Define coordinates for text placement on page 2
   let x2 = 50;
   let y2 = 850;


   let content1 = '';
   let content2 = '';
   

   // Add content to the PDF page (simulate HTML content)
    content1 = `
        
    Date: ${birTinRequestData.date}
    BUREAU OF INTERNAL REVENUE
    Davao City

    This is to authorize Mr./Mrs. ${birTinRequestData.date} to get my Tax 
    Identification Number Verification Slip (TIN Verification Slip) in my behalf.
    Please find below the details:

        Name: ${birTinRequestData.name}
        Address: ${birTinRequestData.address}
        Birthday: ${birTinRequestData.birthday}
        TIN Number: ${birTinRequestData.tinNumber}

    Thank you.


    Respectful Yours,

    ${birTinRequestData.respectfulYours}



   `;

   content2 = `
   
        ${' '.repeat(55)}SPECIAL POWER OF ATTORNEY
   
   KNOW ALL, MEN BY THESE PRESENTS:
   
   That I, ${birTinRequestData.spaName} single/married, of legal age, ${birTinRequestData.spaAge} and resident of  ${birTinRequestData.spaResident}, do hereby
   Atty, name consittute and Atty ${birTinRequestData.spaAttyName}, single/married of legal age,${birTinRequestData.spaAttyAge} and a resident of
   ${birTinRequestData.spaAttyResident}. to be my true and lawful Attorney-In-Face, for me and in my name, to do and perfrom any or all of the following act 
   or acts, to wit:

   1. To secure Tax Identification Number (TIN) Verification Slip from the Bureau of Internal Revenue (BIR).

   IN WITNESS OF, we have hereunto set our hands this ${birTinRequestData.witnessDay} day of ${birTinRequestData.witnessMonth}, 20
   ${birTinRequestData.witnessYear} at ${birTinRequestData.witnessAdress}. Philippines.

   GRANTOR:                                         GRANTEE:

   _______________________                          ___________________________________
           CEI:                                                     CEI:

   SUBSCRIBED AND SWORN to before me this __________ day of ___________ , 20  at Davao City, 
   Philippines Affian exhibit to be their Competent Evidence of Identities (CEI) written below their names.

   Notary Public
   Doc. No. ___________ ;
   Page No. ___________ ;
   Book No. ___________ ;
   Series of __________ ;

   `

    // Split the content into lines and draw them on page 1
    const lines1 = content1.split('\n');
    lines1.forEach((line) => {
        page1.drawText(line, {
            x: x1,
            y: y1,
            size: 9,
            font,
            color: rgb(0, 0, 0),
        });
        y1 -= 20; // Adjust the vertical position for the next line
    });

    // Split the content into lines and draw them on page 2
    const lines2 = content2.split('\n');
    lines2.forEach((line) => {
        page2.drawText(line, {
            x: x2,
            y: y2,
            size: 9,
            font,
            color: rgb(0, 0, 0),
        });
        y2 -= 20; // Adjust the vertical position for the next line
    });


   const pdfBytes = await pdfDoc.save();

   const pdfPath = path.join(__dirname, `../public/templates/${user.userId}_${user.fullname}_BirTinRequest.pdf`);

    // Save the PDF buffer to a file
    fs.writeFileSync(pdfPath, pdfBytes);

    return pdfPath;

    }catch (error) {
        throw error;
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