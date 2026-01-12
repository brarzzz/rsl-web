import { motion } from "framer-motion";
import { Phone, ArrowRight, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTranslation } from "@/i18n/LanguageContext";
import heroBg from "@/assets/hero-bg.jpg";

const Hero = () => {
  const { t } = useTranslation();

  const handleWhatsApp = () => {
    const message = encodeURIComponent(t.common.whatsappMessage);
    window.open(`https://wa.me/526671636472?text=${message}`, "_blank");
  };

  const bullets = [
    t.hero.bullet1,
    t.hero.bullet2,
    t.hero.bullet3,
  ];

  return (
    <section 
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      aria-labelledby="hero-heading"
    >
      {/* Background Image - with explicit dimensions for CLS prevention */}
      <img
        src={heroBg}
        alt=""
        role="presentation"
        className="absolute inset-0 w-full h-full object-cover object-center"
        loading="eager"
        fetchPriority="high"
        decoding="async"
      />
      
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary/85 via-primary/80 to-primary/95" />
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 pt-20">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block px-4 py-1.5 mb-6 text-sm font-medium bg-accent/20 text-accent border border-accent/30 rounded-full">
              {t.hero.badge}
            </span>
          </motion.div>
          
          <motion.h1
            id="hero-heading"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-primary-foreground leading-tight mb-6"
          >
            {t.hero.title}{" "}
            <span className="text-accent">{t.hero.titleAccent}</span>
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg sm:text-xl text-primary-foreground/80 mb-6 max-w-2xl mx-auto"
          >
            {t.hero.subtitle}
          </motion.p>

          {/* Bullets */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="flex flex-wrap justify-center gap-x-6 gap-y-2 mb-8"
          >
            {bullets.map((bullet, index) => (
              <div key={index} className="flex items-center gap-2 text-primary-foreground/90">
                <CheckCircle className="h-4 w-4 text-accent" aria-hidden="true" />
                <span className="text-sm sm:text-base">{bullet}</span>
              </div>
            ))}
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Button variant="heroGold" size="xl" asChild>
              <a href="#contacto" aria-label={t.hero.ctaPrimary}>
                {t.hero.ctaPrimary}
                <ArrowRight className="h-5 w-5" aria-hidden="true" />
              </a>
            </Button>
            <Button 
              variant="heroOutline" 
              size="xl" 
              onClick={handleWhatsApp}
              aria-label={`${t.hero.ctaSecondary} - Abre WhatsApp en nueva ventana`}
            >
              <Phone className="h-5 w-5" aria-hidden="true" />
              {t.hero.ctaSecondary}
            </Button>
          </motion.div>
          
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mt-6 text-sm text-primary-foreground/60"
          >
            {t.hero.sla}
          </motion.p>
        </div>
      </div>
      
      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};

export default Hero;
