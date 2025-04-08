import { useMemo } from "react";
import { Task } from "@/types";

const formatDate = (date: Date) => date.toISOString().slice(0, 10);

export const useTasksStats = (tasks: Task[] = []) => {
  const { highPriorityCount, delta } = useMemo(() => {
    const today = formatDate(new Date());
    const yesterday = formatDate(new Date(Date.now() - 86400000));

    const getHighCount = (date: string) =>
      tasks.filter(
        (task) =>
          task.priority === "high" && task.scheduled_at.slice(0, 10) === date,
      ).length;

    const todayCount = getHighCount(today);
    const yesterdayCount = getHighCount(yesterday);

    const delta =
      yesterdayCount === 0
        ? 0
        : ((todayCount - yesterdayCount) / yesterdayCount) * 100;

    return {
      highPriorityCount: todayCount,
      delta,
    };
  }, [tasks]);

  return { highPriorityCount, delta };
};
