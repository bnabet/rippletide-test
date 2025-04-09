import { useMemo, useState } from "react";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { AppPage } from "@/layouts/AppPage";
import {
  Section,
  SectionHeader,
  SectionTitle,
  SectionActions,
  SectionContent,
} from "@/components/Section/Section";
import { PipelineSummaryStats } from "./components/PipelineSummaryStats";
import { PipelineSummaryChart } from "./components/PipelineSummaryChart";
import { PipelineSummaryOpportunities } from "./components/PipelineSummaryOpportunities";

import { useFilteredOpportunities } from "./hooks/useFilteredOpportunities";
import { useAggregatedChartData } from "./hooks/useAggregatedChartData";

import { chartConfig, RANGE_OPTIONS } from "./config";
import { RangeOption } from "./types";

export function PipelineSummary() {
  const [selectedRange, setSelectedRange] = useState<RangeOption>("lastMonth");

  const filteredOpportunities = useFilteredOpportunities(selectedRange);
  const aggregatedChartData = useAggregatedChartData(filteredOpportunities);

  const totalStages = useMemo(() => {
    return aggregatedChartData.reduce((acc, curr) => acc + curr.stages, 0);
  }, [aggregatedChartData]);

  return (
    <AppPage
      title="Pipeline Summary"
      description="Your pipeline summary for today"
    >
      <div className="grid grid-cols-1 space-y-10">
        <PipelineSummaryStats />

        <Section>
          <SectionHeader className="mb-4">
            <SectionTitle>Pipeline Progress</SectionTitle>

            <SectionActions>
              <Select
                value={selectedRange}
                onValueChange={(value: string) =>
                  setSelectedRange(value as RangeOption)
                }
              >
                <SelectTrigger className="w-[160px]">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  {RANGE_OPTIONS.map((opt) => (
                    <SelectItem key={opt} value={opt}>
                      {opt.replace("last", "Last ")}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </SectionActions>
          </SectionHeader>

          <SectionContent className="bg-card border-input flex flex-col gap-10 rounded-md border p-6 shadow-xs lg:flex-row">
            <PipelineSummaryChart
              chartConfig={chartConfig}
              aggregatedChartData={aggregatedChartData}
              totalStages={totalStages}
            />

            <PipelineSummaryOpportunities
              filteredOpportunities={filteredOpportunities}
            />
          </SectionContent>
        </Section>
      </div>
    </AppPage>
  );
}
