import { gql } from "apollo-server-express";

const ScalarTypeDefs = gql`
  scalar Date
  scalar DateTime
  scalar Upload
  scalar JSON
  scalar JSONObject
  scalar Buffer
  scalar Any
`;

export default ScalarTypeDefs;
