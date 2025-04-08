import { Card, CardContent } from "@/components/ui/card";
import { cn, valueFormatter } from "@/lib/utils";

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
    if (value > 0) return "text-green-500";
    if (value < 0) return "text-red-500";
    return "text-muted-foreground";
  };

  const formatStatValue = (value: number) => {
    if (value > 0) return `↑ ${value}`;
    if (value < 0) return `↓ ${Math.abs(value)}`;
    return "0";
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
          {statValue !== undefined && statValue !== null && (
            <p
              className={cn(
                "text-xs font-medium",
                handleStatValueColor(statValue),
              )}
            >
              {formatStatValue(statValue)}%
            </p>
          )}
        </div>
      </CardContent>
    </Card>
  );
}
