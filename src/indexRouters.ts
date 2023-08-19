const express = require("express");
const motelrRoutes = require("./routers/motel/motel.routes");
const sendEmailRouter = require("./routers/sendEmail/sendEmail.routes");

const router = express.Router();

router.use("/motel", motelrRoutes);
router.use("/email", sendEmailRouter);

module.exports = router;
