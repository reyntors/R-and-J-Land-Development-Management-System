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
        approvalStatus: String,
        userId: String,
        name: String,
        subject: String,
        context: String,
        otherContext:{
            title: String,
            fullname: String,
            contactNumber: String,
            email: String,
            address: String,
            birthday: String,
            civilStatus: String,
            spouseName: String,
            occupation: String,
            monthlyGrossIncome: String,
            buyerSourceOfIncome: String,
            typeOfEmployment: String,
            employer: String,
            grossSalary: String,
            businessName: String,
            businessAddress: String,
            businessMonthlyIncome: String,
        },
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