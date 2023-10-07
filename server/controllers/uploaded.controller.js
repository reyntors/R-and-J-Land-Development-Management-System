const User = require('../models/user.model')
const Lot = require("../models/lot.model");
const path = require('path');
const fs = require('fs');


exports.retrieveAttachmentFile = async (req, res, next) => {

  try {

         const { id, filename } = req.params;
        
        const user = await User.findOne({ userId: id });

        if (!user) {
            return res.status(404).json({
              message: 'User not found or you do not have permission to retrieve a file for this user.',
            });
          }

           // Specify the path to the uploaded file
         const filePath = path.join(__dirname, '..', 'public', 'uploads','attachments', filename );
    
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

exports.retrieveForm = async (req, res, next) => {

  try {

         const { id, filename } = req.params;

         console.log(filename)
        
        const user = await User.findOne({ userId: id });

        if (!user) {
            return res.status(404).json({
              message: 'User not found or you do not have permission to retrieve a file for this user.',
            });
          }

           // Specify the path to the uploaded file
         const filePath = path.join(__dirname, '..', 'public', 'templates', filename);
    
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


exports.retrieveLotImage = async (req, res) => {

  try {

      const { lotNumber, filename } = req.params;

      console.log("my file:", filename)
      console.log("my lotNumber:", lotNumber)

      const lot = await Lot.findOne({ "subdivision.lotNumber": lotNumber })

      if (!lot) {

          return res.status(404).json({message: 'lot  not found'});
      }

      const arr = lotNumber - 1; 


      const image = lot.subdivision[arr].image[0].filename;

      console.log("i am from",image)

      if (image !== filename) {
        console.log(image !== filename)
        console.log(image)
        console.log(filename)
        return res.status(404).json({ message: 'Image not found' });
      }
     
       const filePath = path.join(__dirname, '..', 'public', 'uploads','images', filename);
    
     
        if (fs.existsSync(filePath)) {
       
        res.sendFile(filePath);

        } 
        else {
        console.error(`File not found: ${filePath}`);
        res.status(404).json({ message: 'File not found' });
        }

      
  } catch (error) {
    console.log(error);

      return res.status(500).json({ error: 'Internal server error' });
      
  }

}
