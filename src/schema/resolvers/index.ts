import { IResolvers } from "@graphql-tools/utils";

import TestResolvers from "./test.resolvers";
import ScalarResolvers from "./scalar.resolvers";

const Resolvers: IResolvers[] = [ScalarResolvers, TestResolvers];

export default Resolvers;
