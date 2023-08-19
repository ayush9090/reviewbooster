import { SendEmailRequest } from "types/sendEmail/SendEmailApiRequestResponse";
const nodemailer = require("nodemailer");

class SendEmailServices {
  constructor() {}
  transporter = nodemailer.createTransport({
    service: "Gmail",
    auth: {
      user: "reviewboooster@gmail.com",
      pass: "uujzomqgndcaegbl",
    },
  });
  async sendEmail(req: SendEmailRequest) {
    try {
      const mailOptions = {
        from: req.body.from,
        to: req.body.to,
        subject: req.body.subject,
        text: req.body.text,
      };
      const response = await this.transporter.sendMail(mailOptions);
      return response;
    } catch (error) {
      console.log("error", error);
      return "error";
    }
  }
}

module.exports = new SendEmailServices();
