const mongoose = require('mongoose');
const { Schema } = mongoose;
const uniqueValidator = require("mongoose-unique-validator");

const lotSchema = new Schema({
    lotNumber: {
        type: String,
        required: true,
        unique: true,
    },
    lotSize: {
        type: Number,
        required: true,
    },
    lotDescription: {
        type: String,
        required: true,
    },
    amountperSquare: {
        type: Number,
        required: true,
    },
    totalSqm: {
        type: Number,
        required: true,
    }
});

lotSchema.set('timestamps', true);

// Apply uniqueValidator plugin before exporting the model
lotSchema.plugin(uniqueValidator, { message: "This lot already exists." });

module.exports = mongoose.model('Lot', lotSchema);
