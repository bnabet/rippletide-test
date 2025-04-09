import { format } from "date-fns";
import { CheckSquare, Clock, Mail, Phone } from "lucide-react";

import { cn } from "@/lib/utils";

import { Badge } from "@/components/ui/badge";

import {
  Section,
  SectionHeader,
  SectionTitle,
  SectionActions,
  SectionContent,
} from "@/components/Section/Section";
import { TodaysFocusActionsSheet } from "./TodaysFocusActionsSheet";

import { useGetTodaysTasks } from "@/hooks/useGetTodaysTasks";

export function ActionBadge({ priority }: { priority: string }) {
  return (
    <Badge
      variant="outline"
      className={cn({
        "bg-red-50 text-red-700": priority === "high",
        "bg-yellow-50 text-yellow-700": priority === "medium",
        "bg-green-50 text-green-700": priority === "low",
      })}
    >
      {priority}
    </Badge>
  );
}

export function TodaysFocusActions() {
  const { data: tasks = [] } = useGetTodaysTasks();

  const getIcon = (type: string) => {
    switch (type) {
      case "call":
        return <Phone className="size-4" />;
      case "email":
        return <Mail className="size-4" />;
      default:
        return <CheckSquare className="size-4" />;
    }
  };

  const sortedTasks = tasks.sort(
    (a, b) =>
      new Date(a.scheduled_at).getTime() - new Date(b.scheduled_at).getTime(),
  );

  return (
    <Section>
      <SectionHeader>
        <SectionTitle>Priority Actions</SectionTitle>
        <SectionActions>
          <TodaysFocusActionsSheet tasks={tasks} getIcon={getIcon} />
        </SectionActions>
      </SectionHeader>

      <SectionContent>
        <ul className="divide-muted divide-y">
          {sortedTasks.slice(0, 3).map((task) => (
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
      </SectionContent>
    </Section>
  );
}
