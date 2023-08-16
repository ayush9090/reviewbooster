import { Request, Response } from "express";
export interface getMotelsResonse extends Response {
  motelName: string;
  motelEmail: string;
  motelGoogleReviewLink: string;
  motelTripAdvisorLink: string;
  motelPhoneNumber: string;
}

export interface getMotelsByEmailRequest extends Request {
  motelEmail: string;
}
