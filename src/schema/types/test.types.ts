import { gql } from "apollo-server";
import { DocumentNode } from "graphql";

const TestTypeDefs: DocumentNode = gql`
  input TestInput {
    message: String!
  }

  extend type Query {
    test: Message!
  }

  extend type Mutation {
    test(input: TestInput!): Message!
  }
`;

export default TestTypeDefs;
