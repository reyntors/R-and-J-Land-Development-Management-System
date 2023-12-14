
const Lot = require("../models/lot.model");
const { uploadlotImage } = require('../middlewares/multer');
const User = require('../models/user.model');
const Inquiry = require('../models/inquiries.model');




exports.createLot = async (req, res, next) => {
  try {
    // Generate and create 5 lots
    for (let i = 1; i <= 362; i++) {
      
      const lotKey = "lot" + i;
      const newLotData = {
        image: [],
        lotNumber: i,
        totalSqm: null,
        amountperSquare: null,
        totalAmountDue: null,
        status: null,
      };
      
      const update = {
        $set: {
          [`lots.${lotKey}`]: newLotData,
        },
      };

      // Use Lot.updateOne to add or update the lot
      await Lot.updateOne({}, update, { upsert: true });
    }

    return res.status(201).json({ message: "Lots created successfully" });
  } catch (error) {
    return next(error);
  }
};

 
exports.getPublicLotDetails = async (req, res, next) => {
  try {
    const allLots = await Lot.find();


   

    return res.status(200).json({
      message: 'All Lots',
      data: allLots, // Wrap lotsObject inside an object
    });
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

        const { lotKey } = req.params;
        const  newlotData = req.body;
        const uploadedImage = req.file

       

       
          // Extract 'lots' property from the array
      const [firstItem] = await Lot.find();

      const updatedLot = firstItem ? firstItem.lots : {};

      if (!updatedLot) {
        return res.status(404).json({ message: "Lot not found" });
      }
     
      const lot = updatedLot.get(lotKey);

      if (lot) {
        // Check if 'totalSqm' exists in the lot object

        
        if(uploadedImage){
          
          if('image' in lot ){

            lot.image.push({
              filename: uploadedImage.originalname,
              contentType: uploadedImage.mimetype,
              url: uploadedImage.location

            });
          }
      }

        if ('totalSqm' in lot) {
          // Update the value of 'totalSqm' with the new value
          lot.totalSqm = newlotData.totalSqm;
        } 

        if ('amountperSquare' in lot) {
          lot.amountperSquare = newlotData.amountperSquare;
        }

        if ('totalAmountDue' in lot) {
          lot.totalAmountDue = newlotData.totalAmountDue;
        }

        if ('status' in lot) {
          lot.status = newlotData.status;
        }
      }
     
       

       

       
       
        
          

        // Update 'lots' property in the array
      const updatedItem = await firstItem.save();

      if (!updatedItem) {
        return res.status(500).json({ message: "Failed to update lot" });
      }

        return res.status(200).json({
          message: "Lot Information Successfully updated",
          data: updatedItem ,
    });
  });
    
  } catch (error) {

    console.log(error)
    return next(error);
  }
};



async function generateInquiryId() {
  // Find all documents and their inquiries array
  const results = await Inquiry.find();

  let maxInquiryId = 0;

  // Iterate through the results to find the maximum inquiryId
  results.forEach((result) => {
    if (result.inquiries && result.inquiries.length > 0) {
      result.inquiries.forEach((inquiry) => {
        maxInquiryId = Math.max(maxInquiryId, inquiry.inquiryId);
      });
    }
  });

  // Increment the maximum inquiryId found or initialize to 1 if none exists
  const nextInquiryId = maxInquiryId + 1 || 1;

  return nextInquiryId;
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
