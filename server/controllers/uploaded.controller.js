const User = require('../models/user.model')
const Lot = require("../models/lot.model");
const path = require('path');
const fs = require('fs');
const mongoose = require('mongoose');
const { GridFSBucket } = require('mongodb');
const { isModuleNamespaceObject } = require('util/types');
const db = mongoose.connection;
const gridFSBucket = new GridFSBucket(db);

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

      const { lotNumber, fileId } = req.params;

      // Convert the fileId from the request to a string
      const requestedFileId = fileId.toString();

      const lot = await Lot.findOne({ "subdivision.lotNumber": lotNumber })


      if (!lot) {

          return res.status(404).json({message: 'lot  not found'});
      }

      const arr = lotNumber - 1; 

    
      
      const foundImage = lot.subdivision[arr].image.find((imageObj) => {
        const imageFileId = imageObj.fileId.toString(); // Convert fileId to string
        return imageFileId === requestedFileId; // Compare string fileId with the request fileId
      });


      console.log(foundImage)
  

      if (foundImage) {
        // Retrieve the file by its ID and stream it as a response
        const fileId = foundImage.fileId;
        const downloadStream = gridFSBucket.openDownloadStream(new mongoose.Types.ObjectId(fileId));
  
        // Set the response content type based on the file's contentType
        downloadStream.on('file', (file) => {
          res.setHeader('Content-Disposition', `attachment; filename="${file.filename}"`);
          res.setHeader('Content-Type', file.contentType);
        });
  
        // Pipe the file stream to the response
        downloadStream.pipe(res);
      } else {
        // Image not found in any image object
        return res.status(404).json({ message: 'Image not found' });
      }
    } catch (error) {
      console.log(error);
      return res.status(500).json({ error: 'Internal server error' });
    }
  };