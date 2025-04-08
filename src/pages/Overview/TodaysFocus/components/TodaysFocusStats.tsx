import { PhoneIcon } from "lucide-react";

import { statsData } from "../data/data";
import { StatsCard } from "@/components/StatsCard/StatsCard";
import { Lead } from "@/types";

import { useLeadsStats } from "../hooks/useLeadsStats";

type TodaysFocusStatsProps = {
  leads: Lead[];
};

export function TodaysFocusStats({ leads }: TodaysFocusStatsProps) {
  const { leadsToContact } = useLeadsStats(leads);

  const tempStatsData = [
    {
      title: "Leads to contact",
      value: leadsToContact.count,
      statLabel: "Due today",
      statValue: Number(Math.abs(leadsToContact.delta).toFixed(0)),
      icon: <PhoneIcon className="text-foreground size-4" />,
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
