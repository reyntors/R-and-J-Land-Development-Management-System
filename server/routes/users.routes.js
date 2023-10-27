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


const auth = require("../middlewares/auth");
const express = require("express");


const router = express.Router();




//users
router.post("/contact-us", contactController.createContact);
router.post("/register", userController.register);
router.post("/login", userController.login);
router.get("/user-profile", auth.authenticateToken, userController.userProfile);
router.post("/addletter", auth.authenticateToken, userController.restrict(['guest']), letter.createLetterOfIntent);
router.post("/request-lot", auth.authenticateToken, userController.restrict(['guest']), lotController.reserveLotbyId);

//FOR STAFF ONLY
//staff
router.post("/addnewclient", auth.authenticateToken, userController.restrict(['staff','admin']), userController.register);
router.get("/:id?", auth.authenticateToken, userController.restrict(['guest','staff','admin']), userController.getUserDetails);
router.put("/update-user/:id", auth.authenticateToken, userController.restrict(['staff','admin']), userController.updateUser);


//add transaction
router.post("/add-transaction/:id", auth.authenticateToken, userController.restrict(['staff','admin']), transactiontController.addTransaction);
router.get("/alltransaction/:id", auth.authenticateToken, userController.restrict(['staff','admin']), transactiontController.getTransaction);

//add legit clientslistPendingClients
router.get("/client/legit-clients", auth.authenticateToken, userController.restrict(['staff','admin']), legitClientController.listLegitimateClients);
router.put("/update-legitimacy/:id", auth.authenticateToken, userController.restrict(['staff','admin']), legitClientController.updateLegitimacy);
router.get("/client/pending-clients", auth.authenticateToken, userController.restrict(['staff','admin']), legitClientController.listPendingClients);

//Payment Details
router.post('/addpayment/:id', auth.authenticateToken, userController.restrict(['staff','admin']), paymentDetailsController.createUserWithPaymentDetails);
router.get('/paymentdetails/:id', auth.authenticateToken, userController.restrict(['staff','admin']), paymentDetailsController.getPaymentDetailsById);

//forms
router.get('/forms/:id', auth.authenticateToken, userController.restrict(['staff','admin']), formsController.getAllFormsById);
router.get('/retrieve-raw-forms/:filename', auth.authenticateToken, userController.restrict(['staff','admin']), formsController.retrieveForms);


//scanfiles
router.post("/add-scanfiles/:id", auth.authenticateToken, userController.restrict(['staff','admin']), scanfilesController.addScanFiles);
router.get("/all-scanfiles/:id", auth.authenticateToken, userController.restrict(['staff','admin']), scanfilesController.getAllScanFilesById);
router.get("/retrieve-scanfiles/:id/:filename", auth.authenticateToken, userController.restrict(['staff','admin']), scanfilesController.retrieveScanFile);

//Valid Id Images
router.post("/add-valid-image/:id", auth.authenticateToken, userController.restrict(['guest','staff','admin']), uploadedController.addValidImage);


//files
router.get("/retrieve-upload/:id/:filename", auth.authenticateToken, userController.restrict(['staff','admin']), uploadedController.retrieveAttachmentFile )
router.get("/retrieveForm/:id/:filename", auth.authenticateToken, userController.restrict(['staff','admin']), uploadedController.retrieveForm )



//FOR ADMIN ONLY
//admin
router.put("/update-false-legitimacy/:id", auth.authenticateToken, userController.restrict(['admin']), legitClientController.updateFalseLegitimacy);








module.exports = router;

