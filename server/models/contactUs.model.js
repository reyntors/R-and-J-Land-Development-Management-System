const mongoose = require('mongoose');
const { Schema } = mongoose;


const contactUsSchema = new Schema ({

    firstName: {
        type: String,
        required: true,
    },
    lastName: {
        type: String,
        required: true,
    },
    company: {
        type: String,
        required: true,
    },
    jobTitle: {
        type: String,
        required: true,
    },
    phone: {
        type: Number,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    facebookLink: String,
    type: {
        type: String,
        required: true,
    },
    temp: {
        type: String,
        required: true,
    },
    message: {
        type: String,
        
    },


})

contactUsSchema.set("toJSON", {
    transform: (document, returnedObject) => {
        returnedObject.id = returnedObject._id.toString();
        delete returnedObject._id;
        delete returnedObject.__v;
       
    },
});

module.exports = mongoose.model('contactus', contactUsSchema);