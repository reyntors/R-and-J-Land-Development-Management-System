const userController = require("../controllers/users.controller");
const lotController = require("../controllers/lot.controller");
const transactiontController = require("../controllers/transaction.controller");
const legitClientController = require("../controllers/legitimateClient.controller");
const paymentDetailsController = require('../controllers/paymentdetails.controller');
const auth = require("../middlewares/auth");
const express = require("express");


const router = express.Router();


//users
router.post("/register", userController.register);
router.post("/login", userController.login);
router.get("/user-profile", auth.authenticateToken, userController.userProfile);

//staff
router.post("/addnewclient", auth.authenticateToken, userController.restrict('staff'), userController.register);
router.get("/:id?", auth.authenticateToken, userController.restrict('staff'), userController.getUserDetails);
router.put("/:id", auth.authenticateToken, userController.restrict('staff'), userController.updateUser);
router.post("/add-transaction/:id", auth.authenticateToken, userController.restrict('staff'), transactiontController.addTransaction);
router.get("/client/legit-clients", auth.authenticateToken, userController.restrict('staff'), legitClientController.listLegitimateClients);
router.put("/update-legitimacy/:id", auth.authenticateToken, userController.restrict('staff'), legitClientController.updateLegitimacy);
router.post('/addpayment/:id', auth.authenticateToken, userController.restrict('staff'), paymentDetailsController.createUserWithPaymentDetails);




//admin
router.post("/addnewclient", auth.authenticateToken, userController.restrict('admin'), userController.register);
router.get("/:id?", auth.authenticateToken, userController.restrict('admin'), userController.getUserDetails);
router.put("/:id", auth.authenticateToken, userController.restrict('admin'), userController.updateUser);
router.delete("/:id", auth.authenticateToken, userController.restrict('admin'), userController.deleteUser);


//lot
router.post("/addlot/:id", auth.authenticateToken, userController.restrict('staff'), lotController.createLot);



module.exports = router;

