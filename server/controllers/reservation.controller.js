const Reservation = require('../models/reservation.model');
const { S3Client, PutObjectCommand } = require("@aws-sdk/client-s3");
const axios = require('axios');
const { PDFDocument} = require('pdf-lib');// Import StandardFonts
const User = require('../models/user.model');








const date = new Date()
const year = date.getFullYear();
const month = String(date.getMonth() + 1).padStart(2, '0'); // Month is 0-based, so add 1 and format as two digits
const day = String(date.getDate()).padStart(2, '0');
const formattedDate = `${year}-${month}-${day}`;

exports.createReservation = async (req, res, next) => {
    try {
        const reservationData = req.body;
        const username = req.user.username;
        const {id} = req.params;

       

        const user = await User.findOne({username});

        if(!user){

          return res.status(404).json({message: ' User not found!'});
        }

        const customer = await User.findOne({userId: id});

        if(!customer){

          return res.status(404).json({message: ' User not found!'});
        }

        const pdfPath = await generateReservationPDF(user, reservationData);

        //Create a new reservation instance
        const newReservation = new Reservation({
          ...reservationData,
          date: formattedDate,
          url: pdfPath,
          isSubmitted: true,
          createdBy: user.username,
          details:{
            ...reservationData
          }
        });

        //Save the reservation to the database using async/await
        const savedReservation = await newReservation.save();

        const newReserveData = {

          lotNumber: reservationData.lot,
          blockNumber: reservationData.block,
          totalSqm: reservationData.area,
          amountperSquare: reservationData.price_per_sq, 
        };


        // Check if user.accountDetails.details is an array
        if (!Array.isArray(user.accountDetails.details)) {
          user.accountDetails.details = [];
      }

        customer.accountDetails.details.push(newReserveData);

        // const totalAmountDue = reservationData.area * reservationData.price_per_sq

        // Calculate the totalAmountDue for the new reservation
          const totalAmountDueForNewReservation =
          customer.accountDetails.totalAmountDue || 0;
        const totalAmountDue = totalAmountDueForNewReservation + newReserveData.totalSqm * newReserveData.amountperSquare;


        customer.accountDetails.totalAmountDue = totalAmountDue
        customer.accountingDetails.totalAmountDue = customer.accountDetails.totalAmountDue

        //save to database
        await customer.save()

        return res.status(200).json({ message: 'Reservation created successfully', 
        pdfPath: pdfPath,
        data: savedReservation
      });
    } catch (error) {
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


      form.getTextField(fieldNames[4]).setText(reservationData.phase)
      form.getTextField(fieldNames[5]).setText(reservationData.block)
      form.getTextField(fieldNames[6]).setText(reservationData.lot)
      form.getTextField(fieldNames[7]).setText(String(reservationData.area))
      form.getTextField(fieldNames[8]).setText(String(reservationData.price_per_sq))
      form.getTextField(fieldNames[9]).setText(String(reservationData.contract_price))
      form.getTextField(fieldNames[10]).setText(String(reservationData.downpayment))
      form.getTextField(fieldNames[11]).setText(String(reservationData.balance))

      if(reservationData.typePayment === 'cash payment'){

      form.getCheckBox(fieldNames[12]).check()
      }
      if(reservationData.typePayment === 'zero down-payment'){
        
        form.getCheckBox(fieldNames[13]).check()
        }
      if(reservationData.typePayment === 'installment payment'){
        
        form.getCheckBox(fieldNames[14]).check()
        }
      if(reservationData.typePayment === 'others'){
        
        form.getCheckBox(fieldNames[15]).check()
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

// Delete a reservation agreement by ID

exports.deleteReservation = async (req, res, next) => {
    try {
      const reservationId = req.params.id;
      
      const deletedReservation = await Reservation.findByIdAndRemove(reservationId);
      
      if (!deletedReservation) {
        return res.status(404).json({ message: 'Reservation not found' });
      }
      
      return res.status(200).json({ message: 'Reservation deleted successfully' });
    } catch (error) {
      return next(error);
    }
  };