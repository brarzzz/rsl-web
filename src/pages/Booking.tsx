import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Calendar as CalendarIcon, Clock, MessageCircle, Phone, User, Mail, FileText, CheckCircle, ArrowLeft, ArrowRight } from 'lucide-react';
import { format, addDays, isWeekend, isBefore, startOfToday } from 'date-fns';
import { es, enUS } from 'date-fns/locale';
import { Button } from '@/components/ui/button';
import { Calendar } from '@/components/ui/calendar';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import StickyMobileCTA from '@/components/StickyMobileCTA';
import SEOHead from '@/components/SEOHead';
import { useTranslation } from '@/i18n/LanguageContext';
import { cn } from '@/lib/utils';

// Available time slots (Mon-Fri, 9:00 - 18:00)
const TIME_SLOTS = [
  '09:00', '10:00', '11:00', '12:00', '13:00', '14:00', '15:00', '16:00', '17:00', '18:00'
];

// Service types
const SERVICES = {
  es: [
    { id: 'preventive', name: 'Consultoría Preventiva', description: 'Auditoría de riesgos y políticas para empresas' },
    { id: 'corporate', name: 'Mercantil y Corporativo', description: 'Constitución de empresas, gobierno corporativo' },
    { id: 'civil', name: 'Civil e Inmobiliario', description: 'Contratos, regularización de inmuebles' },
    { id: 'family', name: 'Derecho Familiar', description: 'Divorcios, custodia, sucesiones' },
    { id: 'other', name: 'Otro', description: 'Consulta general' },
  ],
  en: [
    { id: 'preventive', name: 'Preventive Consulting', description: 'Risk audit and policies for businesses' },
    { id: 'corporate', name: 'Corporate & Commercial', description: 'Company formation, corporate governance' },
    { id: 'civil', name: 'Civil & Real Estate', description: 'Contracts, property regularization' },
    { id: 'family', name: 'Family Law', description: 'Divorce, custody, estates' },
    { id: 'other', name: 'Other', description: 'General consultation' },
  ],
};

type BookingStep = 1 | 2 | 3 | 4;

interface FormData {
  name: string;
  email: string;
  phone: string;
  service: string;
  message: string;
}

