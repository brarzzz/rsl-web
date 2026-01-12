import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Building2, Briefcase, Store, Factory, Landmark, Building } from "lucide-react";
import { useTranslation } from "@/i18n/LanguageContext";

const LogoWall = () => {
  const { t } = useTranslation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  // Placeholder logos with different icons to simulate variety
  const placeholderLogos = [
    { icon: Building2, name: "Empresa A" },
    { icon: Briefcase, name: "Corporativo B" },
    { icon: Store, name: "Comercial C" },
    { icon: Factory, name: "Industrial D" },
    { icon: Landmark, name: "Financiera E" },
    { icon: Building, name: "Grupo F" },
  ];

  return (
    <section className="py-16 bg-muted/30" ref={ref} aria-labelledby="logo-wall-title">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-10"
        >
          <p id="logo-wall-title" className="text-sm text-muted-foreground uppercase tracking-wider font-medium">
            {t.logoWall.title}
          </p>
        </motion.div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 items-center">
          {placeholderLogos.map((logo, index) => {
            const IconComponent = logo.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className="group flex items-center justify-center h-20 px-6 bg-background rounded-lg border border-border/50 
                           grayscale hover:grayscale-0 opacity-60 hover:opacity-100 
                           transition-all duration-300 ease-in-out cursor-pointer
                           hover:border-accent/30 hover:shadow-md"
                role="img"
                aria-label={`${t.logoWall.placeholder} - ${logo.name}`}
              >
                <div className="flex flex-col items-center gap-1 text-muted-foreground group-hover:text-accent transition-colors duration-300">
                  <IconComponent className="h-8 w-8" aria-hidden="true" />
                  <span className="text-[10px] font-medium uppercase tracking-wide">{t.logoWall.placeholder}</span>
                </div>
              </motion.div>
            );
          })}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-center text-xs text-muted-foreground mt-6 italic"
        >
          {t.logoWall.comingSoon || "Logos de clientes próximamente"}
        </motion.p>
      </div>
    </section>
  );
};

export default LogoWall;
