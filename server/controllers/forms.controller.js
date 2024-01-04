const User = require('../models/user.model');
const { uploadForms } = require('../middlewares/multer');
const Forms = require('../models/forms.model')
const fs = require('fs');
const path = require('path');



exports.getAllFormsById = async (req, res) => {
    try {
        const { id } = req.params;

        const user = await User.findOne({ userId: id });

        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }

        // Create an object to store forms with isSubmitted as true
        const submittedForms = {};

        // Check each form and add it to the submittedForms object if isSubmitted is true
        if (user.letterOfIntent.isSubmitted) {
            submittedForms.letterOfIntent = user.letterOfIntent;
        }
        if (user.individualDeclaration.isSubmitted) {
            submittedForms.individualDeclaration = user.individualDeclaration;
        }
        if (user.BirTinRequest.isSubmitted) {
            submittedForms.BirTinRequest = user.BirTinRequest;
        }
        if (user.buyerInfoSheet.isSubmitted) {
            submittedForms.buyerInfoSheet = user.buyerInfoSheet;
        }

        return res.status(200).json({
            message: `All forms requested by ${user.username}`,
            data: submittedForms,
        });
    } catch (error) {
        return res.status(500).json({ error: 'Internal server error' });
    }
}


exports.updateFormById = async (req, res) => {

    try {

        
        const { id, formName } = req.params;


        const user = await User.findOne({userId: id})

        if (!user) {
            return res.status(404).json({ error: 'User not found' });
        }

      

         // Check if the formName is 'letterOfIntent'
         if (formName === 'letterOfIntent') {
   
            user.letterOfIntent.url = null
            user.letterOfIntent.isSubmitted = false
            user.letterOfIntent.date = null
            user.letterOfIntent.lotNumber = []
            user.letterOfIntent.project = null
            user.letterOfIntent.fullname = null
            user.letterOfIntent.citizenship = null
            user.letterOfIntent.contactNo = null
            user.letterOfIntent.emailAddress = null
            user.letterOfIntent.messengerAccount = null
            user.letterOfIntent.viberNo = null
            

            return res.status(200).json({
                message: 'Letter of Intent updated successfully',
                data: user.letterOfIntent
               });
            }       
         
        
       else if (formName === 'individualDeclaration') {
        
            user.individualDeclaration.isSubmitted = false;
            user.individualDeclaration.url  = null
            user.individualDeclaration.date = null
            user.individualDeclaration.name = null,
            user.individualDeclaration.BIRtaxID = null
            user.individualDeclaration.businessName = null
            user.individualDeclaration.engagedInBusiness = null
            user.individualDeclaration.businessRegisteredUnder = null
            user.individualDeclaration.businessUsingMyTIN = null

            return res.status(200).json({
                message: 'individualDeclaration updated successfully',
                data: user.individualDeclaration
               });
           
        }
        else if (formName === 'BirTinRequest') {

            user.BirTinRequest.url = null;
            user.BirTinRequest.isSubmitted = false;
            user.BirTinRequest.date = null;
            user.BirTinRequest.firstname = null;
            user.BirTinRequest.middlename = null;
            user.BirTinRequest.lastname = null;
            user.BirTinRequest.address = null;
            user.BirTinRequest.birthday = null;
            user.BirTinRequest.tinNumber = null;
            user.BirTinRequest.respectfulYours = null;

            return res.status(200).json({
                message: 'BirTinRequest updated successfully',
                data: user.BirTinRequest
               });

          
        }
        else if (formName === 'buyerInfoSheet') {

            user.buyerInfoSheet.isSubmitted = false;
            user.buyerInfoSheet.url = null;
            user.buyerInfoSheet.projectName = null;
            user.buyerInfoSheet.lotUnit = null;
            user.buyerInfoSheet.purposePurchase = null;
            user.buyerInfoSheet.buyerDesirePurchase = null;
            user.buyerInfoSheet.buyerFirstname = null;
            user.buyerInfoSheet.buyerMiddlename = null;
            user.buyerInfoSheet.buyerLastname = null;
            user.buyerInfoSheet.buyerBirthdate = null;
            user.buyerInfoSheet.buyerReligion = null;
            user.buyerInfoSheet.buyerCivilStatus = null;
            user.buyerInfoSheet.buyerSex = null;
            user.buyerInfoSheet.buyerCitizenship = null;
            user.buyerInfoSheet.buyerTIN = null;
            user.buyerInfoSheet.buyerPassportNo = null;
            user.buyerInfoSheet.buyerPassportDateIssued = null;
            user.buyerInfoSheet.buyerPassportDateExpiration = null;
            user.buyerInfoSheet.buyerMobileNo = null;
            user.buyerInfoSheet.buyerMessengerAccount = null;
            user.buyerInfoSheet.buyerEmailAddress = null;
            user.buyerInfoSheet.buyerViberNo = null;
            user.buyerInfoSheet.buyerGovtIssuedID = null;
            user.buyerInfoSheet.buyerGovtIssuedIDNo = null;
            user.buyerInfoSheet.buyerPrimaryAddress = null;
            user.buyerInfoSheet.buyerAbroadAddress = null;
            user.buyerInfoSheet.buyerOwnershipCurrentResidence = null;
            user.buyerInfoSheet.buyerOwnershipCurrentResidenceYears = null;
            user.buyerInfoSheet.buyerEmploymentType = null;
            user.buyerInfoSheet.buyerEmployerBusinessName = null;
            user.buyerInfoSheet.buyerOfficeAddress = null;
            user.buyerInfoSheet.buyerEmploymentIndustry = null;
            user.buyerInfoSheet.buyerEmploymentPosition = null;
            user.buyerInfoSheet.buyerEmploymentYearsService = null;
            user.buyerInfoSheet.buyerEmploymentOfficeMobileNo = null;
            user.buyerInfoSheet.buyerEmploymentOfficeEmail = null;
            user.buyerInfoSheet.buyerEmploymentGrossMonthly = null;
            user.buyerInfoSheet.spouseFirstname = null;
            user.buyerInfoSheet.spouseMiddlename = null;
            user.buyerInfoSheet.spouseLastname = null;
            user.buyerInfoSheet.spouseBirthdate = null;
            user.buyerInfoSheet.spouseReligion = null;
            user.buyerInfoSheet.spouseCivilStatus = null;
            user.buyerInfoSheet.spouseSex = null;
            user.buyerInfoSheet.spouseCitizenship = null;
            user.buyerInfoSheet.spouseTIN = null;
            user.buyerInfoSheet.spousePassportNo = null;
            user.buyerInfoSheet.spousePassportDateIssued = null;
            user.buyerInfoSheet.spousePassportDateExpiration = null;
            user.buyerInfoSheet.spouseMobileNo = null;
            user.buyerInfoSheet.spouseMessengerAccount = null;
            user.buyerInfoSheet.spouseEmailAddress = null;
            user.buyerInfoSheet.spouseViberNo = null;
            user.buyerInfoSheet.spouseGovtIssuedID = null;
            user.buyerInfoSheet.spouseGovtIssuedIDNo = null;
            user.buyerInfoSheet.spousePrimaryAddress = null;
            user.buyerInfoSheet.spouseAbroadAddress = null;
            user.buyerInfoSheet.spouseOwnershipCurrentResidence = null;
            user.buyerInfoSheet.spouseOwnershipCurrentResidenceYears = null;
            user.buyerInfoSheet.spouseEmploymentType = null;
            user.buyerInfoSheet.spouseEmployerBusinessName = null;
            user.buyerInfoSheet.spouseOfficeAddress = null;
            user.buyerInfoSheet.spouseEmploymentIndustry = null;
            user.buyerInfoSheet.spouseEmploymentPosition = null;
            user.buyerInfoSheet.spouseEmploymentYearsService = null;
            user.buyerInfoSheet.spouseEmploymentOfficeMobileNo = null;
            user.buyerInfoSheet.spouseEmploymentOfficeEmail = null;
            user.buyerInfoSheet.spouseEmploymentGrossMonthly = null;
            user.buyerInfoSheet.spaFirstname = null;
            user.buyerInfoSheet.spaMiddlename = null;
            user.buyerInfoSheet.spaLastname = null;
            user.buyerInfoSheet.spaMobileNo = null;
            user.buyerInfoSheet.spaMessengerAcc = null;
            user.buyerInfoSheet.spaEmailAddress = null;
            user.buyerInfoSheet.spaPostalAddress = null;
            user.buyerInfoSheet.spaCivilStatus = null;
            user.buyerInfoSheet.spaSex = null;
            user.buyerInfoSheet.spaCitizenship = null;
            user.buyerInfoSheet.spaTIN = null;
            user.buyerInfoSheet.spaRelationToBuyer = null;
            user.buyerInfoSheet.spaDateBirth = null;

            return res.status(200).json({
                message: 'buyerInfoSheet updated successfully',
                data: user.buyerInfoSheet
               });
        }


        // Save the updated user document
        await user.save();

        
        
    } catch (error) {

        
        throw  error
        
    }


}



