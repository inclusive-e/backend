import "reflect-metadata";
import http from "http";
import helmet from "helmet";
import compression from "compression";
import cors from "cors";
import express, { Request, Response } from "express";
import { ApolloServer } from "apollo-server-express";
import { GraphQLError } from "graphql";
import { PrismaClient } from "@prisma/client";
import { makeExecutableSchema } from "@graphql-tools/schema";
import { graphqlUploadExpress } from "graphql-upload";

import {
  NODE_ENV,
  PORT,
  PROCESS_MAX_LISTENERS,
  WHITELISTED_ORIGINS,
} from "./config/environment";
import { LoggerPlugin } from "./utils/graphql-plugins";
import { DebugLogger } from "./utils/loggers";
import resolvers from "./schema/resolvers";
import typeDefs from "./schema/types";
import { Context } from "./utils/context";

const IS_PROD = NODE_ENV === "production";

export const createTestApolloServer = async (
  ctx?: Context,
  dataSources?: any
) => {
  return new ApolloServer({
    resolvers,
    typeDefs,
    context: { ...ctx },
    dataSources: () => dataSources,
  });
};

export const startServer = async () => {
  process.setMaxListeners(PROCESS_MAX_LISTENERS);

  DebugLogger.info("Connected postgres provider.");
  const prisma = new PrismaClient();

  const getSchema = () =>
    makeExecutableSchema({
      typeDefs: [typeDefs],
      resolvers: resolvers,
    });

  const apolloServer = new ApolloServer({
    schema: getSchema(),
    resolvers,
    typeDefs,
    context: ({ req, res }) => ({
      ...req,
      ...res,
      prisma,
    }),
    introspection: !IS_PROD,
    // mocks: !IS_PROD,
    formatError: (e: GraphQLError) => {
      console.log(e);
      return e;
    },
    formatResponse: (res: any) => {
      return res;
    },
    plugins: [LoggerPlugin],
  });

  const app = express();

  app.use(helmet());

  app.use(
    cors({
      origin: WHITELISTED_ORIGINS,
      credentials: true,
    })
  );
  app.use(express.json({ limit: "50mb" }));
  app.use(compression());
  app.use(graphqlUploadExpress());
  await apolloServer.start();
  await apolloServer.applyMiddleware({
    app,
    cors: false,
  });
  app.get("/healthcheck", (req: Request, res: Response) => {
    return res.json({ message: "This server is healthy." });
  });

  const httpServer = http.createServer(app);

  httpServer.listen(PORT, () => {
    DebugLogger.info(`App has started at port ${PORT}`);
  });
};
