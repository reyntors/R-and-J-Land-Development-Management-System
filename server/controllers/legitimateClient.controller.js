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
        const { legitimate } = req.body;

        console.log(req.body);

        // Find the user by their userId
        const user = await User.findOne({ userId: id });
        console.log(user);

        if (!user) {
            return res.status(404).json({
                
                message: 'User not found.',
                
            });
        }

        // Update the legitimacy status
        user.legitimate = legitimate;

        // Save the updated user record
        await user.save();

        return res.status(200).json({
            message: 'User legitimacy status updated successfully.',
            data: user,
        });
    } catch (error) {
        return next(error);
    }
};