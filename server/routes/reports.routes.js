const express = require("express");
const router = express.Router();
const auth = require("../middlewares/auth"); // Import the authentication middleware
const userController = require("../controllers/users.controller");
const reportsController = require("../controllers/generateReport.controller")


router.get('/daily-reports/:date', auth.authenticateToken, userController.restrict('staff'), reportsController.generateReports);
router.get('/custom-reports', auth.authenticateToken, userController.restrict('staff'), reportsController.generateCustomReports);



module.exports = router;