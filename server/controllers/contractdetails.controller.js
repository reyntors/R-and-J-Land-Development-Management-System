const createContractDetails = require('../models/contractdetails.model');
const User = require('../models/user.model');



// Create a new letter of intent
exports.createContractDetails = async (req, res, next) => {
    try {
        const contractDetailsData = req.body;
        const username = req.user.username;
        
        

       
        const user = await User.findOne({ username });

        
        
         const newcontractDetailsData = new createContractDetails({
            ...contractDetailsData,
            createdBy: user.userId, 
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