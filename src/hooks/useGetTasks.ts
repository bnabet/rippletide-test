import { useQuery } from "@tanstack/react-query";
import { fetchTasks } from "@/services/fetchTasks";
import { Task } from "@/types";
import { Filter } from "@/types/utils";

type TaskFilters = Filter<Task, "completed" | "priority" | "scheduled_at"> & {
  scheduled_from?: string;
  scheduled_to?: string;
};

export const useGetTasks = (filters: TaskFilters = {}) => {
  return useQuery<Task[], Error>({
    queryKey: ["tasks", filters],
    queryFn: () => fetchTasks(filters),
    // staleTime: 1000 * 60 * 5,
  });
};
