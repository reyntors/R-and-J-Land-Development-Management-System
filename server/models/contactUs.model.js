const mongoose = require('mongoose');
const { Schema } = mongoose;


const contactUsSchema = new Schema ({

    firstName: String,
    lastName: String,
    company: String,
    jobTitle: String,
    phone: String,
    email: String,
    facebookLink: String,
    type: String,
    temp: String,
    message: String


})

contactUsSchema.set("toJSON", {
    transform: (document, returnedObject) => {
        returnedObject.id = returnedObject._id.toString();
        delete returnedObject._id;
        delete returnedObject.__v;
       
    },
});

module.exports = mongoose.model('contactus', contactUsSchema);