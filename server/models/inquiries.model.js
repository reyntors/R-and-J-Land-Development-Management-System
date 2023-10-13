const mongoose = require('mongoose');
const { Schema } = mongoose;


let currentIncrement = 100; // Initialize with 100

function generateInquiryId() {
currentIncrement++; // Increment the number

// Generate the inquiryId by combining a static part and the current increment
const inquiryId = `INQ${currentIncrement}`;

return inquiryId;
}



const inquiriesSchema = new Schema({

    inquiries:[{

        mark:{
            type: Boolean, 
            default: false,
        },
        inquiryId: {
            type: String,
            unique: true,
            default: generateInquiryId
        },
        name: String,
        subject: String,
        context: String,
        email: String,
        fblink: String,
        phonenumber: String,
        date: String,

    }]


});

inquiriesSchema.set("toJSON", {
    transform: (document, returnedObject) => {
        returnedObject.id = returnedObject._id.toString();
        delete returnedObject._id;
        delete returnedObject.__v;
    },
});

module.exports = mongoose.model('inquiries', inquiriesSchema);