import { send } from "process";
import {
  SendEmailRequest,
  SendSmsRequest,
} from "types/sendEmail/SendEmailApiRequestResponse";
const nodemailer = require("nodemailer");
const twilio = require("twilio");

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

  async sendSmsHelper(receipent: string, from: string, text: string) {
    const accountSid = "AC290c370f7f985187555be0a61f17fed8";
    const authToken = "fd81ef717f625bc610df73497c642953";

    const client = new twilio(accountSid, authToken);
    const message = "Hello, this is a test message from Twilio!";

    const sentMessage = await client.messages.create({
      body: text,
      from: from,
      to: receipent,
    });
    console.log("sentMEssage", sentMessage);
  }
  async sendSms(req: SendSmsRequest) {
    try {
      const { to, from, text } = req.body;
      console.log("to", "from", "text", to, from, text);
      const sendPromises = to.map((receipent: string) =>
        this.sendSmsHelper(receipent, from, text)
      );
      await Promise.all(sendPromises);
    } catch (error) {
      console.error("Error sending messages:", error);
      throw error;
    }
  }
}

module.exports = new SendEmailServices();
