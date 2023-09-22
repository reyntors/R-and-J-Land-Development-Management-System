const mongoose = require('mongoose')
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
        type: String, // You can adjust the data type if needed (e.g., Number, Date, etc.)
        required: true,
    },
    createdBy: {
        type: Schema.Types.ObjectId, // Assuming this is a reference to the user who created it
        ref: 'User', // Reference to the User model
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

module.exports = mongoose.model('Letter of Intent', letterOfIntentSchema);
