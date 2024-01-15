const mongoose = require('mongoose');
const { Schema } = mongoose;
const uniqueValidator = require("mongoose-unique-validator");

// Define a function to generate a user ID with the format: year + random number
function generateUserId() {
    const currentYear = new Date().getFullYear();
    const randomPart = Math.floor(Math.random() * 1000); // You can adjust the range as needed
    return `${currentYear}-${randomPart}`;
}



const reservationSchema = new Schema({
    isSubmitted: {
        type: Boolean,
        default: false,
    },
    url: {
        type: String,
        ref: 'Reservation'
    },
    date: {
        type: String,
        ref: 'Reservation'
        
    },
     name: {
        type: String,
        ref: 'Reservation'
       
    },
     land_at: {
        type: String,
        ref: 'Reservation'
       
    },
     situated_at: {
        type: String,
        ref: 'Reservation'
      
    },
     typePayment: {
        type: String,
        ref: 'Reservation'
       
    },
     details1: {
        area_1:{
            type: Number,
            ref: 'Reservation'
            
        },
        block_1:{
            type: String,
            ref: 'Reservation'
            
        },
        contract_price_1:{
            type: Number,
            ref: 'Reservation'
            
        },
        balance_1:{
            type: Number,
            ref: 'Reservation'
           
        },
        downpayment_1:{
            type: Number,
            ref: 'Reservation'
            
        },
        lot_1:{
            type: String,
            ref: 'Reservation'
            
        },
        phase_1:{
            type: String,
            ref: 'Reservation'
            
        },
        price_per_sq_1:{
            type: Number,
            ref: 'Reservation'
            
        },
    },
    details2: {
        area_2:{
            type: Number,
            ref: 'Reservation'
            
        },
        block_2:{
            type: String,
            ref: 'Reservation'
            
        },
        contract_price_2:{
            type: Number,
            ref: 'Reservation'
            
        },
        balance_2:{
            type: Number,
            ref: 'Reservation'
           
        },
        downpayment_2:{
            type: Number,
            ref: 'Reservation'
            
        },
        lot_2:{
            type: String,
            ref: 'Reservation'
            
        },
        phase_2:{
            type: String,
            ref: 'Reservation'
            
        },
        price_per_sq_2:{
            type: Number,
            ref: 'Reservation'
            
        },
    },
    details3: {
        area_3:{
            type: Number,
            ref: 'Reservation'
            
        },
        block_3:{
            type: String,
            ref: 'Reservation'
            
        },
        contract_price_3:{
            type: Number,
            ref: 'Reservation'
            
        },
        balance_3:{
            type: Number,
            ref: 'Reservation'
           
        },
        downpayment_3:{
            type: Number,
            ref: 'Reservation'
            
        },
        lot_3:{
            type: String,
            ref: 'Reservation'
            
        },
        phase_3:{
            type: String,
            ref: 'Reservation'
            
        },
        price_per_sq_3:{
            type: Number,
            ref: 'Reservation'
            
        },
    },
    
   
});


const contractToSellSchema = new Schema ({
    clientName: String,
    projectName: String,
    blockNo: String,
    area: Number,
    contractNo: Number,
    houseModel: String,
    floorArea: String,
    downpayment: Number,
    balance: Number

})




