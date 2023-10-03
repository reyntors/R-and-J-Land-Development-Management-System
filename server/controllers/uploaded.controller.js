const User = require('../models/user.model')
const path = require('path');
const fs = require('fs');


exports.retrieveUploadedFile = async (req, res, next) => {

  try {

         const { id, filename } = req.params;
        
        const user = await User.findOne({ userId: id });

        if (!user) {
            return res.status(404).json({
              message: 'User not found or you do not have permission to retrieve a file for this user.',
            });
          }

           // Specify the path to the uploaded file
         const filePath = path.join(__dirname, '..', 'public', 'uploads', filename);
    
           // Check if the file exist
            if (fs.existsSync(filePath)) {
            // Serve the file using Express's res.sendFile()
            res.sendFile(filePath);
            } else {
            res.status(404).json({ message: 'File not found' });
            }

    
  } catch (error) {
    return next(error);
  }

}