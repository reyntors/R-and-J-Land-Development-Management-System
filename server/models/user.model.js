const mongoose = require('mongoose');
const { Schema } = mongoose;
const uniqueValidator = require("mongoose-unique-validator");

// Define a function to generate a user ID with the format: year + random number
function generateUserId() {
    const currentYear = new Date().getFullYear();
    const randomPart = Math.floor(Math.random() * 1000); // You can adjust the range as needed
    return `${currentYear}-${randomPart}`;
}


const transactionSchema = new Schema({
    date: Date,
    amount: Number,
    purpose: String,

});

const accountDetailsSchema = new Schema({
    lot: {
        type: Schema.Types.ObjectId,
        ref: 'Lot', 
    },
});


const paymentDetailsSchema = new Schema({
    reservationPayment: {
        type: Number,   
    },
    downPayment: {
        type: Number,   
    },
    monthlyAmortizationDue:{
        type: Number,
    }

});

const accountingDetailsSchema = new Schema({
   totalAmountDue: {
        type: Number,   
    },
    totalPayment: {
        type: Number,   
    },
   totalAmountPayable:{
        type: Number,
    }

});

const profileSchema = new Schema({
    fullname: {
        type: String,
        required: true,
    },
    contactNumber: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    address: {
        type: String,
        required: true,
    },
});

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
    },
    legitimate: {
        type: Boolean,
        default: false,
    },
    profile: profileSchema,
    accountDetails: accountDetailsSchema,
    paymentDetails: paymentDetailsSchema,
    accountingDetails: accountingDetailsSchema,
    transactions: [transactionSchema],
    letterOfIntent: {
        type: Schema.Types.ObjectId,
        ref: 'Letter of Intent', 
    },
    individualDeclaration: {
        type: Schema.Types.ObjectId,
        ref: 'Individual Buyer Declaration', 
    },
    BirTinRequest: {
        type: Schema.Types.ObjectId,
        ref: 'BIR Tin Request', 
    },
    ContractDetails: {
        type: Schema.Types.ObjectId,
        ref: 'Contract Details', 
    },
    scannedFiles:[String],

    
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


