const mongoose = require('mongoose');
const { Schema } = mongoose;



const inquiriesSchema = new Schema({

    inquiries:[{

        mark:{
            type: Boolean, 
            default: false,
        },
        inquiryId: {
            type: Number,
            unique: true,
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