const express = require("express");
const router = express.Router();
const motelController = require("../../controllers/motel/motel.controller");

router.use(express.json());

router.get("/getMotels", motelController.getMotels.bind(motelController));
router.post(
  "/getMotelsByEmail",
  motelController.getMotelsByEmail.bind(motelController)
);

module.exports = router;
