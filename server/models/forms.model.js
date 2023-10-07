const mongoose = require('mongoose');
const { Schema } = mongoose;



const formsSchema = new Schema({
    forms: [{
        filename:{ 
            type: String
        },
        mimetype: {
            type: String
        }
    }]
});



module.exports = mongoose.model('form', formsSchema);
