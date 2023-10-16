const mongoose = require('mongoose')
const { Schema } = mongoose;



const individualBuyerDeclarationSchema = new Schema({
    url:{
        type: String,
        default: null
    },
    isSubmitted: {
        type: Boolean,
        default: false
    },
    date: {
        type: String,
        required: true,
        
    },
    name: {
        type: String,
        required: true,
    },
    BIRtaxID: {
        type: String,
        required: true,
    },
    businessName: {
        type: String,
        required: true,
    },
    engagedInBusiness: {
        type: String,
        required: true,
    },
    businessRegisteredUnder: {
        type: String,
        required: true,
    },
    businessUsingMyTIN: {
        type: String,
        required: true,
    },
    createdBy: {
        type: Schema.Types.ObjectId, 
        ref: 'user', 
        required: true,
    },
    
});

individualBuyerDeclarationSchema.set("toJSON", {
    transform: (document, returnedObject) => {
        returnedObject.id = returnedObject._id.toString();
        delete returnedObject._id;
        delete returnedObject.__v;
       
    },
});


individualBuyerDeclarationSchema.set('timestamps', true);

module.exports = mongoose.model('Individual Buyer Declaration', individualBuyerDeclarationSchema);
