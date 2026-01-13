import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Link } from "react-router-dom";
import { Shield, Building2, Home, Users, FileText, ArrowRight, Star, LucideIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTranslation } from "@/i18n/LanguageContext";

export interface ServiceItem {
  icon?: LucideIcon;
  title: string;
  text: string;
  star?: boolean;
  slug?: string;
}

export interface ServicesProps {
  badge?: string;
  title?: string;
  subtitle?: string;
  items?: ServiceItem[];
  ctaText?: string;
  ctaHref?: string;
  featuredLabel?: string;
  viewMoreLabel?: string;
}

const defaultIcons: Record<string, LucideIcon> = {
  prevention: Shield,
  commercial: Building2,
  civil: Home,
  family: Users,
  contracts: FileText,
};

const Services = (props: ServicesProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const { t } = useTranslation();

  // Build default items from translations
  const defaultItems: ServiceItem[] = ['prevention', 'commercial', 'civil', 'family', 'contracts'].map((key) => ({
    icon: defaultIcons[key],
    title: t.services.items[key]?.name || key,
    text: t.services.items[key]?.description || '',
    star: ['prevention', 'commercial', 'civil', 'family'].includes(key),
    slug: key,
  }));

  const {
    badge = t.services.badge,
    title = t.services.title,
    subtitle = t.services.subtitle,
    items = defaultItems,
    ctaText = t.services.cta,
    ctaHref = "#contacto",
    featuredLabel = t.services.featured,
    viewMoreLabel = t.services.viewArea,
  } = props;

  return (
    <section id="servicios" className="py-20 bg-background" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          {badge && (
            <span className="inline-block px-3 py-1 text-sm font-medium text-accent bg-accent/10 rounded-full mb-4">
              {badge}
            </span>
          )}
          {title && (
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
              {title}
            </h2>
          )}
          {subtitle && (
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              {subtitle}
            </p>
          )}
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((item, index) => {
            const Icon = item.icon || Shield;
            
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative p-6 rounded-xl border border-border bg-card hover:border-accent/50 hover:shadow-lg transition-all duration-300"
              >
                {item.star && featuredLabel && (
                  <span className="absolute top-4 right-4 inline-flex items-center gap-1 px-2 py-0.5 text-xs font-medium bg-gold/10 text-gold rounded">
                    <Star className="h-3 w-3 fill-gold" aria-hidden="true" />
                    {featuredLabel}
                  </span>
                )}
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-accent/20 transition-colors">
                  <Icon className="h-6 w-6 text-primary group-hover:text-accent transition-colors" aria-hidden="true" />
                </div>
                <h3 className="font-serif text-xl font-bold text-foreground mb-2">
                  {item.title}
                </h3>
                <p className="text-muted-foreground mb-4">{item.text}</p>
                {item.slug && viewMoreLabel && (
                  <Link
                    to={`/areas-de-practica#${item.slug}`}
                    className="inline-flex items-center gap-1 text-sm font-medium text-primary hover:text-accent transition-colors"
                    aria-label={`Ver más sobre ${item.title}`}
                  >
                    {viewMoreLabel}
                    <ArrowRight className="h-4 w-4" aria-hidden="true" />
                  </Link>
                )}
              </motion.div>
            );
          })}
        </div>

        {ctaText && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="text-center mt-12"
          >
            <Button variant="gold" size="lg" asChild>
              <a href={ctaHref} aria-label="Ir a la sección de contacto para cotizar">
                {ctaText}
                <ArrowRight className="h-5 w-5" aria-hidden="true" />
              </a>
            </Button>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default Services;
