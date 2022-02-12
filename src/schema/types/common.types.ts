import { gql } from "apollo-server";
import { DocumentNode } from "graphql";

const CommonTypeDefs: DocumentNode = gql`
  type Message {
    message: String!
  }
`;

export default CommonTypeDefs;
