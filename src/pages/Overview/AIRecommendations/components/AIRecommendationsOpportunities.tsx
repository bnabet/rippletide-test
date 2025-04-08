import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";

type AIRecommendationsOpportunitiesProps = {
  opportunitiesData: {
    id: string;
    name: string;
    company: string;
    match: number;
    highlights: {
      label: string;
      datetime: string;
      icon: React.ReactNode;
    }[];
  }[];
};

export function AIRecommendationsOpportunities({
  opportunitiesData,
}: AIRecommendationsOpportunitiesProps) {
  return (
    <div className="divide-muted divide-y">
      {opportunitiesData.map((opp) => (
        <div key={opp.id} className="flex items-center py-6">
          <div className="flex-1">
            <div className="mb-4 grid grid-cols-1 gap-4 md:grid-cols-2">
              <div className="flex flex-col">
                <div className="font-bold">{opp.name}</div>
                <div className="text-muted-foreground text-sm font-medium">
                  {opp.company}
                </div>
              </div>
              <div>
                <Badge variant="default">{opp.match}% Match</Badge>
              </div>
            </div>

            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
              {opp.highlights.map((item, idx) => (
                <div key={idx} className="flex items-center space-x-2">
                  {item.icon}
                  <div className="flex flex-col">
                    <span className="text-sm font-medium">{item.label}</span>
                    <span className="text-muted-foreground text-xs">
                      {new Date(item.datetime).toLocaleDateString()}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <Button variant="link" size="icon">
            <ChevronRight />
          </Button>
        </div>
      ))}
    </div>
  );
}
