const LetterOfIntent = require('../models/letterOfIntent.model');
const User = require('../models/user.model');



// Create a new letter of intent
exports.createLetterOfIntent = async (req, res, next) => {
    try {
        const letterOfIntentData = req.body;
        const username = req.user.username;
        
        

        // Assuming you have a User model and can find the user by username
        const user = await User.findOne({ username });

        console.log(user.userId);
         // Create a new letter of intent instance
         const newLetterOfIntent = new LetterOfIntent({
            ...letterOfIntentData,
            createdBy: user._id, // Associate the "Letter of Intent" with the user
        });
        

        // Save the letter of intent to the database using async/await
        const savedLetterOfIntent = await newLetterOfIntent.save();

        

        return res.status(201).json({ message: 'Letter of intent created successfully', data: savedLetterOfIntent });
    } catch (error) {
        return next(error);
    }
};

// Get letter of intent details by ID or retrieve all letter of intent records
exports.getLetterOfIntentDetails = async (req, res, next) => {
    try {
        const { id } = req.params;

        if (id) {
            // If an ID is provided, fetch a specific letter of intent by ID
            const letterOfIntent = await LetterOfIntent.findById(id);

            if (!letterOfIntent) {
                return res.status(404).json({ message: 'Letter of intent not found' });
            }

            return res.status(200).json({ message: 'Letter of intent found', data: letterOfIntent });
        } else {
            // If no ID is provided, retrieve all letter of intent records
            const letterOfIntents = await LetterOfIntent.find();

            return res.status(200).json({ message: 'All letter of intent records', data: letterOfIntents });
        }
    } catch (error) {
        return next(error);
    }
};

// Update a letter of intent by ID
exports.updateLetterOfIntent = async (req, res, next) => {
    try {
        const letterOfIntentId = req.params.id;
        const updates = req.body;

        const updatedLetterOfIntent = await LetterOfIntent.findByIdAndUpdate(letterOfIntentId, updates, {
            new: true, // Return the updated document
        });

        if (!updatedLetterOfIntent) {
            return res.status(404).json({ message: 'Letter of intent not found' });
        }

        return res.status(200).json({ message: 'Letter of intent updated successfully', data: updatedLetterOfIntent });
    } catch (error) {
        return next(error);
    }
};

// Delete a letter of intent by ID
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