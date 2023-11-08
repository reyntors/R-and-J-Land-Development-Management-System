const express = require("express");
const router = express.Router();
const auth = require("../middlewares/auth"); // Import the authentication middleware
const userController = require("../controllers/users.controller");
const inquiriesController = require('../controllers/inquiries.controller')

//FOR STAFF ONLY
router.get('/all-inquiries', auth.authenticateToken, userController.restrict(['staff','management']), inquiriesController.getAllInquiry)
router.put('/update-mark/:inquiryId', auth.authenticateToken, userController.restrict(['staff','management']), inquiriesController.updateEnquirybyId)




module.exports = router;