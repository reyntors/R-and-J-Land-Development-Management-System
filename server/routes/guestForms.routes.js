const auth = require("../middlewares/auth");
const letter = require('../controllers/letterofintent.controller');
const birTinRequest = require('../controllers/birtinrequest.controller');
const individualbuyerdeclaration = require('../controllers/individualbuyerdeclaration.controller');
const express = require("express");
const userController = require("../controllers/users.controller");


const router = express.Router();


//letter ofintent
router.post("/addletter", auth.authenticateToken, userController.restrict('guest'), letter.createLetterOfIntent);

//Bir Tin Request
router.post("/addbirtinrequest", auth.authenticateToken, userController.restrict('guest'), birTinRequest.createBirTinRequest);

//Individual Buyer Declaration
router.post("/addindividualbuyer", auth.authenticateToken, userController.restrict('guest'), individualbuyerdeclaration.createIndividualBuyerDeclaration);


module.exports = router;