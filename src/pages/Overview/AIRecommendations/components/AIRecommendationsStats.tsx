import { Button } from "@/components/ui/button";
import { statsData } from "../data/data";
import { ChevronRight } from "lucide-react";

export function AIRecommendationsStats() {
  return (
    <div className="border-inpput grid grid-cols-1 content-start items-center gap-6 rounded-md border lg:grid-cols-4">
      {statsData.map((card, index) => (
        <div key={index}>
          <div className="flex items-center gap-4 p-4">
            <div className="bg-primary flex h-12 w-12 items-center justify-center rounded-md text-white">
              {card.icon}
            </div>
            <div>
              <h3 className="text-sm font-medium">{card.title}</h3>
              <p className="text-2xl font-bold">
                {card.isPercent ? `${card.value}%` : card.value}
              </p>
            </div>
          </div>
        </div>
      ))}

      <Button variant="link">
        View Details
        <ChevronRight className="size-4" />
      </Button>
    </div>
  );
}
