const userController = require("../controllers/users.controller");
const lotController = require("../controllers/lot.controller");
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


//admin
router.post("/addnewclient", auth.authenticateToken, userController.restrict('admin'), userController.register);
router.get("/:id?", auth.authenticateToken, userController.restrict('admin'), userController.getUserDetails);
router.put("/:id", auth.authenticateToken, userController.restrict('admin'), userController.updateUser);
router.delete("/:id", auth.authenticateToken, userController.restrict('admin'), userController.deleteUser);


//lot
router.post("/lot", auth.authenticateToken, lotController.createLot);



module.exports = router;

