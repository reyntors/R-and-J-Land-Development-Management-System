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

exports.getPaymentDetailsById = async (req, res) => {
    try {
        const { id } = req.params;

        const user = await User.findOne({ userId: id });

        if (!user) {

            return res.status(404).json({message: 'User not found'});

        }

        const allMyAccount = {};

            allMyAccount.paymentDetails = user.paymentDetails;
            allMyAccount.accountDetails = user.accountDetails;
            allMyAccount.accountingDetails = user.accountingDetails;

        return res.status(200).json({
            message: `Payment details of ${user.username}`, data: allMyAccount,
        });
    }catch (error) {
        return res.status(500).json({ error: 'Internal server error' });
    }
}

exports.getAllPaymentDetailsById = async (req, res) => {
    try {
        const username = req.user.username;

       

        const user = await User.findOne({ username });

        console.log(user)

        if (!user) {

            return res.status(404).json({message: 'User not found'});
        }
        const allMyAccount = {};

            allMyAccount.paymentDetails = user.paymentDetails;
            allMyAccount.accountDetails = user.accountDetails;
            allMyAccount.accountingDetails = user.accountingDetails;
            allMyAccount.transactions = user.transactions;

        

        return res.status(200).json({
            message: `All accounts of ${user.username}`, 
            data: allMyAccount,
        });
    }catch (error) {

        console.log(error)
        return res.status(500).json({ error: 'Internal server error' });
    }
};


exports.resetPaymentDetails = async (req, res) => {
    try {

        const {id} = req.params;


        const user = await User.findOne({userId: id});

        if (!user) {

            return res.status(404).json({message: 'User not found'});

        }

        user.accountDetails.totalAmountDue = 0;

        user.paymentDetails.reservationPayment = 0;
        user.paymentDetails.downPayment = 0;
        user.paymentDetails.monthlyAmortizationDue = 0;

        user.accountingDetails.totalAmountDue = 0;
        user.accountingDetails.totalPayment = 0;
        user.accountingDetails.totalAmountPayable = 0;
        user.accountingDetails.totalInterest = 0;


        await user.save();

        return res.status(200).json({message: 'Payment details sucessfully reset!'});

        
    } catch (error) {
        console.log(error)
        throw error
    }



}


