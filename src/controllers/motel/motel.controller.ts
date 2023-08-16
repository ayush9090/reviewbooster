const motelService = require("../../services/motel/motel.services");

class MotelController {
  constructor() {}

  async getMotels(req: any, res: any) {
    try {
      const motels = await motelService.getMotels(req);
      res.status(201).json(motels);
    } catch (error) {
      res.status(500).json({ error });
    }
  }
}

module.exports = new MotelController();
