import { gql } from "apollo-server-express";

const BaseTypeDefs = gql`
  type Query {
    null: Boolean
  }

  type Mutation {
    null: Boolean
  }

  type Subscription {
    null: Boolean
  }
`;

export default BaseTypeDefs;
