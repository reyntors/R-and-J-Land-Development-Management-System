
const Lot = require("../models/lot.model");
const { uploadlotImage } = require('../middlewares/multer');
const mongoose = require('mongoose');
const fs = require('fs');
const path = require('path');

// Import GridFSBucket
const { GridFSBucket } = require('mongodb');


exports.createLot = async (req, res, next) => {
    const {lotData} = req.body;
  
    try {


      const newLot = new Lot({
        ...lotData,
        subdivision: [
          {
            image: [],
            lotNumber: 1,
            totalSqm: null,
            amountperSquare: null,
            totalAmountDue: null,
            status: null,
            
          },
          {
            image: [],
            lotNumber: 2,
            totalSqm: null,
            amountperSquare: null,
            totalAmountDue: null,
            status: null,
            
          },
          {
            image: [],
            lotNumber: 3,
            totalSqm: null,
            amountperSquare: null,
            totalAmountDue: null,
            status: null,
            
          },
          {
            image: [],
            lotNumber: 4,
            totalSqm: null,
            amountperSquare: null,
            totalAmountDue: null,
            status: null,
            
          },
          {
            image: [],
            lotNumber: 5,
            totalSqm: null,
            amountperSquare: null,
            totalAmountDue: null,
            status: null,
            
          },
          {
            image: [],
            lotNumber: 6,
            totalSqm: null,
            amountperSquare: null,
            totalAmountDue: null,
            status: null,
            
          },
          {
            image: [],
            lotNumber: 7,
            totalSqm: null,
            amountperSquare: null,
            totalAmountDue: null,
            status: null,
            
          },
          {
            image: [],
            lotNumber: 8,
            totalSqm: null,
            amountperSquare: null,
            totalAmountDue: null,
            status: null,
            
          },
          {
            image: [],
            lotNumber: 9,
            totalSqm: null,
            amountperSquare: null,
            totalAmountDue: null,
            status: null,
            
          },
          {
            image: [],
            lotNumber: 10,
            totalSqm: null,
            amountperSquare: null,
            totalAmountDue: null,
            status: null,
            
          },
          {
            image: [],
            lotNumber: 11,
            totalSqm: null,
            amountperSquare: null,
            totalAmountDue: null,
            status: null,
            
          },
          {
            image: [],
            lotNumber: 12,
            totalSqm: null,
            amountperSquare: null,
            totalAmountDue: null,
            status: null,
            
          },
          {
            image: [],
            lotNumber: 13,
            totalSqm: null,
            amountperSquare: null,
            totalAmountDue: null,
            status: null,
            
          },
          {
            image: [],
            lotNumber: 14,
            totalSqm: null,
            amountperSquare: null,
            totalAmountDue: null,
            status: null,
            
          },
          {
            image: [],
            lotNumber: 15,
            totalSqm: null,
            amountperSquare: null,
            totalAmountDue: null,
            status: null,
            
          },
          {
            image: [],
            lotNumber: 16,
            totalSqm: null,
            amountperSquare: null,
            totalAmountDue: null,
            status: null,
            
          },
          {
            image: [],
            lotNumber: 17,
            totalSqm: null,
            amountperSquare: null,
            totalAmountDue: null,
            status: null,
            
          },
          {
            image: [],
            lotNumber: 18,
            totalSqm: null,
            amountperSquare: null,
            totalAmountDue: null,
            status: null,
            
          },
          {
            image: [],
            lotNumber: 19,
            totalSqm: null,
            amountperSquare: null,
            totalAmountDue: null,
            status: null,
            
          },
          {
            image: [],
            lotNumber: 20,
            totalSqm: null,
            amountperSquare: null,
            totalAmountDue: null,
            status: null,
            
          },
        ],
      });

      const savedLot = await newLot.save();

      return res.status(201).json({ message: "Lot created and associated with the user successfully", data: savedLot });
    
    } catch (error) {
      return next(error);
    }
  };



  
exports.getPublicLotDetails = async (req, res, next) => {
  try {
    const { lotNumber } = req.params;

    if (lotNumber){

      const lot = await Lot.findOne({ "subdivision.lotNumber": lotNumber });

      array = lotNumber-1;


      if (!lot) {
        return res.status(404).json({ message: "Lot not found" });
    }


    return res.status(200).json({ message: "Lot found", data: lot.subdivision[array] });

 

  }else{
    const allLots = await Lot.find();

            return res.status(200).json({
                message: 'All Lots ',
                data: allLots
            });
  }

    
  } catch (error) {
    return next(error);
  }
};

exports.updateLot = async (req, res, next) => {

  try {

    uploadlotImage(req, res, async function (err){

      if (err) {
        console.log(err);
        return res.status(500).json({ message: 'File upload failed', error: err });
      }

        const { lotNumber } = req.params;
        const  updateLotData = req.body;
        const uploadedImage = req.file


        const updatedLot = await Lot.findOne({ "subdivision.lotNumber": lotNumber });

        if (!updatedLot) {
          return res.status(404).json({ message: "Lot not found" });
        }
        array = lotNumber - 1;

        // Create a new ScannedFiles

        if(uploadedImage){

          console.log('Uploaded file path:', uploadedImage.path);

        const gridFSBucket = new GridFSBucket(mongoose.connection.db);

          // Create a GridFS stream for storing the uploaded file
        const uploadStream = gridFSBucket.openUploadStream(uploadedImage.originalname, {
          contentType: uploadedImage.mimetype,
        });


        // Pipe the file stream to the GridFS stream
        fs.createReadStream(uploadedImage.path).pipe(uploadStream);


         // Close the GridFS stream to complete the upload
         uploadStream.end();


        // Save information about the file in your lot object
         updatedLot.subdivision[array].image.push({
          filename: uploadedImage.originalname,
          contentType: uploadedImage.mimetype,
          fileId: uploadStream.id, // Store the GridFS file ID in your lot object
        });
        
        }

        if (updateLotData.totalSqm) {
          updatedLot.subdivision[array].totalSqm = updateLotData.totalSqm;
        }
        if (updateLotData.amountperSquare) {
          updatedLot.subdivision[array].amountperSquare = updateLotData.amountperSquare;
        }
        if (updateLotData.totalAmountDue) {
          updatedLot.subdivision[array].totalAmountDue = updateLotData.totalAmountDue;
        }
        if (updateLotData.status) {
          updatedLot.subdivision[array].status = updateLotData.status;
        }
        
  

        // Save the updated lot
        const savedLot = await updatedLot.save();

        // // Clean up the temporary file
        fs.unlinkSync(uploadedImage.path);


        return res.status(200).json({
          message: "Lot Information Successfully updated",
          data: savedLot.subdivision[array],
    });
  });
    
  } catch (error) {
    return next(error);
  }
};
