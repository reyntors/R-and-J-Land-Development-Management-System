const BirTinRequest = require('../models/birtinrequest.model');
const User = require('../models/user.model');



// Create a new letter of intent
exports.createBirTinRequest = async (req, res, next) => {
    try {
        const birTinRequestData = req.body;
        const username = req.user.username;
        
        

       
        const user = await User.findOne({ username });

        
        
         const newBirTinRequest = new BirTinRequest({
            ...birTinRequestData,
            createdBy: user._id, 
        });
        

       
        const savedBirTinRequest = await newBirTinRequest.save();

        user.BirTinRequest = savedBirTinRequest;

        await user.save();

        return res.status(200).send({
            message: `${username}! Your BIR Tin Request successfully created!`,
            data: savedBirTinRequest});

       
    } catch (error) {
        return next(error);
    }
};


exports.getBirTinRequest = async (req, res, next) => {
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


exports.updateBirTinRequest = async (req, res, next) => {
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


exports.deleteBirTinRequest = async (req, res, next) => {
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