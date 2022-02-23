import { createTransport } from "nodemailer";

import {
  SMTP_HOST,
  SMTP_PORT,
  SMTP_USER,
  SMTP_PASSWORD,
} from "./environment";

export const smtpTransport = createTransport({
  host: SMTP_HOST,
  port: SMTP_PORT,
  // secure: NODE_ENV === "production",
  auth: {
    user: SMTP_USER,
    pass: SMTP_PASSWORD
  }
});
