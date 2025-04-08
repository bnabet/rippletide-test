import { statsData } from "../data/data";
import { StatsCard } from "@/components/StatsCard/StatsCard";

export function TodaysFocusStats() {
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