const approvePaymentSchema = new Schema ({
    isSubmitted: {
        default: false,
        
    },
    url: {
        type: String,
        ref: 'Approve Payment Scheme'
    },
    date: {
        type: String, 
        ref: 'Approve Payment Scheme'
    },
    name: {
        type: String,
        ref: 'Approve Payment Scheme'
    },
    blockNo: {
        type: String,
        ref: 'Approve Payment Scheme'
    },
    phaseNo: {
        type: String,
        ref: 'Approve Payment Scheme'
    },
    lotNo: {
        type: String,
        ref: 'Approve Payment Scheme'
    },
    amount: {
        type: Number,
        ref: 'Approve Payment Scheme'
    },
    datePaid: {
        type: String,
        ref: 'Approve Payment Scheme'
    },
    typePayment: {
     type:   String,
     ref: 'Approve Payment Scheme'
    },
    cash: {
        contractPriceDiscountCash: {
            type: Number,
            ref: 'Approve Payment Scheme'
        },
        discountAvailCash: {
            type: Number,
            ref: 'Approve Payment Scheme'
        },
        totalCash: {
            type: Number,
            ref: 'Approve Payment Scheme'
        },
    },
    installment: {
        PercentageDownpayment: {
            type: Number,
            ref: 'Approve Payment Scheme'
        },
        PercentageDiscountOnDownpayment: {
            type: Number,
            ref: 'Approve Payment Scheme'
        },
        ContractPrice: {
            type: Number,
            ref: 'Approve Payment Scheme'
        },
        DiscountOnDownpayment: {
            type: Number,
            ref: 'Approve Payment Scheme'
        },
        TotalbalanceOfAmortization: {
            type: Number,
            ref: 'Approve Payment Scheme'
        },
        NoMonths: {
            type: Number,
            ref: 'Approve Payment Scheme'
        },
        AmountDue: {
            type: Number,
            ref: 'Approve Payment Scheme'
        },
        FirstDueDate: {
            type: String,
            ref: 'Approve Payment Scheme'
        },
        EveryDate: {
            type: String,
            ref: 'Approve Payment Scheme'
        },
        Term: {
            type: String,
            ref: 'Approve Payment Scheme'
        }
    },
    others: {
        totalReservationFee: {
            type: Number,
            ref: 'Approve Payment Scheme'
        },
        balancePayableIn: {
            type: Number,
            ref: 'Approve Payment Scheme'
        },
        NoMonths: {
            type: Number,
            ref: 'Approve Payment Scheme'
        },
        AmountDue: {
            type: Number,
            ref: 'Approve Payment Scheme'
        },
        FirstDueDate: {
            type: String,
            ref: 'Approve Payment Scheme'
        },
        EveryDate: {
            type: String,
            ref: 'Approve Payment Scheme'
        },
        Term: {
            type: String,
            ref: 'Approve Payment Scheme'
        },         
    },
    createdBy: {
        type: String,
    ref: 'Approve Payment Scheme'
    }


});

const transactionSchema = new Schema({
    transactionId:{
        type: Number, 
    },
    date: String,
    amount: Number,
    purpose: String,
    attachments: [],

});

const scannedFilesSchema = new Schema({
    filename: String,
    contentType: String,
    url: String,
});


const accountDetailsSchema = new Schema({
    totalAmountDue: {
        type: Number,
       
    },
    details1:{
            lotNumber_1: {
                type: String,
                
                
            },
            blockNumber_1:{
                type: String,
                
            },
            totalSqm_1: {
                type: Number,
               
                
            },
            amountperSquare_1: {
                type: Number,
               
                
            },
        },
    details2:{
            lotNumber_2: {
                type: String,
                
                
            },
            blockNumber_2:{
                type: String,
               
            },
            totalSqm_2: {
                type: Number,
                
                
            },
            amountperSquare_2: {
                type: Number,
               
                
            },
        },
    details3:{
            lotNumber_3: {
                type: String,
                
                
            },
            blockNumber_3:{
                type: String,
               
            },
            totalSqm_3: {
                type: Number,
              
                
            },
            amountperSquare_3: {
                type: Number,
                
                
            },
        },
});


const paymentDetailsSchema = new Schema({
    reservationPayment: {
        type: Number, 
        default: 0,  
    },
    downPayment: {
        type: Number,  
        default: 0, 
    },
    monthlyAmortizationDue:{
        type: Number,
        default: 0,
    }

});

const accountingDetailsSchema = new Schema({
   totalAmountDue: {
        type: Number,  
        default: 0,
       
    },
    totalPayment: {
        type: Number,  
        default: 0,
       
    },
   totalAmountPayable:{
        type: Number,
        default: 0,
       
    },
    totalInterest: {
        type: Number,
        default: 0,
    }

});

