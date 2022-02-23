import { PluginDefinition } from "apollo-server-core";

import { GraphQLLogger, RequestLogger } from "../../loggers";
import { NODE_ENV } from "../../../config/environment";

export const LoggerPlugin: PluginDefinition = {
  requestDidStart({ request }): any {
    const start = Date.now();
    let op: string | undefined;

    if ("production" !== NODE_ENV) {
      const { query, variables } = request;
      const variable = JSON.stringify(variables);
      const stringQuery = detectPassword(
        `{ ${query}, variables: ${variable} }`
      );
      RequestLogger.info(`Request ${stringQuery}`);
    }

    return {
      didResolveOperation({ operationName }: any) {
        op = operationName || "anonymous";
      },
      didEncounterErrors({ errors }: any) {
        GraphQLLogger.error(`${op} encountered errors - ${errors[0].message}`);
      },
      willSendResponse({ response }: any) {
        const end = Date.now();
        const elapsed = end - start;
        const size = JSON.stringify(response).length * 2;
        GraphQLLogger.info(
          `${op} completed in ${elapsed} ms and returned ${size} bytes`
        );
      },
    };
  },

  serverWillStart(): any {
    GraphQLLogger.info(`Server is starting up.`);
  },
};

const detectPassword = (strLogging: string | undefined) => {
  if (strLogging) {
    return strLogging
      .replace(/\s*"*password"*:\s*".*"/gi, ' "password": "***"')
      .replace(/\s+/g, " ")
      .trim();
  }
};
