import { createLogger, transports, format } from "winston";

export const GraphQLLogger = createLogger({
  format: format.combine(
    format.timestamp(),
    format.label({ label: "GraphQL" }),
    format.json(),
    format.colorize(),
    format.printf(
      (info) => `${info.timestamp} | ${info.level}: ${info.message}`
    )
  ),
  transports: [new transports.Console()],
});
