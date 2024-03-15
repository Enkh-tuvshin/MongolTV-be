import gql from "graphql-tag";

export const IndexTypeDefs = gql`
  type Index {
    id: ID!
    title: String!
    completed: Boolean!
  }

  input IndexCreateInput {
    title: String!
    categoryId: ID
    completed: Boolean!
  }

  input IndexUpdateInput {
    id: ID!
    title: String
    completed: Boolean
  }

  type Query {
    getIndexList: [Index!]!
    getIndex(id: ID): Index
  }
  type Mutation {
    createIndex(input: IndexCreateInput!): Index!
    updateIndex(input: IndexUpdateInput!): Index!
    deleteIndex(id: ID!): Index
  }
`;
