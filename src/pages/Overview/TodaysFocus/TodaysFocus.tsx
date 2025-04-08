import { ArrowRight, CircleAlert, SparklesIcon } from "lucide-react";

import { AppPage } from "@/layouts/AppPage";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";

import { PageLoader } from "@/components/Loader/PageLoader";
import { PageError } from "@/components/Error/PageError";
import { TodaysFocusStats } from "./components/TodaysFocusStats";
import { TodaysFocusActions } from "./components/TodaysFocusActions";
import { TodaysFocusSchedule } from "./components/TodaysFocusSchedule";
import { TodaysFocusChartLeads } from "./components/TodaysFocusChartLeads";
import { TodaysFocusChartSales } from "./components/TodaysFocusChartSales";

import { remindersData, teamActivitiesData } from "./data/data";
import { useGetLeads } from "@/hooks/useGetLeads";
import { useGetTasks } from "@/hooks/useGetTasks";
import { useMultiQueryStatus } from "@/hooks/useMultiQueryStatus";
import { useGetPipelineValue } from "@/hooks/useGetPipelineValue";

export function TodaysFocus() {
  const leadsQuery = useGetLeads();
  const tasksQuery = useGetTasks();
  const pipelineQuery = useGetPipelineValue();

  const { isLoading, hasError, errors, refetchAll } = useMultiQueryStatus([
    leadsQuery,
    tasksQuery,
    pipelineQuery,
  ]);

  const leads = leadsQuery.data ?? [];
  const tasks = tasksQuery.data ?? [];
  const opportunities = pipelineQuery.data ?? [];

  if (isLoading) {
    return (
      <PageLoader
        title="Loading Today's Focus"
        description="Please wait while we load your tasks for today"
      />
    );
  }

  if (hasError) {
    return <PageError errors={errors} resetError={refetchAll} />;
  }

  return (
    <AppPage title="Today's Focus" description="Your tasks for today">
      <div className="grid grid-cols-1 gap-10 lg:grid-cols-3">
        {/* Left column */}
        <div className="space-y-10 lg:col-span-2">
          <TodaysFocusStats
            leads={leads}
            tasks={tasks}
            opportunities={opportunities}
          />
          <TodaysFocusActions />
          <TodaysFocusSchedule />

          <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
            <TodaysFocusChartLeads />
            <TodaysFocusChartSales />
          </div>
        </div>

        {/* Right column */}
        <div className="flex flex-col gap-6 lg:col-span-1">
          {/* AI Tip of the Day */}
          <Card severity="warning">
            <CardHeader>
              <CardTitle>
                <div className="bg-secondary rounded-md p-2">
                  <SparklesIcon className="size-4 text-white" />
                </div>
                AI Tip of the Day
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-md mb-2 font-semibold">
                Follow up with TechCorp Inc.
              </p>
              <div className="text-muted-foreground text-sm">
                Based on their recent website visit patterns and email
                engagement, they show strong buying signals. Consider scheduling
                a demo this week.
              </div>
            </CardContent>
            <CardFooter>
              <Button variant="secondary" className="w-full">
                Schedule demo
                <ArrowRight className="size-4" />
              </Button>
            </CardFooter>
          </Card>

          {/* Team Activity */}
          <Card>
            <CardHeader>
              <CardTitle>Team Activity</CardTitle>
            </CardHeader>
            <CardContent className="flex flex-col gap-3">
              {teamActivitiesData.map((activity, idx) => (
                <div key={idx} className="flex items-center gap-3">
                  <div className="bg-muted flex size-8 items-center justify-center rounded-md">
                    {activity.icon}
                  </div>
                  <p className="text-sm">{activity.text}</p>
                </div>
              ))}
            </CardContent>
          </Card>

          {/* Reminders */}
          <Card severity="warning">
            <CardHeader>
              <CardTitle>
                <div className="bg-secondary rounded-md p-2">
                  <CircleAlert className="size-4 text-white" />
                </div>
                Reminders
              </CardTitle>
            </CardHeader>
            <CardContent className="flex flex-col gap-2">
              {remindersData.map((reminder, idx) => (
                <div
                  key={idx}
                  className="text-muted-foreground flex items-center gap-2 text-sm font-medium"
                >
                  {reminder.icon}
                  <p>{reminder.text}</p>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>
      </div>
    </AppPage>
  );
}
