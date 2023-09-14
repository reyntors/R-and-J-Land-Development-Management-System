const mongoose = require('mongoose');
const { Schema } = mongoose;


const reservationSchema = new Schema({
    reservationDate: {
        type: Date,
        required: true,
        
    },
    buyerName: {
        type: String,
        required: true,
    },
    lotLocation: {
        type: String,
        required: true,
    },
    lotDescription: {
        type: String,
        required: true,
    },
    phase: {
        type: String,
        required: true,
    },
    block: {
        type: String,
        required: true,
    },
    lotArea: {
        type: String,
        required: true,
    },
    pricePerSqM: {
        type: Number,
        required: true,
    },
    contractPrice: {
        type: Number,
        required: true,
    },
    discount: {
        type: Number,
    },
    downPayment: {
        type: Number,
    },
    paymentTerms: {
        type: String,
    },
    // Add other fields as needed
});

reservationSchema.set('timestamps', true);



module.exports = mongoose.model('Reservation', reservationSchema);
