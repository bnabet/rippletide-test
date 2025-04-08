import { Award, Clock, Target, TrendingUp } from "lucide-react";
import { Opportunity } from "../types";

export const statsData = [
  {
    title: "Total Active Leads",
    value: 127,
    icon: <Target className="text-foreground size-4" />,
    statLabel: "Due today",
  },
  {
    title: "Win rate",
    value: 32,
    icon: <Award className="text-foreground size-4" />,
    statLabel: "Last 30 days",
    statValue: 5,
    isPercent: true,
  },
  {
    title: "Avg. days in stage",
    value: 18,
    icon: <Clock className="text-foreground size-4" />,
    statLabel: "All stages",
    statValue: -2,
  },
  {
    title: "Pipeline value",
    value: 2400000,
    icon: <TrendingUp className="text-foreground size-4" />,
    statLabel: "Expected revenue",
    statValue: 15,
    isCurrency: true,
  },
];

export const opportunitiesMock: Opportunity[] = [
  {
    id: "1",
    company: "Stark Industries",
    amount: 1200000,
    stage: "negotiation",
    score: 85,
    created_at: "2025-04-02",
  },
  {
    id: "2",
    company: "Wayne Enterprises",
    amount: 800000,
    stage: "negotiation",
    score: 90,
    created_at: "2025-03-14",
  },
  {
    id: "3",
    company: "Queen Industries",
    amount: 750000,
    stage: "proposal",
    score: 60,
    created_at: "2025-02-01",
  },
  {
    id: "4",
    company: "LexCorp",
    amount: 550000,
    stage: "qualified",
    score: 35,
    created_at: "2024-12-22",
  },
  {
    id: "5",
    company: "Daily Planet",
    amount: 450000,
    stage: "proposal",
    score: 75,
    created_at: "2024-06-18",
  },
  {
    id: "6",
    company: "Oscorp",
    amount: 950000,
    stage: "newLeads",
    score: 65,
    created_at: "2024-04-10",
  },
];
