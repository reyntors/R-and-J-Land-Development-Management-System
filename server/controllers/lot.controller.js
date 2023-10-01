const User = require("../models/user.model");
const Lot = require("../models/lot.model");



exports.createLot = async (req, res, next) => {
    const lotData  = req.body;
    const { id } = req.params;
  
    try {

      const user = await User.findOne({userId: id});

      if (!user) {
        return res.status(404).json({ message: 'User not found' });
    }

   
      const newLot = new Lot({
        ...lotData,
        createdBy: user._id,
    });


      const savedLot = await newLot.save();

     
      user.accountDetails = savedLot;

  
      await user.save();

      return res.status(201).json({ message: "Lot created and associated with the user successfully", data: savedLot });
    
    } catch (error) {
      return next(error);
    }
  };



  
exports.getPublicLotDetails = async (req, res, next) => {
  try {
    const { lotNumber } = req.params;

    if (lotNumber){

      const lot = await Lot.findOne({ lotNumber });


      if (!lot) {
        return res.status(404).json({ message: "Lot not found" });
    }

    return res.status(200).json({ message: "Lot found", data: lot });

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
    const { lotNumber } = req.params;
    const lotUpdateData = req.body;

    // Define the fields you want to update
    const updateFields = {};

    // Check if specific fields exist in the request body and add them to the update object
    if (lotUpdateData.createdBy) {
      updateFields.createdBy = lotUpdateData.createdBy;
    }

    if (lotUpdateData.amountperSquare) {
      updateFields.amountperSquare = lotUpdateData.amountperSquare;
    }

    // Use findOneAndUpdate to update the specific fields
    const updatedLot = await Lot.findOneAndUpdate(
      { lotNumber },
      updateFields,
      { new: true }
    );

    if (!updatedLot) {
      return res.status(404).json({ message: 'Lot not found' });
    }

    return res.status(200).json({
      message: 'Lot Information Successfully updated',
      data: updatedLot,
    });
  } catch (error) {
    return next(error);
  }
};