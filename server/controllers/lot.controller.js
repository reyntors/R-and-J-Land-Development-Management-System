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

  

      
      // Save the user to update the association
      await user.save();

      return res.status(201).json({ message: "Lot created and associated with the user successfully", data: savedLot });
    
    } catch (error) {
      return next(error);
    }
  };



  
exports.getPublicLotDetails = async (req, res, next) => {
  try {
    const { lotNumber } = req.params;

    const lot = await Lots.findOne({ lotNumber });

    if (!lot) {
      return res.status(404).json({ message: "Lot not found" });
    }

    return res.status(200).json({ message: "Lot found", data: lot });
  } catch (error) {
    return next(error);
  }
};