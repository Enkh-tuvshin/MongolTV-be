import { getIndexById, getAllIndex } from "@/services/index-service";

export const IndexQueries = {
  getIndexList: () => getAllIndex(),
  getIndex: (_: unknown, { id }: { id: string }) => getIndexById(id),
};
