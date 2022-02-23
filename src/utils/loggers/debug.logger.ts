import { createLogger, transports, format } from "winston";

export const DebugLogger = createLogger({
  format: format.combine(
    format.timestamp(),
    format.label({ label: "Debug" }),
    format.json(),
    format.colorize(),
    format.printf(
      (info) => `${info.timestamp} | ${info.level}: ${info.message}`
    )
  ),
  transports: [new transports.Console()],
});
