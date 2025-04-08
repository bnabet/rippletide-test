import { ListChecks, PhoneIcon } from "lucide-react";

import { statsData } from "../data/data";
import { StatsCard } from "@/components/StatsCard/StatsCard";
import { Lead, Task } from "@/types";

import { useLeadsStats } from "../hooks/useLeadsStats";
import { useTasksStats } from "../hooks/useTasksStats";

type TodaysFocusStatsProps = {
  leads: Lead[];
  tasks: Task[];
};

export function TodaysFocusStats({ leads, tasks }: TodaysFocusStatsProps) {
  const { leadsToContact } = useLeadsStats(leads);
  const { highPriorityCount, delta } = useTasksStats(tasks);

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
  ];

  console.log(tempStatsData);

  return (
    <div className="mb-10 grid grid-cols-1 content-start gap-6 md:grid-cols-3">
      {statsData.map((card, index) => (
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
    </div>
  );
}
