const mongoose = require('mongoose');
const { Schema } = mongoose;



const recoveryCodeSchema = new Schema({

    userId: {
        type: String,
        required: true,
    },
    code: {
        type: String,
        required: true,
      },
    timestamp: {
        type: String,
        default: Date.now(),
      },
  


})


module.exports = mongoose.model('RecoveryCode', recoveryCodeSchema);
