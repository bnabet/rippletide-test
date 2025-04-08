import { formatDateISO } from "@/lib/utils";
import { useGetTasks } from "@/hooks/useGetTasks";

export const useGetTodaysTasks = () => {
  const today = formatDateISO();

  return useGetTasks({
    completed: false,
    scheduled_from: `${today}T00:00:00Z`,
    scheduled_to: `${today}T23:59:59Z`,
  });
};