const profileDetailsSchema = new Schema({
   
    fullname: {
        type: String,
        default: null,
       
    },
    contactNumber: {
        type: String,
        default: null,
       
    },
    email: {
        type: String,
        default: null,  
        
    },
    birthday:{
        type: String,
        default: null
    },
    address: {
        type: String,
        default: null,
       
    },
    civilStatus: {
        type: String,
        default: null,
       
    },
    spouseName: {
        type: String,
        default: null,
       
    },
    occupation: {
        type: String,
        default: null,
       
    },
    monthlyGrossIncome: {
        type: String,
        default: null,
       
    },
    buyerSourceOfIncome: {
        type: String,
        default: null,
       
    },
    typeOfEmployment: {
        type: String,
        default: null,
       
    },
    employer: {
        type: String,
        default: null,
       
    },
    grossSalary: {
        type: String,
        default: null,
       
    },
    businessName: {
        type: String,
        default: null,
       
    },
    businessAddress: {
        type: String,
        default: null,
       
    },

    uploadId: [{
        filename: String,
        contentType: String,
        url: String,
    }]

});

const letterOfIntentSchema = new Schema({
    url: {
        type: String,
        default: null,
        ref: 'Letter of Intent'
    },
    isSubmitted: {
        type: Boolean,
        default: false,
        ref: 'Letter of Intent'

    },
    date: {
        type: String,
        default: null,
        ref: 'Letter of Intent',
        
    },
    lotNumber: {
        type: [String], 
        ref: 'Letter of Intent'
    },
    project: {
        type: String,
        default: null,
        ref: 'Letter of Intent',
    },
    fullname: {
        type: String,
        ref: 'Letter of Intent'
    },
    citizenship: {
        type: String,
        required: true,
        ref: 'Letter of Intent'
    },
    contactNo: {
        type: String,
        required: true,
        ref: 'Letter of Intent'
    },
    emailAddress: {
        type: String,
        required: true,
        ref: 'Letter of Intent'
    },
    messengerAccount: {
        type: String,
        ref: 'Letter of Intent'
      
    },
    viberNo: {
        type: String,
        ref: 'Letter of Intent'
       
    },
});

const individualBuyerDeclarationSchema = new Schema({
    url: {
        type: String,
        default: null,
        ref: 'Individual Buyer Declaration'
    },
    isSubmitted: {
        type: Boolean,
        default: false,
        ref: 'Individual Buyer Declaration'
    },
    date: {
        type: Date,
        default: null,
        ref: 'Individual Buyer Declaration'
        
    },
    name: {
        type: String,
        default: null,
        ref: 'Individual Buyer Declaration'
    },
    BIRtaxID: {
        type: String,
        default: null,
        ref: 'Individual Buyer Declaration'
    },
    businessName: {
        type: String,
        default: null,
        ref: 'Individual Buyer Declaration'
    },
    engagedInBusiness: {
        type: String,
        default: null,
        ref: 'Individual Buyer Declaration'
    },
    businessRegisteredUnder: {
        type: String,
        default: null,
        ref: 'Individual Buyer Declaration'
    },
    businessUsingMyTIN: {
        type: String,
        default: null,
        ref: 'Individual Buyer Declaration'
    },
    
});

const birTinRequestSchema = new Schema({
    url: {
        type: String,
        default: null,
        ref: 'BIR Tin Request'
    },
    isSubmitted: {
        type: Boolean,
        default: false,
        ref: 'BIR Tin Request'
    },
    date: {
        type: String,
        default: null,
        ref: 'BIR Tin Request'
        
    },
    authorizedTo: {
        type: String,
        default: null,
        ref: 'BIR Tin Request'
    },
    name: {
        type: String,
        default: null,
        ref: 'BIR Tin Request'
    },
    address: {
        type: String,
        default: null,
        ref: 'BIR Tin Request'
    },
    birthday: {
        type: String,
        default: null,
        ref: 'BIR Tin Request'
    },
    tinNumber: {
        type: String,
        default: null,
        ref: 'BIR Tin Request'
    },
    respectfulYours: {
        type: String,
        default: null,
        ref: 'BIR Tin Request'
    },
    spaName: {
        type: String,
        default: null,
        ref: 'BIR Tin Request'
    },
    spaAge: {
        type: String,
        default: null,
        ref: 'BIR Tin Request'
    },
    spaResident: {
        type: String,
        default: null,
        ref: 'BIR Tin Request'
    },
    spaAttyName: {
        type: String,
        default: null,
        ref: 'BIR Tin Request'
    },
    spaAttyAge: {
        type: String, 
        default: null,
        ref: 'BIR Tin Request'
    },
    spaAttyResident: {
        type: String, 
        default: null,
        ref: 'BIR Tin Request'
    },
    witnessDay: {
        type: String,
        default: null,
        ref: 'BIR Tin Request'
    },
    witnessMonth: {
        type: String, 
        default: null,
        ref: 'BIR Tin Request'
    },
    witnessYear: {
        type: String, 
        default: null,
        ref: 'BIR Tin Request'
    },
    witnessAddress: {
        type: String,
        default: null,
        ref: 'BIR Tin Request'
    },
    
});

