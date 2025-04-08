import { UseQueryResult } from "@tanstack/react-query";

type AnyQuery = UseQueryResult<unknown, Error>;

export const useMultiQueryStatus = (queries: AnyQuery[]) => {
  const errors = queries.map((q) => q.error).filter(Boolean) as Error[];

  const isLoading = queries.some((q) => q.isLoading);

  const refetchAll = () => {
    queries.forEach((q) => {
      if (q.error) q.refetch();
    });
  };

  return { errors, isLoading, hasError: errors.length > 0, refetchAll };
};
