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
    date: Date,
    amount: Number,
    purpose: String,

});

const accountDetailsSchema = new Schema({
    lotNumber: {
        type: String,
        ref: 'Lot', 
    },
    totalSqm: {
        type: Number,
        required: true,
        ref: 'Lot', 
    },
    amountperSquare: {
        type: Number,
        required: true,
        ref: 'Lot', 
    },
    totalAmountDue: {
        type: Number,
        required: true,
        ref: 'Lot', 
    },
});


const paymentDetailsSchema = new Schema({
    reservationPayment: {
        type: Number,   
    },
    downPayment: {
        type: Number,   
    },
    monthlyAmortizationDue:{
        type: Number,
    }

});

const accountingDetailsSchema = new Schema({
   totalAmountDue: {
        type: Number,   
    },
    totalPayment: {
        type: Number,   
    },
   totalAmountPayable:{
        type: Number,
    }

});

const profileSchema = new Schema({
    fullname: {
        type: String,
        required: true,
        ref: 'user', 
    },
    contactNumber: {
        type: String,
        required: true,
        ref: 'user', 
    },
    email: {
        type: String,
        required: true,
        unique: true,
        ref: 'user', 
    },
    address: {
        type: String,
        required: true,
        ref: 'user', 
    },
});

const letterOfIntentSchema = new Schema({
    date: {
        type: Date,
        required: true,
        ref: 'Letter of Intent',
        
    },
    purchase: {
        type: String,
        required: true,
        ref: 'Letter of Intent',
    },
    project: {
        type: String,
        required: true,
        ref: 'Letter of Intent',
    },
    locationPH: {
        type: String,
        required: true,
        ref: 'Letter of Intent',
    },
    locationBlk: {
        type: String,
        required: true,
        ref: 'Letter of Intent',
    },
    locationLotOrUnit: {
        type: String,
        required: true,
        ref: 'Letter of Intent',
    },
    name: {
        type: String,
        required: true,
        ref: 'Letter of Intent',
    },
    address: {
        type: String,
        required: true,
        ref: 'Letter of Intent',
    },
    citizenship: {
        type: String,
        required: true,
        ref: 'Letter of Intent',
    },
    contactNo: {
        type: String,
        required: true,
        ref: 'Letter of Intent',
    },
    emailAddress: {
        type: String,
        required: true,
        ref: 'Letter of Intent',
    },
    reservationTimeSpan: {
        type: String, 
        required: true,
        ref: 'Letter of Intent',
    },
});

const individualBuyerDeclarationSchema = new Schema({
    date: {
        type: Date,
        required: true,
        ref: 'Individual Buyer Declaration'
        
    },
    name: {
        type: String,
        required: true,
        ref: 'Individual Buyer Declaration'
    },
    BIRtaxID: {
        type: String,
        required: true,
        ref: 'Individual Buyer Declaration'
    },
    businessName: {
        type: String,
        required: true,
        ref: 'Individual Buyer Declaration'
    },
    engagedInBusiness: {
        type: String,
        required: true,
        ref: 'Individual Buyer Declaration'
    },
    businessRegisteredUnder: {
        type: String,
        required: true,
        ref: 'Individual Buyer Declaration'
    },
    businessUsingMyTIN: {
        type: String,
        required: true,
        ref: 'Individual Buyer Declaration'
    },
    createdBy: {
        type: Schema.Types.ObjectId, 
        ref: 'User', 
        required: true,
    },
    
});

const birTinRequestSchema = new Schema({
    date: {
        type: Date,
        required: true,
        ref: 'BIR Tin Request'
        
    },
    authorizedTo: {
        type: String,
        required: true,
        ref: 'BIR Tin Request'
    },
    name: {
        type: String,
        required: true,
        ref: 'BIR Tin Request'
    },
    address: {
        type: String,
        required: true,
        ref: 'BIR Tin Request'
    },
    birthday: {
        type: String,
        required: true,
        ref: 'BIR Tin Request'
    },
    tinNumber: {
        type: String,
        required: true,
        ref: 'BIR Tin Request'
    },
    respectfulYours: {
        type: String,
        required: true,
        ref: 'BIR Tin Request'
    },
    spaName: {
        type: String,
        required: true,
        ref: 'BIR Tin Request'
    },
    spaAge: {
        type: String,
        required: true,
        ref: 'BIR Tin Request'
    },
    spaResident: {
        type: String,
        required: true,
        ref: 'BIR Tin Request'
    },
    spaAttyName: {
        type: String,
        required: true,
        ref: 'BIR Tin Request'
    },
    spaAttyAge: {
        type: String, 
        required: true,
        ref: 'BIR Tin Request'
    },
    spaAttyResident: {
        type: String, 
        required: true,
        ref: 'BIR Tin Request'
    },
    witnessDay: {
        type: String,
        required: true,
        ref: 'BIR Tin Request'
    },
    witnessMonth: {
        type: String, 
        required: true,
        ref: 'BIR Tin Request'
    },
    witnessYear: {
        type: String, 
        required: true,
        ref: 'BIR Tin Request'
    },
    witnessAddress: {
        type: String,
        required: true,
        ref: 'BIR Tin Request'
    },
    
});

