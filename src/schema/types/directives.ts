import { gql } from "apollo-server-express";

const DirectivesDefs = gql`
  directive @authenticate on FIELD_DEFINITION
  directive @authorizeRole(roles: [String]!) on FIELD_DEFINITION
`;

export default DirectivesDefs;
