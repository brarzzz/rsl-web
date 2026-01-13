import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Calendar, Phone, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTranslation } from "@/i18n/LanguageContext";
import { siteConfig } from "@/config/siteConfig";

const FinalCTA = () => {
  const { t } = useTranslation();
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: true,
    margin: "-100px"
  });

  const handleWhatsApp = () => {
    window.open(siteConfig.whatsappLink(t.common.whatsappMessage), "_blank");
  };

  return (
    <section ref={ref} className="py-20 bg-primary">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center"
        >
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-primary-foreground mb-6">
            {t.finalCta?.title || "¿Listo para proteger tu negocio?"}
          </h2>
          <p className="text-lg text-primary-foreground/80 mb-8">
            {t.finalCta?.subtitle || "Agenda una consulta y recibe asesoría personalizada en menos de 24 horas."}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="heroGold" size="xl" asChild>
              <a href="/citas">
                <Calendar className="h-5 w-5" aria-hidden="true" />
                {t.finalCta?.ctaBooking || "Agendar Cita"}
                <ArrowRight className="h-5 w-5" aria-hidden="true" />
              </a>
            </Button>
            <Button 
              variant="heroOutline" 
              size="xl" 
              onClick={handleWhatsApp}
            >
              <Phone className="h-5 w-5" aria-hidden="true" />
              {t.finalCta?.ctaWhatsapp || "Enviar WhatsApp"}
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FinalCTA;