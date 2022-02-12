import { IResolvers } from "@graphql-tools/utils";

import { testMutationResolver, testQueryResolver } from "../../field-resolvers";

const UserResolvers: IResolvers = {
  Query: {
    test: testQueryResolver,
  },
  Mutation: {
    test: testMutationResolver,
  },
};

export default UserResolvers;
