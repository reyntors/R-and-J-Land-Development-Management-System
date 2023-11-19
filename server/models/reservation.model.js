const mongoose = require('mongoose');
const { Schema } = mongoose;


const reservationSchema = new Schema({
    isSubmitted: {
        type: Boolean,
        default: false,
    },
    url: String,
    date: {
        type: String,
        required: true,
        
    },
     name: {
        type: String,
       
    },
     land_at: {
        type: String,
       
    },
     situated_at: {
        type: String,
      
    },
     typePayment: {
        type: String,
       
    },
     details: [{
        area:{
            type: Number,
            
        },
        block:{
            type: String,
            
        },
        contract_price:{
            type: Number,
            
        },
        balance:{
            type: Number,
           
        },
        downpayment:{
            type: Number,
            
        },
        lot:{
            type: String,
            
        },
        phase:{
            type: String,
            
        },
        price_per_sq:{
            type: Number,
            
        },
    }],
    createdBy: String,
   
});

reservationSchema.set('timestamps', true);



module.exports = mongoose.model('Reservation', reservationSchema);
