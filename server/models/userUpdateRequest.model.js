const mongoose = require('mongoose');
const { Schema } = mongoose;

const userUpdateRequestSchema = new Schema({
  userId: {
    type: String, // or ObjectId if the userId references the User model
    required: true,
  },
  approvalStatus: {
    type: String,
    default: 'pending',
  },
  updatedData: {
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
    uploadId: [{
      filename: String,
      contentType: String,
      url: String,
    }],
  },
});

module.exports = mongoose.model('UserUpdateRequest', userUpdateRequestSchema);
