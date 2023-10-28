const mongoose = require('mongoose');

const { Schema } = mongoose;


const callSlipSchema = new Schema({

    date: String,
    lastName: String,
    firstName: String,
    middleName: String,
    soouseName: String,
    telNumber: Number,
    contactNumber: Number,
    email: String,
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