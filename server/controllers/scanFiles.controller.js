const User = require('../models/user.model');


exports.addScanFiles = async (req, res, next) => {
    try {
      const { id} = req.params;
      const {  data, filename, contentType } = req.body;
    
  
      // Find the client by their userId
      const client = await User.findOne({ userId: id, roles: 'guest' });

      console.log('Client After ScanFiles:', client);
  
      if (!client) {
        return res.status(404).json({
          message: 'Client not found or you do not have permission to add a scannedFiles for this client.',
        });
      }
  
      // Create a new ScannedFiles
      const newScannedFiles = {
            data ,
            filename,
            contentType ,
      };
  
      
      client.scannedFiles.push(newScannedFiles);
      
  
      // Save the updated user record
      await client.save();
  
      return res.status(200).json({
        message: 'ScannedFiles added successfully.',
        data: newScannedFiles,
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