const Booking = () => {
  const { t, locale } = useTranslation();
  const [step, setStep] = useState<BookingStep>(1);
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(undefined);
  const [selectedTime, setSelectedTime] = useState<string | undefined>(undefined);
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const dateLocale = locale === 'es' ? es : enUS;
  const services = SERVICES[locale as keyof typeof SERVICES] || SERVICES.es;

  // Disable weekends and past dates
  const disabledDays = useMemo(() => {
    const today = startOfToday();
    return (date: Date) => isWeekend(date) || isBefore(date, today);
  }, []);

  const handleDateSelect = (date: Date | undefined) => {
    setSelectedDate(date);
    if (date) {
      setStep(2);
    }
  };

  const handleTimeSelect = (time: string) => {
    setSelectedTime(time);
    setStep(3);
  };

  const handleFormChange = (field: keyof FormData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Build WhatsApp message with all booking details
    const dateStr = selectedDate ? format(selectedDate, 'EEEE, d MMMM yyyy', { locale: dateLocale }) : '';
    const serviceObj = services.find(s => s.id === formData.service);
    
    const message = locale === 'es'
      ? `¡Hola RSL! Quiero agendar una cita:

📅 Fecha: ${dateStr}
🕐 Hora: ${selectedTime}
📋 Servicio: ${serviceObj?.name || 'No especificado'}

👤 Nombre: ${formData.name}
📧 Email: ${formData.email}
📱 Teléfono: ${formData.phone}

💬 Mensaje: ${formData.message || 'Sin mensaje adicional'}

Por favor confirmen mi cita. ¡Gracias!`
      : `Hello RSL! I want to schedule an appointment:

📅 Date: ${dateStr}
🕐 Time: ${selectedTime}
📋 Service: ${serviceObj?.name || 'Not specified'}

👤 Name: ${formData.name}
📧 Email: ${formData.email}
📱 Phone: ${formData.phone}

💬 Message: ${formData.message || 'No additional message'}

Please confirm my appointment. Thank you!`;

    // Simulate brief delay then redirect to WhatsApp
    await new Promise(resolve => setTimeout(resolve, 500));
    
    window.open(`https://wa.me/526671636472?text=${encodeURIComponent(message)}`, '_blank');
    
    setIsSubmitting(false);
    setIsSubmitted(true);
    setStep(4);
  };

  const goBack = () => {
    if (step > 1) {
      setStep((step - 1) as BookingStep);
    }
  };

  const resetBooking = () => {
    setStep(1);
    setSelectedDate(undefined);
    setSelectedTime(undefined);
    setFormData({ name: '', email: '', phone: '', service: '', message: '' });
    setIsSubmitted(false);
  };

  const stepLabels = locale === 'es' 
    ? ['Fecha', 'Hora', 'Datos', 'Listo'] 
    : ['Date', 'Time', 'Details', 'Done'];

  return (
    <div className="min-h-screen bg-background">
      <SEOHead 
        title={t.seo.booking.title} 
        description={t.seo.booking.description}
        canonical="https://soportelegal.com.mx/agendar"
      />
      <Navbar />
      
      <main className="pt-20">
        {/* Hero */}
        <section className="py-12 bg-primary">
          <div className="container mx-auto px-4 text-center">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-primary-foreground mb-3"
            >
              {t.booking.title}
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-base md:text-lg text-primary-foreground/80 max-w-2xl mx-auto"
            >
              {t.booking.subtitle}
            </motion.p>
          </div>
        </section>

        {/* Progress Steps */}
        <section className="py-6 border-b border-border bg-card">
          <div className="container mx-auto px-4">
            <div className="flex justify-center items-center gap-2 md:gap-4">
              {stepLabels.map((label, index) => {
                const stepNum = index + 1;
                const isActive = step === stepNum;
                const isCompleted = step > stepNum;
                
                return (
                  <div key={label} className="flex items-center">
                    <div className="flex flex-col items-center">
                      <div 
                        className={cn(
                          "w-8 h-8 md:w-10 md:h-10 rounded-full flex items-center justify-center text-sm font-semibold transition-all",
                          isCompleted && "bg-accent text-accent-foreground",
                          isActive && "bg-primary text-primary-foreground ring-4 ring-primary/20",
                          !isActive && !isCompleted && "bg-secondary text-muted-foreground"
                        )}
                      >
                        {isCompleted ? <CheckCircle className="h-4 w-4 md:h-5 md:w-5" /> : stepNum}
                      </div>
                      <span className={cn(
                        "text-xs mt-1 hidden sm:block",
                        isActive ? "text-foreground font-medium" : "text-muted-foreground"
                      )}>
                        {label}
                      </span>
                    </div>
                    {index < stepLabels.length - 1 && (
                      <div className={cn(
                        "w-8 md:w-16 h-0.5 mx-1 md:mx-2",
                        step > stepNum ? "bg-accent" : "bg-border"
                      )} />
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Booking Content */}
        <section className="py-12 md:py-16">
          <div className="container mx-auto px-4 max-w-4xl">
            <AnimatePresence mode="wait">
              {/* Step 1: Date Selection */}
              {step === 1 && (
                <motion.div
                  key="step1"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  className="bg-card border border-border rounded-xl p-6 md:p-8"
                >
                  <div className="text-center mb-6">
                    <CalendarIcon className="h-10 w-10 text-accent mx-auto mb-3" />
                    <h2 className="font-serif text-xl md:text-2xl font-bold text-foreground">
                      {t.booking.selectDate}
                    </h2>
                    <p className="text-muted-foreground text-sm mt-1">
                      {locale === 'es' ? 'Lunes a Viernes' : 'Monday to Friday'}
                    </p>
                  </div>
                  
                  <div className="flex justify-center">
                    <Calendar
                      mode="single"
                      selected={selectedDate}
                      onSelect={handleDateSelect}
                      disabled={disabledDays}
                      locale={dateLocale}
                      fromDate={startOfToday()}
                      toDate={addDays(startOfToday(), 60)}
                      className="rounded-md border pointer-events-auto"
                    />
                  </div>
                </motion.div>
              )}

              {/* Step 2: Time Selection */}
              {step === 2 && (
                <motion.div
                  key="step2"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  className="bg-card border border-border rounded-xl p-6 md:p-8"
                >
                  <Button 
                    variant="ghost" 
                    size="sm" 
                    onClick={goBack}
                    className="mb-4"
                  >
                    <ArrowLeft className="h-4 w-4 mr-1" />
                    {locale === 'es' ? 'Volver' : 'Back'}
                  </Button>

                  <div className="text-center mb-6">
                    <Clock className="h-10 w-10 text-accent mx-auto mb-3" />
                    <h2 className="font-serif text-xl md:text-2xl font-bold text-foreground">
                      {t.booking.selectTime}
                    </h2>
                    {selectedDate && (
                      <p className="text-accent font-medium mt-1">
                        {format(selectedDate, 'EEEE, d MMMM yyyy', { locale: dateLocale })}
                      </p>
                    )}
                  </div>
                  
                  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3">
                    {TIME_SLOTS.map((time) => (
                      <Button
                        key={time}
                        variant={selectedTime === time ? "default" : "outline"}
                        className={cn(
                          "h-12 text-base",
                          selectedTime === time && "ring-2 ring-primary/50"
                        )}
                        onClick={() => handleTimeSelect(time)}
                      >
                        {time}
                      </Button>
                    ))}
                  </div>
                </motion.div>
              )}

              {/* Step 3: Contact Form */}
              {step === 3 && (
                <motion.div
                  key="step3"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  className="bg-card border border-border rounded-xl p-6 md:p-8"
                >
                  <Button 
                    variant="ghost" 
                    size="sm" 
                    onClick={goBack}
                    className="mb-4"
                  >
                    <ArrowLeft className="h-4 w-4 mr-1" />
                    {locale === 'es' ? 'Volver' : 'Back'}
                  </Button>

                  <div className="text-center mb-6">
                    <User className="h-10 w-10 text-accent mx-auto mb-3" />
                    <h2 className="font-serif text-xl md:text-2xl font-bold text-foreground">
                      {t.booking.step3}
                    </h2>
                    <div className="flex flex-wrap justify-center gap-2 mt-2 text-sm">
                      <span className="bg-secondary px-3 py-1 rounded-full text-foreground">
                        📅 {selectedDate && format(selectedDate, 'd MMM', { locale: dateLocale })}
                      </span>
                      <span className="bg-secondary px-3 py-1 rounded-full text-foreground">
                        🕐 {selectedTime}
                      </span>
                    </div>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-5">
                    {/* Service Selection */}
                    <div className="space-y-2">
                      <Label className="text-foreground font-medium">
                        {locale === 'es' ? '¿En qué podemos ayudarte?' : 'How can we help you?'} *
                      </Label>
                      <RadioGroup
                        value={formData.service}
                        onValueChange={(value) => handleFormChange('service', value)}
                        className="grid sm:grid-cols-2 gap-2"
                      >
                        {services.map((service) => (
                          <div key={service.id} className="flex items-start space-x-2">
                            <RadioGroupItem 
                              value={service.id} 
                              id={service.id}
                              className="mt-1"
                            />
                            <Label 
                              htmlFor={service.id} 
                              className="cursor-pointer flex-1"
                            >
                              <span className="font-medium text-foreground">{service.name}</span>
                              <span className="block text-xs text-muted-foreground">{service.description}</span>
                            </Label>
                          </div>
                        ))}
                      </RadioGroup>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="name" className="text-foreground">
                          {locale === 'es' ? 'Nombre completo' : 'Full name'} *
                        </Label>
                        <div className="relative">
                          <User className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                          <Input
                            id="name"
                            required
                            value={formData.name}
                            onChange={(e) => handleFormChange('name', e.target.value)}
                            className="pl-10"
                            placeholder={locale === 'es' ? 'Tu nombre' : 'Your name'}
                          />
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="phone" className="text-foreground">
                          {locale === 'es' ? 'Teléfono' : 'Phone'} *
                        </Label>
                        <div className="relative">
                          <Phone className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                          <Input
                            id="phone"
                            type="tel"
                            required
                            value={formData.phone}
                            onChange={(e) => handleFormChange('phone', e.target.value)}
                            className="pl-10"
                            placeholder="667 123 4567"
                          />
                        </div>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="email" className="text-foreground">
                        {locale === 'es' ? 'Correo electrónico' : 'Email'} *
                      </Label>
                      <div className="relative">
                        <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                        <Input
                          id="email"
                          type="email"
                          required
                          value={formData.email}
                          onChange={(e) => handleFormChange('email', e.target.value)}
                          className="pl-10"
                          placeholder="tu@email.com"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message" className="text-foreground">
                        {locale === 'es' ? 'Cuéntanos brevemente tu caso (opcional)' : 'Tell us briefly about your case (optional)'}
                      </Label>
                      <div className="relative">
                        <FileText className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                        <Textarea
                          id="message"
                          value={formData.message}
                          onChange={(e) => handleFormChange('message', e.target.value)}
                          className="pl-10 min-h-[100px]"
                          placeholder={locale === 'es' 
                            ? 'Describe brevemente tu situación...' 
                            : 'Briefly describe your situation...'}
                        />
                      </div>
                    </div>

                    <Button 
                      type="submit" 
                      size="lg" 
                      className="w-full"
                      disabled={isSubmitting || !formData.name || !formData.email || !formData.phone || !formData.service}
                    >
                      {isSubmitting ? (
                        <span className="flex items-center gap-2">
                          <span className="h-4 w-4 border-2 border-current border-t-transparent rounded-full animate-spin" />
                          {locale === 'es' ? 'Procesando...' : 'Processing...'}
                        </span>
                      ) : (
                        <span className="flex items-center gap-2">
                          <MessageCircle className="h-5 w-5" />
                          {locale === 'es' ? 'Confirmar por WhatsApp' : 'Confirm via WhatsApp'}
                          <ArrowRight className="h-4 w-4" />
                        </span>
                      )}
                    </Button>

                    <p className="text-xs text-muted-foreground text-center">
                      {locale === 'es' 
                        ? 'Al confirmar, serás redirigido a WhatsApp para finalizar tu reserva.'
                        : 'Upon confirmation, you will be redirected to WhatsApp to finalize your booking.'}
                    </p>
                  </form>
                </motion.div>
              )}

              {/* Step 4: Confirmation */}
              {step === 4 && isSubmitted && (
                <motion.div
                  key="step4"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="bg-card border border-border rounded-xl p-8 md:p-12 text-center"
                >
                  <div className="w-20 h-20 rounded-full bg-accent/20 flex items-center justify-center mx-auto mb-6">
                    <CheckCircle className="h-10 w-10 text-accent" />
                  </div>
                  
                  <h2 className="font-serif text-2xl md:text-3xl font-bold text-foreground mb-3">
                    {locale === 'es' ? '¡Solicitud Enviada!' : 'Request Sent!'}
                  </h2>
                  
                  <p className="text-muted-foreground mb-6 max-w-md mx-auto">
                    {locale === 'es' 
                      ? 'Completa el mensaje en WhatsApp para confirmar tu cita. Te responderemos en menos de 24 horas.'
                      : 'Complete the message on WhatsApp to confirm your appointment. We will respond within 24 hours.'}
                  </p>

                  <div className="bg-secondary rounded-lg p-4 mb-6 max-w-sm mx-auto">
                    <div className="text-sm space-y-1">
                      <p className="flex justify-between">
                        <span className="text-muted-foreground">{locale === 'es' ? 'Fecha:' : 'Date:'}</span>
                        <span className="font-medium text-foreground">
                          {selectedDate && format(selectedDate, 'd MMMM yyyy', { locale: dateLocale })}
                        </span>
                      </p>
                      <p className="flex justify-between">
                        <span className="text-muted-foreground">{locale === 'es' ? 'Hora:' : 'Time:'}</span>
                        <span className="font-medium text-foreground">{selectedTime}</span>
                      </p>
                      <p className="flex justify-between">
                        <span className="text-muted-foreground">{locale === 'es' ? 'Nombre:' : 'Name:'}</span>
                        <span className="font-medium text-foreground">{formData.name}</span>
                      </p>
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-3 justify-center">
                    <Button variant="outline" onClick={resetBooking}>
                      {locale === 'es' ? 'Agendar otra cita' : 'Book another appointment'}
                    </Button>
                    <Button variant="whatsapp" onClick={() => window.open('https://wa.me/526671636472', '_blank')}>
                      <MessageCircle className="h-5 w-5" />
                      {locale === 'es' ? 'Abrir WhatsApp' : 'Open WhatsApp'}
                    </Button>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Alternative Contact - Always visible except on confirmation */}
            {step !== 4 && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="mt-8 text-center"
              >
                <p className="text-muted-foreground text-sm mb-3">
                  {locale === 'es' ? '¿Prefieres contactarnos directamente?' : 'Prefer to contact us directly?'}
                </p>
                <div className="flex flex-col sm:flex-row gap-3 justify-center">
                  <Button 
                    variant="outline" 
                    size="sm"
                    onClick={() => window.open('https://wa.me/526671636472', '_blank')}
                  >
                    <MessageCircle className="h-4 w-4" />
                    WhatsApp
                  </Button>
                  <Button variant="outline" size="sm" asChild>
                    <a href="tel:+526677522429">
                      <Phone className="h-4 w-4" />
                      667 752 2429
                    </a>
                  </Button>
                </div>
              </motion.div>
            )}

            {/* Info Cards */}
            <div className="grid md:grid-cols-2 gap-6 mt-12">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 }}
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
                transition={{ delay: 0.4 }}
                className="p-6 rounded-xl border border-border bg-card"
              >
                <CalendarIcon className="h-8 w-8 text-accent mb-4" />
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
