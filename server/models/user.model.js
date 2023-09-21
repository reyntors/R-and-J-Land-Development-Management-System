const mongoose = require('mongoose');
const { Schema } = mongoose;
const uniqueValidator = require("mongoose-unique-validator");

// Define a function to generate a user ID with the format: year + random number
function generateUserId() {
    const currentYear = new Date().getFullYear();
    const randomPart = Math.floor(Math.random() * 1000); // You can adjust the range as needed
    return `${currentYear}-${randomPart}`;
}



const userSchema = new Schema({
    userId: {
        type: String,
        unique: true,
        required: true,
        default: generateUserId,
    },
    fullname: {
        type: String,
        required: true
    },
    contactNumber: {
        type: String,
        required: true
    },
    homeAddress: {
        type: String,
        required: true
    },
    fbAccount: {
        type: String
    },
    username: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
    roles: {
        type: String,
        enum: ['guest', 'staff', 'admin'],
        default: 'guest' 
    },

    date: {
        type: Date,
        default: Date.now()
    }
});



userSchema.set("toJSON", {
    transform: (document, returnedObject) => {
        returnedObject.id = returnedObject._id.toString();
        delete returnedObject._id;
        delete returnedObject.__v;
        delete returnedObject.password;
    },
});



userSchema.plugin(uniqueValidator, {message: "Email already in use."});

const User = mongoose.model("user", userSchema);
module.exports = User;


