const Lot = require("../models/user.model");
const LotModel  = require("../models/lot.model");

exports.getLotDetails = (req, res, next) => {
    const { lotNumber } = req.params;

    Lot.findOne({ lotNumber }, (error, lot) => {
        if (error) {
            return next(error);
        }

        if (!lot) {
            return res.status(404).json({ message: "Lot not found" });
        }

        return res.status(200).json({ message: "Lot found", data: lot });
    });
};

exports.createLot = async (req, res, next) => {
    const lotData = req.body;
  
    try {
      // Create a new lot instance
      const newLot = new LotModel(lotData);
  
      // Save the lot to the database using async/await
      const savedLot = await newLot.save();
  
      return res.status(201).json({ message: "Lot created successfully", data: savedLot });
    } catch (error) {
      return next(error);
    }
  };