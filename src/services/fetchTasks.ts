import { supabase } from "@/lib/supabase";
import { Task } from "@/types";

export const fetchTasks = async (filters: {
  completed?: boolean;
  priority?: string;
  scheduled_from?: string;
  scheduled_to?: string;
}): Promise<Task[]> => {
  let query = supabase.from("tasks").select("*");

  if (filters.completed !== undefined) {
    query = query.eq("completed", filters.completed);
  }

  if (filters.priority) {
    query = query.eq("priority", filters.priority);
  }

  if (filters.scheduled_from) {
    query = query.gte("scheduled_at", filters.scheduled_from);
  }

  if (filters.scheduled_to) {
    query = query.lte("scheduled_at", filters.scheduled_to);
  }

  const { data, error } = await query;

  if (error) {
    throw new Error(error.message);
  }

  return data as Task[];
};
