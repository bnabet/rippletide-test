import { ChartConfig } from "@/components/ui/chart";

export const chartConfig = {
  stages: {
    label: "Stages",
    color: "transparent",
  },
  newLeads: {
    label: "New leads",
    color: "hsl(var(--chart-1))",
  },
  qualified: {
    label: "Qualified",
    color: "hsl(var(--chart-2))",
  },
  proposal: {
    label: "Proposal",
    color: "hsl(var(--chart-3))",
  },
  negotiation: {
    label: "Negotiation",
    color: "hsl(var(--chart-4))",
  },
  other: {
    label: "Other",
    color: "hsl(var(--chart-5))",
  },
} satisfies ChartConfig;

export const RANGE_OPTIONS = ["lastWeek", "lastMonth", "lastYear"] as const;

export const OPPORTUNITY_STAGES = [
  "newLeads",
  "qualified",
  "proposal",
  "negotiation",
  "other",
] as const;
