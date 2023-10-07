const { PDFDocument, rgb, StandardFonts } = require('pdf-lib'); // Import StandardFonts
const fs = require('fs');
const path = require('path');
const User = require('../models/user.model');

exports.createPdfTemplate = async (req, res) => {

        const { id } = req.params;
        const { formType } = req.body;


    try {

        const user = await  User.findOne({userId: id});

        if (!user) {

            return res.status(404).json({message: 'User not found!'})
        }



        // Create a new PDF document
        const pdfDoc = await PDFDocument.create();

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
        let outputPath = '';

        if (user.letterOfIntent){

        projectContent = `
          Project:
          [${user.letterOfIntent.project === 'Northown' ? 'X' : ' '}] Northown [${user.letterOfIntent.project === 'Northcrest' ? 'X' : ' '}] Northcrest  [${user.letterOfIntent.project === 'Eden Ridge' ? 'X' : ' '}] Eden Ridge  [${user.letterOfIntent.project === 'Narra Park Residence' ? 'X' : ' '}] Narra Park Residence   
            `;

        // Add content to the PDF page (simulate HTML content)
         content = `
                                

                    ${' '.repeat(55)}Letter of Intent

          Date: ${user.letterOfIntent.date}

          Alsons Development and Investment Corporation
          329 Bonifacio St, Davao City
          
          Gentlemen:
          I/We hereby manifest my/our intent to purchase ${user.letterOfIntent.purchase} lot(s)/unit(s).

          ${projectContent}

          Location:
          PH: ${user.letterOfIntent.locationPH}  Blk: ${user.letterOfIntent.locationBlk}  Lot/Unit: ${user.letterOfIntent.locationLotOrUnit}

          For your reference, please see my information below;
          Name: ${user.letterOfIntent.name}
          Address: ${user.letterOfIntent.address}
          Citizenship: ${user.letterOfIntent.citizenship}
          Contact No.: ${user.letterOfIntent.contactNo}
          Email Address: ${user.letterOfIntent.emailAddress}

          I understand and agree on the following:
          - That this document does not signify official booking of the sale.
          - That the purpose of this document is only to BLOCK-OFF the lot/unit within SEVEN (7) WORKING DAYS.
          - That I must submit all complete requirements and reservation fee not later than ${user.letterOfIntent.reservationTimeSpan} to 
            officially record the above-mentioned lot/unit as safe, otherwise, ALsons Deve will automatically open the 
            blocked-off lot/unit to other interested prospect buyers.

          Sincerely yours,
          __________________________                    ___________________
            Name of Client & Signature                          Date
         
          Received by:
          __________________________                    ___________________
                Name & Signature                                Date      
          
        `;
        } else if (user.individualDeclaration){

            content = 'I am individual Declaration form'

        } else if (user.BirTinRequest) {

            content = 'I am BIR TIN Request form'

        } else if (user.ContractDetails) {

            content = 'I am Contract Details form'

        } else {

            content = 'Unknown form type'
        }

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

        // Serialize the PDF document to a buffer
        const pdfBytes = await pdfDoc.save();

        if (user.letterOfIntent) {

            outputPath = path.join(__dirname, '../public/templates/letter of intent.pdf');
        
        } else if (user.BirTinRequest) {

            outputPath = path.join(__dirname, '../public/templates/bir_tin_request.pdf');
       
        } else if (user.ContractDetails) {

            outputPath = path.join(__dirname, '../public/templates/contract_details.pdf');
        
        } else if (user.individualDeclaration) {

            outputPath = path.join(__dirname, '../public/templates/individual_declaration.pdf');
        
        } else {
            // Handle unknown form types
            outputPath = '';
        }
        // Save the PDF buffer to a file
        if (outputPath) {
            fs.writeFileSync(outputPath, pdfBytes);
        }

        return res.status(200).json({message: 'PDF template created sucessfully!'})
    } catch (error) {
        console.error(error);
        throw error;
    }
}


exports.generatePDF = async (req, res, next) => {

    const { id } = req.params;
    const { formType } = req.body; // You can pass the formType in the request body

    try {
        const user = await User.findOne({ userId: id });

        if (!user) {
            return res.status(404).json({ message: 'User not found!' });
        }

        // Create a new PDF document
        const pdfDoc = await PDFDocument.create();

        // Define A4 page dimensions
        const pageWidth = 595.276;
        const pageHeight = 841.890;
        const page = pdfDoc.addPage([pageWidth, pageHeight]);

        // Create a font - Use StandardFonts.Helvetica
        const font = await pdfDoc.embedFont(StandardFonts.Helvetica);

        // Define coordinates for text placement
        let x = 50;
        let y = 850;

        let content = '';
        let projectContent = '';
        let outputPath = '';

        // Generate content based on the formType passed in the request body
        switch (formType) {
            case 'letterOfIntent':
                // Generate content for Letter of Intent form
                // ...
                break;
            case 'contractDetails':
                // Generate content for Contract Details form
                // ...
                break;
            case 'individual':
                // Generate content for Individual Declaration form
                // ...
                break;
            case 'birtin':
                // Generate content for BIR TIN Request form
                // ...
                break;
            default:
                return res.status(400).json({ message: 'Invalid form type' });
        }

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

        // Serialize the PDF document to a buffer
        const pdfBytes = await pdfDoc.save();

        // Define the output path based on the formType
        outputPath = path.join(__dirname, `../public/templates/${formType}.pdf`);

        // Save the PDF buffer to a file
        fs.writeFileSync(outputPath, pdfBytes);

        return res.status(200).json({ message: `${formType} PDF created successfully!`, outputPath });
    } catch (error) {
        console.error(error);
        throw error;
    }
}