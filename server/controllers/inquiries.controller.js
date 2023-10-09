const Inquiry = require('../models/inquiries.model');


exports.getAllInquiry = async (req, res ) => {

    try {

        const inquiries = await Inquiry.find();
        

    return res.status(200).json({message: 'all inquiries', data: inquiries});
        
    } catch (error) {

        throw error
        
    }



}