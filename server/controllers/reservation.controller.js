const Reservation = require('../models/reservation.model');

exports.createReservation = async (req, res, next) => {
    try {
        const reservationData = req.body;

        //Create a new reservation instance
        const newReservation = new Reservation(reservationData);

        //Save the reservation to the database using async/await
        const savedReservation = await newReservation.save();

        return res.status(201).json({ message: 'Reservation created successfully', data: savedReservation});
    } catch (error) {
        return next(error);
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