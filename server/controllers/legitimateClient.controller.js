const User = require('../models/user.model');


exports.listLegitimateClients = async (req, res, next) => {
    try {
        

        const legitimateClients = await User.find({ legitimate: true });
       

        return res.status(200).json({
            message: 'List of legitimate clients',
            data: legitimateClients,
        });
    } catch (error) {
       
        return next(error);
    }
};


exports.updateLegitimacy = async (req, res, next) => {
    try {
        const { id } = req.params;

        // Find the user by their userId
        const updatedUser = await User.findOneAndUpdate(
            { userId: id },
            { legitimate: true},
            { new: true }
        );
        
        if (!updatedUser) {
            return res.status(404).json({
                message: 'User not found.',
            });
        }

        

        return res.status(200).json({
            message: 'User legitimacy status updated successfully.',
            data: updatedUser,
        });
    } catch (error) {
        return next(error);
    }
};