import { supabase } from "@/lib/supabase";
import { Task } from "@/types";

export const fetchTasks = async (filters: {
  completed?: boolean;
  priority?: string;
}): Promise<Task[]> => {
  let query = supabase.from("tasks").select("*");

  if (filters.completed !== undefined) {
    query = query.eq("completed", filters.completed);
  }

  if (filters.priority) {
    query = query.eq("priority", filters.priority);
  }

  const { data, error } = await query;

  if (error) {
    throw new Error(error.message);
  }

  return data as Task[];
};
