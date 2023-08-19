import {
  SendEmailRequest,
  SendSmsRequest,
} from "types/sendEmail/SendEmailApiRequestResponse";

const sendEmailService = require("../../services/sendEmail/sendEmail.services");

class SendEmailController {
  constructor() {}

  async sendEmail(req: SendEmailRequest, res: any) {
    try {
      const response = await sendEmailService.sendEmail(req);
      return res.status(200).json({ message: "success", response });
    } catch (error) {
      return res.status(500).json({ error });
    }
  }
  async sendSms(req: SendSmsRequest, res: any) {
    try {
      if (!req.body.to || !req.body.from || !req.body.text) {
        return res.status(400).json({ message: "missing parameter" });
      }
      const response = await sendEmailService.sendSms(req);
      return res.status(200).json({ message: "success", response });
    } catch (error: any) {
      console.error("Error:", error);
      return res.status(500).json({ message: "error", error: error.message });
    }
  }
}

module.exports = new SendEmailController();
