const User = require('../models/user.model');
const { uploadScannedFile} = require('../middlewares/multer');
const fs = require('fs');
const path = require('path');

exports.addScanFiles = async (req, res, next) => {

    try {
      uploadScannedFile(req, res, async function (err) {
        if (err) {
          console.log(err);
          return res.status(500).json({ message: 'File upload failed', error: err });
        }

      const { id } = req.params;
      const uploadedFile = req.file;

      console.log(uploadedFile);
    
  
      // Find the client by their userId
      const user = await User.findOne({ userId: id });
  
      if (!user) {
        return res.status(404).json({
          message: 'Client not found or you do not have permission to add a scannedFiles for this client.',
        });
      }
  
      // Create a new ScannedFiles
      const newScannedFiles = {

            filename: uploadedFile.originalname,
            contentType: uploadedFile.mimetype,
            url: uploadedFile.location
      };
  
      
      user.scannedFiles.push(newScannedFiles);
      
  
      // Save the updated user record
      await user.save();
  
      return res.status(200).json({
        message: 'ScannedFiles added successfully.',
        data: newScannedFiles,
      });
    }); 
    } catch (error) {
      return next(error);
    }
 
  };

exports.getAllScanFilesById = async (req, res) => {

        try {

            const { id } = req.params;

            const client = await User.findOne({ userId: id })

            if (!client) {

                return res.status(404).json({message: 'user not found'});
            }

            const clientScanFiles = {

                scannedFiles: client.scannedFiles,
            }

            return res.status(200).json({
                message: `${client.username} ScannedFiles `,
                data: clientScanFiles,
            });
            
        } catch (error) {

            return res.status(500).json({ error: 'Internal server error' });
            
        }

}


exports.deleteScanFiles = async (req, res, next) => {
  try {
    const { id, fileId } = req.params;

    // Find the user by their userId
    const user = await User.findOne({ userId: id });

    if (!user) {
      return res.status(404).json({
        message: 'User not found or you do not have permission to delete scannedFiles for this user.',
      });
    }

    // Find the index of the scannedFiles with the given fileId
    const fileIndex = user.scannedFiles.findIndex(file => file._id.toString() === fileId);

    if (fileIndex === -1) {
      return res.status(404).json({
        message: 'ScannedFiles not found.',
      });
    }

    // Remove the scannedFiles from the array
    const deletedFile = user.scannedFiles.splice(fileIndex, 1)[0];

    // Save the updated user record
    await user.save();

    return res.status(200).json({
      message: 'ScannedFiles deleted successfully.',
      data: deletedFile,
    });
  } catch (error) {
    return next(error);
  }
};






exports.retrieveScanFile = async (req, res) => {

  try {

      const { id, filename } = req.params;

      const user = await User.findOne({ userId: id })

      if (!user) {

          return res.status(404).json({message: 'user not found'});
      }


       // Specify the path to the uploaded file
       const filePath = path.join(__dirname, '..', 'public', 'uploads','scannedFiles', filename );
    
       // Check if the file exist
        if (fs.existsSync(filePath)) {
        // Serve the file using Express's res.sendFile()
        res.sendFile(filePath);
        } else {
        res.status(404).json({ message: 'File not found' });
        }

      
  } catch (error) {

      return res.status(500).json({ error: 'Internal server error' });
      
  }

}