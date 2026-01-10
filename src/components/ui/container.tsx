import { cn } from "@/lib/utils";

interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  size?: "default" | "narrow" | "wide" | "full";
}

const Container = ({
  children,
  className,
  size = "default",
  ...props
}: ContainerProps) => {
  const sizeClasses = {
    default: "container mx-auto px-4",
    narrow: "container mx-auto px-4 max-w-3xl",
    wide: "container mx-auto px-4 max-w-7xl",
    full: "w-full px-4",
  };

  return (
    <div className={cn(sizeClasses[size], className)} {...props}>
      {children}
    </div>
  );
};

export { Container };
