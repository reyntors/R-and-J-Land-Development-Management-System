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
        TotalDownpayment1: {
            type: Number
        },
        TotalDownpayment2: {
            type: Number
        },
        TotalbalanceOfAmortization1: {
            type: Number
        },
        TotalbalanceOfAmortization2: {
            type: Number
        },
        DueMonth1: {
            type: Number,
        },
        DueMonth2: {
            type: Number
        },
        AmountDue1: {
            type: Number
        },
        AmountDue2: {
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
        DueMonth1: {
            type: Number
        },
        DueMonth2: {
            type: Number
        },
        AmountDue1: {
            type: Number
        },
        AmountDue2: {
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