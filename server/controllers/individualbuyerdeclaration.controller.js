const IndividualBuyerDeclaration = require('../models/individualbuyerdeclaration.model');
const User = require('../models/user.model');
const { PDFDocument, rgb, StandardFonts } = require('pdf-lib'); // Import StandardFonts
const fs = require('fs');
const path = require('path');
const Inquiry = require('../models/inquiries.model');




// Create a new letter of intent
exports.createIndividualBuyerDeclaration = async (req, res, next) => {
    try {
        const individualBuyerDeclarationtData = req.body;
        const username = req.user.username;
       
        const user = await User.findOne({ username });

        if (!user) {

            return res.status(404).json({message: 'User not found!'})
        }

        
         // Create a new PDF document
         const pdfDoc = await PDFDocument.create();
         const pdfPath = await generateIndividualDeclarationPDF(pdfDoc, user, individualBuyerDeclarationtData);

        
         const newIndividualBuyerDeclaration = new IndividualBuyerDeclaration({
            ...individualBuyerDeclarationtData,
            createdBy: user._id, 
            pdfPath: pdfPath,
            isSubmitted: true
        });
        

       
        const savedIndividualBuyerDeclaration = await newIndividualBuyerDeclaration.save();

        user.individualDeclaration = savedIndividualBuyerDeclaration;

        const newInquiry = {

            name: user.fullname,
            subject: 'Submitted of Individual Buyer Declaration',
            context: `${user.fullname}, Requested an Individual Buyer Declaration.`,
            email: user.email,
            fblink: user.fbAccount,
            phonenumber: user.contactNumber,
            date: newIndividualBuyerDeclaration.date,
            inquiryId: user.userId
    
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
            message: `${username}! Your Individual Buyer Declaration successfully created!`,
            data: savedIndividualBuyerDeclaration});

       
    } catch (error) {
        return next(error);
    }
};


async function  generateIndividualDeclarationPDF(pdfDoc, user, individualBuyerDeclarationtData) {

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
   let projectContent1 = '';
   let projectContent2 = '';
   let projectContent3 = '';

   projectContent1 = `1. I am ENGAGED IN BUSINESS [${ individualBuyerDeclarationtData.engagedInBusiness === 'YES' ? 'X' : ' '}] Yes   [${ individualBuyerDeclarationtData.engagedInBusiness === 'NO' ? 'X' : ' '}] No   [${ individualBuyerDeclarationtData.engagedInBusiness === 'N/A' ? 'X' : ' '}] N/A`;

   projectContent2 = `2. The Business is registered under my name [${ individualBuyerDeclarationtData.businessRegisteredUnder === 'YES' ? 'X' : ' '}] Yes   [${ individualBuyerDeclarationtData.businessRegisteredUnder === 'NO' ? 'X' : ' '}] No   [${ individualBuyerDeclarationtData.businessRegisteredUnder === 'N/A' ? 'X' : ' '}] N/A    
                         If yes, name of business ${individualBuyerDeclarationtData.businessName}`;

   projectContent3 = `3. The Registered Business is using my TIN   [${ individualBuyerDeclarationtData.businessUsingMyTIN === 'YES' ? 'X' : ' '}] Yes   [${ individualBuyerDeclarationtData.businessUsingMyTIN === 'NO' ? 'X' : ' '}] No   [${ individualBuyerDeclarationtData.businessUsingMyTIN === 'N/A' ? 'X' : ' '}] N/A `;



   // Add content to the PDF page (simulate HTML content)
    content = `
                           

               ${' '.repeat(55)}Individual Buyer's Declaration

    Date: ${individualBuyerDeclarationtData.date}

    I, ${individualBuyerDeclarationtData.name} with BIR Tax Identification No. ${individualBuyerDeclarationtData.BIRtaxID} hereby declares the following information
   
            ${projectContent1}    
            ${projectContent2}  
            ${projectContent3}  
            
    
    I acknowledge and understood the Bureau of Internan Revenue (BIR) Revenue Regulations No.:17-2003, Section 2.57.2.J which states that

        "However, if the buyer is engaged in trade or business, whether a corporations or otherwise, these rules shall apply:


        If the sale is a sale of property on the installment plan{i.ee..payments in the year of sale do not exceed twenty five percent (25%) of 
        the selling price},the tax shall be deducted and withheld by the ubyer from every installment which tax shall be based on the ratio of 
        actual colleciton of the consideration against the agreed consideration appearing in the Contract to Sell applied to the gross selling price
        or fair market value of the property at the time of the execution of the Contract to Sell whichever is higher.""
        
        
        I agree that any additional taxes, interest or penalty that may be incurred by R&J Land Development Corporation due to my improper or 
        non-disclosure of the above needed information shall be to my soleaccount and responsibility.
        
        
        Thus, I hereby authorize R&J Land Development Corporation to charge whatever is due me said taxes, interest, penalty and other charges 
        arising therefrom and hold release of my land title until full settlement of said account.

        Certified True and Correct:
   
        ____________________________
        Signature above printed name
    `;

   // Split the content into lines and draw them on the page
   const lines = content.split('\n');
   lines.forEach((line) => {
       page.drawText(line, {
           x,
           y,
           size: 8,
           font,
           color: rgb(0, 0, 0),
       });
       y -= 20; // Adjust the vertical position for the next line
   });

   const pdfBytes = await pdfDoc.save();

   const pdfPath = path.join(__dirname, `../public/templates/${user.userId}_${user.fullname}_individual_buyer_declaration.pdf`);

    // Save the PDF buffer to a file
    fs.writeFileSync(pdfPath, pdfBytes);

    return pdfPath;

    }catch (error) {
        throw error;
    }

}

exports.getIndividualBuyerDeclaration = async (req, res, next) => {
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


exports.updateIndividualBuyerDeclaration= async (req, res, next) => {
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


exports.deleteIndividualBuyerDeclaration= async (req, res, next) => {
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