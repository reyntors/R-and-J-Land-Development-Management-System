const express = require('express');
const router = express.Router();
const reservationController = require('../controllers/reservation.controller');
const auth = require("../middlewares/auth");
const userController = require("../controllers/users.controller");



// Get details of a specific reservation agreement by ID
router.get('/:id?',auth.authenticateToken, reservationController.getReservationDetails);

// Update a reservation agreement by ID
router.put('/:id', reservationController.updateReservation);

// Delete a reservation agreement by ID
router.delete('/:id', reservationController.deleteReservation);

module.exports = router;
