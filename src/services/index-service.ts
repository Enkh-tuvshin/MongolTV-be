import { Index, IndexCreateInput, IndexUpdateInput } from "@/graphql/generated";
import { GraphQLError } from "graphql";
import { nanoid } from "nanoid";

const IndexList: Index[] = [
  { id: nanoid(), title: "Learn Next.js", completed: false },
];

export const getAllIndex = async (): Promise<Index[]> => {
  return IndexList;
};

export const createIndex = (input: IndexCreateInput): Index => {
  const Index: Index = { id: nanoid(), ...input };
  IndexList.push(Index);
  return Index;
};

export const updateIndex = (input: IndexUpdateInput): Index | undefined => {
  const Index = IndexList.find((Index) => Index.id === input.id);
  if (!Index) throw new GraphQLError("Index not found");
  Index.title = `${input.title}`;
  Index.completed = Boolean(input.completed);
  return Index;
};

export const deleteIndex = (id: string): Index | undefined => {
  const index = IndexList.findIndex((Index) => Index.id === id);
  if (index === -1) throw new GraphQLError("Index not found");
  return IndexList.splice(index, 1)[0];
};

export const getIndexById = (id: string): Index | undefined => {
  return IndexList.find((Index) => Index.id === id);
};
