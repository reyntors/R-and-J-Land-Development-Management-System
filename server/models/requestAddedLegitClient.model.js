const mongoose = require('mongoose');
const { Schema } = mongoose;


const addClientSchema = new Schema({

    requests:[{

    requestLegitId:{
        type: Number,
        unique: true,
    },

    userId: {
        type: String, 
     
      },
    approvalStatus: String,
    details: String,
    date: String,

}]

});


addClientSchema.set("toJSON", {
    transform: (document, returnedObject) => {
        returnedObject.id = returnedObject._id.toString();
        delete returnedObject._id;
        delete returnedObject.__v;
    },
});

module.exports = mongoose.model('request legit client', addClientSchema);