exports.getForms = async (req, res) => {
    try {
        uploadForms(req, res, async function (error) {
            if (error) {
                return res.status(500).json({message: 'File upload failed!', error: error})
            }

            const formFile = req.file;

            

            const myforms = await Forms.findOne()

            const fileData = {
                filename: formFile.originalname,
                contentType: formFile.mimetype,  
                url: formFile.location
              }; 

  

                myforms.forms.push(fileData);

                const savedForm = await myforms.save();

                return res.status(200).json({message: 'Form Added successfully!', data: savedForm});
         

             
        });

    }catch (error) {
        return res.status(500).json({ error: 'Internal server error' });
    }
};

exports.retrieveForms = async (req, res) => {

    try {
  
        const { filename } = req.params;

        console.log(filename);
  
      
        const myforms = await Forms.findOne();

        console.log(myforms);

        if (!myforms) {

            return res.status(404).json({message: 'file not found'});
        }
  
         // Specify the path to the uploaded file
         const filePath = path.join(__dirname, '..', 'public', 'uploads','forms', filename );
      
         // Check if the file exist
          if (fs.existsSync(filePath)) {
          // Serve the file using Express's res.sendFile()
          res.sendFile(filePath);
          } else {
          res.status(404).json({ message: 'File not found' });
          }
  
        
    } catch (error) {
  
        return res.status(500).json({ error: 'Internal server error' });
        
    }
  
  }


  exports.getAllRawForms = async (req, res) => {

    try {
  
        const { filename } = req.params;

        console.log(filename);
  
      
        const myforms = await Forms.findOne();

        console.log(myforms);

        if (!myforms) {

            return res.status(404).json({message: 'file not found'});
        }
  
        return res.status(200).json({message: 'List of all forms', data: myforms})
        
    } catch (error) {
  
        return res.status(500).json({ error: 'Internal server error' });
        
    }
  
  }