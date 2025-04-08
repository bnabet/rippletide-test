import { useQuery } from "@tanstack/react-query";
import { fetchPipelineValue } from "@/services/fetchPipelineValue";
import { Opportunity } from "@/types";
import { Filter } from "@/types/utils";

type PipelineFilters = Filter<Opportunity, "status">;

export const useGetPipelineValue = (filters: PipelineFilters = {}) => {
  return useQuery<Opportunity[], Error>({
    queryKey: ["pipeline", filters],
    queryFn: () => fetchPipelineValue(filters),
    // staleTime: 1000 * 60 * 5,
  });
};
