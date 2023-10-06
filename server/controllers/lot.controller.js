
const Lot = require("../models/lot.model");



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
    const { lotNumber } = req.params;
    const lotUpdateData = req.body;

    console.log(lotUpdateData)
    console.log(lotNumber)

    const updatedLot = await Lot.findOne({ "subdivision.lotNumber": lotNumber });

    if (!updatedLot) {
      return res.status(404).json({ message: "Lot not found" });
    }

    array = lotNumber - 1;

   


    if (req.file) {
   
      const imageData = {
        filename: req.file.originalname,
        contentType: req.file.mimetype,
      };

  

      updatedLot.subdivision[array].image.push(imageData);
    }

    // Update other fields if provided in the request
    if (lotUpdateData.amountperSquare) {
      updatedLot.subdivision[array].amountperSquare = lotUpdateData.amountperSquare;
    }

    // Save the updated lot
    const savedLot = await updatedLot.save();

    return res.status(200).json({
      message: "Lot Information Successfully updated",
      data: savedLot.subdivision[array],
    });
  } catch (error) {
    return next(error);
  }
};