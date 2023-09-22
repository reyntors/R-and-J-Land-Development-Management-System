const userController = require("../controllers/users.controller");
const lotController = require("../controllers/lot.controller");
const auth = require("../middlewares/auth");
const express = require("express");


const router = express.Router();


//users
router.post("/register", userController.register);
router.post("/login", userController.login);
router.get("/user-profile", auth.authenticateToken, userController.userProfile);
router.get("/:id?", auth.authenticateToken, userController.restrict('staff'), userController.getUserDetails);

//lot
router.post("/lot", auth.authenticateToken, lotController.createLot);



module.exports = router;

