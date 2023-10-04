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

const auth = require("../middlewares/auth");
const express = require("express");


const router = express.Router();


//users
router.post("/register", userController.register);
router.post("/login", userController.login);
router.get("/user-profile", auth.authenticateToken, userController.userProfile);
router.post("/addletter", auth.authenticateToken, userController.restrict('guest'), letter.createLetterOfIntent);


//staff
router.post("/addnewclient", auth.authenticateToken, userController.restrict('staff'), userController.register);
router.get("/:id?", auth.authenticateToken, userController.restrict('staff'), userController.getUserDetails);
router.put("/:id", auth.authenticateToken, userController.restrict('staff'), userController.updateUser);


//add transaction
router.post("/add-transaction/:id", auth.authenticateToken, userController.restrict('staff'), transactiontController.addTransaction);
router.get("/alltransaction/:id", auth.authenticateToken, userController.restrict('staff'), transactiontController.getTransaction);

//add legit clients
router.get("/client/legit-clients", auth.authenticateToken, userController.restrict('staff'), legitClientController.listLegitimateClients);
router.put("/update-legitimacy/:id", auth.authenticateToken, userController.restrict('staff'), legitClientController.updateLegitimacy);

//Payment Details
router.post('/addpayment/:id', auth.authenticateToken, userController.restrict('staff'), paymentDetailsController.createUserWithPaymentDetails);
router.get('/paymentdetails/:id', auth.authenticateToken, userController.restrict('staff'), paymentDetailsController.getPaymentDetailsById);

//forms
router.get('/forms/:id', auth.authenticateToken, userController.restrict('staff'), formsController.getAllFormsById);


//scanfiles
router.post("/add-scanfiles/:id", auth.authenticateToken, userController.restrict('staff'), scanfilesController.addScanFiles);
router.get("/all-scanfiles/:id", auth.authenticateToken, userController.restrict('staff'), scanfilesController.getAllScanFilesById);

//admin
router.post("/addnewclient", auth.authenticateToken, userController.restrict('admin'), userController.register);
router.get("/:id?", auth.authenticateToken, userController.restrict('admin'), userController.getUserDetails);
router.put("/:id", auth.authenticateToken, userController.restrict('admin'), userController.updateUser);
router.delete("/:id", auth.authenticateToken, userController.restrict('admin'), userController.deleteUser);

//files
router.get("/retrieve-upload/:id/:filename", auth.authenticateToken, userController.restrict('staff'), uploadedController.retrieveUploadedFile )
//files
router.get("/retrieve-letter/:id/:filename", auth.authenticateToken, userController.restrict('staff'), uploadedController.retrieveLetterOfIntent )




module.exports = router;

