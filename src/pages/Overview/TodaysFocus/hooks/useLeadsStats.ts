import { useMemo } from "react";
import { Lead } from "@/types";
import { formatDateISO } from "@/lib/utils";

export const useLeadsStats = (leads: Lead[] = []) => {
  const today = formatDateISO();
  const yesterday = formatDateISO(new Date(Date.now() - 86400000));

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
