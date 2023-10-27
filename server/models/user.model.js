const mongoose = require('mongoose');
const { Schema } = mongoose;
const uniqueValidator = require("mongoose-unique-validator");

// Define a function to generate a user ID with the format: year + random number
function generateUserId() {
    const currentYear = new Date().getFullYear();
    const randomPart = Math.floor(Math.random() * 1000); // You can adjust the range as needed
    return `${currentYear}-${randomPart}`;
}


const transactionSchema = new Schema({
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
    lotNumber: {
        type: String,
        default: null,
        
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
    message:{
        type: String,
        default: 'I request to reserve this lot.'
    }
});


const paymentDetailsSchema = new Schema({
    reservationPayment: {
        type: Number, 
        default: null,  
    },
    downPayment: {
        type: Number,  
        default: null, 
    },
    monthlyAmortizationDue:{
        type: Number,
        default: null,
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
       
    }

});

const profileDetailsSchema = new Schema({
    permissionEdit: {
        type: Boolean,
        default: false
    },
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
    monthlyGrossIncome: {
        type: String,
        default: null,
       
    },
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
    purchase: {
        type: String,
        default: null,
        ref: 'Letter of Intent',
    },
    project: {
        type: String,
        default: null,
        ref: 'Letter of Intent',
    },
    locationPH: {
        type: String,
        default: null,
        ref: 'Letter of Intent',
    },
    locationBlk: {
        type: String,
        default: null,
        ref: 'Letter of Intent',
    },
    locationLotOrUnit: {
        type: String,
        default: null,
        ref: 'Letter of Intent',
    },
    name: {
        type: String,
        default: null,
        ref: 'Letter of Intent',
    },
    address: {
        type: String,
        default: null,
        ref: 'Letter of Intent',
    },
    citizenship: {
        type: String,
        default: null,
        ref: 'Letter of Intent',
    },
    contactNo: {
        type: String,
        default: null,
        ref: 'Letter of Intent',
    },
    emailAddress: {
        type: String,
        default: null,
        ref: 'Letter of Intent',
    },
    reservationTimeSpan: {
        type: String, 
        default: null,
        ref: 'Letter of Intent',
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

const contractDetailsSchema = new Schema({ 
    url: {
        type: String,
        default: null,
        ref: 'Contract Details'
    },
    isSubmitted: {
        type: Boolean,
        default: false,
        ref: 'Contract Details'
    },
    property: {
        type: String,
        default: null,
        ref: 'Contract Details'
    },
    typeBuyer: {
        type: String,
        default: null,
        ref: 'Contract Details'
    },
    buyerLastname: {
        type: String,
        default: null,
        ref: 'Contract Details'
    },
    buyerFirstname: {
        type: String,
        default: null,
        ref: 'Contract Details'
    },
    buyerMiddlename: {
        type: String,
        default: null,
        ref: 'Contract Details'
    },
    buyerOccupation: {
        type: String,
        default: null,
        ref: 'Contract Details'
    },
    buyerPrimaryAddress: {
        type: String,
        default: null,
        ref: 'Contract Details'
    },
    buyerPrimaryZip: {
        type: String,
        default: null,
        ref: 'Contract Details'
    },
    buyerCivilStatus: {
        type: String,
        default: null,
        ref: 'Contract Details'
    },
    buyerAge: {
        type: String,
        default: null,
        ref: 'Contract Details'
    },
    buyerSecondaryAddress: {
        type: String,
        default: null,
        ref: 'Contract Details'
    },
    buyerSecondaryZip: {
        type: String, 
        default: null,
        ref: 'Contract Details'
    },
    buyerSex: {
        type: String, 
        default: null,
        ref: 'Contract Details'
    },
    buyerBirthday: {
        type: String,
        default: null,
        ref: 'Contract Details'
    },
    buyerPlaceBirth: {
        type: String, 
        default: null,
        ref: 'Contract Details'
    },
    buyerHomePhoneNo: {
        type: String, 
        default: null,
        ref: 'Contract Details'
    },
    buyerFaxNo: {
        type: String,
        default: null,
        ref: 'Contract Details'
    },
    buyerIncludeCountry: {
        type: String,
      
        ref: 'Contract Details'
    },
    buyerMobileNo: {
        type: String,
        default: null,
        ref: 'Contract Details'
    },
    buyerEmail: {
        type: String,
        default: null,
        ref: 'Contract Details'
    },
    buyerTIN: {
        type: String,
        default: null,
        ref: 'Contract Details'
    },
    buyerCitizen: {
        type: String,
        default: null,
        ref: 'Contract Details'
    },
    buyerReligion: {
        type: String,
        default: null,
        ref: 'Contract Details'
    },
    buyerIssuedID: {
        type: String,
        default: null,
        ref: 'Contract Details'
    },
    businessName: {
        type: String,
        default: null,
        ref: 'Contract Details'
    },
    businessAddress: {
        type: String,
        default: null,
        ref: 'Contract Details'
    },
    businessPhoneNo: {
        type: String,
        default: null,
        ref: 'Contract Details'
    },
    businessfaxNo: {
        type: String,
        default: null,
        ref: 'Contract Details'
    },
    businessPosition: {
        type: String,
        default: null,
        ref: 'Contract Details'
    },
    businessProfession: {
        type: String,
        default: null,
        ref: 'Contract Details'
    },
    businessEmploymentStatus: {
        type: String,
        default: null,
        ref: 'Contract Details'
    },
    spouseLastname: {
        type: String,
        default: null,
        ref: 'Contract Details'
    },
    spouseFirstname: {
        type: String,
        default: null,
        ref: 'Contract Details'
    },
    spouseMiddleName: {
        type: String,
        default: null,
        ref: 'Contract Details'
    },
    spouseOccupation: {
        type: String,
        default: null,
        ref: 'Contract Details'
    },
    spousePhoneNo: {
        type: String,
        default: null,
        ref: 'Contract Details'
    },
    spouseMobileNo: {
        type: String,
        default: null,
        ref: 'Contract Details'
    },
    spouseEmail: {   
        type: String,
        default: null,
        ref: 'Contract Details'
    },
    spouseTIN: {
        type: String,
        default: null,
        ref: 'Contract Details'
    },
    spouseCitizenship: {
        type: String,
        default: null,
        ref: 'Contract Details'
    },
    spouseFaxNo: {
        type: String,
        default: null,
        ref: 'Contract Details'
    },
    spouseSex: {
        type: String,
        default: null,
        ref: 'Contract Details'
    },
    spouseEmployment: {
        type: String,
        default: null,
        ref: 'Contract Details'
    },
    spouseNoChildren: {
        type: String,
        default: null,
        ref: 'Contract Details'
    },
    attyLastname: {
        type: String,
        default: null,
        ref: 'Contract Details'
    },
    attyFirstname: {
        type: String,
        default: null,
        ref: 'Contract Details'         
    },
    attyMiddlename: {
        type: String,
        default: null,
        ref: 'Contract Details'
    },
    attyOccupation: {
        type: String,
        default: null,
        ref: 'Contract Details'
    },
    attyPrimaryAddress: {
        type: String,
        default: null,
        ref: 'Contract Details'
    },
    attyPrimaryZip: {
        type: String,
        default: null,
        ref: 'Contract Details'
    },
    attyCivilStatus: {
        type: String,
        default: null,
        ref: 'Contract Details'
    },
    attyAge: {
        type: String,
        default: null,
        ref: 'Contract Details'
    },
    attySecondaryAddress: {
        type: String,
        default: null,
        ref: 'Contract Details'
    },
    attySecondaryZip: {
        type: String,
        default: null,
        ref: 'Contract Details'
    },
    attyBirthdate: {
        type: String,
        default: null,
        ref: 'Contract Details'
    },
    attySex: {
        type: String,
        default: null,
        ref: 'Contract Details'
    },
    attyHomeNo: {
        type: String,
        default: null,
        ref: 'Contract Details'
    },
    attyFaxNo: {
        type: String,
        default: null,
        ref: 'Contract Details'
    },
    attyIncludeCountry: {
        type: String,
        default: null,
        ref: 'Contract Details'
    },
    attyMobileNo: {
        type: String,
        default: null,
        ref: 'Contract Details'
    },
    attyTIN: {
        type: String,
        default: null,
        ref: 'Contract Details'
    },
    attyEmail: {
        type: String,
        default: null,
        ref: 'Contract Details'
    },
    attyCitizenship: {
        type: String,
        default: null,
        ref: 'Contract Details'
    },
    attyGovtIssuedID: {
        type: String,
        default: null,
        ref: 'Contract Details'
    },
    corpName: {
        type: String,
        default: null,
        ref: 'Contract Details'
    },
    corpBusinessName: {
        type: String,
        default: null,
        ref: 'Contract Details'
    },
    corpBusinessAddress: {
        type: String,
        default: null,
        ref: 'Contract Details'
    },
    corpZipCode: {
        type: String,
        default: null,
        ref: 'Contract Details'
    },
    corpBusinessPhoneNo: {
        type: String,
        default: null,
        ref: 'Contract Details'
    },
    corpFaxNo: {
        type: String,
        default: null,
        ref: 'Contract Details'
    },
    corpAuthorizedLastname: {
        type: String,
        default: null,
        ref: 'Contract Details'
    },
    corpAuthorizedFirstname: {
        type: String,
        default: null,
        ref: 'Contract Details'
    },
    corpAuthorizedMiddlename: {
        type: String,
        default: null,
        ref: 'Contract Details'
    },
    corpAuthorizedPosition: {
        type: String,
        default: null,
        ref: 'Contract Details'
    },
    corpAuthorizedSecondaryAddress: {
        type: String,
        default: null,
        ref: 'Contract Details'
    },
    corpAuthorizedZip: {
        type: String,
        default: null,
        ref: 'Contract Details'
    },
    corpAuthorizedBirthdate: {
        type: String,
        default: null,
        ref: 'Contract Details'
    },
    corpAuthorizedBirthPlace: {
        type: String,
        default: null,
        ref: 'Contract Details'
    },
    corpAuthorizedSex: {
        type: String,
        default: null,
        ref: 'Contract Details'
    },
    corpAuthorizedHomePhoneNo: {
        type: String,
        default: null,
        ref: 'Contract Details'
    },
    corpAuthorizedFaxNo: {
        type: String,
        default: null,
        ref: 'Contract Details'
    },
    corpAuthorizedIncludeCtry: {
        type: String,
        default: null,
        ref: 'Contract Details'
    },
    corpAuthorizedMobileNo: {
        type: String,
        default: null,
        ref: 'Contract Details'
    },
    corpAuthorizedTIN: {
        type: String,
        default: null,
        ref: 'Contract Details'
    },
    corpAuthorizedEmail: {
        type: String,
        default: null,
        ref: 'Contract Details'
    },
    corpAuthorizedCitizenship: {
        type: String,
        default: null,
        ref: 'Contract Details'
    },
    corpAuthorizedCivilStatus: {
        type: String,
        default: null,
        ref: 'Contract Details'
    },
    corpAuthorizedGovtIssuedID: {
        type: String,
        default: null,
        ref: 'Contract Details'
    },
    otherBanks: {
        type: String,
        default: null,
        ref: 'Contract Details'
    },
    otherTypeAccount: {
        type: String,
        default: null,
        ref: 'Contract Details'
    },
    otherReasonPurchase: [{
        type: String,
        default: null,
        ref: 'Contract Details'
    },],
    otherConsideredFactor: [{
        type: String,
        default: null,
        ref: 'Contract Details'
    },],
    otherWhereHeard: [{
        type: String,
        default: null,
        ref: 'Contract Details'
    },],
    otherPurchasedBefore: [{
        type: String,
        default: null,
        ref: 'Contract Details'
    },]
    
});

const userSchema = new Schema({
    userId: {
        type: String,
        unique: true,
        required: true,
        default: generateUserId,
    },
    fullname: {
        type: String,
        required: true
    },
    contactNumber: {
        type: String,
        required: true
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
        enum: ['guest', 'staff', 'admin', 'realtor'],
        default: 'guest' 
    },

    date: {
        type: Date,
        default: Date.now()
    },
    legitimate: {
        type: Boolean,
        default: false,
    },
    additionalInfo: {
        civilStatus: {
            type: String,
            default: null
        },
        spouseName: {
            type: String,
            default: null
        },
        occupation: {
            type: String,
            default: null
        },
        monthlyGrossIncome:{
            type: Number,
            default: null
        },
        buyerSourceOfIncome: {
            type: String,
            default: null
        },
        typeOfEmployment: {
            type: String,
            default: null
        },
        employer: {
            type: String,
            default: null
        },
        employerAddress: {
            type: String,
            default: null
        },
        grossSalary: {
            type: Number,
            default: null
        },
        businessName: {
            type: String,
            default: null
        },
        businessAddress:{
            type: String,
            default: null
        },
        businessMonthlyIncome:{
            type: Number,
            default: null
        },
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
    
    BirTinRequest: {
        type: birTinRequestSchema,
        default: {}
    },
    ContractDetails: {
        type: contractDetailsSchema,
        default: {}
    },
    
    scannedFiles:[scannedFilesSchema]
 
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


