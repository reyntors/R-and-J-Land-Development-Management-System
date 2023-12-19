const mongoose = require('mongoose')
const { Schema } = mongoose;
const uniqueValidator = require("mongoose-unique-validator");



const letterOfIntentSchema = new Schema({
    url:{
        type: String,
        default: null
    },

    isSubmitted: {
        type: Boolean,
        default: false
    },
    date: {
        type: String,
        required: true,
        
    },
    lotNumber: {
        type: [String], 
        required: true,
    },
    project: {
        type: String,
        required: true,
    },
    fullname: {
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
    messengerAccount: {
        type: String,
      
    },
    viberNo: {
        type: String,
       
    },
    createdBy: {
        type: String, 
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
