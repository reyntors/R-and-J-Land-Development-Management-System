const userController = require("../controllers/users.controller");
const lotController = require("../controllers/lot.controller");


const express = require("express");
const router = express.Router();

router.post("/register", userController.register);
router.post("/login", userController.login);
router.get("/user-profile", userController.userProfile);


router.post("/lot", lotController.createLot);


module.exports = router;