const mongoose = require('mongoose')
const { Schema } = mongoose;



const birTinRequestSchema = new Schema({
    url:{
        type: String,
    },
    isSubmitted: {
        type: Boolean,
        default: false
    },
    date: {
        type: String,
        required: true,
        
    },
    authorizedTo: {
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
    birthday: {
        type: String,
        required: true,
    },
    tinNumber: {
        type: String,
        required: true,
    },
    respectfulYours: {
        type: String,
        required: true,
    },
    spaName: {
        type: String,
        required: true,
    },
    spaAge: {
        type: String,
        required: true,
    },
    spaResident: {
        type: String,
        required: true,
    },
    spaAttyName: {
        type: String,
        required: true,
    },
    spaAttyAge: {
        type: String, 
        required: true,
    },
    spaAttyResident: {
        type: String, 
        required: true,
    },
    witnessDay: {
        type: String,
        required: true,
    },
    witnessMonth: {
        type: String, 
        required: true,
    },
    witnessYear: {
        type: String, 
        required: true,
    },
    witnessAddress: {
        type: String,
        required: true,
    },
    createdBy: {
        type: Schema.Types.ObjectId, 
        ref: 'user', 
        required: true,
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
