import { StatsCard } from "@/components/StatsCard/StatsCard";
import { statsData } from "../data/data";

export function PipelineSummaryStats() {
  return (
    <div className="mb-10 grid grid-cols-1 content-start gap-6 lg:grid-cols-4">
      {statsData.map((card, index) => (
        <StatsCard
          key={index}
          title={card.title}
          value={card.value}
          icon={card.icon}
          statLabel={card.statLabel}
          statValue={card.statValue}
          isCurrency={card.isCurrency}
          isPercent={card.isPercent}
        />
      ))}
    </div>
  );
}
