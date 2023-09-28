const User = require('../models/user.model');


exports.createUserWithPaymentDetails = async (req, res) => {
    try {
        const { id } = req.params;
        const { profile, paymentDetails } = req.body;

        const user = await User.findOne({ userId: id });
        
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }

        user.profile = profile;

        user.paymentDetails = paymentDetails;
        

        const savedUser = await user.save();

        return res.status(201).json({
            message: 'Payment details added to the user successfully',
            data: savedUser,
        });
    } catch (error) {
        console.log("I am error");
        return res.status(500).json({ error: 'Internal server error' });
    }
};

