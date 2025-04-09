import { supabase } from "@/lib/supabase";
import { Lead } from "@/types";

export const fetchLeads = async (): Promise<Lead[]> => {
  // Fake delay to simulate network request
  await new Promise((resolve) => setTimeout(resolve, 2000));

  const { data, error } = await supabase.from("leads").select("*");

  if (error) {
    throw new Error(error.message);
  }

  return data as Lead[];
};
