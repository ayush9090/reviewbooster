import {
  getMotelsByEmailRequest,
  getMotelsResonse,
} from "types/motel/MotelsApiRequestResponse";

const motelService = require("../../services/motel/motel.services");

class MotelController {
  constructor() {}

  async getMotels(req: any, res: any) {
    try {
      const motels = await motelService.getMotels(req);
      res.status(200).json({ message: "success", motels });
    } catch (error) {
      res.status(500).json({ error });
    }
  }

  async getMotelsByEmail(req: getMotelsByEmailRequest, res: getMotelsResonse) {
    console.log("req", req.body);
    try {
      if (!req.body.motelEmail) {
        return res.status(400).json({ message: "motelEmail is missing" });
      }
      const motels = await motelService.getMotelsByEmail(req.body);
      return res.status(200).json({ message: "success", motels });
    } catch (error) {
      return res.status(500).json({ error });
    }
  }
}

module.exports = new MotelController();
