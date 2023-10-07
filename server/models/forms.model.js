const mongoose = require('mongoose');
const { Schema } = mongoose;



const formsSchema = new Schema({
    forms: []
});



module.exports = mongoose.model('form', formsSchema);
