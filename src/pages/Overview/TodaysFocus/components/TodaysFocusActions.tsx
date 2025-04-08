import { Button } from "@/components/ui/button";
import { ChevronRight, Clock } from "lucide-react";
import { actionsData } from "../data/data";
import { Badge } from "@/components/ui/badge";

export function TodaysFocusActions() {
  return (
    <div>
      <div className="mb-2 flex items-center justify-between">
        <h3 className="text-foreground text-xl font-bold">Priority Actions</h3>
        <Button variant="link" className="text-muted-foreground">
          View Timeline
          <ChevronRight className="text-muted-foreground size-4" />
        </Button>
      </div>

      <ul className="divide-muted divide-y">
        {actionsData.map((action, idx) => (
          <li key={idx} className="flex items-center justify-between py-4">
            <div className="flex items-center gap-4">
              {action.icon}
              <div className="flex flex-col gap-1">
                <p className="text-foreground text-sm font-semibold">
                  {action.label}
                </p>
                <div className="text-muted-foreground flex items-center gap-1 text-xs">
                  <Clock className="size-3" />
                  {action.time}
                </div>
              </div>
            </div>

            <Badge
              variant="outline"
              className={
                action.priority === "high"
                  ? "bg-red-100 text-red-700"
                  : action.priority === "medium"
                    ? "bg-yellow-100 text-yellow-700"
                    : "bg-green-100 text-green-700"
              }
            >
              {action.priority}
            </Badge>
          </li>
        ))}
      </ul>
    </div>
  );
}
