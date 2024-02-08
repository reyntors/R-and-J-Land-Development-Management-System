const mongoose = require('mongoose');
const { Schema } = mongoose;

const requestTransactionSchema = new Schema ({
    request:[{
        userId: {
            type: String,
        },
        transactionId: {
            type: Number,
        },
        date: String,
        amount: Number,
        purpose: String,
        attachments: []
    }]
});


module.exports = mongoose.model('requestTransaction', requestTransactionSchema);