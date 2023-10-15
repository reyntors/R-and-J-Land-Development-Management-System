
const Lot = require("../models/lot.model");
const { uploadlotImage } = require('../middlewares/multer');
const User = require('../models/user.model');
const Inquiry = require('../models/inquiries.model');



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

        console.log("image data:", uploadedImage);
        

        const updatedLot = await Lot.findOne({ "subdivision.lotNumber": lotNumber });

        if (!updatedLot) {
          return res.status(404).json({ message: "Lot not found" });
        }
        const array = lotNumber - 1;

        if(uploadedImage){

          updatedLot.subdivision[array].image.push({
            filename: uploadedImage.originalname,
            contentType: uploadedImage.mimetype,
            url: uploadedImage.location

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

        return res.status(200).json({
          message: "Lot Information Successfully updated",
          data: savedLot.subdivision[array],
    });
  });
    
  } catch (error) {

    console.log(error)
    return next(error);
  }
};



async function generateInquiryId() {
  const query = {}; // You may need to specify a query to retrieve the right documents.
  const update = { $inc: { 'inquiries.0.inquiryId': 1 } }; // Increment the first inquiryId.
  const options = { new: true, upsert: true }; // Create the document if it doesn't exist.

  const result = await Inquiry.findOneAndUpdate(query, update, options);
  const nextIncrement = result.inquiries[0].inquiryId;

  if (nextIncrement === null || nextIncrement === undefined) {
    // Handle the case where the field is not defined as a number.
    // Initialize it to 100 in this example.
    const initialIncrement = 100;
    await Inquiry.updateOne({}, { $set: { 'inquiries.0.inquiryId': initialIncrement } });
    return `INQ${initialIncrement}`;
  }

  // Generate the inquiryId by combining a static part and the current increment
  const inquiryId = `${nextIncrement}`;

  return inquiryId;
}

exports.reserveLotbyId = async (req, res) => {

  try{

  const lotData = req.body;
  const username = req.user.username

  const user = await User.findOne({ username })


  if(!user){
    return res.status(404).json({message: 'User not found'});
  }


  const newLotData = {

    lotNumber: lotData.lotNumber,
    totalSqm: lotData.totalSqm,
    amountperSquare: lotData.amountperSquare,
    totalAmountDue: lotData.totalAmountDue,
    message: lotData.message,

  };

  user.accountDetails = newLotData;

 


  //generate date
  const date = new Date()
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0'); // Month is 0-based, so add 1 and format as two digits
  const day = String(date.getDate()).padStart(2, '0');
  const formattedDate = `${year}-${month}-${day}`;


  // Generate inquiryId
  const inquiryId = await generateInquiryId();

  const newInquiry = {
    inquiryId,
    name: user.fullname,
    subject: 'Request property',
    context: `${user.fullname} has requested to reserve lot number ${lotData.lotNumber} with the following message: ${lotData.message}`,
    email: user.email,
    fblink: user.fbAccount,
    phonenumber: user.contactNumber,
    date: formattedDate
    
    };

    const inquiries = await Inquiry.findOne()

    if (!inquiries) {
        // If inquiries object doesn't exist, create it
        const newInquiries = new Inquiry({ inquiries: [newInquiry] });
        await newInquiries.save();
    }else{

        inquiries.inquiries.push(newInquiry);
         //save to inquiries
        await inquiries.save();

    }

 
  await user.save();

  return res.status(200).json({
    message: `${user.username}, request a lot successfully!`,
    data: newLotData,
    inquiry: newInquiry
  });

}catch(error){

  console.log(error);

  res.status(500).json({message: 'request a lot failed!'})
}

}
