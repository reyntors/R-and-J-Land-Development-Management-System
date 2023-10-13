const mongoose = require('mongoose')
const { Schema } = mongoose;
const uniqueValidator = require("mongoose-unique-validator");

let currentIncrement = 100; // Initialize with 100

function generateId() {
currentIncrement++; // Increment the number

// Generate the inquiryId by combining a static part and the current increment
const id = `LETTER${currentIncrement}`;

return id;
}


const letterOfIntentSchema = new Schema({

    id: {
        type: String,
        unique: true,
        default: generateId
    },
    isSubmitted: {
        type: Boolean,
        default: false
    },
    date: {
        type: String,
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
        type: String,
        required: true,
    },
    citizenship: {
        type: String,
        required: true,
    },
    contactNo: {
        type: String,
        required: true,
    },
    emailAddress: {
        type: String,
        required: true,
    },
    reservationTimeSpan: {
        type: String, 
        required: true,
    },
    createdBy: {
        type: Schema.Types.ObjectId, 
        ref: 'user', 
        required: true,
    },
    
});

letterOfIntentSchema.set("toJSON", {
    transform: (document, returnedObject) => {
        returnedObject.id = returnedObject._id.toString();
        delete returnedObject._id;
        delete returnedObject.__v;
       
    },
});


letterOfIntentSchema.set('timestamps', true);

letterOfIntentSchema.plugin(uniqueValidator, {message: "You create an letter of intent once."});

module.exports = mongoose.model('Letter of Intent', letterOfIntentSchema);
