import { CartesianGrid, XAxis, Bar, BarChart } from "recharts";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";

import { salesData } from "../data/data";
import { TrendingUp } from "lucide-react";

const chartConfig2 = {
  inbound: {
    label: "Inbound",
    color: "hsl(var(--chart-1))",
  },
  outbound: {
    label: "Outbound",
    color: "hsl(var(--chart-2))",
  },
} satisfies ChartConfig;

export function TodaysFocusChartSales() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Sales Conversion – Monthly Breakdown</CardTitle>
        <CardDescription>
          Tracking lead conversion across all pipeline stages
        </CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig2}>
          <BarChart accessibilityLayer data={salesData}>
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="month"
              tickLine={false}
              tickMargin={10}
              axisLine={false}
              tickFormatter={(value) => value.slice(0, 3)}
            />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent indicator="dashed" />}
            />
            <Bar dataKey="inbound" fill="var(--color-inbound)" radius={4} />
            <Bar dataKey="outbound" fill="var(--color-outbound)" radius={4} />
          </BarChart>
        </ChartContainer>
      </CardContent>
      <CardFooter className="flex-col items-start gap-2 text-sm">
        <div className="flex gap-2 leading-none font-medium">
          5.2% more opportunities unlocked
          <TrendingUp className="size-4" />
        </div>
        <div className="text-muted-foreground leading-none">
          October – March 2025
        </div>
      </CardFooter>
    </Card>
  );
}
