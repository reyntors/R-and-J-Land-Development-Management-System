const auth = require("../middlewares/auth");
const letter = require('../controllers/letterofintent.controller');
const birTinRequest = require('../controllers/birtinrequest.controller');
const individualbuyerdeclaration = require('../controllers/individualbuyerdeclaration.controller');
const contractDetails = require('../controllers/contractdetails.controller');
const express = require("express");
const userController = require("../controllers/users.controller");
const formsController = require("../controllers/forms.controller");
const buyerInfoSheetController = require('../controllers/buyerInfoSheet.controller')


const router = express.Router();


//letter ofintent
router.post("/addletter", auth.authenticateToken, userController.restrict(['customer']), letter.createLetterOfIntent);

//Bir Tin Request
router.post("/addbirtinrequest", auth.authenticateToken, userController.restrict(['customer']), birTinRequest.createBirTinRequest);

//Individual Buyer Declaration
router.post("/addindividualbuyer", auth.authenticateToken, userController.restrict(['customer']), individualbuyerdeclaration.createIndividualBuyerDeclaration);

//Individual Buyer Declaration
router.post("/addcontract", auth.authenticateToken, userController.restrict(['customer']),  contractDetails.createContractDetails);
router.post("/create-buyer-info-sheet", auth.authenticateToken, userController.restrict(['customer']),  buyerInfoSheetController.createbuyerInfoSheet);


//FOR STAFF ONLY
//add form
router.post("/addforms",  formsController.getForms);
router.get('/list-raw-forms', auth.authenticateToken, userController.restrict(['staff','management']), formsController.getAllRawForms);




module.exports = router;