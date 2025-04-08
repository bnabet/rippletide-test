import { supabase } from "@/lib/supabase";
import { Opportunity } from "@/types";

export const fetchPipelineValue = async (filters: {
  status?: string;
}): Promise<Opportunity[]> => {
  let query = supabase.from("opportunities").select("*");

  if (filters.status) {
    query = query.eq("status", filters.status);
  }
  const { data, error } = await query;

  if (error) {
    throw new Error(error.message);
  }

  return data as Opportunity[];
};
