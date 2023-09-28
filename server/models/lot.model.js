const mongoose = require('mongoose');
const { Schema } = mongoose;
const uniqueValidator = require("mongoose-unique-validator");

const lotSchema = new Schema({
    lotNumber: {
        type: String,
        required: true,
        unique: true,
    },
    totalSqm: {
        type: Number,
        required: true,
    },
    amountperSquare: {
        type: Number,
        required: true,
    },
    totalAmountDue: {
        type: Number,
        required: true,
    },
    createdBy: {
        type: Schema.Types.ObjectId, 
        ref: 'user', 
        required: true,
    },
    
    
});

lotSchema.set('timestamps', true);

// Apply uniqueValidator plugin before exporting the model
lotSchema.plugin(uniqueValidator, { message: "This lot already exists." });

module.exports = mongoose.model('Lot', lotSchema);
