import { useMemo } from "react";
import { Lead } from "@/types";

export const useLeadsStats = (leads: Lead[] = []) => {
  const today = new Date().toISOString().slice(0, 10);
  const yesterday = new Date(Date.now() - 86400000).toISOString().slice(0, 10);

  const stats = useMemo(() => {
    const leadsToday = leads.filter((lead) => lead.next_contact_date === today);
    const leadsYesterday = leads.filter(
      (lead) => lead.next_contact_date === yesterday,
    );

    const countToday = leadsToday.length;
    const countYesterday = leadsYesterday.length;

    const delta =
      countYesterday === 0
        ? 0
        : ((countToday - countYesterday) / countYesterday) * 100;

    return {
      leadsToContact: {
        count: countToday,
        delta: delta,
      },
    };
  }, [leads, today, yesterday]);

  return stats;
};
