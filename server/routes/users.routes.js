const userController = require("../controllers/users.controller");
const lotController = require("../controllers/lot.controller");
const transactiontController = require("../controllers/transaction.controller");
const legitClientController = require("../controllers/legitimateClient.controller");
const paymentDetailsController = require('../controllers/paymentdetails.controller');
const formsController = require('../controllers/forms.controller');
const pdfController = require('../controllers/pdf.controller');
const letter = require('../controllers/letterofintent.controller');
const scanfilesController = require('../controllers/scanFiles.controller');
const uploadedController = require('../controllers/uploaded.controller');
const contactController = require('../controllers/contactUs.controller');
const callSlipController = require('../controllers/callSlip.controller');

const auth = require("../middlewares/auth");
const express = require("express");


const router = express.Router();


//users
router.post("/contact-us", contactController.createContact);
router.post("/register", userController.register);
router.post("/login", userController.login);
router.get("/user-profile", auth.authenticateToken, userController.userProfile);
router.post("/addletter", auth.authenticateToken, userController.restrict(['customer']), letter.createLetterOfIntent);
router.post("/request-lot", auth.authenticateToken, userController.restrict(['customer']), lotController.reserveLotbyId);
router.post("/add-call-slip", callSlipController.addCallSlip);
router.get("/get-all-accounts", auth.authenticateToken, userController.restrict(['customer','realtor']), paymentDetailsController.getAllPaymentDetailsById);
router.get("/get-account-settings", auth.authenticateToken, userController.restrict(['customer','realtor']), userController.getAccountSettings);
router.put("/update-user-account", auth.authenticateToken, userController.restrict(['customer','realtor']), userController.updateUserAccount);
router.post("/forgot-password", userController.forgotPassword);
router.put("/reset-password", userController.resetPassword);

//FOR STAFF ONLY
//staff
router.post("/addnewclient", auth.authenticateToken, userController.restrict(['staff','management']), userController.register);
router.get("/:id?", auth.authenticateToken, userController.restrict(['customer','staff','management']), userController.getUserDetails);
router.post("/update-user", auth.authenticateToken, userController.restrict(['customer','staff','management']), userController.updateUser);
router.put("/update-user/:id", auth.authenticateToken, userController.restrict(['staff','management']), userController.updateUserDetails);
router.put("/approve-pending-update/:userId/:requestId/:inquiryId", auth.authenticateToken, userController.restrict(['staff','management']), userController.approveUserUpdate);

//add transaction
router.post("/add-transaction/:id", auth.authenticateToken, userController.restrict(['staff','management']), transactiontController.addTransaction);
router.get("/alltransaction/:id", auth.authenticateToken, userController.restrict(['staff','management']), transactiontController.getTransaction);

//add legit clientslistPendingClients
router.get("/client/legit-clients", auth.authenticateToken, userController.restrict(['staff','management']), legitClientController.listLegitimateClients);
router.put("/update-legitimacy/:id", auth.authenticateToken, userController.restrict(['staff','management']), legitClientController.updateLegitimacy);
router.get("/client/pending-clients", auth.authenticateToken, userController.restrict(['realtor','staff','management']), legitClientController.listPendingClients);

//Payment Details
router.post('/addpayment/:id', auth.authenticateToken, userController.restrict(['staff','management']), paymentDetailsController.createUserWithPaymentDetails);
router.get('/paymentdetails/:id', auth.authenticateToken, userController.restrict(['staff','management']), paymentDetailsController.getPaymentDetailsById);

//forms
router.get('/forms/:id', auth.authenticateToken, userController.restrict(['customer','staff','management']), formsController.getAllFormsById);
router.get('/retrieve-raw-forms/:filename', auth.authenticateToken, userController.restrict(['staff','management']), formsController.retrieveForms);


//scanfiles
router.post("/add-scanfiles/:id", auth.authenticateToken, userController.restrict(['staff','management']), scanfilesController.addScanFiles);
router.get("/all-scanfiles/:id", auth.authenticateToken, userController.restrict(['staff','management']), scanfilesController.getAllScanFilesById);
router.get("/retrieve-scanfiles/:id/:filename", auth.authenticateToken, userController.restrict(['staff','management']), scanfilesController.retrieveScanFile);

//Valid Id Images
router.post("/add-valid-image/:id", auth.authenticateToken, userController.restrict(['customer','staff','management']), uploadedController.addValidImage);


//files
router.get("/retrieve-upload/:id/:filename", auth.authenticateToken, userController.restrict(['staff','management']), uploadedController.retrieveAttachmentFile )
router.get("/retrieveForm/:id/:filename", auth.authenticateToken, userController.restrict(['staff','management']), uploadedController.retrieveForm )



//FOR management ONLY
//management
router.put("/update-false-legitimacy/:id", auth.authenticateToken, userController.restrict(['management']), legitClientController.updateFalseLegitimacy);








module.exports = router;

