const Reservation = require('../models/reservation.model');
const { S3Client, PutObjectCommand } = require("@aws-sdk/client-s3");
const axios = require('axios');
const { PDFDocument} = require('pdf-lib');// Import StandardFonts
const User = require('../models/user.model');
const Lot = require('../models/lot.model')
const { stopLotRollback } = require('./letterofintent.controller');



const date = new Date()
const year = date.getFullYear();
const month = String(date.getMonth() + 1).padStart(2, '0'); // Month is 0-based, so add 1 and format as two digits
const day = String(date.getDate()).padStart(2, '0');
const formattedDate = `${year}-${month}-${day}`;

exports.createReservation = async (req, res, next) => {
  try {
    const reservationData = req.body;
    const username = req.user.username;
    const { id } = req.params;

    const user = await User.findOne({ username });

    if (!user) {
      return res.status(404).json({ message: 'User not found!' });
    }

    const customer = await User.findOne({ userId: id });

    if (!customer) {
      return res.status(404).json({ message: 'Customer not found!' });
    }

    const pdfPath = await generateReservationPDF(user, reservationData);

    // Create a new reservation instance
    const newReservation = new Reservation({
      ...reservationData,
      date: formattedDate,
      url: pdfPath,
      isSubmitted: true,
      createdBy: user.username,
      details1: { ...reservationData },
      details2: { ...reservationData },
      details3: { ...reservationData },
    });

    // Save the reservation to the database using async/await
     await newReservation.save();

     // Calculate the totalAmountDue for the new reservation
    let totalAmountDueForNewReservation = customer.accountDetails.totalAmountDue || 0;

    let details1
    let details2
    let details3

    if(reservationData.phase_1 && 
      reservationData.block_1 && 
      reservationData.lot_1 && 
      reservationData.area_1 && 
      reservationData.price_per_sq_1 && 
      reservationData.downpayment_1 && 
      reservationData.balance_1 && 
      reservationData.contract_price_1){


      details1 = {
      lotNumber_1: reservationData.lot_1,
      blockNumber_1: reservationData.block_1,
      totalSqm_1: reservationData.area_1,
      amountperSquare_1: reservationData.price_per_sq_1,
    };

    customer.accountDetails.details1 = details1;


    // Calculate the totalAmountDue for the second reservation if it exists
    if (reservationData.lot_1 && reservationData.block_1 && reservationData.area_1 && reservationData.price_per_sq_1) {
      
      totalAmountDueForNewReservation += details1.totalSqm_1 * details1.amountperSquare_1;

    }
  }


    if(reservationData.phase_2 && 
      reservationData.block_2 && 
      reservationData.lot_2 && 
      reservationData.area_2 && 
      reservationData.price_per_sq_2 && 
      reservationData.downpayment_2 && 
      reservationData.balance_2 && 
      reservationData.contract_price_2){

       

      details2 = {
      lotNumber_2: reservationData.lot_2,
      blockNumber_2: reservationData.block_2,
      totalSqm_2: reservationData.area_2,
      amountperSquare_2: reservationData.price_per_sq_2,
    };

   

    customer.accountDetails.details2 = details2;

    // Calculate the totalAmountDue for the second reservation if it exists
    if (reservationData.lot_2 && reservationData.block_2 && reservationData.area_2 && reservationData.price_per_sq_2) {
      
      
      totalAmountDueForNewReservation += details2.totalSqm_2 * details2.amountperSquare_2;
      
    }
  }

  if(reservationData.phase_3 && 
    reservationData.block_3 && 
    reservationData.lot_3 && 
    reservationData.area_3 && 
    reservationData.price_per_sq_3 && 
    reservationData.downpayment_3 && 
    reservationData.balance_3 && 
    reservationData.contract_price_3){


      details3 = {
      lotNumber_3: reservationData.lot_3,
      blockNumber_3: reservationData.block_3,
      totalSqm_3: reservationData.area_3,
      amountperSquare_3: reservationData.price_per_sq_3,
    };

    

    customer.accountDetails.details3 = details3;

    // Calculate the totalAmountDue for the third reservation if it exists
    if (reservationData.lot_3 && reservationData.block_3 && reservationData.area_3 && reservationData.price_per_sq_3) {
      totalAmountDueForNewReservation += details3.totalSqm_3 * details3.amountperSquare_3;
    }
  }

    
    customer.accountDetails.totalAmountDue = totalAmountDueForNewReservation;
    customer.accountingDetails.totalAmountDue = customer.accountDetails.totalAmountDue

    // Save to the database
    await customer.save();


    if(customer.transactions.length === 0){

      console.log("transaction  is empty")
    const temp = reservationData.lot_1; 
    const lotKey = 'lot' + temp;

     
    await scheduleLotReservation(lotKey);
    stopLotRollback();
    }else {
      console.log("transaction is not empty")
    }


    const savedData = [{
      details1, 
      details2, 
      details3
  }].filter(Boolean);

    return res.status(200).json({
      message: 'Reservation created successfully',
      pdfPath: pdfPath,
      data: savedData,
      totalAmountDue: totalAmountDueForNewReservation,
    });
  } catch (error) {
    console.log(error)
    return next(error);
  }
};

