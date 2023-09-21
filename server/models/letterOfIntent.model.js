const mongoose = require('mongoose');
const { Schema } = mongoose;



const letterOfIntentSchema = new Schema({
    date: {
        type: Date,
        required: true,
        
    },
    purchase: {
        type: String,
        required: true,
    },
    project: {
        type: String,
        required: true,
    },
    locationPH: {
        type: String,
        required: true,
    },
    locationBlk: {
        type: String,
        required: true,
    },
    locationLotOrUnit: {
        type: String,
        required: true,
    },
    name: {
        type: String,
        required: true,
    },
    address: {
        type: Number,
        required: true,
    },
    citizenship: {
        type: Number,
        required: true,
    },
    contactNo: {
        type: Number,
    },
    emailAddress: {
        type: Number,
    },
    
});

letterOfIntentSchema.set('timestamps', true);

module.exports = mongoose.model('Reservation', reservationSchema);
