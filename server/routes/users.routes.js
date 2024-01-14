const userController = require("../controllers/users.controller");
const lotController = require("../controllers/lot.controller");
const transactionController = require("../controllers/transaction.controller");
const legitClientController = require("../controllers/legitimateClient.controller");
const paymentDetailsController = require('../controllers/paymentdetails.controller');
const formsController = require('../controllers/forms.controller');
const pdfController = require('../controllers/pdf.controller');
const letter = require('../controllers/letterofintent.controller');
const scanfilesController = require('../controllers/scanFiles.controller');
const uploadedController = require('../controllers/uploaded.controller');
const contactController = require('../controllers/contactUs.controller');
const callSlipController = require('../controllers/callSlip.controller');
const approvePaymentController = require('../controllers/approvePaymentScheme.controller')

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
router.get("/get-account-settings", auth.authenticateToken, userController.restrict(['customer','realtor','management','staff']), userController.getAccountSettings);
router.put("/update-user-account", auth.authenticateToken, userController.restrict(['customer','realtor']), userController.updateUserAccount);
router.post("/forgot-password", userController.forgotPassword);
router.put("/reset-password", userController.resetPassword);


//FOR STAFF ONLY
//staff
router.post("/addnewclient", auth.authenticateToken, userController.restrict(['staff','management']), userController.register);
router.get("/:id?", auth.authenticateToken, userController.restrict(['realtor','customer','staff','management']), userController.getUserDetails);
router.post("/update-user", auth.authenticateToken, userController.restrict(['realtor','customer','staff','management']), userController.updateUser);
router.put("/update-user/:id", auth.authenticateToken, userController.restrict(['staff','management']), userController.updateUserDetails);
router.put("/approve-pending-update/:userId/:requestId/:inquiryId", auth.authenticateToken, userController.restrict(['staff','management']), userController.approveUserUpdate);
router.put("/update-user-account-personnel", auth.authenticateToken, userController.restrict(['staff','management']), userController.updateUserAccountPersonnel);
router.post("/create-payment-scheme/:id", auth.authenticateToken, userController.restrict(['staff','management']), approvePaymentController.createApprovePaymentScheme);
router.post("/create-contract-to-sell/:id", auth.authenticateToken, userController.restrict(['staff','management']), approvePaymentController.createContractToSell);


// transaction
router.post("/add-transaction/:id", auth.authenticateToken, userController.restrict(['staff','management']), transactionController.addTransaction);
router.get("/alltransaction/:id", auth.authenticateToken, userController.restrict(['staff','management']), transactionController.getTransaction);
router.put("/update-transaction/:id/:transactionId", auth.authenticateToken, userController.restrict(['staff','management']), transactionController.updateTransaction);
router.delete("/delete-transaction/:id/:transactionId", auth.authenticateToken, userController.restrict(['staff','management']), transactionController.deleteTransactionbyId);


//add legit clientslistPendingClients
router.get("/client/legit-clients", auth.authenticateToken, userController.restrict(['staff','management']), legitClientController.listLegitimateClients);
router.post("/update-legitimacy/:id", auth.authenticateToken, userController.restrict(['staff']), legitClientController.updateRequestLegitimacy);
router.get("/client/pending-clients", auth.authenticateToken, userController.restrict(['realtor','staff','management']), legitClientController.listPendingClients);
router.put("/update-legitimate/:id", auth.authenticateToken, userController.restrict(['management']), legitClientController.updateLegitimacy);
router.put("/approve-legit-client/:userId/:requestId/:requestLegitId", auth.authenticateToken, userController.restrict(['management']), legitClientController.approvalLegitClient);


//Payment Details
router.post('/addpayment/:id', auth.authenticateToken, userController.restrict(['staff','management']), paymentDetailsController.createUserWithPaymentDetails);
router.get('/paymentdetails/:id', auth.authenticateToken, userController.restrict(['staff','management']), paymentDetailsController.getPaymentDetailsById);
router.put('/reset-payment-details/:id', auth.authenticateToken, userController.restrict(['management']), paymentDetailsController.resetPaymentDetails)


//forms
router.get('/forms/:id', auth.authenticateToken, userController.restrict(['customer','staff','management']), formsController.getAllFormsById);
router.get('/retrieve-raw-forms/:filename', auth.authenticateToken, userController.restrict(['staff','management']), formsController.retrieveForms);
router.put('/forms/update-form/:formName/:id', auth.authenticateToken, userController.restrict(['management']), formsController.updateFormById);

//scanfiles
router.post("/add-scanfiles/:id", auth.authenticateToken, userController.restrict(['staff','management']), scanfilesController.addScanFiles);
router.get("/all-scanfiles/:id", auth.authenticateToken, userController.restrict(['staff','management']), scanfilesController.getAllScanFilesById);
router.get("/retrieve-scanfiles/:id/:filename", auth.authenticateToken, userController.restrict(['staff','management']), scanfilesController.retrieveScanFile);
router.delete("/delete-scanfiles/:id/:fileId", auth.authenticateToken, userController.restrict(['management']), scanfilesController.deleteScanFiles);


//Valid Id Images
router.post("/add-valid-image/:id", auth.authenticateToken, userController.restrict(['customer','staff','management']), uploadedController.addValidImage);
router.delete("/delete-valid-image/:id/:fileId", auth.authenticateToken, userController.restrict(['management']), uploadedController.deleteValidImage);


//files
router.get("/retrieve-upload/:id/:filename", auth.authenticateToken, userController.restrict(['staff','management']), uploadedController.retrieveAttachmentFile )
router.get("/retrieveForm/:id/:filename", auth.authenticateToken, userController.restrict(['staff','management']), uploadedController.retrieveForm )



//FOR management ONLY
//management
router.put("/update-false-legitimacy/:id", auth.authenticateToken, userController.restrict(['management']), legitClientController.updateFalseLegitimacy);








module.exports = router;

