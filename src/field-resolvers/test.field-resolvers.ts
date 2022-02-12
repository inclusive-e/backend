import { IFieldResolver } from "@graphql-tools/utils";

import { ITestInput, IResolverInput } from "../interfaces";

import { Context } from "../utils/context";
import { NODE_ENV } from "../config/environment";

export const testQueryResolver: IFieldResolver<
  undefined,
  Context,
  IResolverInput<ITestInput>
> = async (source, args, context) => {
  return {
    message: `${NODE_ENV} - Hello World`,
  };
};

export const testMutationResolver: IFieldResolver<
  undefined,
  Context,
  IResolverInput<ITestInput>
> = async (source, { input }, context) => {
  return {
    message: `${NODE_ENV} - ${input.message}`,
  };
};
