const express = require("express");
const motelrRoutes = require("./routers/motel/motel.routes");
const router = express.Router();

router.use("/", motelrRoutes);

module.exports = router;
