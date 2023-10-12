const Inquiry = require('../models/inquiries.model');


exports.getAllInquiry = async (req, res ) => {

    try {

        const inquiries = await Inquiry.find();
        

    return res.status(200).json({message: 'all inquiries', data: inquiries});
        
    } catch (error) {

        throw error
        
    }

}

exports.updateEnquirybyId = async (req, res ) => {

    try {

        const inquiryId = req.params.inquiryId;

        console.log(inquiryId)

        const inquiry = await Inquiry.findOne({'inquiries.inquiryId': inquiryId});

        console.log('your inquiry', inquiry);

        // Update the 'mark' field to true for the matching inquiry
        inquiry.inquiries.forEach((individualInquiry) => {
            if (individualInquiry.inquiryId === inquiryId) {
            individualInquiry.mark = true;
            }
        });

        await inquiry.save();
        

    return res.status(200).json({message: 'update mark successfully!', data: inquiry});
        
    } catch (error) {

        return res.status(500).json({message: 'failed to update the inquiries'})
        
    }

}