const contractDetailsSchema = new Schema({ 
    property: {
        type: String,
        required: true,  
        ref: 'Contract Details'
    },
    typeBuyer: {
        type: String,
        required: true,
        ref: 'Contract Details'
    },
    buyerLastname: {
        type: String,
        required: true,
        ref: 'Contract Details'
    },
    buyerFirstname: {
        type: String,
        required: true,
        ref: 'Contract Details'
    },
    buyerMiddlename: {
        type: String,
        required: true,
        ref: 'Contract Details'
    },
    buyerOccupation: {
        type: String,
        required: true,
        ref: 'Contract Details'
    },
    buyerPrimaryAddress: {
        type: String,
        required: true,
        ref: 'Contract Details'
    },
    buyerPrimaryZip: {
        type: String,
        required: true,
        ref: 'Contract Details'
    },
    buyerCivilStatus: {
        type: String,
        required: true,
        ref: 'Contract Details'
    },
    buyerAge: {
        type: String,
        required: true,
        ref: 'Contract Details'
    },
    buyerSecondaryAddress: {
        type: String,
        required: true,
        ref: 'Contract Details'
    },
    buyerSecondaryZip: {
        type: String, 
        required: true,
        ref: 'Contract Details'
    },
    buyerSex: {
        type: String, 
        required: true,
        ref: 'Contract Details'
    },
    buyerBirthday: {
        type: String,
        required: true,
        ref: 'Contract Details'
    },
    buyerPlaceBirth: {
        type: String, 
        required: true,
        ref: 'Contract Details'
    },
    buyerHomePhoneNo: {
        type: String, 
        required: true,
        ref: 'Contract Details'
    },
    buyerFaxNo: {
        type: String,
        required: true,
        ref: 'Contract Details'
    },
    buyerIncludeCountry: {
        type: String,
        required: true,
        ref: 'Contract Details'
    },
    buyerMobileNo: {
        type: String,
        required: true,
        ref: 'Contract Details'
    },
    buyerEmail: {
        type: String,
        required: true,
        ref: 'Contract Details'
    },
    buyerTIN: {
        type: String,
        required: true,
        ref: 'Contract Details'
    },
    buyerCitizen: {
        type: String,
        required: true,
        ref: 'Contract Details'
    },
    buyerReligion: {
        type: String,
        required: true,
        ref: 'Contract Details'
    },
    buyerIssuedID: {
        type: String,
        required: true,
        ref: 'Contract Details'
    },
    businessName: {
        type: String,
        required: true,
        ref: 'Contract Details'
    },
    businessAddress: {
        type: String,
        required: true,
        ref: 'Contract Details'
    },
    businessPhoneNo: {
        type: String,
        required: true,
        ref: 'Contract Details'
    },
    businessfaxNo: {
        type: String,
        required: true,
        ref: 'Contract Details'
    },
    businessPosition: {
        type: String,
        required: true,
        ref: 'Contract Details'
    },
    businessProfession: {
        type: String,
        required: true,
        ref: 'Contract Details'
    },
    businessEmploymentStatus: {
        type: String,
        required: true,
        ref: 'Contract Details'
    },
    spouseLastname: {
        type: String,
        required: true,
        ref: 'Contract Details'
    },
    spouseFirstname: {
        type: String,
        required: true,
        ref: 'Contract Details'
    },
    spouseMiddleName: {
        type: String,
        required: true,
        ref: 'Contract Details'
    },
    spouseOccupation: {
        type: String,
        required: true,
        ref: 'Contract Details'
    },
    spousePhoneNo: {
        type: String,
        required: true,
        ref: 'Contract Details'
    },
    spouseMobileNo: {
        type: String,
        required: true,
        ref: 'Contract Details'
    },
    spouseEmail: {   
        type: String,
        required: true,
        ref: 'Contract Details'
    },
    spouseTIN: {
        type: String,
        required: true,
        ref: 'Contract Details'
    },
    spouseCitizenship: {
        type: String,
        required: true,
        ref: 'Contract Details'
    },
    spouseFaxNo: {
        type: String,
        required: true,
        ref: 'Contract Details'
    },
    spouseSex: {
        type: String,
        required: true,
        ref: 'Contract Details'
    },
    spouseEmployment: {
        type: String,
        required: true,
        ref: 'Contract Details'
    },
    spouseNoChildren: {
        type: String,
        required: true,
        ref: 'Contract Details'
    },
    attyLastname: {
        type: String,
        required: true,
        ref: 'Contract Details'
    },
    attyFirstname: {
        type: String,
        required: true,
        ref: 'Contract Details'         
    },
    attyMiddlename: {
        type: String,
        required: true,
        ref: 'Contract Details'
    },
    attyOccupation: {
        type: String,
        required: true,
        ref: 'Contract Details'
    },
    attyPrimaryAddress: {
        type: String,
        required: true,
        ref: 'Contract Details'
    },
    attyPrimaryZip: {
        type: String,
        required: true,
        ref: 'Contract Details'
    },
    attyCivilStatus: {
        type: String,
        required: true,
        ref: 'Contract Details'
    },
    attyAge: {
        type: String,
        required: true,
        ref: 'Contract Details'
    },
    attySecondaryAddress: {
        type: String,
        required: true,
        ref: 'Contract Details'
    },
    attySecondaryZip: {
        type: String,
        required: true,
        ref: 'Contract Details'
    },
    attyBirthdate: {
        type: String,
        required: true,
        ref: 'Contract Details'
    },
    attySex: {
        type: String,
        required: true,
        ref: 'Contract Details'
    },
    attyHomeNo: {
        type: String,
        required: true,
        ref: 'Contract Details'
    },
    attyFaxNo: {
        type: String,
        required: true,
        ref: 'Contract Details'
    },
    attyIncludeCountry: {
        type: String,
        required: true,
        ref: 'Contract Details'
    },
    attyMobileNo: {
        type: String,
        required: true,
        ref: 'Contract Details'
    },
    attyTIN: {
        type: String,
        required: true,
        ref: 'Contract Details'
    },
    attyEmail: {
        type: String,
        required: true,
        ref: 'Contract Details'
    },
    attyCitizenship: {
        type: String,
        required: true,
        ref: 'Contract Details'
    },
    attyGovtIssuedID: {
        type: String,
        required: true,
        ref: 'Contract Details'
    },
    corpName: {
        type: String,
        required: true,
        ref: 'Contract Details'
    },
    corpBusinessName: {
        type: String,
        required: true,
        ref: 'Contract Details'
    },
    corpBusinessAddress: {
        type: String,
        required: true,
        ref: 'Contract Details'
    },
    corpZipCode: {
        type: String,
        required: true,
        ref: 'Contract Details'
    },
    corpBusinessPhoneNo: {
        type: String,
        required: true,
        ref: 'Contract Details'
    },
    corpFaxNo: {
        type: String,
        required: true,
        ref: 'Contract Details'
    },
    corpAuthorizedLastname: {
        type: String,
        required: true,
        ref: 'Contract Details'
    },
    corpAuthorizedFirstname: {
        type: String,
        required: true,
        ref: 'Contract Details'
    },
    corpAuthorizedMiddlename: {
        type: String,
        required: true,
        ref: 'Contract Details'
    },
    corpAuthorizedPosition: {
        type: String,
        required: true,
        ref: 'Contract Details'
    },
    corpAuthorizedSecondaryAddress: {
        type: String,
        required: true,
        ref: 'Contract Details'
    },
    corpAuthorizedZip: {
        type: String,
        required: true,
        ref: 'Contract Details'
    },
    corpAuthorizedBirthdate: {
        type: String,
        required: true,
        ref: 'Contract Details'
    },
    corpAuthorizedBirthPlace: {
        type: String,
        required: true,
        ref: 'Contract Details'
    },
    corpAuthorizedSex: {
        type: String,
        required: true,
        ref: 'Contract Details'
    },
    corpAuthorizedHomePhoneNo: {
        type: String,
        required: true,
        ref: 'Contract Details'
    },
    corpAuthorizedFaxNo: {
        type: String,
        required: true,
        ref: 'Contract Details'
    },
    corpAuthorizedIncludeCtry: {
        type: String,
        required: true,
        ref: 'Contract Details'
    },
    corpAuthorizedMobileNo: {
        type: String,
        required: true,
        ref: 'Contract Details'
    },
    corpAuthorizedTIN: {
        type: String,
        required: true,
        ref: 'Contract Details'
    },
    corpAuthorizedEmail: {
        type: String,
        required: true,
        ref: 'Contract Details'
    },
    corpAuthorizedCitizenship: {
        type: String,
        required: true,
        ref: 'Contract Details'
    },
    corpAuthorizedCivilStatus: {
        type: String,
        required: true,
        ref: 'Contract Details'
    },
    corpAuthorizedGovtIssuedID: {
        type: String,
        required: true,
        ref: 'Contract Details'
    },
    otherBanks: {
        type: String,
        required: false,
        ref: 'Contract Details'
    },
    otherTypeAccount: {
        type: String,
        required: false,
        ref: 'Contract Details'
    },
    otherReasonPurchase: {
        type: String,
        required: false,
        ref: 'Contract Details'
    },
    otherConsideredFactor: {
        type: String,
        required: false,
        ref: 'Contract Details'
    },
    otherWhereHeard: {
        type: String,
        required: false,
        ref: 'Contract Details'
    },
    otherPurchasedBefore: {
        type: String,
        required: false,
        ref: 'Contract Details'
    },
    
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
        enum: ['guest', 'staff', 'admin'],
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
    profile: profileSchema,
    accountDetails: accountDetailsSchema,
    paymentDetails: paymentDetailsSchema,
    accountingDetails: accountingDetailsSchema,
    transactions: [transactionSchema],
    letterOfIntent: letterOfIntentSchema,
    individualDeclaration: individualBuyerDeclarationSchema,
    BirTinRequest: birTinRequestSchema,
    ContractDetails: contractDetailsSchema,
    scannedFiles:[String],

    
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


