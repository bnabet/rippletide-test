import { useMemo } from "react";
import { formatDateISO } from "@/lib/utils";
import { Opportunity } from "@/types";

export const usePipelineValueStats = (opportunities: Opportunity[] = []) => {
  const { totalValue, delta } = useMemo(() => {
    const today = formatDateISO();
    const yesterday = formatDateISO(new Date(Date.now() - 86400000));

    const sum = (list: typeof opportunities) =>
      list.reduce((acc, opp) => acc + opp.value, 0);

    const todayValue = sum(
      opportunities.filter((o) => o.created_at.slice(0, 10) === today),
    );

    const yesterdayValue = sum(
      opportunities.filter((o) => o.created_at.slice(0, 10) === yesterday),
    );

    const totalValue = sum(opportunities);

    const delta =
      yesterdayValue === 0
        ? 0
        : ((todayValue - yesterdayValue) / yesterdayValue) * 100;

    return { totalValue, delta };
  }, [opportunities]);

  return {
    value: totalValue,
    delta,
  };
};
