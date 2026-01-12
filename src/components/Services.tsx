import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Link } from "react-router-dom";
import { Shield, Building2, Home, Users, FileText, ArrowRight, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTranslation } from "@/i18n/LanguageContext";

const serviceKeys = ['prevention', 'commercial', 'civil', 'family', 'contracts'] as const;
const serviceIcons = {
  prevention: Shield,
  commercial: Building2,
  civil: Home,
  family: Users,
  contracts: FileText,
};
const starServices = ['prevention', 'commercial', 'civil', 'family'];

const Services = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const { t } = useTranslation();

  return (
    <section id="servicios" className="py-20 bg-background" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-3 py-1 text-sm font-medium text-accent bg-accent/10 rounded-full mb-4">
            {t.services.badge}
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            {t.services.title}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {t.services.subtitle}
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {serviceKeys.map((key, index) => {
            const Icon = serviceIcons[key];
            const isStar = starServices.includes(key);
            const service = t.services.items[key];
            
            return (
              <motion.div
                key={key}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative p-6 rounded-xl border border-border bg-card hover:border-accent/50 hover:shadow-lg transition-all duration-300"
              >
                {isStar && (
                  <span className="absolute top-4 right-4 inline-flex items-center gap-1 px-2 py-0.5 text-xs font-medium bg-gold/10 text-gold rounded">
                    <Star className="h-3 w-3 fill-gold" />
                    {t.services.featured}
                  </span>
                )}
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-accent/20 transition-colors">
                  <Icon className="h-6 w-6 text-primary group-hover:text-accent transition-colors" />
                </div>
                <h3 className="font-serif text-xl font-bold text-foreground mb-2">
                  {service.name}
                </h3>
                <p className="text-muted-foreground mb-4">{service.description}</p>
                <Link
                  to={`/areas-de-practica#${key}`}
                  className="inline-flex items-center gap-1 text-sm font-medium text-primary hover:text-accent transition-colors"
                >
                  {t.services.viewArea}
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="text-center mt-12"
        >
          <Button variant="gold" size="lg" asChild>
            <a href="#contacto">
              {t.services.cta}
              <ArrowRight className="h-5 w-5" />
            </a>
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
