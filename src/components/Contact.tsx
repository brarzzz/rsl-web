import { useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Phone, Mail, MapPin, Clock, Send, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { z } from "zod";

const contactSchema = z.object({
  name: z.string().trim().min(1, "El nombre es requerido").max(100),
  email: z.string().trim().email("Email inválido").max(255),
  phone: z.string().trim().min(1, "El teléfono es requerido").max(20),
  message: z.string().trim().min(1, "El mensaje es requerido").max(1000),
});

const contactInfo = [
  { icon: Phone, label: "Teléfono", value: "667 752 2429" },
  { icon: Mail, label: "Email", value: "jorgeluis@soportelegal.com.mx" },
  { icon: MapPin, label: "Dirección", value: "Calle Rio Culiacán 113 Pte, Col. Guadalupe, Culiacán, Sinaloa" },
  { icon: Clock, label: "Horario", value: "Lun–Vie 9:00–19:00" },
];

const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const { toast } = useToast();
  
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: "" }));
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
    
    toast({
      title: "¡Mensaje enviado!",
      description: "Nos pondremos en contacto contigo en menos de 24 horas.",
    });
    
    setFormData({ name: "", email: "", phone: "", message: "" });
    setIsSubmitting(false);
  };

  const handleWhatsApp = () => {
    const message = encodeURIComponent(
      `Hola, soy ${formData.name || "un cliente interesado"}. Me gustaría recibir información sobre sus servicios legales.`
    );
    window.open(`https://wa.me/526671636472?text=${message}`, "_blank");
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
          <span className="inline-block px-3 py-1 text-sm font-medium text-accent bg-accent/20 rounded-full mb-4">
            Contacto
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-primary-foreground mb-4">
            ¿Listo para proteger tu negocio?
          </h2>
          <p className="text-lg text-primary-foreground/80 max-w-2xl mx-auto">
            Cuéntanos tu situación y te responderemos en menos de 24 horas 
            con una propuesta clara y sin compromiso.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-12">
          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-3"
          >
            <form onSubmit={handleSubmit} className="bg-card rounded-xl p-6 sm:p-8 shadow-xl">
              <div className="grid sm:grid-cols-2 gap-4 mb-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-foreground mb-1.5">
                    Nombre completo *
                  </label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Tu nombre"
                    className={errors.name ? "border-destructive" : ""}
                  />
                  {errors.name && <p className="text-xs text-destructive mt-1">{errors.name}</p>}
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-foreground mb-1.5">
                    Correo electrónico *
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="tu@email.com"
                    className={errors.email ? "border-destructive" : ""}
                  />
                  {errors.email && <p className="text-xs text-destructive mt-1">{errors.email}</p>}
                </div>
              </div>
              
              <div className="mb-4">
                <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-1.5">
                  Teléfono / WhatsApp *
                </label>
                <Input
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="667 123 4567"
                  className={errors.phone ? "border-destructive" : ""}
                />
                {errors.phone && <p className="text-xs text-destructive mt-1">{errors.phone}</p>}
              </div>
              
              <div className="mb-6">
                <label htmlFor="message" className="block text-sm font-medium text-foreground mb-1.5">
                  ¿Cómo podemos ayudarte? *
                </label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Cuéntanos brevemente tu situación..."
                  rows={4}
                  className={errors.message ? "border-destructive" : ""}
                />
                {errors.message && <p className="text-xs text-destructive mt-1">{errors.message}</p>}
              </div>
              
              <div className="flex flex-col sm:flex-row gap-3">
                <Button type="submit" variant="gold" size="lg" className="flex-1" disabled={isSubmitting}>
                  <Send className="h-4 w-4" />
                  {isSubmitting ? "Enviando..." : "Solicitar Cotización"}
                </Button>
                <Button type="button" variant="whatsapp" size="lg" onClick={handleWhatsApp}>
                  <MessageCircle className="h-4 w-4" />
                  WhatsApp
                </Button>
              </div>
              
              <p className="text-xs text-muted-foreground mt-4 text-center">
                Cada caso requiere análisis; agenda una consulta para evaluación.
              </p>
            </form>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="lg:col-span-2"
          >
            <div className="space-y-6">
              {contactInfo.map((item, index) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, y: 10 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
                  className="flex items-start gap-4"
                >
                  <div className="w-10 h-10 rounded-lg bg-accent/20 flex items-center justify-center flex-shrink-0">
                    <item.icon className="h-5 w-5 text-accent" />
                  </div>
                  <div>
                    <h3 className="text-sm font-medium text-primary-foreground/70">{item.label}</h3>
                    <p className="text-primary-foreground">{item.value}</p>
                  </div>
                </motion.div>
              ))}
            </div>
            
            <div className="mt-8 p-6 rounded-xl bg-primary-foreground/5 border border-primary-foreground/10">
              <h3 className="font-serif text-lg font-bold text-primary-foreground mb-2">
                ¿Prefieres llamar?
              </h3>
              <p className="text-primary-foreground/80 text-sm mb-4">
                Nuestro equipo está disponible de lunes a viernes de 9:00 a 19:00.
              </p>
              <a 
                href="tel:+526677522429" 
                className="inline-flex items-center gap-2 text-accent font-semibold hover:underline"
              >
                <Phone className="h-4 w-4" />
                667 752 2429
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
