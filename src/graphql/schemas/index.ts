import { mergeTypeDefs } from "graphql-tools-merge-typedefs";
import { IndexTypeDefs } from "./index-schema";

export const typeDefs = mergeTypeDefs([IndexTypeDefs]);
