import { Star } from "lucide-react";

import { Opportunity } from "../types";

type PipelineSummaryOpportunitiesProps = {
  filteredOpportunities: Opportunity[];
};

function OpportuniyItem({
  position,
  company,
  amount,
  score,
}: Omit<Opportunity, "id" | "stage" | "created_at"> & { position: number }) {
  return (
    <div className="flex items-center gap-4 py-3">
      <div className="flex min-w-0 flex-1 items-center gap-4">
        <div className="bg-muted text-foreground/70 flex size-8 items-center justify-center rounded-full text-sm font-semibold">
          {position + 1}
        </div>
        <div className="min-w-0">
          <div className="truncate text-sm font-medium">{company}</div>
          <div className="text-muted-foreground mt-0.5 flex items-center gap-1 text-xs">
            <span>
              {amount.toLocaleString("en-US", {
                style: "currency",
                currency: "USD",
              })}
            </span>
          </div>
        </div>
      </div>

      <div className="flex items-center justify-end space-x-2 text-sm font-semibold text-yellow-500">
        <Star className="size-4 fill-yellow-500" />
        <span>{score}</span>
      </div>
    </div>
  );
}

export function PipelineSummaryOpportunities({
  filteredOpportunities,
}: PipelineSummaryOpportunitiesProps) {
  return (
    <div className="flex-1 space-y-4">
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-semibold">Top Opportunities</h3>
        <button className="text-muted-foreground text-sm hover:underline">
          View All
        </button>
      </div>

      <div className="space-y-3">
        {filteredOpportunities.map((opp, idx) => (
          <OpportuniyItem
            key={opp.id}
            position={idx}
            company={opp.company}
            amount={opp.amount}
            score={opp.score}
          />
        ))}
      </div>
    </div>
  );
}
