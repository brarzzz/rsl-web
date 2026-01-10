import { cn } from "@/lib/utils";

interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  children: React.ReactNode;
  variant?: "default" | "primary" | "secondary" | "muted";
  size?: "sm" | "default" | "lg";
  id?: string;
}

const Section = ({
  children,
  className,
  variant = "default",
  size = "default",
  id,
  ...props
}: SectionProps) => {
  const variantClasses = {
    default: "bg-background",
    primary: "bg-primary",
    secondary: "bg-secondary",
    muted: "bg-muted",
  };

  const sizeClasses = {
    sm: "py-12 md:py-16",
    default: "py-16 md:py-20 lg:py-24",
    lg: "py-20 md:py-28 lg:py-32",
  };

  return (
    <section
      id={id}
      className={cn(variantClasses[variant], sizeClasses[size], className)}
      {...props}
    >
      {children}
    </section>
  );
};

interface SectionHeaderProps {
  badge?: string;
  title: string;
  subtitle?: string;
  alignment?: "left" | "center";
  variant?: "default" | "light";
  className?: string;
}

const SectionHeader = ({
  badge,
  title,
  subtitle,
  alignment = "center",
  variant = "default",
  className,
}: SectionHeaderProps) => {
  const alignmentClasses = {
    left: "text-left",
    center: "text-center mx-auto",
  };

  const textClasses = {
    default: {
      badge: "text-accent bg-accent/10",
      title: "text-foreground",
      subtitle: "text-muted-foreground",
    },
    light: {
      badge: "text-accent bg-accent/20",
      title: "text-primary-foreground",
      subtitle: "text-primary-foreground/80",
    },
  };

  return (
    <div className={cn("mb-12 md:mb-16 max-w-3xl", alignmentClasses[alignment], className)}>
      {badge && (
        <span
          className={cn(
            "inline-block px-3 py-1 text-sm font-medium rounded-full mb-4",
            textClasses[variant].badge
          )}
        >
          {badge}
        </span>
      )}
      <h2
        className={cn(
          "font-serif text-3xl sm:text-4xl lg:text-5xl font-bold mb-4",
          textClasses[variant].title
        )}
      >
        {title}
      </h2>
      {subtitle && (
        <p className={cn("text-lg", textClasses[variant].subtitle)}>
          {subtitle}
        </p>
      )}
    </div>
  );
};

export { Section, SectionHeader };