const buyerInfoSheetSchema = new Schema({ 
    url: String,
    isSubmitted: {
        type: Boolean,
        default: false,
        
    },
    projectName: {
        type: String,
        default: null,
        ref: 'Buyer Info Sheet'
    },
    lotUnit: {
        type: String,
        default: null,
        ref: 'Buyer Info Sheet'
    },
    purposePurchase: {
        type: String,
        default: null,
        ref: 'Buyer Info Sheet'
    },
    buyerDesirePurchase: {
        type: String,
        default: null,
        ref: 'Buyer Info Sheet'
    },
    buyerFirstname: {
        type: String,
        default: null,
        ref: 'Buyer Info Sheet'
    },
    buyerMiddlename: {
        type: String,
        default: null,
        ref: 'Buyer Info Sheet'
    },
    buyerLastname: {
        type: String,
        default: null,
        ref: 'Buyer Info Sheet'
    },
    buyerBirthdate: {
        type: String,
        default: null,
        ref: 'Buyer Info Sheet'
    },
    buyerReligion: {
        type: String,
        default: null,
        ref: 'Buyer Info Sheet'
    },
    buyerCivilStatus: {
        type: String,
        default: null,
        ref: 'Buyer Info Sheet'
    },
    buyerSex: {
        type: String,
        default: null,
        ref: 'Buyer Info Sheet'
    },
    buyerCitizenship: {
        type: String,
        default: null,
        ref: 'Buyer Info Sheet'
    },
    buyerTIN: {
        type: String,
        default: null,
        ref: 'Buyer Info Sheet'
    },
    buyerPassportNo: {
        type: String,
        default: null,
        ref: 'Buyer Info Sheet'
    },
    buyerPassportDateIssued: {
        type: String,
        default: null,
        ref: 'Buyer Info Sheet'
    },
    buyerPassportDateExpiration: {
        type: String,
        default: null,
        ref: 'Buyer Info Sheet'
    },
    buyerMobileNo: {
        type: String,
        default: null,
        ref: 'Buyer Info Sheet'
    },
    buyerMessengerAccount: {
        type: String,
        default: null,
        ref: 'Buyer Info Sheet'
    },
    buyerEmailAddress: {
        type: String,
        default: null,
        ref: 'Buyer Info Sheet'
    },
    buyerViberNo: {
        type: String,
        default: null,
        ref: 'Buyer Info Sheet'
    },
    buyerGovtIssuedID: {
        type: String,
        default: null,
        ref: 'Buyer Info Sheet'
    },
    buyerGovtIssuedIDNo: {
        type: String,
        default: null,
        ref: 'Buyer Info Sheet'
    },
    buyerPrimaryAddress: {
        type: String,
        default: null,
        ref: 'Buyer Info Sheet'
    },
    buyerAbroadAddress: {
        type: String,
        default: null,
        ref: 'Buyer Info Sheet'
    },
    buyerOwnershipCurrentResidence: {
        type: String,
        default: null,
        ref: 'Buyer Info Sheet'
    },
    buyerOwnershipCurrentResidenceYears: {
        type: String,
        default: null,
        ref: 'Buyer Info Sheet'
    },
    buyerEmploymentType: {
        type: String,
        default: null,
        ref: 'Buyer Info Sheet'
    },
    buyerEmployerBusinessName: {
        type: String,
        default: null,
        ref: 'Buyer Info Sheet'
    },
    buyerOfficeAddress: {
        type: String,
        default: null,
        ref: 'Buyer Info Sheet'
    },
    buyerEmploymentIndustry: {
        type: String,
        default: null,
        ref: 'Buyer Info Sheet'
    },
    buyerEmploymentPosition: {
        type: String,
        default: null,
        ref: 'Buyer Info Sheet'
    },
    buyerEmploymentYearsService: {
        type: String,
        default: null,
        ref: 'Buyer Info Sheet'
    },
    buyerEmploymentOfficeMobileNo: {
        type: String,
        default: null,
        ref: 'Buyer Info Sheet'
    },
    buyerEmploymentOfficeEmail: {
        type: String,
        default: null,
        ref: 'Buyer Info Sheet'
    },
    buyerEmploymentGrossMonthly: {
        type: String,
        default: null,
        ref: 'Buyer Info Sheet'
    },
    spouseFirstname: {
        type: String,
        default: null,
        ref: 'Buyer Info Sheet'
    },
    spouseMiddlename: {
        type: String,
        default: null,
        ref: 'Buyer Info Sheet'
    },
    spouseLastname: {
        type: String,
        default: null,
        ref: 'Buyer Info Sheet'
    },
    spouseBirthdate: {
        type: String,
        default: null,
        ref: 'Buyer Info Sheet'
    },
    spouseReligion: {
        type: String,
        default: null,
        ref: 'Buyer Info Sheet'
    },
    spouseCivilStatus: {
        type: String,
        default: null,
        ref: 'Buyer Info Sheet'
    },
    spouseSex: {
        type: String,
        default: null,
        ref: 'Buyer Info Sheet'
    },
    spouseCitizenship: {
        type: String,
        default: null,
        ref: 'Buyer Info Sheet'
    },
    spouseTIN: {
        type: String,
        default: null,
        ref: 'Buyer Info Sheet'
    },
    spousePassportNo: {
        type: String,
        default: null,
        ref: 'Buyer Info Sheet'
    },
    spousePassportDateIssued: {
        type: String,
        default: null,
        ref: 'Buyer Info Sheet'
    },
    spousePassportDateExpiration: {
        type: String,
        default: null,
        ref: 'Buyer Info Sheet'
    },
    spouseMobileNo: {
        type: String,
        default: null,
        ref: 'Buyer Info Sheet'
    },
    spouseMessengerAccount: {
        type: String,
        default: null,
        ref: 'Buyer Info Sheet'
    },
    spouseEmailAddress: {
        type: String,
        default: null,
        ref: 'Buyer Info Sheet'
    },
    spouseViberNo: {
        type: String,
        default: null,
        ref: 'Buyer Info Sheet'
    },
    spouseGovtIssuedID: {
        type: String,
        default: null,
        ref: 'Buyer Info Sheet'
    },
    spouseGovtIssuedIDNo: {
        type: String,
        default: null,
        ref: 'Buyer Info Sheet'
    },
    spousePrimaryAddress: {
        type: String,
        default: null,
        ref: 'Buyer Info Sheet'
    },
    spouseAbroadAddress: {
        type: String,
        default: null,
        ref: 'Buyer Info Sheet'
    },
    spouseOwnershipCurrentResidence: {
        type: String,
        default: null,
        ref: 'Buyer Info Sheet'
    },
    spouseOwnershipCurrentResidenceYears: {
        type: String,
        default: null,
        ref: 'Buyer Info Sheet'
    },
    spouseEmploymentType: {
        type: String,
        default: null,
        ref: 'Buyer Info Sheet'
    },
    spouseEmployerBusinessName: {
        type: String,
        default: null,
        ref: 'Buyer Info Sheet'
    },
    spouseOfficeAddress: {
        type: String,
        default: null,
        ref: 'Buyer Info Sheet'
    },
    spouseEmploymentIndustry: {
        type: String,
        default: null,
        ref: 'Buyer Info Sheet'
    },
    spouseEmploymentPosition: {
        type: String,
        default: null,
        ref: 'Buyer Info Sheet'
    },
    spouseEmploymentYearsService: {
        type: String,
        default: null,
        ref: 'Buyer Info Sheet'
    },
    spouseEmploymentOfficeMobileNo: {
        type: String,
        default: null,
        ref: 'Buyer Info Sheet'
    },
    spouseEmploymentOfficeEmail: {
        type: String,
        default: null,
        ref: 'Buyer Info Sheet'
    },
    spouseEmploymentGrossMonthly: {
        type: String,
        default: null,
        ref: 'Buyer Info Sheet'
    },
    spaFirstname: {
        type: String,
        default: null,
        ref: 'Buyer Info Sheet'
    },
    spaMiddlename: {
        type: String,
        default: null,
        ref: 'Buyer Info Sheet'
    },
    spaLastname: {
        type: String,
        default: null,
        ref: 'Buyer Info Sheet'
    },
    spaMobileNo: {
        type: String,
        default: null,
        ref: 'Buyer Info Sheet'
    },
    spaMessengerAcc: {
        type: String,
        default: null,
        ref: 'Buyer Info Sheet'
    },
    spaEmailAddress: {
        type: String,
        default: null,
        ref: 'Buyer Info Sheet'
    },
    spaPostalAddress: {
        type: String,
        default: null,
        ref: 'Buyer Info Sheet'
    },
    spaCivilStatus: {
        type: String,
        default: null,
        ref: 'Buyer Info Sheet'
    },
    spaSex: {
        type: String,
        default: null,
        ref: 'Buyer Info Sheet'
    },
    spaCitizenship: {
        type: String,
        default: null,
        ref: 'Buyer Info Sheet'
    },
    spaTIN: {
        type: String,
        default: null,
        ref: 'Buyer Info Sheet'
    },
    spaRelationToBuyer: {
        type: String,
        default: null,
        ref: 'Buyer Info Sheet'
    },
    spaDateBirth: {
        type: String,
        default: null,
        ref: 'Buyer Info Sheet'
    },
    
});

