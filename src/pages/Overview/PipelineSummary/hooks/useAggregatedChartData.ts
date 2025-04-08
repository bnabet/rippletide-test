import { useMemo } from "react";

import { chartConfig } from "../config";
import {
  AggregatedChartDataEntry,
  Opportunity,
  OpportunityStage,
} from "../types";

export function useAggregatedChartData(
  filteredOpportunities: Opportunity[],
): AggregatedChartDataEntry[] {
  return useMemo(() => {
    const initialCounts: Record<OpportunityStage, number> = {
      newLeads: 0,
      qualified: 0,
      proposal: 0,
      negotiation: 0,
      other: 0,
    };

    const counts = filteredOpportunities.reduce((acc, opp) => {
      if (acc[opp.stage] !== undefined) {
        acc[opp.stage] += 1;
      }
      return acc;
    }, initialCounts);

    return Object.entries(counts).map(([key, count]) => ({
      browser: key,
      stages: count,
      fill: chartConfig[key as keyof typeof chartConfig].color,
    }));
  }, [filteredOpportunities]);
}
