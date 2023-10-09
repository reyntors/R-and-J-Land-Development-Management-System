const express = require("express");
const router = express.Router();
const auth = require("../middlewares/auth"); // Import the authentication middleware
const userController = require("../controllers/users.controller");
const inquiriesController = require('../controllers/inquiries.controller')


router.get('/all-inquiries', auth.authenticateToken, userController.restrict('staff'), inquiriesController.getAllInquiry)



module.exports = router;