const express = require("express");
const router = express.Router();
const auth = require("../middlewares/auth"); // Import the authentication middleware
const userController = require("../controllers/users.controller");
const inquiriesController = require('../controllers/inquiries.controller')

//FOR STAFF ONLY
router.get('/all-inquiries', auth.authenticateToken, userController.restrict('staff'), inquiriesController.getAllInquiry)
router.put('/update-mark/:inquiryId', auth.authenticateToken, userController.restrict('staff'), inquiriesController.updateEnquirybyId)



//FOR ADMIN ONLY
router.get('/all-inquiries', auth.authenticateToken, userController.restrict('admin'), inquiriesController.getAllInquiry)
router.put('/update-mark/:inquiryId', auth.authenticateToken, userController.restrict('admin'), inquiriesController.updateEnquirybyId)


module.exports = router;