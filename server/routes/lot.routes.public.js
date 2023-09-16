const express = require("express");
const router = express.Router();
const lotController = require("../controllers/lot.controller");



// Public route for lot details by lot number (no authentication middleware)
router.get("/:lotNumber", lotController.getPublicLotDetails);

module.exports = router;
