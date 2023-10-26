const Contact = require('../models/contactUs.model');
const Inquiry = require('../models/inquiries.model');


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
  

exports.createContact = async (req, res, next) => {

    try {

        const contactData = req.body;

        const newContact = new Contact({

            firstName: contactData.firstName,
            lastName: contactData.lastName,
            company: contactData.company,
            jobTitle: contactData.jobTitle,
            phone: contactData.phone,
            email: contactData.email,
            facebookLink: contactData.facebookLink,
            type: contactData.type,
            temp: contactData.temp,
            message: contactData.message

        });

         //generate date
         const date = new Date()
         const year = date.getFullYear();
         const month = String(date.getMonth() + 1).padStart(2, '0'); // Month is 0-based, so add 1 and format as two digits
         const day = String(date.getDate()).padStart(2, '0');
         const formattedDate = `${year}-${month}-${day}`;
 

          // Generate inquiryId
     const inquiryId = await generateInquiryId();

     const newInquiry = {
        inquiryId,
        name: contactData.type,
        subject: 'Created a contact',
        context: `${contactData.type}, is trying to make a contact.`,
        email: contactData.email,
        fblink: contactData.facebookLink,
        phonenumber: contactData.phone,
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




        await newContact.save()

        res.status(200).json({
            message:'Contact created successfully!',
            data: newContact
        });

    } catch (error) {

        next(error);
        
    }


}