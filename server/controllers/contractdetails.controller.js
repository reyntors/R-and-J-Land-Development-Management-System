const createContractDetails = require('../models/contractdetails.model');
const User = require('../models/user.model');
const { PDFDocument, rgb, StandardFonts } = require('pdf-lib'); // Import StandardFonts
const fs = require('fs');
const path = require('path');



// Create a new letter of intent
exports.createContractDetails = async (req, res, next) => {
    try {
        const contractDetailsData = req.body;
        const username = req.user.username;
       
        const user = await User.findOne({ username });

        
        // Create a new PDF document
        const pdfDoc = await PDFDocument.create();
        const pdfPath = await generateContractDetailsPDF(pdfDoc, user, contractDetailsData);

         const newcontractDetailsData = new createContractDetails({
            ...contractDetailsData,
            createdBy: user.userId, 
            pdfPath: pdfPath,
            isSubmitted: true
        });
        

       
        const savedcreateContractDetails = await newcontractDetailsData.save();

        user.ContractDetails = savedcreateContractDetails;

        await user.save();

        return res.status(200).send({
            message: `${username}! Your Contract Details successfully created!`,
            data: savedcreateContractDetails});

       
    } catch (error) {
        return next(error);
    }
};

// Function to generate PDF content for Letter of Intent
async function  generateContractDetailsPDF(pdfDoc, user, contractDetailsData) {

    try {
    // Define A4 page dimensions
    const pageWidth = 595.276; 
    const pageHeight = 841.890; 
    const page = pdfDoc.addPage([pageWidth, pageHeight]); // Specify page dimensions

    
   // Create a font - Use StandardFonts.Helvetica
   const font = await pdfDoc.embedFont(StandardFonts.Helvetica);
   const fontSize = 9;
   const fontColor = rgb(0, 0, 0);
   // Define coordinates for text placement
   let x = 50;
   let y = 850;
   const lineHeight = 20;

   let content = '';
 

   // Add content to the PDF page (simulate HTML content)
    content = `           
               ${' '.repeat(55)}CONTRACT DETAILS FORM
    ______________________________________________________________________________________________           
               ${' '.repeat(55)}PROPERTY DETAILS                                                

     
   `;

   // Split the content into lines and draw them on the page
   const lines = content.split('\n');
   lines.forEach((line) => {
       page.drawText(line, {
           x,
           y,
           size: fontSize,
           font,
           color: fontColor,
       });
       y -= 20; // Adjust the vertical position for the next line
   });

   const pdfBytes = await pdfDoc.save();

   const pdfPath = path.join(__dirname, `../public/templates/${user.userId}_${user.fullname}_Contract_Details.pdf`);

    // Save the PDF buffer to a file
    fs.writeFileSync(pdfPath, pdfBytes);

    return pdfPath;

    }catch (error) {
        throw error;
    }

}
