const express = require("express");
const router = express.Router();
const lotController = require("../controllers/lot.controller");
const auth = require("../middlewares/auth"); // Import the authentication middleware
const userController = require("../controllers/users.controller");


router.get("/allLot",  lotController.getPublicLotDetails);
router.get("/:lotNumber", lotController.getPublicLotDetails);
router.post("/addlot", auth.authenticateToken, userController.restrict('staff'), lotController.createLot);
router.put("/updatelot/:lotNumber", auth.authenticateToken, userController.restrict('staff'), lotController.updateLot);

module.exports = router;