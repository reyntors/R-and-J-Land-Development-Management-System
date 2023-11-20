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
     details1: [{
        area_1:{
            type: Number,
            
        },
        block_1:{
            type: String,
            
        },
        contract_price_1:{
            type: Number,
            
        },
        balance_1:{
            type: Number,
           
        },
        downpayment_1:{
            type: Number,
            
        },
        lot_1:{
            type: String,
            
        },
        phase_1:{
            type: String,
            
        },
        price_per_sq_1:{
            type: Number,
            
        },
    }],
    details2: [{
        area_2:{
            type: Number,
            
        },
        block_2:{
            type: String,
            
        },
        contract_price_2:{
            type: Number,
            
        },
        balance_2:{
            type: Number,
           
        },
        downpayment_2:{
            type: Number,
            
        },
        lot_2:{
            type: String,
            
        },
        phase_2:{
            type: String,
            
        },
        price_per_sq_2:{
            type: Number,
            
        },
    }],
    details3: [{
        area_3:{
            type: Number,
            
        },
        block_3:{
            type: String,
            
        },
        contract_price_3:{
            type: Number,
            
        },
        balance_3:{
            type: Number,
           
        },
        downpayment_3:{
            type: Number,
            
        },
        lot_3:{
            type: String,
            
        },
        phase_3:{
            type: String,
            
        },
        price_per_sq_3:{
            type: Number,
            
        },
    }],
    createdBy: String,
   
});

reservationSchema.set('timestamps', true);



module.exports = mongoose.model('Reservation', reservationSchema);
