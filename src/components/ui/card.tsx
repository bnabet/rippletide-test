import * as React from "react";
import { cva, VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const cardVariants = cva(
  "text-card-foreground flex flex-col rounded-md shadow-md",
  {
    variants: {
      variant: {
        default: "bg-card border",
        stats: "bg-card border bg-white",
      },
      severity: {
        default: "",
        warning: "bg-secondary/15 border-0",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  },
);

type CardVariant = VariantProps<typeof cardVariants>["variant"];

interface CardProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof cardVariants> {}

const CardContext = React.createContext<{ variant?: CardVariant }>({});
const useCardContext = () => React.useContext(CardContext);

const Card = React.forwardRef<HTMLDivElement, CardProps>(
  ({ className, variant = "default", severity, children, ...props }, ref) => (
    <CardContext.Provider value={{ variant }}>
      <div
        ref={ref}
        data-slot="card"
        className={cn(cardVariants({ variant, severity }), className)}
        {...props}
      >
        {children}
      </div>
    </CardContext.Provider>
  ),
);

function CardHeader({ className, ...props }: React.ComponentProps<"div">) {
  const { variant } = useCardContext();

  const variantClasses = {
    default: "flex flex-col p-6",
    stats: "",
  };

  return (
    <div
      data-slot="card-header"
      className={cn(
        "@container/card-header grid auto-rows-min grid-rows-[auto_auto] items-start gap-1.5 has-data-[slot=card-action]:grid-cols-[1fr_auto] [.border-b]:pb-6",
        variant && variantClasses[variant],
        className,
      )}
      {...props}
    />
  );
}

function CardTitle({ className, ...props }: React.ComponentProps<"div">) {
  const { variant } = useCardContext();

  const variantClasses = {
    default: "flex items-center gap-3",
    stats: "",
  };

  return (
    <div
      data-slot="card-title"
      className={cn(
        "leading-none font-bold",
        variant && variantClasses[variant],
        className,
      )}
      {...props}
    />
  );
}

function CardDescription({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-description"
      className={cn("text-muted-foreground text-sm", className)}
      {...props}
    />
  );
}

function CardAction({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-action"
      className={cn(
        "col-start-2 row-span-2 row-start-1 self-start justify-self-end",
        className,
      )}
      {...props}
    />
  );
}

function CardContent({ className, ...props }: React.ComponentProps<"div">) {
  const { variant } = useCardContext();

  const variantClasses = {
    default: "pt-0 gap-2 pt-0",
    stats: "flex flex-col gap-2",
  };

  return (
    <div
      data-slot="card-content"
      className={cn("p-6", variant && variantClasses[variant], className)}
      {...props}
    />
  );
}

function CardFooter({ className, ...props }: React.ComponentProps<"div">) {
  const { variant } = useCardContext();

  const variantClasses = {
    default: "p-6 pt-0",
    stats: "",
  };

  return (
    <div
      data-slot="card-footer"
      className={cn(
        "flex items-center [.border-t]:pt-6",
        variant && variantClasses[variant],
        className,
      )}
      {...props}
    />
  );
}

export {
  Card,
  CardHeader,
  CardFooter,
  CardTitle,
  CardAction,
  CardDescription,
  CardContent,
  useCardContext,
};