async function generateReservationPDF(user, reservationData){

    try {
      
      const pdfUrl = 'https://aws-bucket-nodejs.s3.amazonaws.com/uploads/templates/Reservation_Agreement.pdf';
      const response = await axios.get(pdfUrl, {responseType: 'arraybuffer'});
      const existingPdfBytes = new Uint8Array(response.data);
      const pdfDoc = await PDFDocument.load(existingPdfBytes);
    

      // Access the first page
      let fieldNames = pdfDoc.getForm().getFields()
      
      fieldNames = fieldNames.map((f) => f.getName())
     

      const form = pdfDoc.getForm()

      form.getTextField(fieldNames[0]).setText(formattedDate)

      form.getTextField(fieldNames[1]).setText(reservationData.name)
      form.getTextField(fieldNames[2]).setText(reservationData.land_at)
      form.getTextField(fieldNames[3]).setText(reservationData.situated_at)

      if(reservationData.phase_1 && 
        reservationData.block_1 && 
        reservationData.lot_1 && 
        reservationData.area_1 && 
        reservationData.price_per_sq_1 && 
        reservationData.downpayment_1 && 
        reservationData.balance_1 && 
        reservationData.contract_price_1){

        

      form.getTextField(fieldNames[4]).setText(reservationData.phase_1)
      form.getTextField(fieldNames[5]).setText(reservationData.block_1)
      form.getTextField(fieldNames[6]).setText(reservationData.lot_1)
      form.getTextField(fieldNames[7]).setText(String(reservationData.area_1))
      form.getTextField(fieldNames[8]).setText(String(reservationData.price_per_sq_1))
      form.getTextField(fieldNames[9]).setText(String(reservationData.contract_price_1))
      form.getTextField(fieldNames[10]).setText(String(reservationData.downpayment_1))
      form.getTextField(fieldNames[31]).setText(String(reservationData.balance_1))


      
        }
 
      if(reservationData.typePayment === 'cash payment'){

         form.getCheckBox(fieldNames[11]).check()
      }
      if(reservationData.typePayment === 'zero down-payment'){
        
        form.getCheckBox(fieldNames[12]).check()
        }
      if(reservationData.typePayment === 'installment payment'){
        
        form.getCheckBox(fieldNames[13]).check()
        }
      if(reservationData.typePayment === 'others'){
        
        form.getCheckBox(fieldNames[14]).check()
       }

       if(reservationData.phase_2 && 
        reservationData.block_2 && 
        reservationData.lot_2 && 
        reservationData.area_2 && 
        reservationData.price_per_sq_2 && 
        reservationData.downpayment_2 && 
        reservationData.balance_2 && 
        reservationData.contract_price_2){

       form.getTextField(fieldNames[15]).setText(reservationData.block_2)
       form.getTextField(fieldNames[16]).setText(reservationData.lot_2)
       form.getTextField(fieldNames[17]).setText(String(reservationData.area_2))
       form.getTextField(fieldNames[18]).setText(String(reservationData.price_per_sq_2))
       form.getTextField(fieldNames[19]).setText(String(reservationData.contract_price_2))
       form.getTextField(fieldNames[20]).setText(String(reservationData.downpayment_2))
       form.getTextField(fieldNames[21]).setText(String(reservationData.balance_2))
       form.getTextField(fieldNames[22]).setText(reservationData.phase_2)
        }

       if(reservationData.phase_3 && 
        reservationData.block_3 && 
        reservationData.lot_3 && 
        reservationData.area_3 && 
        reservationData.price_per_sq_3 && 
        reservationData.downpayment_3 && 
        reservationData.balance_3 && 
        reservationData.contract_price_3){

        

       form.getTextField(fieldNames[23]).setText(reservationData.block_3)
       form.getTextField(fieldNames[24]).setText(reservationData.phase_3)
       form.getTextField(fieldNames[25]).setText(reservationData.lot_3)
       form.getTextField(fieldNames[26]).setText(String(reservationData.area_3))
       form.getTextField(fieldNames[27]).setText(String(reservationData.price_per_sq_3))
       form.getTextField(fieldNames[28]).setText(String(reservationData.contract_price_3))
       form.getTextField(fieldNames[29]).setText(String(reservationData.downpayment_3))
       form.getTextField(fieldNames[30]).setText(String(reservationData.balance_3))

      

      }

      pdfDoc
            .getForm()
            .getFields()
            .forEach((field) => field.enableReadOnly());

        // Save the modified PDF to a new file
        const pdfBytes = await pdfDoc.save();

           // AWS S3 configuration
        const s3 = new S3Client({
            accessKeyId: process.env.AWS_ACCESS_KEY_ID,
            secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
            region: process.env.AWS_REGION,
        });

        const s3Params = {
            Bucket: process.env.AWS_BUCKET_NAME,
            Key: `uploads/generatedForms/${reservationData.name}_reservation_agreement.pdf`, // Define the desired key (path) on S3
            Body: pdfBytes, 
        };

            await s3.send(new PutObjectCommand(s3Params));
            const pdfPath = `https://${process.env.AWS_BUCKET_NAME}.s3.${process.env.AWS_REGION}.amazonaws.com/${s3Params.Key}`;
            
            
            return pdfPath;
        



    } catch (error) {
      console.log(error)
      throw error
      
    }

}

