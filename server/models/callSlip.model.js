const mongoose = require('mongoose');

const { Schema } = mongoose;


const callSlipSchema = new Schema({

    date: {
        type: String,
        required: true,
    },
    lastName: {
        type: String,
        required: true,
    },
    firstName: {
        type: String,
        required: true,
    },
    middleName: {
        type: String,
        required: true,
    },
    spouseName: {
        type: String,
        required: true,
    },
    telNumber: {
        type: Number,
        required: true,
    },
    contactNumber: {
        type: Number,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    prospects: [],

})

callSlipSchema.set("toJSON", {
    transform: (document, returnedObject) => {
        returnedObject.id = returnedObject._id.toString();
        delete returnedObject._id;
        delete returnedObject.__v;
       
    },
});

module.exports = mongoose.model('callslip', callSlipSchema);