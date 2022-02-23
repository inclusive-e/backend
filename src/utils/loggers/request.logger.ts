import { createLogger, transports, format } from "winston";

export const RequestLogger = createLogger({
  format: format.combine(
    format.timestamp(),
    format.json(),
    format.colorize({ all: true }),
    format.printf(
      (info) => `${info.timestamp} | ${info.level}: ${info.message}`
    )
  ),
  transports: [new transports.Console()],
});
