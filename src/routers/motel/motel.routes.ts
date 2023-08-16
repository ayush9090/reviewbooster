const express = require("express");
const router = express.Router();
const motelController = require("../../controllers/motel/motel.controller");
const cors = require("cors");

router.use(cors());
router.use(express.json());

// router.get(
//   "/getAppointments",
//   appointmentController.getAppointments.bind(appointmentController)
// );

module.exports = router;
