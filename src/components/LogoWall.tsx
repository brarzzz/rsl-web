import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Building2, Briefcase, Store, Factory, Landmark, Building, LucideIcon } from "lucide-react";
import { useTranslation } from "@/i18n/LanguageContext";

export interface LogoItem {
  src?: string;
  alt: string;
  url?: string;
  icon?: LucideIcon;
}

export interface LogoWallProps {
  title?: string;
  cols?: number;
  logos?: LogoItem[];
  placeholderLabel?: string;
  comingSoonText?: string;
}

const defaultLogos: LogoItem[] = [
  { icon: Building2, alt: "Empresa A" },
  { icon: Briefcase, alt: "Corporativo B" },
  { icon: Store, alt: "Comercial C" },
  { icon: Factory, alt: "Industrial D" },
  { icon: Landmark, alt: "Financiera E" },
  { icon: Building, alt: "Grupo F" },
];

const LogoWall = (props: LogoWallProps) => {
  const { t } = useTranslation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const {
    title = t.logoWall.title,
    cols = 6,
    logos = defaultLogos,
    placeholderLabel = t.logoWall.placeholder,
    comingSoonText = t.logoWall.comingSoon || "Logos de clientes próximamente",
  } = props;

  const gridColsClass = {
    2: "grid-cols-2",
    3: "grid-cols-2 sm:grid-cols-3",
    4: "grid-cols-2 sm:grid-cols-3 md:grid-cols-4",
    5: "grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5",
    6: "grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6",
  }[cols] || "grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6";

  return (
    <section className="py-16 bg-muted/30" ref={ref} aria-labelledby="logo-wall-title">
      <div className="container mx-auto px-4">
        {title && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="text-center mb-10"
          >
            <p id="logo-wall-title" className="text-sm text-muted-foreground uppercase tracking-wider font-medium">
              {title}
            </p>
          </motion.div>
        )}

        <div className={`grid ${gridColsClass} gap-6 items-center`}>
          {logos.map((logo, index) => {
            const IconComponent = logo.icon;
            const content = (
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
                aria-label={logo.alt}
              >
                {logo.src ? (
                  <img 
                    src={logo.src} 
                    alt={logo.alt} 
                    className="max-h-12 max-w-full object-contain"
                    loading="lazy"
                  />
                ) : IconComponent ? (
                  <div className="flex flex-col items-center gap-1 text-muted-foreground group-hover:text-accent transition-colors duration-300">
                    <IconComponent className="h-8 w-8" aria-hidden="true" />
                    <span className="text-[10px] font-medium uppercase tracking-wide">{placeholderLabel}</span>
                  </div>
                ) : (
                  <span className="text-sm text-muted-foreground">{logo.alt}</span>
                )}
              </motion.div>
            );

            if (logo.url) {
              return (
                <a key={index} href={logo.url} target="_blank" rel="noopener noreferrer">
                  {content}
                </a>
              );
            }

            return content;
          })}
        </div>

        {comingSoonText && (
          <motion.p
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="text-center text-xs text-muted-foreground mt-6 italic"
          >
            {comingSoonText}
          </motion.p>
        )}
      </div>
    </section>
  );
};

export default LogoWall;
