const express = require("express");
const router = express.Router();
const sendEmail = require("../../controllers//sendEmail/sendEmail.controller");

router.use(express.json());

router.post("/sendEmail", sendEmail.sendEmail.bind(sendEmail));
router.post("/sendSms", sendEmail.sendSms.bind(sendEmail));

module.exports = router;
