const mongoose = require('mongoose');
const { Schema } = mongoose;

const imageSchema = new mongoose.Schema({
    filename: {
        type: String
    },
    contentType: {
        type: String
    },
    url: {
        type: String,
    }
    
});
const subdivisionSchema = new mongoose.Schema({
    // other fields
    image: [imageSchema], // Define image as an array of images
    lotNumber: {
        type: String,
        
       
      
    },
    totalSqm: {
        type: Number,
        default: null,
    },
    amountperSquare: {
        type: Number,
        default: null,
    },
    totalAmountDue: {
        type: Number,
        default: null,
    },
    status: {
        type: String,
        default: null
    },
});



subdivisionSchema.set("toJSON", {
    transform: (document, returnedObject) => {
        returnedObject.id = returnedObject._id.toString();
        delete returnedObject.__id;
        delete returnedObject.__v;
    },
});



module.exports = mongoose.model('Lot', subdivisionSchema);
