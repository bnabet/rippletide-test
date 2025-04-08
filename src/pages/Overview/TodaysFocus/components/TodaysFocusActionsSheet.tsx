import { JSX } from "react";
import { format } from "date-fns";
import { Clock } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

import { Task } from "@/types";
import { ActionBadge } from "./TodaysFocusActions";

type TodaysFocusActionsSheetProps = {
  tasks: Task[];
  getIcon: (type: string) => JSX.Element;
};

export function TodaysFocusActionsSheet({
  tasks,
  getIcon,
}: TodaysFocusActionsSheetProps) {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline" className="text-muted-foreground" size="sm">
          View all
        </Button>
      </SheetTrigger>

      <SheetContent
        side="right"
        className="w-[400px] sm:w-[500px] md:max-w-full"
      >
        <SheetHeader>
          <SheetTitle>Priority actions</SheetTitle>
          <SheetDescription>
            List of all tasks scheduled for today.
          </SheetDescription>
        </SheetHeader>

        <ul className="divide-muted divide-y overflow-auto p-6 pt-0">
          {tasks.map((task) => (
            <li
              key={task.id}
              className="flex items-center justify-between gap-2 py-4"
            >
              <div className="flex items-center gap-4">
                {getIcon(task.type)}
                <div className="flex flex-col gap-1">
                  <p className="text-foreground text-sm font-semibold">
                    {task.title}
                  </p>
                  <div className="text-muted-foreground flex items-center gap-1 text-xs">
                    <Clock className="size-3" />
                    {format(new Date(task.scheduled_at), "p")}
                  </div>
                </div>
              </div>

              <ActionBadge priority={task.priority} />
            </li>
          ))}
        </ul>
      </SheetContent>
    </Sheet>
  );
}
