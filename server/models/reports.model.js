const mongoose = require('mongoose')

const { Schema } = mongoose;


const reportsSchema = new Schema({

    reports:[{

        date: String,
        fullname: String,
        amount: Number,
        purpose: String,
        address: String,
        contactNo: String,
        civilStatus: String,
        spouseName: String,
        occupation: String,
        businessMonthlyIncome: Number,
        buyerSourceOfIncome: String,
        typeOfEmployment: String,
        employer: String,
        employerAddress: String,
        grossSalary: String,
        businessName: String,
        businessAddress: String,
        monthlyGrossIncome: Number,

    }]

   


});

reportsSchema.set("toJSON", {
    transform: (document, returnedObject) => {
        returnedObject.id = returnedObject._id.toString();
        delete returnedObject._id;
        delete returnedObject.__v;
        delete returnedObject.password;
    },
});

module.exports = mongoose.model('Report', reportsSchema);
