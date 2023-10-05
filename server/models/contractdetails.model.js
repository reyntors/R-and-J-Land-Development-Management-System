const mongoose = require('mongoose')
const { Schema } = mongoose;



const contractDetailsSchema = new Schema({ 
    isSubmitted: {
        type: Boolean,
        default: false
    },
    property: {
        type: String,
        required: true,  
    },
    typeBuyer: {
        type: String,
        required: true,
    },
    buyerLastname: {
        type: String,
        required: true,
    },
    buyerFirstname: {
        type: String,
        required: true,
    },
    buyerMiddlename: {
        type: String,
        required: true,
    },
    buyerOccupation: {
        type: String,
        required: true,
    },
    buyerPrimaryAddress: {
        type: String,
        required: true,
    },
    buyerPrimaryZip: {
        type: String,
        required: true,
    },
    buyerCivilStatus: {
        type: String,
        required: true,
    },
    buyerAge: {
        type: String,
        required: true,
    },
    buyerSecondaryAddress: {
        type: String,
        required: true,
    },
    buyerSecondaryZip: {
        type: String, 
        required: true,
    },
    buyerSex: {
        type: String, 
        required: true,
    },
    buyerBirthday: {
        type: String,
        required: true,
    },
    buyerPlaceBirth: {
        type: String, 
        required: true,
    },
    buyerHomePhoneNo: {
        type: String, 
        required: true,
    },
    buyerFaxNo: {
        type: String,
        required: true,
    },
    buyerIncludeCountry: {
        type: String,
        required: true,
    },
    buyerMobileNo: {
        type: String,
        required: true,
    },
    buyerEmail: {
        type: String,
        required: true,
    },
    buyerTIN: {
        type: String,
        required: true,
    },
    buyerCitizen: {
        type: String,
        required: true,
    },
    buyerReligion: {
        type: String,
        required: true,
    },
    buyerIssuedID: {
        type: String,
        required: true,
    },
    businessName: {
        type: String,
        required: true,
    },
    businessAddress: {
        type: String,
        required: true,
    },
    businessPhoneNo: {
        type: String,
        required: true,
    },
    businessfaxNo: {
        type: String,
        required: true,
    },
    businessPosition: {
        type: String,
        required: true,
    },
    businessProfession: {
        type: String,
        required: true,
    },
    businessEmploymentStatus: {
        type: String,
        required: true,
    },
    spouseLastname: {
        type: String,
        required: true,
    },
    spouseFirstname: {
        type: String,
        required: true,
    },
    spouseMiddleName: {
        type: String,
        required: true,
    },
    spouseOccupation: {
        type: String,
        required: true,
    },
    spousePhoneNo: {
        type: String,
        required: true,
    },
    spouseMobileNo: {
        type: String,
        required: true,
    },
    spouseEmail: {   
        type: String,
        required: true,
    },
    spouseTIN: {
        type: String,
        required: true,
    },
    spouseCitizenship: {
        type: String,
        required: true,
    },
    spouseFaxNo: {
        type: String,
        required: true,
    },
    spouseSex: {
        type: String,
        required: true,
    },
    spouseEmployment: {
        type: String,
        required: true,
    },
    spouseNoChildren: {
        type: String,
        required: true,
    },
    attyLastname: {
        type: String,
        required: false,
    },
    attyFirstname: {
        type: String,
        required: false,
    },
    attyMiddlename: {
        type: String,
        required: false,
    },
    attyOccupation: {
        type: String,
        required: false,
    },
    attyPrimaryAddress: {
        type: String,
        required: false,
    },
    attyPrimaryZip: {
        type: String,
        required: false,
    },
    attyCivilStatus: {
        type: String,
        required: false,
    },
    attyAge: {
        type: String,
        required: false,
    },
    attySecondaryAddress: {
        type: String,
        required: false,
    },
    attySecondaryZip: {
        type: String,
        required: false,
    },
    attyBirthdate: {
        type: String,
        required: false,
    },
    attySex: {
        type: String,
        required: false,
    },
    attyHomeNo: {
        type: String,
        required: false,
    },
    attyFaxNo: {
        type: String,
        required: false,
    },
    attyIncludeCountry: {
        type: String,
        required: false,
    },
    attyMobileNo: {
        type: String,
        required: false,
    },
    attyTIN: {
        type: String,
        required: false,
    },
    attyEmail: {
        type: String,
        required: false,
    },
    attyCitizenship: {
        type: String,
        required: false,
    },
    attyGovtIssuedID: {
        type: String,
        required: false,
    },
    corpName: {
        type: String,
        required: false,
    },
    corpBusinessName: {
        type: String,
        required: false,
    },
    corpBusinessAddress: {
        type: String,
        required: false,
    },
    corpZipCode: {
        type: String,
        required: false,
    },
    corpBusinessPhoneNo: {
        type: String,
        required: false,
    },
    corpFaxNo: {
        type: String,
        required: false,
    },
    corpAuthorizedLastname: {
        type: String,
        required: false,
    },
    corpAuthorizedFirstname: {
        type: String,
        required: false,
    },
    corpAuthorizedMiddlename: {
        type: String,
        required: false,
    },
    corpAuthorizedPosition: {
        type: String,
        required: false,
    },
    corpAuthorizedSecondaryAddress: {
        type: String,
        required: false,
    },
    corpAuthorizedZip: {
        type: String,
        required: false,
    },
    corpAuthorizedBirthdate: {
        type: String,
        required: false,
    },
    corpAuthorizedBirthPlace: {
        type: String,
        required: false,
    },
    corpAuthorizedSex: {
        type: String,
        required: false,
    },
    corpAuthorizedHomePhoneNo: {
        type: String,
        required: false,
    },
    corpAuthorizedFaxNo: {
        type: String,
        required: false,
    },
    corpAuthorizedIncludeCtry: {
        type: String,
        required: false,
    },
    corpAuthorizedMobileNo: {
        type: String,
        required: false,
    },
    corpAuthorizedTIN: {
        type: String,
        required: false,
    },
    corpAuthorizedEmail: {
        type: String,
        required: false,
    },
    corpAuthorizedCitizenship: {
        type: String,
        required: false,
    },
    corpAuthorizedCivilStatus: {
        type: String,
        required: false,
    },
    corpAuthorizedGovtIssuedID: {
        type: String,
        required: false,
    },
    otherBanks: {
        type: String,
        required: false,
    },
    otherTypeAccount: {
        type: String,
        required: false,
    },
    otherReasonPurchase: [String],
    otherConsideredFactor: [String],
    otherWhereHeard: [String],
    otherPurchasedBefore: [String],
    createdBy: {
        type: String, 
        ref: 'user', 
        required: true,
    },
    
});

contractDetailsSchema.set("toJSON", {
    transform: (document, returnedObject) => {
        returnedObject.id = returnedObject._id.toString();
        delete returnedObject._id;
        delete returnedObject.__v;
       
    },
});


contractDetailsSchema.set('timestamps', true);

module.exports = mongoose.model('Contract Details', contractDetailsSchema);
