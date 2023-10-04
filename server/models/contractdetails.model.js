const mongoose = require('mongoose')
const { Schema } = mongoose;



const contractDetailsSchema = new Schema({ 
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
        required: true,
    },
    attyFirstname: {
        type: String,
        required: true,
    },
    attyMiddlename: {
        type: String,
        required: true,
    },
    attyOccupation: {
        type: String,
        required: true,
    },
    attyPrimaryAddress: {
        type: String,
        required: true,
    },
    attyPrimaryZip: {
        type: String,
        required: true,
    },
    attyCivilStatus: {
        type: String,
        required: true,
    },
    attyAge: {
        type: String,
        required: true,
    },
    attySecondaryAddress: {
        type: String,
        required: true,
    },
    attySecondaryZip: {
        type: String,
        required: true,
    },
    attyBirthdate: {
        type: String,
        required: true,
    },
    attySex: {
        type: String,
        required: true,
    },
    attyHomeNo: {
        type: String,
        required: true,
    },
    attyFaxNo: {
        type: String,
        required: true,
    },
    attyIncludeCountry: {
        type: String,
        required: true,
    },
    attyMobileNo: {
        type: String,
        required: true,
    },
    attyTIN: {
        type: String,
        required: true,
    },
    attyEmail: {
        type: String,
        required: true,
    },
    attyCitizenship: {
        type: String,
        required: true,
    },
    attyGovtIssuedID: {
        type: String,
        required: true,
    },
    corpName: {
        type: String,
        required: true,
    },
    corpBusinessName: {
        type: String,
        required: true,
    },
    corpBusinessAddress: {
        type: String,
        required: true,
    },
    corpZipCode: {
        type: String,
        required: true,
    },
    corpBusinessPhoneNo: {
        type: String,
        required: true,
    },
    corpFaxNo: {
        type: String,
        required: true,
    },
    corpAuthorizedLastname: {
        type: String,
        required: true,
    },
    corpAuthorizedFirstname: {
        type: String,
        required: true,
    },
    corpAuthorizedMiddlename: {
        type: String,
        required: true,
    },
    corpAuthorizedPosition: {
        type: String,
        required: true,
    },
    corpAuthorizedSecondaryAddress: {
        type: String,
        required: true,
    },
    corpAuthorizedZip: {
        type: String,
        required: true,
    },
    corpAuthorizedBirthdate: {
        type: String,
        required: true,
    },
    corpAuthorizedBirthPlace: {
        type: String,
        required: true,
    },
    corpAuthorizedSex: {
        type: String,
        required: true,
    },
    corpAuthorizedHomePhoneNo: {
        type: String,
        required: true,
    },
    corpAuthorizedFaxNo: {
        type: String,
        required: true,
    },
    corpAuthorizedIncludeCtry: {
        type: String,
        required: true,
    },
    corpAuthorizedMobileNo: {
        type: String,
        required: true,
    },
    corpAuthorizedTIN: {
        type: String,
        required: true,
    },
    corpAuthorizedEmail: {
        type: String,
        required: true,
    },
    corpAuthorizedCitizenship: {
        type: String,
        required: true,
    },
    corpAuthorizedCivilStatus: {
        type: String,
        required: true,
    },
    corpAuthorizedGovtIssuedID: {
        type: String,
        required: true,
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
