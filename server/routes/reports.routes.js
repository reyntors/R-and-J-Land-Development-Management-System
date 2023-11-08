const express = require("express");
const router = express.Router();
const auth = require("../middlewares/auth"); // Import the authentication middleware
const userController = require("../controllers/users.controller");
const reportsController = require("../controllers/generateReport.controller")


//FOR STAFF ONLY
// Getreports API
router.get('/daily-reports/:date', auth.authenticateToken, userController.restrict(['staff','management']), reportsController.generateReports);
router.get('/custom-reports', auth.authenticateToken, userController.restrict(['staff','management']), reportsController.generateCustomReports);
router.get('/weekly-reports', auth.authenticateToken, userController.restrict(['staff','management']), reportsController.generateWeeklyReports);
router.get('/monthly-reports', auth.authenticateToken, userController.restrict(['staff','management']), reportsController.generateMonthlyReports);

//APi for download the file
router.get('/excel-file/:filename', auth.authenticateToken, userController.restrict(['staff','management']), reportsController.downloadExcelFile);




module.exports = router;