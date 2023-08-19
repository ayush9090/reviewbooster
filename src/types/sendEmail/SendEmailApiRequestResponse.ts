import { Request, Response } from "express";
export interface getMotelsResonse extends Response {
  motelName: string;
  motelEmail: string;
  motelGoogleReviewLink: string;
  motelTripAdvisorLink: string;
  motelPhoneNumber: string;
}

export interface SendEmailRequest extends Request {
  to: string;
  from: string;
  subject: string;
  text: string;
  html?: string;
}
