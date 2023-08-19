import { SendEmailRequest } from "types/sendEmail/SendEmailApiRequestResponse";

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
}

module.exports = new SendEmailController();
