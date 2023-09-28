const User = require('../models/user.model');


exports.addTransaction = async (req, res, next) => {
    try {
      const { id} = req.params;
      const { date, amount, purpose } = req.body;
      console.log('Request Body:', req.body);
  
      // Find the client by their userId
      const client = await User.findOne({ userId: id, roles: 'guest' });
      console.log('Client After Transaction:', client);
  
      if (!client) {
        return res.status(404).json({
          message: 'Client not found or you do not have permission to add a transaction for this client.',
        });
      }
  
      // Create a new transaction
      const newTransaction = {
        date,
        amount,
        purpose,
      };
  
      
      client.transactions.push(newTransaction);
      
  
      // Save the updated user record
      await client.save();
  
      return res.status(200).json({
        message: 'Transaction added successfully.',
        data: newTransaction,
      });
    } catch (error) {
      return next(error);
    }
  };