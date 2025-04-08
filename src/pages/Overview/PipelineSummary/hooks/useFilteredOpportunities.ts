import { useMemo } from "react";
import { opportunitiesMock } from "../data/data";

export function useFilteredOpportunities(
  selectedRange: "lastWeek" | "lastMonth" | "lastYear",
) {
  return useMemo(() => {
    const now = new Date();
    const rangeStart = new Date();

    if (selectedRange === "lastWeek") {
      rangeStart.setDate(now.getDate() - 7);
    } else if (selectedRange === "lastMonth") {
      rangeStart.setMonth(now.getMonth() - 1);
    } else if (selectedRange === "lastYear") {
      rangeStart.setFullYear(now.getFullYear() - 1);
    }

    return opportunitiesMock.filter((opp) => {
      const created = new Date(opp.created_at);
      return created >= rangeStart && created <= now;
    });
  }, [selectedRange]);
}
