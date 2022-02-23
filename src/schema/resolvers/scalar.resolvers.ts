import { IResolvers } from "@graphql-tools/utils";
import { GraphQLScalarType } from "graphql";
import { GraphQLUpload } from "graphql-upload";
import { DateTimeResolver } from "graphql-scalars";
import { Kind } from "graphql/language";
import { GraphQLJSON, GraphQLJSONObject } from "graphql-type-json";

const ScalarResolvers: IResolvers = {
  DateTime: DateTimeResolver,
  Date: new GraphQLScalarType({
    name: "Date",
    description: "Date scalar type",
    parseValue(value) {
      return new Date(value);
    },
    serialize(value: Date) {
      return value.getTime();
    },
    parseLiteral(ast) {
      if (ast.kind === Kind.INT) {
        return new Date(ast.value);
      }

      return null;
    },
  }),
  Any: new GraphQLScalarType({
    name: "Any",
    description: "Literally anything",
    serialize(value) {
      return value;
    },
    parseValue(value) {
      return value;
    },
    parseLiteral(ast) {
      return "value" in ast ? ast.value : null;
    },
  }),
  Upload: GraphQLUpload,
  JSON: GraphQLJSON,
  JSONObject: GraphQLJSONObject,
};

export default ScalarResolvers;
