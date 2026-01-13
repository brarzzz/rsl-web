import { useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Phone, Mail, MapPin, Clock, Send, MessageCircle, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { siteConfig } from "@/config/siteConfig";
import { z } from "zod";

export interface ContactProps {
  badge?: string;
  title?: string;
  subtitle?: string;
  successTitle?: string;
  successMsg?: string;
  errorMsg?: string;
  consentText?: string;
  privacyUrl?: string;
  termsUrl?: string;
  submitLabel?: string;
  whatsappLabel?: string;
  disclaimerText?: string;
  subjectOptions?: string[];
}

const contactSchema = z.object({
  name: z.string().trim().min(1, "El nombre es requerido").max(100, "Máximo 100 caracteres"),
  email: z.string().trim().email("Email inválido").max(255, "Máximo 255 caracteres"),
  phone: z.string().trim().min(10, "Ingresa un teléfono válido (mínimo 10 dígitos)").max(20, "Máximo 20 caracteres"),
  subject: z.string().trim().min(1, "Selecciona o escribe un asunto").max(200, "Máximo 200 caracteres"),
  message: z.string().trim().min(10, "El mensaje debe tener al menos 10 caracteres").max(1000, "Máximo 1000 caracteres"),
  consent: z.boolean().refine((val) => val === true, "Debes aceptar el aviso de privacidad"),
});

type ContactFormData = z.infer<typeof contactSchema>;

const defaultSubjectOptions = [
  "Consultoría empresarial",
  "Derecho mercantil/corporativo",
  "Derecho civil/inmobiliario",
  "Derecho familiar",
  "Contratos",
  "Otro",
];

const Contact = (props: ContactProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const { toast } = useToast();

  const {
    badge = "Contacto",
    title = "¿Listo para proteger tu negocio?",
    subtitle = "Cuéntanos tu situación y te responderemos en menos de 24 horas con una propuesta clara y sin compromiso.",
    successTitle = "¡Gracias por contactarnos!",
    successMsg = "Hemos recibido tu mensaje. Un miembro de nuestro equipo te contactará en menos de 24 horas para atender tu consulta.",
    consentText,
    privacyUrl = "/aviso-de-privacidad",
    termsUrl = "/terminos",
    submitLabel = siteConfig.ctas.primary,
    whatsappLabel = "WhatsApp",
    disclaimerText = "Cada caso requiere análisis; agenda una consulta para evaluación.",
    subjectOptions = defaultSubjectOptions,
  } = props;
  
  const [formData, setFormData] = useState<ContactFormData>({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
    consent: false,
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: "" }));
    }
  };

  const handleConsentChange = (checked: boolean) => {
    setFormData(prev => ({ ...prev, consent: checked }));
    if (errors.consent) {
      setErrors(prev => ({ ...prev, consent: "" }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    const result = contactSchema.safeParse(formData);
    
    if (!result.success) {
      const fieldErrors: Record<string, string> = {};
      result.error.errors.forEach(err => {
        if (err.path[0]) {
          fieldErrors[err.path[0] as string] = err.message;
        }
      });
      setErrors(fieldErrors);
      setIsSubmitting(false);
      return;
    }

    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    setIsSuccess(true);
    toast({
      title: "¡Mensaje enviado!",
      description: "Nos pondremos en contacto contigo en menos de 24 horas.",
    });
    
    setIsSubmitting(false);
  };

  const handleWhatsApp = () => {
    const sanitizedName = formData.name.trim().slice(0, 50);
    window.open(siteConfig.whatsappLinkWithName(siteConfig.ctas.primary.toLowerCase(), sanitizedName || undefined), "_blank");
  };

  const resetForm = () => {
    setFormData({ name: "", email: "", phone: "", subject: "", message: "", consent: false });
    setErrors({});
    setIsSuccess(false);
  };

  return (
    <section id="contacto" className="py-20 bg-primary" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          {badge && (
            <span className="inline-block px-3 py-1 text-sm font-medium text-accent bg-accent/20 rounded-full mb-4">
              {badge}
            </span>
          )}
          {title && (
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-primary-foreground mb-4">
              {title}
            </h2>
          )}
          {subtitle && (
            <p className="text-lg text-primary-foreground/80 max-w-2xl mx-auto">
              {subtitle}
            </p>
          )}
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-12">
          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-3"
          >
            {isSuccess ? (
              <div className="bg-card rounded-xl p-8 sm:p-12 shadow-xl text-center">
                <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-6" aria-hidden="true">
                  <CheckCircle className="h-8 w-8 text-green-600" />
                </div>
                <h3 className="font-serif text-2xl font-bold text-foreground mb-3">
                  {successTitle}
                </h3>
                <p className="text-muted-foreground mb-6">
                  {successMsg}
                </p>
                <div className="flex flex-col sm:flex-row gap-3 justify-center">
                  <Button 
                    onClick={handleWhatsApp} 
                    variant="whatsapp"
                    aria-label="Enviar mensaje por WhatsApp - Abre en nueva ventana"
                  >
                    <MessageCircle className="h-4 w-4" aria-hidden="true" />
                    {siteConfig.ctas.secondary}
                  </Button>
                  <Button onClick={resetForm} variant="outline">
                    Enviar otro mensaje
                  </Button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="bg-card rounded-xl p-6 sm:p-8 shadow-xl" noValidate aria-label="Formulario de contacto">
                <div className="grid sm:grid-cols-2 gap-4 mb-4">
                  <div>
                    <Label htmlFor="name" className="block text-sm font-medium text-foreground mb-1.5">
                      Nombre completo <span aria-hidden="true">*</span>
                      <span className="sr-only">(requerido)</span>
                    </Label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Tu nombre"
                      maxLength={100}
                      required
                      aria-required="true"
                      aria-invalid={!!errors.name}
                      aria-describedby={errors.name ? "name-error" : undefined}
                      className={errors.name ? "border-destructive" : ""}
                    />
                    {errors.name && <p id="name-error" className="text-xs text-destructive mt-1" role="alert">{errors.name}</p>}
                  </div>
                  <div>
                    <Label htmlFor="email" className="block text-sm font-medium text-foreground mb-1.5">
                      Correo electrónico <span aria-hidden="true">*</span>
                      <span className="sr-only">(requerido)</span>
                    </Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="tu@email.com"
                      maxLength={255}
                      required
                      aria-required="true"
                      aria-invalid={!!errors.email}
                      aria-describedby={errors.email ? "email-error" : undefined}
                      className={errors.email ? "border-destructive" : ""}
                    />
                    {errors.email && <p id="email-error" className="text-xs text-destructive mt-1" role="alert">{errors.email}</p>}
                  </div>
                </div>
                
                <div className="grid sm:grid-cols-2 gap-4 mb-4">
                  <div>
                    <Label htmlFor="phone" className="block text-sm font-medium text-foreground mb-1.5">
                      Teléfono / WhatsApp <span aria-hidden="true">*</span>
                      <span className="sr-only">(requerido)</span>
                    </Label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      inputMode="tel"
                      autoComplete="tel"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="667 123 4567"
                      maxLength={20}
                      required
                      aria-required="true"
                      aria-invalid={!!errors.phone}
                      aria-describedby={errors.phone ? "phone-error" : undefined}
                      className={errors.phone ? "border-destructive" : ""}
                    />
                    {errors.phone && <p id="phone-error" className="text-xs text-destructive mt-1" role="alert">{errors.phone}</p>}
                  </div>
                  <div>
                    <Label htmlFor="subject" className="block text-sm font-medium text-foreground mb-1.5">
                      Asunto <span aria-hidden="true">*</span>
                      <span className="sr-only">(requerido)</span>
                    </Label>
                    <select
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      aria-required="true"
                      aria-invalid={!!errors.subject}
                      aria-describedby={errors.subject ? "subject-error" : undefined}
                      className={`flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 ${errors.subject ? "border-destructive" : ""}`}
                    >
                      <option value="">Selecciona un asunto</option>
                      {subjectOptions.map((option) => (
                        <option key={option} value={option}>{option}</option>
                      ))}
                    </select>
                    {errors.subject && <p id="subject-error" className="text-xs text-destructive mt-1" role="alert">{errors.subject}</p>}
                  </div>
                </div>
                
                <div className="mb-4">
                  <Label htmlFor="message" className="block text-sm font-medium text-foreground mb-1.5">
                    ¿Cómo podemos ayudarte? <span aria-hidden="true">*</span>
                    <span className="sr-only">(requerido)</span>
                  </Label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Cuéntanos brevemente tu situación..."
                    rows={4}
                    maxLength={1000}
                    required
                    aria-required="true"
                    aria-invalid={!!errors.message}
                    aria-describedby={errors.message ? "message-error" : "message-counter"}
                    className={errors.message ? "border-destructive" : ""}
                  />
                  <div className="flex justify-between mt-1">
                    {errors.message && <p id="message-error" className="text-xs text-destructive" role="alert">{errors.message}</p>}
                    <p id="message-counter" className="text-xs text-muted-foreground ml-auto" aria-live="polite">{formData.message.length}/1000</p>
                  </div>
                </div>

                {/* Consent checkbox */}
                <div className="mb-6">
                  <div className="flex items-start gap-3">
                    <Checkbox
                      id="consent"
                      checked={formData.consent}
                      onCheckedChange={handleConsentChange}
                      className={errors.consent ? "border-destructive" : ""}
                    />
                    <Label htmlFor="consent" className="text-sm text-muted-foreground leading-relaxed cursor-pointer">
                      {consentText || (
                        <>
                          He leído y acepto el{" "}
                          <a href={privacyUrl} target="_blank" className="text-accent underline hover:no-underline">
                            Aviso de Privacidad
                          </a>{" "}
                          y los{" "}
                          <a href={termsUrl} target="_blank" className="text-accent underline hover:no-underline">
                            Términos y Condiciones
                          </a>
                          . Autorizo el uso de mis datos para ser contactado.
                        </>
                      )}
                    </Label>
                  </div>
                  {errors.consent && <p className="text-xs text-destructive mt-1">{errors.consent}</p>}
                </div>
                
                <div className="flex flex-col sm:flex-row gap-3">
                  <Button type="submit" variant="gold" size="lg" className="flex-1" disabled={isSubmitting}>
                    <Send className="h-4 w-4" aria-hidden="true" />
                    {isSubmitting ? "Enviando..." : submitLabel}
                  </Button>
                  <Button 
                    type="button" 
                    variant="whatsapp" 
                    size="lg" 
                    onClick={handleWhatsApp}
                    aria-label="Contactar por WhatsApp - Abre en nueva ventana"
                  >
                    <MessageCircle className="h-4 w-4" aria-hidden="true" />
                    {whatsappLabel}
                  </Button>
                </div>
                
                {disclaimerText && (
                  <p className="text-xs text-muted-foreground mt-4 text-center">
                    {disclaimerText}
                  </p>
                )}
              </form>
            )}
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="lg:col-span-2"
          >
            <div className="space-y-6">
              {/* Phone */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.4 }}
                className="flex items-start gap-4"
              >
                <div className="w-10 h-10 rounded-lg bg-accent/20 flex items-center justify-center flex-shrink-0" aria-hidden="true">
                  <Phone className="h-5 w-5 text-accent" />
                </div>
                <div>
                  <h3 className="text-sm font-medium text-primary-foreground/70">Teléfono</h3>
                  <a href={`tel:+52${siteConfig.phone}`} className="text-primary-foreground hover:text-accent transition-colors">
                    {siteConfig.phoneFormatted}
                  </a>
                </div>
              </motion.div>

              {/* Email */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.5 }}
                className="flex items-start gap-4"
              >
                <div className="w-10 h-10 rounded-lg bg-accent/20 flex items-center justify-center flex-shrink-0">
                  <Mail className="h-5 w-5 text-accent" />
                </div>
                <div>
                  <h3 className="text-sm font-medium text-primary-foreground/70">Email</h3>
                  <a href={`mailto:${siteConfig.email}`} className="text-primary-foreground hover:text-accent transition-colors break-all">
                    {siteConfig.email}
                  </a>
                </div>
              </motion.div>

              {/* Address */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.6 }}
                className="flex items-start gap-4"
              >
                <div className="w-10 h-10 rounded-lg bg-accent/20 flex items-center justify-center flex-shrink-0">
                  <MapPin className="h-5 w-5 text-accent" />
                </div>
                <div>
                  <h3 className="text-sm font-medium text-primary-foreground/70">Dirección</h3>
                  <p className="text-primary-foreground">
                    {siteConfig.address}<br />
                    {siteConfig.cityState}
                  </p>
                </div>
              </motion.div>

              {/* Hours */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.7 }}
                className="flex items-start gap-4"
              >
                <div className="w-10 h-10 rounded-lg bg-accent/20 flex items-center justify-center flex-shrink-0">
                  <Clock className="h-5 w-5 text-accent" />
                </div>
                <div>
                  <h3 className="text-sm font-medium text-primary-foreground/70">Horario</h3>
                  <p className="text-primary-foreground">
                    {siteConfig.hours}
                  </p>
                </div>
              </motion.div>
            </div>
            
            {/* Call CTA */}
            <div className="mt-8 p-6 rounded-xl bg-primary-foreground/5 border border-primary-foreground/10">
              <h3 className="font-serif text-lg font-bold text-primary-foreground mb-2">
                ¿Prefieres llamar?
              </h3>
              <p className="text-primary-foreground/80 text-sm mb-4">
                Nuestro equipo está disponible en horario de oficina.
              </p>
              <a 
                href={`tel:+52${siteConfig.phone}`} 
                className="inline-flex items-center gap-2 text-accent font-semibold hover:underline"
              >
                <Phone className="h-4 w-4" />
                {siteConfig.phoneFormatted}
              </a>
            </div>

            {/* Map placeholder */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: 0.8 }}
              className="mt-6 rounded-xl overflow-hidden border border-primary-foreground/10"
            >
              <div className="bg-primary-foreground/5 aspect-video flex items-center justify-center">
                <div className="text-center p-6">
                  <MapPin className="h-8 w-8 text-accent mx-auto mb-2" />
                  <p className="text-primary-foreground/80 text-sm">
                    {siteConfig.cityState}
                  </p>
                  <a 
                    href="https://maps.google.com/?q=Calle+Rio+Culiacan+113+Poniente+Culiacan+Sinaloa+Mexico" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-accent text-sm hover:underline mt-2 inline-block"
                  >
                    Ver en Google Maps →
                  </a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
