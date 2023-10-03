const User = require('../models/user.model');
const { upload } = require('../middlewares/multer');



exports.addTransaction = async (req, res, next) => {
  try {
    // Add the singleFileUpload middleware here to handle the single file upload
    upload(req, res, async function (err) {
      if (err) {
        return res.status(500).json({ message: 'File upload failed', error: err });
      }

      const { id } = req.params;
      const { date, amount, purpose } = req.body;
      const attachment = req.file; // The uploaded file is now available in req.file

      console.log(req.file);

      console.log("Your attachment here:", date);
      console.log("Your attachment here:", amount);
      console.log("Your attachment here:", purpose);
      console.log("Your attachment here:", attachment);

      // Find the client by their userId
      const client = await User.findOne({ userId: id, roles: 'guest' });

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
        attachments: [],
      };

      // Process the uploaded file if it exists
      if (attachment) {
        const fileData = {
          data: attachment.buffer,
          filename: attachment.originalname,
          contentType: attachment.mimetype,
        };
        console.log("File Data:", fileData);

        // Push the file data into the attachments array
        newTransaction.attachments.push(fileData);
      }

      // Push the new transaction into the client's transactions array
      client.transactions.push(newTransaction);

      // Save the updated user record
      await client.save();

      return res.status(200).json({
        message: `${client.username}, Transaction added successfully.`,
        data: newTransaction,
      });
    });
  } catch (error) {
    return next(error);
  }
};


exports.getTransaction = async (req, res, next) => {


    try {

        const { id } = req.params;

        const user = await User.findOne({userId: id});

        if (!user) {

          return res.status(404).json({message: 'User is not found'});

        }else{

         const allTransactions = user.transactions;

          return res.status(200).json({message: `${user.username}, All transactions`, data: allTransactions});

        }




      
    } catch (error) {

      return res.status(500).json({message: 'Internal Server Error'});
      
    }







}