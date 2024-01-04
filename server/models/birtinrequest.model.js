const mongoose = require('mongoose')
const { Schema } = mongoose;



const birTinRequestSchema = new Schema({
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
    firstname: {
        type: String,
        required: true
    },
    middlename: {
        type: String,
        required: true
    },
    lastname: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    birthday: {
        type: String,
        required: true
    },
    tinNumber: {
        type: String,
        required: true
    },
    respectfulYours: {
        type: String,
        required: true
    },
    createdBy: {
        type: String,
    },
    
});

birTinRequestSchema.set("toJSON", {
    transform: (document, returnedObject) => {
        returnedObject.id = returnedObject._id.toString();
        delete returnedObject._id;
        delete returnedObject.__v;
       
    },
});


birTinRequestSchema.set('timestamps', true);

module.exports = mongoose.model('BIR Tin Request', birTinRequestSchema);
