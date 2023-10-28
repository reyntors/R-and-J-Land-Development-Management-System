const callSlip = require('../models/callSlip.model');
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

exports.addCallSlip =  async (req, res, next) => {

    try{

    const callSlipData = req.body;

    const newCallSlip = new callSlip({

        date: callSlipData.date,
        lastName: callSlipData.lastName,
        firstName: callSlipData.firstName,
        middleName: callSlipData.middleName,
        spouseName: callSlipData.spouseName,
        telNumber: callSlipData.telNumber,
        contactNumber: callSlipData.contactNumber,
        email: callSlipData.email,
        prospects: callSlipData.prospects

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
    name: callSlipData.firstName,
    subject: 'Created a call Slip',
    context: 'is trying to make a call slip.',
    email: callSlipData.email,
    fblink: 'None',
    phonenumber: callSlipData.contactNumber,
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



    await newCallSlip.save();

    res.status(200).json({message: 'Call Slip Successfully sent!',
                          data: newCallSlip              
                            });

    }catch(error){
        throw error;
    }


}