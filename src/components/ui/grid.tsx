import { cn } from "@/lib/utils";

interface GridProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  cols?: 1 | 2 | 3 | 4 | "auto";
  gap?: "sm" | "default" | "lg";
}

const Grid = ({
  children,
  className,
  cols = "auto",
  gap = "default",
  ...props
}: GridProps) => {
  const colClasses = {
    1: "grid-cols-1",
    2: "grid-cols-1 md:grid-cols-2",
    3: "grid-cols-1 md:grid-cols-2 lg:grid-cols-3",
    4: "grid-cols-1 md:grid-cols-2 lg:grid-cols-4",
    auto: "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3",
  };

  const gapClasses = {
    sm: "gap-4",
    default: "gap-6",
    lg: "gap-8",
  };

  return (
    <div
      className={cn("grid", colClasses[cols], gapClasses[gap], className)}
      {...props}
    >
      {children}
    </div>
  );
};

export { Grid };
