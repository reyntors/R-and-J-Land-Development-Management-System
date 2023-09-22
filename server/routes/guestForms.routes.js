const auth = require("../middlewares/auth");
const letter = require('../controllers/letterofintent.controller');
const express = require("express");
const userController = require("../controllers/users.controller");


const router = express.Router();


//letter ofintent
router.post("/addletter", auth.authenticateToken, userController.restrict('guest'), letter.createLetterOfIntent);


module.exports = router;