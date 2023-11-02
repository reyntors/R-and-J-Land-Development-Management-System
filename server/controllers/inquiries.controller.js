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

        const newInquiryId = Number(inquiryId)

        const inquiry = await Inquiry.findOne({'inquiries.inquiryId': newInquiryId});

       
        const matchingInquiry = inquiry.inquiries.find(item => item.inquiryId === newInquiryId);

        if(matchingInquiry.mark === false){

            matchingInquiry.mark = true;

        }else if(matchingInquiry.mark === true){

            matchingInquiry.mark = false;
        }


        await inquiry.save();
        

    return res.status(200).json({message: 'update mark successfully!', data: inquiry.inquiries[array]});
        
    } catch (error) {

        return res.status(500).json({message: 'failed to update the inquiries'})
        
    }

}