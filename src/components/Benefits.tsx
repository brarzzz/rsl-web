import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Shield, MessageSquare, Clock, FileCheck } from "lucide-react";
import { useTranslation } from "@/i18n/LanguageContext";

const Benefits = () => {
  const { t } = useTranslation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const benefits = [
    {
      icon: Shield,
      title: t.benefits.preventive.title,
      description: t.benefits.preventive.description,
    },
    {
      icon: MessageSquare,
      title: t.benefits.communication.title,
      description: t.benefits.communication.description,
    },
    {
      icon: Clock,
      title: t.benefits.response.title,
      description: t.benefits.response.description,
    },
    {
      icon: FileCheck,
      title: t.benefits.documentation.title,
      description: t.benefits.documentation.description,
    },
  ];

  return (
    <section className="py-20 bg-secondary" ref={ref} id="por-que-rsl">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <span className="inline-block px-3 py-1 mb-4 text-xs font-medium bg-primary/10 text-primary rounded-full">
            {t.benefits.badge}
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-foreground mb-4">
            {t.benefits.title}
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            {t.benefits.subtitle}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((benefit, index) => (
            <motion.div
              key={benefit.title}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-background rounded-xl p-6 shadow-sm border border-border hover:shadow-md transition-shadow"
            >
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                <benefit.icon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-semibold text-lg text-foreground mb-2">
                {benefit.title}
              </h3>
              <p className="text-sm text-muted-foreground">
                {benefit.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;
