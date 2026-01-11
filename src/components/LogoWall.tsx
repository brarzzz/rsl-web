import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Building2 } from "lucide-react";
import { useTranslation } from "@/i18n/LanguageContext";

const LogoWall = () => {
  const { t } = useTranslation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  // Placeholder logos - will be replaced with actual client logos
  const placeholderLogos = [1, 2, 3, 4, 5, 6];

  return (
    <section className="py-16 bg-muted/30" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-10"
        >
          <p className="text-sm text-muted-foreground uppercase tracking-wider">
            {t.logoWall.title}
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center">
          {placeholderLogos.map((_, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 10 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              className="flex items-center justify-center h-16 px-4 bg-background rounded-lg border border-border/50 opacity-60 hover:opacity-100 transition-opacity"
            >
              <div className="flex items-center gap-2 text-muted-foreground">
                <Building2 className="h-6 w-6" />
                <span className="text-xs font-medium">{t.logoWall.placeholder}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LogoWall;