const userSchema = new Schema({
    userId: {
        type: String,
        unique: true,
        required: true,
        default: generateUserId,
    },

    profilePicture:{
        url: {
            type: String,
            default: 'https://aws-bucket-nodejs.s3.amazonaws.com/uploads/profile/default+pic.png'
        }
    },
    fullname: {
        type: String,
        required: true
    },
    contactNumber: {
        type: String,
        required: true
    },
    birthday:{
        type: String,
        default: null,
    },
    homeAddress: {
        type: String,
        required: true
    },
    fbAccount: {
        type: String
    },
    username: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
    roles: {
        type: String,
        enum: ['customer', 'staff', 'management', 'realtor'],
        default: 'customer' 
    },

    date: {
        type: Date,
        default: Date.now()
    },
    legitimate: {
        type: Boolean,
        default: false,
    },
    profileDetails: {
        type: profileDetailsSchema,
        default: {}
    },
     
      
    accountDetails: {
        type: accountDetailsSchema,
        default: {}
    },
      
    paymentDetails:{
        type: paymentDetailsSchema,
        default: {}
    },
    
    
    accountingDetails: {
        type: accountingDetailsSchema,
        default: {}
    },
    
       
    transactions: [transactionSchema],
     
   
    letterOfIntent: {
        type: letterOfIntentSchema,
        default: {}
    },
       
    individualDeclaration: {
        type: individualBuyerDeclarationSchema,
        default: {}
    },
    
    birTinRequest: {
        type: birTinRequestSchema,
        default: {}
    },
    buyerInfoSheet: {
        type: buyerInfoSheetSchema,
        default: {}
    },
    
    scannedFiles:[scannedFilesSchema],
    reservationAgreement: {
        type: reservationSchema,
        default: {}
    },
    approvePaymentScheme: {
        type: approvePaymentSchema,
        default: {}
    },
    contractToSell: {
        type: contractToSellSchema,
        default: {}
    }
 
});



userSchema.set("toJSON", {
    transform: (document, returnedObject) => {
        returnedObject.id = returnedObject._id.toString();
        delete returnedObject._id;
        delete returnedObject.__v;
        delete returnedObject.password;
    },
});



userSchema.plugin(uniqueValidator, {message: "Email already in use."});

const User = mongoose.model("user", userSchema);

module.exports = User;


