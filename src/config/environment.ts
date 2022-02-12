export const SERVER_URL = process.env.SERVER_URL || "";
export const NODE_ENV = process.env.NODE_ENV;
export const PORT = process.env.PORT || 3000;

export const JWT_SECRET_KEY = `${process.env.JWT_SECRET_KEY_PREFIX}$${process.env.JWT_SECRET_KEY_SUFFIX}`;
export const JWT_EXPIRY_TIME = process.env.JWT_EXPIRY_TIME || "10h";
export const REFRESH_JWT_EXPIRY_TIME =
  process.env.REFRESH_JWT_EXPIRY_TIME || "7d";

export const AWS_ACCESS_KEY = process.env.AWS_ACCESS_KEY || "";
export const AWS_SECRET_ACCESS_KEY = process.env.AWS_SECRET_ACCESS_KEY || "";
export const AWS_S3_BUCKET_NAME = process.env.AWS_S3_BUCKET_NAME || "";
export const AWS_S3_FOLDER_NAME = process.env.AWS_S3_FOLDER_NAME || "";
export const AWS_S3_ORIGINAL_FOLDER =
  process.env.AWS_S3_ORIGINAL_FOLDER || "originals";
export const AWS_S3_PROFILE_IMAGES_FOLDER =
  process.env.AWS_S3_PROFILE_IMAGES_FOLDER || "avatar";
export const AWS_REGION = process.env.AWS_REGION || "";

export const SMTP_HOST = process.env.SMTP_HOST || "";
export const SMTP_PORT = parseInt(process.env.SMTP_PORT || "") || 587;
export const SMTP_USER = process.env.SMTP_USER || "";
export const SMTP_PASSWORD = process.env.SMTP_PASSWORD || "";

export const WHITELISTED_ORIGINS = (
  process.env.WHITELISTED_ORIGINS || ""
).split(",");

export const PROCESS_MAX_LISTENERS = parseInt(
  process.env.PROCESS_MAX_LISTENERS || "10"
);
