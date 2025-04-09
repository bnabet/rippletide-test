import { ListChecks, PhoneIcon, TrendingUp } from "lucide-react";

import { StatsCard } from "@/components/StatsCard/StatsCard";
import { Lead, Opportunity, Task } from "@/types";

import { useLeadsStats } from "../hooks/useLeadsStats";
import { useTasksStats } from "../hooks/useTasksStats";
import { usePipelineValueStats } from "../hooks/usePipelineValueStats";

type TodaysFocusStatsProps = {
  leads: Lead[];
  tasks: Task[];
  opportunities: Opportunity[];
};

export function TodaysFocusStats({
  leads,
  tasks,
  opportunities,
}: TodaysFocusStatsProps) {
  const { leadsToContact } = useLeadsStats(leads);
  const { highPriorityCount, delta } = useTasksStats(tasks);
  const { value: pipelineValue, delta: pipelineDelta } =
    usePipelineValueStats(opportunities);

  const tempStatsData = [
    {
      title: "Leads to contact",
      value: leadsToContact.count,
      statLabel: "Due today",
      statValue: Number(Math.abs(leadsToContact.delta).toFixed(0)),
      icon: <PhoneIcon className="text-foreground size-4" />,
      isCurrency: false,
    },
    {
      title: "Tasks due",
      value: highPriorityCount,
      statLabel: "High priority",
      statValue: Number(Math.abs(delta).toFixed(0)),
      icon: <ListChecks className="text-foreground size-4" />,
      isCurrency: false,
    },
    {
      title: "Pipeline value",
      value: pipelineValue,
      statLabel: "Active opportunities",
      statValue: Number(Math.abs(pipelineDelta).toFixed(0)),
      icon: <TrendingUp className="text-foreground size-4" />,
      isCurrency: true,
    },
  ];

  return (
    <section className="grid grid-cols-1 content-start gap-6 md:grid-cols-3">
      {tempStatsData.map((card, index) => (
        <StatsCard
          key={index}
          title={card.title}
          value={card.value}
          icon={card.icon}
          statLabel={card.statLabel}
          statValue={card.statValue}
          isCurrency={card.isCurrency}
        />
      ))}
    </section>
  );
}
