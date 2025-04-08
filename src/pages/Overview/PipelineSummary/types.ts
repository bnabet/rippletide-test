import { OPPORTUNITY_STAGES, RANGE_OPTIONS } from "./config";

export type RangeOption = (typeof RANGE_OPTIONS)[number];

export type OpportunityStage = (typeof OPPORTUNITY_STAGES)[number];

export type Opportunity = {
  id: string;
  company: string;
  amount: number;
  stage: OpportunityStage;
  score: number;
  created_at: string;
};

export type AggregatedChartDataEntry = {
  browser: string;
  stages: number;
  fill: string;
};
