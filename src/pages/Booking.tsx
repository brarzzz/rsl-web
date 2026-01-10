import { motion } from 'framer-motion';
import { Calendar, Clock, MessageCircle, Phone, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import StickyMobileCTA from '@/components/StickyMobileCTA';
import SchemaMarkup from '@/components/SchemaMarkup';
import { useTranslation } from '@/i18n/LanguageContext';

const Booking = () => {
  const { t, locale } = useTranslation();

  const handleWhatsApp = () => {
    const message = encodeURIComponent(
      locale === 'es' 
        ? 'Hola RSL, quisiera agendar una cita para consulta legal.' 
        : 'Hello RSL, I would like to schedule an appointment for a legal consultation.'
    );
    window.open(`https://wa.me/526671636472?text=${message}`, '_blank');
  };

  return (
    <div className="min-h-screen bg-background">
      <SchemaMarkup 
        type="webpage" 
        pageTitle={locale === 'es' ? 'Agendar Cita | Rodriguez Soporte Legal' : 'Book Appointment | Rodriguez Soporte Legal'} 
        pageDescription={t.booking.subtitle} 
      />
      <Navbar />
      
      <main className="pt-20">
        {/* Hero */}
        <section className="py-16 bg-primary">
          <div className="container mx-auto px-4 text-center">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="font-serif text-4xl sm:text-5xl font-bold text-primary-foreground mb-4"
            >
              {t.booking.title}
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-lg text-primary-foreground/80 max-w-2xl mx-auto"
            >
              {t.booking.subtitle}
            </motion.p>
          </div>
        </section>

        {/* Booking Placeholder */}
        <section className="py-20">
          <div className="container mx-auto px-4 max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-card border border-border rounded-xl p-8 md:p-12 text-center"
            >
              <div className="w-20 h-20 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-6">
                <Calendar className="h-10 w-10 text-accent" />
              </div>
              
              <h2 className="font-serif text-2xl font-bold text-foreground mb-4">
                {locale === 'es' ? 'Sistema de Citas en Desarrollo' : 'Booking System Coming Soon'}
              </h2>
              
              <p className="text-muted-foreground mb-8 max-w-md mx-auto">
                {t.booking.placeholder}
              </p>

              {/* Steps */}
              <div className="grid md:grid-cols-3 gap-6 mb-10">
                <div className="p-4 rounded-lg bg-secondary">
                  <div className="w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center mx-auto mb-3 text-sm font-bold">
                    1
                  </div>
                  <h3 className="font-semibold text-foreground mb-1">{t.booking.step1}</h3>
                  <p className="text-sm text-muted-foreground">
                    {locale === 'es' ? 'Elige un día disponible' : 'Choose an available day'}
                  </p>
                </div>
                <div className="p-4 rounded-lg bg-secondary">
                  <div className="w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center mx-auto mb-3 text-sm font-bold">
                    2
                  </div>
                  <h3 className="font-semibold text-foreground mb-1">{t.booking.step2}</h3>
                  <p className="text-sm text-muted-foreground">
                    {locale === 'es' ? 'Selecciona la hora que prefieras' : 'Select your preferred time'}
                  </p>
                </div>
                <div className="p-4 rounded-lg bg-secondary">
                  <div className="w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center mx-auto mb-3 text-sm font-bold">
                    3
                  </div>
                  <h3 className="font-semibold text-foreground mb-1">{t.booking.step3}</h3>
                  <p className="text-sm text-muted-foreground">
                    {locale === 'es' ? 'Ingresa tus datos de contacto' : 'Enter your contact details'}
                  </p>
                </div>
              </div>

              {/* Alternative Contact */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button variant="whatsapp" size="lg" onClick={handleWhatsApp}>
                  <MessageCircle className="h-5 w-5" />
                  {locale === 'es' ? 'Agendar por WhatsApp' : 'Book via WhatsApp'}
                </Button>
                <Button variant="outline" size="lg" asChild>
                  <a href="tel:+526677522429">
                    <Phone className="h-5 w-5" />
                    {locale === 'es' ? 'Llamar al 667 752 2429' : 'Call 667 752 2429'}
                  </a>
                </Button>
              </div>
            </motion.div>

            {/* Info Cards */}
            <div className="grid md:grid-cols-2 gap-6 mt-12">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
                className="p-6 rounded-xl border border-border bg-card"
              >
                <Clock className="h-8 w-8 text-accent mb-4" />
                <h3 className="font-serif text-lg font-bold text-foreground mb-2">
                  {locale === 'es' ? 'Horarios de Atención' : 'Business Hours'}
                </h3>
                <p className="text-muted-foreground">
                  {locale === 'es' 
                    ? 'Lunes a Viernes: 9:00 - 19:00 hrs. Respondemos en menos de 24 horas.'
                    : 'Monday to Friday: 9:00 AM - 7:00 PM. We respond within 24 hours.'}
                </p>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 }}
                className="p-6 rounded-xl border border-border bg-card"
              >
                <Calendar className="h-8 w-8 text-accent mb-4" />
                <h3 className="font-serif text-lg font-bold text-foreground mb-2">
                  {locale === 'es' ? 'Primera Consulta' : 'First Consultation'}
                </h3>
                <p className="text-muted-foreground">
                  {locale === 'es'
                    ? 'La primera consulta incluye análisis de tu caso y propuesta de estrategia legal.'
                    : 'The first consultation includes an analysis of your case and a proposed legal strategy.'}
                </p>
              </motion.div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
      <StickyMobileCTA />
    </div>
  );
};

export default Booking;
