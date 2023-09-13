const express = require("express");
const router = express.Router();
const lotController = require("../controllers/lot.controller");
const auth = require("../middlewares/auth"); // Import the authentication middleware


router.get("/:lotNumber", lotController.getLotDetails);

// Apply authentication middleware to the lot creation route
router.post("/", auth.authenticateToken, lotController.createLot);

module.exports = router;