let reservationTimeout;
let isStopLotRollbackCalled = false

// Function to update lot status to "reserved" after 30 days when reservation is submitted
async function scheduleLotReservation(lotKey) {
  // Schedule the task to run after 30 days
  reservationTimeout = setTimeout(async () => {
      const [firstItem] = await Lot.find();

      if (!firstItem) {
          return console.error("Lot not found");
      }

      const updatedLot = firstItem.lots;

      if (!updatedLot) {
          return console.error("Lot not found");
      }

      const lot = updatedLot.get(lotKey);

      if (lot && 'status' in lot && lot.status === 'reserved') {
          // Update lot status to "sell" 
          lot.status = 'sell';
          await firstItem.save();
          console.log(`Lot ${lotKey} status set to "sell" after 30 days`);
      }
  }, 5 * 60 * 1000); //   30 * 24 * 60 * 60 * 1000
}



// You can call this function to stop the rollback process
exports.stopLotReservationRollback = async() => {
  if (!isStopLotRollbackCalled) {
    console.log("the 30 days rollback is stopped!");
    clearTimeout(reservationTimeout);
    isStopLotRollbackCalled = true;
}

}










exports.deleteReservation = async (req, res) => {
  
  try {
    const { id } = req.params;
    const { details } = req.body;



    const user = await User.findOne({ userId: id });

    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    let deletedReservationData;

    if (details === 'details1') {

      deletedReservationData = user.accountDetails.details1;
      const newTotalAmountDue = deletedReservationData.totalSqm_1 * deletedReservationData.amountperSquare_1
      user.accountDetails.totalAmountDue = user.accountDetails.totalAmountDue - newTotalAmountDue;
      user.accountingDetails.totalAmountDue = user.accountDetails.totalAmountDue
      user.accountDetails.details1 = undefined;

    } else if (details === 'details2') {

      deletedReservationData = user.accountDetails.details2;
      const newTotalAmountDue = deletedReservationData.totalSqm_2 * deletedReservationData.amountperSquare_2
      user.accountDetails.totalAmountDue = user.accountDetails.totalAmountDue - newTotalAmountDue;
      user.accountingDetails.totalAmountDue = user.accountDetails.totalAmountDue
      user.accountDetails.details2 = undefined;

    } else if (details === 'details3') {

      deletedReservationData = user.accountDetails.details3;
      const newTotalAmountDue = deletedReservationData.totalSqm_3 * deletedReservationData.amountperSquare_3
      user.accountDetails.totalAmountDue = user.accountDetails.totalAmountDue - newTotalAmountDue;
      user.accountingDetails.totalAmountDue = user.accountDetails.totalAmountDue
      user.accountDetails.details3 = undefined;

    } else {
      return res.status(400).json({ message: 'Invalid reservationDetails' });
    }

   

   
    
    // Save the updated user object to the database
    await user.save();

    

    return res.status(200).json({
      message: 'Reservation deleted successfully',
      deletedReservationData,
      totalAmountDue: user.accountDetails.totalAmountDue,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: 'Internal server error', error });
  }
};


// Function to get reservation details by ID or retrieve all reservations
exports.getReservationDetails = async (req, res, next) => {
    try {
      const { id } = req.params;
  
      if (id) {
        // If an ID is provided, fetch a specific reservation by ID
        const reservation = await Reservation.findById(id);
  
        if (!reservation) {
          return res.status(404).json({ message: 'Reservation not found' });
        }
  
        return res.status(200).json({ message: 'Reservation found', data: reservation });
      } else {
        // If no ID is provided, retrieve all reservations
        const reservations = await Reservation.find();
  
        return res.status(200).json({ message: 'All reservations', data: reservations });
      }
    } catch (error) {
      return next(error);
    }
  };

// Update a reservation agreement by ID

exports.updateReservation = async (req, res, next) => {
    try {
        const reservationId = req.params.id;
        const updates = req.body;

        const updatedReservation = await Reservation.findByIdAndUpdate(reservationId, updates, {
            new: true, //return the updated document
        });

        if (!updatedReservation) {
            return res.status(404).json({ message: 'Reservation not found'});
        }

        return res.status(200).json({ message: 'Reservation updated successfully', data: updatedReservation});
    } catch (error) {
        return next(error);
    }
};

