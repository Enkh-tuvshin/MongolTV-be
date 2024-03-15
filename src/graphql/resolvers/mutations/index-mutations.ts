import { IndexCreateInput, IndexUpdateInput } from "@/graphql/generated";
import { createIndex, deleteIndex, updateIndex } from "@/services/index-service";

export const indexMutations = {
  createIndex: (_: unknown, { input }: { input: IndexCreateInput }) =>
    createIndex(input),
  updateIndex: (_: unknown, { input }: { input: IndexUpdateInput }) =>
    updateIndex(input),
  deleteIndex: (_: unknown, { id }: { id: string }) => deleteIndex(id),
};
