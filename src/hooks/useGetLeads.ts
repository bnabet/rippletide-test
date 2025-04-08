import { useQuery } from "@tanstack/react-query";
import { fetchLeads } from "@/services/fetchLeads";
import { Lead } from "@/types";

export const useGetLeads = () => {
  return useQuery<Lead[], Error>({
    queryKey: ["leads"],
    queryFn: fetchLeads,
    // staleTime: 1000 * 60 * 5,
  });
};
