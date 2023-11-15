const mongoose = require('mongoose')
const { Schema } = mongoose;


const buyerInfoSheetSchema = new Schema({

    isSubmitted: {
        type: Boolean,
        default: false
    },
    url: String,
    
    projectName: {
        type: String,
        default: null,
    },
    lotUnit: {
        type: String,
        default: null,
    },
    purposePurchase: {
        type: String,
        default: null,
    },
    buyerDesirePurchase: {
        type: String,
        default: null,
    },
    buyerFirstname: {
        type: String,
        default: null,
    },
    buyerMiddlename: {
        type: String,
        default: null,
    },
    buyerLastname: {
        type: String,
        default: null,
    },
    buyerBirthdate: {
        type: String,
        default: null,
    },
    buyerReligion: {
        type: String,
        default: null,
    },
    buyerCivilStatus: {
        type: String,
        default: null,
    },
    buyerSex: {
        type: String,
        default: null,
    },
    buyerCitizenship: {
        type: String,
        default: null,
    },
    buyerTIN: {
        type: String,
        default: null,
    },
    buyerPassportNo: {
        type: String,
        default: null,
    },
    buyerPassportDateIssued: {
        type: String,
        default: null,
    },
    buyerPassportDateExpiration: {
        type: String,
        default: null,
    },
    buyerMobileNo: {
        type: String,
        default: null,
    },
    buyerMessengerAccount: {
        type: String,
        default: null,
    },
    buyerEmailAddress: {
        type: String,
        default: null,
    },
    buyerViberNo: {
        type: String,
        default: null,
    },
    buyerGovtIssuedID: {
        type: String,
        default: null,
    },
    buyerGovtIssuedIDNo: {
        type: String,
        default: null,
    },
    buyerPrimaryAddress: {
        type: String,
        default: null,
    },
    buyerAbroadAddress: {
        type: String,
        default: null,
    },
    buyerOwnershipCurrentResidence: {
        type: String,
        default: null,
    },
    buyerOwnershipCurrentResidenceYears: {
        type: String,
        default: null,
    },
    buyerEmploymentType: {
        type: String,
        default: null,
    },
    buyerEmployerBusinessName: {
        type: String,
        default: null,
    },
    buyerOfficeAddress: {
        type: String,
        default: null,
    },
    buyerEmploymentIndustry: {
        type: String,
        default: null,
    },
    buyerEmploymentPosition: {
        type: String,
        default: null,
    },
    buyerEmploymentYearsService: {
        type: String,
        default: null,
    },
    buyerEmploymentOfficeMobileNo: {
        type: String,
        default: null,
    },
    buyerEmploymentOfficeEmail: {
        type: String,
        default: null,
    },
    buyerEmploymentGrossMonthly: {
        type: String,
        default: null,
    },
    spouseFirstname: {
        type: String,
        default: null,
    },
    spouseMiddlename: {
        type: String,
        default: null,
    },
    spouseLastname: {
        type: String,
        default: null,
    },
    spouseBirthdate: {
        type: String,
        default: null,
    },
    spouseReligion: {
        type: String,
        default: null,
    },
    spouseCivilStatus: {
        type: String,
        default: null,
    },
    spouseSex: {
        type: String,
        default: null,
    },
    spouseCitizenship: {
        type: String,
        default: null,
    },
    spouseTIN: {
        type: String,
        default: null,
    },
    spousePassportNo: {
        type: String,
        default: null,
    },
    spousePassportDateIssued: {
        type: String,
        default: null,
    },
    spousePassportDateExpiration: {
        type: String,
        default: null,
    },
    spouseMobileNo: {
        type: String,
        default: null,
    },
    spouseMessengerAccount: {
        type: String,
        default: null,
    },
    spouseEmailAddress: {
        type: String,
        default: null,
    },
    spouseViberNo: {
        type: String,
        default: null,
    },
    spouseGovtIssuedID: {
        type: String,
        default: null,
    },
    spouseGovtIssuedIDNo: {
        type: String,
        default: null,
    },
    spousePrimaryAddress: {
        type: String,
        default: null,
    },
    spouseAbroadAddress: {
        type: String,
        default: null,
    },
    spouseOwnershipCurrentResidence: {
        type: String,
        default: null,
    },
    spouseOwnershipCurrentResidenceYears: {
        type: String,
        default: null,
    },
    spouseEmploymentType: {
        type: String,
        default: null,
    },
    spouseEmployerBusinessName: {
        type: String,
        default: null,
    },
    spouseOfficeAddress: {
        type: String,
        default: null,
    },
    spouseEmploymentIndustry: {
        type: String,
        default: null,
    },
    spouseEmploymentPosition: {
        type: String,
        default: null,
    },
    spouseEmploymentYearsService: {
        type: String,
        default: null,
    },
    spouseEmploymentOfficeMobileNo: {
        type: String,
        default: null,
    },
    spouseEmploymentOfficeEmail: {
        type: String,
        default: null,
    },
    spouseEmploymentGrossMonthly: {
        type: String,
        default: null,
    },
    spaFirstname: {
        type: String,
        default: null,
    },
    spaMiddlename: {
        type: String,
        default: null,
    },
    spaLastname: {
        type: String,
        default: null,
    },
    spaMobileNo: {
        type: String,
        default: null,
    },
    spaMessengerAcc: {
        type: String,
        default: null,
    },
    spaEmailAddress: {
        type: String,
        default: null,
    },
    spaPostalAddress: {
        type: String,
        default: null,
    },
    spaCivilStatus: {
        type: String,
        default: null,
    },
    spaSex: {
        type: String,
        default: null,
    },
    spaCitizenship: {
        type: String,
        default: null,
    },
    spaTIN: {
        type: String,
        default: null,
    },
    spaRelationToBuyer: {
        type: String,
        default: null,
    },
    spaDateBirth: {
        type: String,
        default: null,
    },
    createdBy: String


});









buyerInfoSheetSchema.set("toJSON", {
    transform: (document, returnedObject) => {
        returnedObject.id = returnedObject._id.toString();
        delete returnedObject._id;
        delete returnedObject.__v;
       
    },
});


buyerInfoSheetSchema.set('timestamps', true);


module.exports = mongoose.model('Buyer Info Sheet', buyerInfoSheetSchema);
