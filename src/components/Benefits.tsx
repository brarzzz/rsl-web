import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Shield, MessageSquare, Clock, FileCheck, LucideIcon } from "lucide-react";
import { useTranslation } from "@/i18n/LanguageContext";

export interface BenefitItem {
  icon?: LucideIcon;
  title: string;
  text: string;
}

export interface BenefitsProps {
  badge?: string;
  title?: string;
  subtitle?: string;
  items?: BenefitItem[];
}

const Benefits = (props: BenefitsProps) => {
  const { t } = useTranslation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  // Default items from translations
  const defaultItems: BenefitItem[] = [
    {
      icon: Shield,
      title: t.benefits.preventive.title,
      text: t.benefits.preventive.description,
    },
    {
      icon: MessageSquare,
      title: t.benefits.communication.title,
      text: t.benefits.communication.description,
    },
    {
      icon: Clock,
      title: t.benefits.response.title,
      text: t.benefits.response.description,
    },
    {
      icon: FileCheck,
      title: t.benefits.documentation.title,
      text: t.benefits.documentation.description,
    },
  ];

  const {
    badge = t.benefits.badge,
    title = t.benefits.title,
    subtitle = t.benefits.subtitle,
    items = defaultItems,
  } = props;

  return (
    <section className="py-20 bg-secondary" ref={ref} id="por-que-rsl">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          {badge && (
            <span className="inline-block px-3 py-1 mb-4 text-xs font-medium bg-primary/10 text-primary rounded-full">
              {badge}
            </span>
          )}
          {title && (
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-foreground mb-4">
              {title}
            </h2>
          )}
          {subtitle && (
            <p className="text-muted-foreground max-w-2xl mx-auto">
              {subtitle}
            </p>
          )}
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map((item, index) => {
            const Icon = item.icon || Shield;
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-background rounded-xl p-6 shadow-sm border border-border hover:shadow-md transition-shadow"
              >
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <Icon className="h-6 w-6 text-primary" aria-hidden="true" />
                </div>
                <h3 className="font-semibold text-lg text-foreground mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {item.text}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Benefits;
