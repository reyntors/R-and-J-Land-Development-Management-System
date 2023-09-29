const LetterOfIntent = require('../models/letterOfIntent.model');
const User = require('../models/user.model');



// Create a new letter of intent
exports.createLetterOfIntent = async (req, res, next) => {
    try {
        const letterOfIntentData = req.body;
        const username = req.user.username;

        console.log(username);
        
        

       
        const user = await User.findOne({ username });
        console.log(user);
        
        
         const newLetterOfIntent = new LetterOfIntent({
            ...letterOfIntentData,
            createdBy: user._id, 
        });
        

       
        const savedLetterOfIntent = await newLetterOfIntent.save();

        user.letterOfIntent = savedLetterOfIntent;

        await user.save();

       

        return res.status(200).send({
            message: `${username}! Your Letter of Intent successfully created!`,
            data: savedLetterOfIntent});

       
    } catch (error) {
        return next(error);
    }
};


exports.getLetterOfIntentDetails = async (req, res, next) => {
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


exports.updateLetterOfIntent = async (req, res, next) => {
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


exports.deleteLetterOfIntent = async (req, res, next) => {
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