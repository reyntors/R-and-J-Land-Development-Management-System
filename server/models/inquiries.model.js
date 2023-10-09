const mongoose = require('mongoose');
const { Schema } = mongoose;



const inquiriesSchema = new Schema({

    inquiries:[{

        name: String,
        subject: String,
        context: String,
        email: String,
        fblink: String,
        phonenumber: String,
        date: Date

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