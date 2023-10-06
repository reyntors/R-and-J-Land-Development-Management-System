const mongoose = require('mongoose');
const { Schema } = mongoose;



const lotSchema = new Schema({
    subdivision: [{
        image: [],
        lotNumber: {
            type: Number,
            unique: true,
        },
        totalSqm: {
            type: Number,
            default: null,
        },
        amountperSquare: {
            type: Number,
            default: null,
        },
        totalAmountDue: {
            type: Number,
            default: null,
        },
        status: {
            type: String,
            default: null
        },

    }]
});



lotSchema.set("toJSON", {
    transform: (document, returnedObject) => {
        returnedObject.id = returnedObject._id.toString();
        delete returnedObject.__id;
        delete returnedObject.__v;
    },
});



module.exports = mongoose.model('Lot', lotSchema);
