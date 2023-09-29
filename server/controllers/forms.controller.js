const User = require('../models/user.model');


exports.getAllFormsById = async (req, res) => {
    try {
        const { id } = req.params;

        const user = await User.findOne({ userId: id });

        if (!user) {

            return res.status(404).json({message: 'User not found'});

        }

        const allUserForms = { 
            letterOfIntent: user.letterOfIntent, 
            individualDeclaration: user.individualDeclaration,
            BirTinRequest: user.BirTinRequest
        }

        return res.status(200).json({
            message: `All forms request by ${user.username}`, data: allUserForms,
        });
    }catch (error) {
        return res.status(500).json({ error: 'Internal server error' });
    }
}