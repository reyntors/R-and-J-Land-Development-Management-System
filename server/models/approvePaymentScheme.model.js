const mongoose = require('mongoose');
const { Schema } = mongoose;


const approvePaymentSchema = new Schema ({
    isSubmitted: {
        default: false,
    },
    url: String,
    date: {
        type: String, 
    },
    name: {
        type: String,
    },
    blockNo: {
        type: String,
    },
    phaseNo: {
        type: String,
    },
    lotNo: {
        type: String,
    },
    amount: {
        type: Number
    },
    datePaid: {
        type: String,
    },
    typePayment: {
     type:   String,
    },
    cash: {
        contractPriceDiscountCash: {
            type: Number,
        },
        discountAvailCash: {
            type: Number,
        },
        totalCash: {
            type: Number
        },
    },
    installment: {
        PercentageDonwpayment: {
            type: Number
        },
        DiscountOnDownpayment: {
            type: Number
        },
        ContractPrice: {
            type: Number
        },
        DiscountOnDownpayment: {
            type: Number
        },
        TotalbalanceOfAmortization: {
            type: Number
        },
      
        NoMonths: {
            type: Number,
        },
      
        AmountDue: {
            type: Number
        },
        FirstDueDate: {
            type: String,
        },
        EveryDate: {
            type: String,
        },
        Term: {
            type: String
        }
    },
    others: {
        totalReservationFee: {
            type: Number
        },
        balancePayableIn: {
            type: Number
        },
        NoMonths: {
            type: Number
        },
        AmountDue: {
            type: Number
        },
        FirstDueDate: {
            type: String
        },
        EveryDate: {
            type: String
        },
        Term: {
            type: String
        },         
    },
    createdBy: String,


});

approvePaymentSchema.set('timestamps', true);

module.exports = mongoose.model('Approve Payment Scheme', approvePaymentSchema);