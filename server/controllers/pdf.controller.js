const { PDFDocument, rgb, StandardFonts } = require('pdf-lib'); // Import StandardFonts
const fs = require('fs');
const path = require('path');

exports.createPdfTemplate = async (req, res) => {

    try {
        // Create a new PDF document
        const pdfDoc = await PDFDocument.create();

         // Define A4 page dimensions
         const pageWidth = 595.276; // A4 width in points
         const pageHeight = 841.890; // A4 height in points
         const page = pdfDoc.addPage([pageWidth, pageHeight]); // Specify page dimensions

        // Create a font - Use StandardFonts.Helvetica
        const font = await pdfDoc.embedFont(StandardFonts.Helvetica);

        // Define coordinates for text placement
        let x = 50;
        let y = 900;

        // Add content to the PDF page (simulate HTML content)
        const content = `

                                                

                                             Letter of Intent

          Date: ______________

          Alsons Development and Investment Corporation
          329 Bonifacio St, Davao City
          
          Gentlemen:
          I/We hereby manifest my/our intent to purchase ___________________ lot(s)/unit(s).

          Project:
          [ ] Northown   [ ] Northcrest   [ ] Eden Ridge   [ ] Narra Park Residence

          Location:
          PH: __________   Blk: __________   Lot/Unit: __________

          For your reference, please see my information below;
          Name: _______________________
          Address: _____________________
          Citizenship: _________________
          Contact No.: _________________
          Email Address: _______________

          I understand and agree on the following:
          - That this document does not signify official booking of the sale.
          - That the purpose of this document is only to BLOCK-OFF the lot/unit within SEVEN (7) WORKING DAYS.
          - That I must submit all complete requirements and reservation fee not later than ___________________ to 
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

        // Serialize the PDF document to a buffer
        const pdfBytes = await pdfDoc.save();

        // Save the PDF buffer to a file
        const outputPath = path.join(__dirname, '../public/templates/letter of intent.pdf');
        fs.writeFileSync(outputPath, pdfBytes);

        return res.status(200).json({message: 'PDF template created sucessfully!'})
    } catch (error) {
        console.error(error);
        throw error;
    }
}