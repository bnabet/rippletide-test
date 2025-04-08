import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";

import { valueFormatter } from "../../utils/valueFormatter";

type StatsCardProps = {
  title: string;
  value: number;
  icon: React.ReactNode;
  statLabel: string;
  statValue?: number;
  isCurrency?: boolean;
  isPercent?: boolean;
};

export function StatsCard({
  title,
  value,
  icon,
  statLabel,
  statValue,
  isCurrency = false,
  isPercent = false,
}: StatsCardProps) {
  const handleStatValueColor = (value: number) => {
    if (value < 0) {
      return "text-red-600";
    }
    return "text-green-600";
  };

  const formatStatValue = (value: number) => {
    if (value < 0) {
      return `↓ ${Math.abs(value)}%`;
    }
    return `↑ ${value}%`;
  };

  return (
    <Card variant="stats">
      <CardContent>
        <div className="flex items-start justify-between">
          <div>
            <p className="text-muted-foreground text-sm font-semibold">
              {title}
            </p>
            <p className="text-foreground mt-1 text-3xl font-extrabold">
              {isCurrency
                ? valueFormatter.format(value)
                : isPercent
                  ? `${value}%`
                  : value}
            </p>
          </div>
          <div className="bg-muted rounded-md p-2">{icon}</div>
        </div>

        <div className="mt-2 flex items-center justify-between">
          <p className="text-muted-foreground text-xs font-medium">
            {statLabel}
          </p>
          {statValue && (
            <p
              className={cn(
                "text-xs font-medium",
                handleStatValueColor(statValue),
              )}
            >
              {formatStatValue(statValue)}
            </p>
          )}
        </div>
      </CardContent>
    </Card>
  );
}
