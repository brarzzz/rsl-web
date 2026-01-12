import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Quote, Star, User } from "lucide-react";
import { useTranslation } from "@/i18n/LanguageContext";

const Testimonials = () => {
  const { t } = useTranslation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  // Placeholder testimonials - marked with [PENDIENTE]
  const placeholderTestimonials = [
    {
      id: 1,
      name: "[PENDIENTE]",
      role: "Director General",
      company: "Empresa PYME",
      service: "Mercantil y corporativo",
      quote: t.testimonials.placeholderQuote || "Nos ayudaron a constituir nuestra empresa de forma rápida y profesional. El seguimiento fue impecable.",
      rating: 5,
    },
    {
      id: 2,
      name: "[PENDIENTE]",
      role: "Propietario",
      company: "Negocio Familiar",
      service: "Civil e inmobiliario",
      quote: t.testimonials.placeholderQuote2 || "Resolvieron un tema de prescripción que teníamos pendiente por años. Muy recomendados.",
      rating: 5,
    },
    {
      id: 3,
      name: "[PENDIENTE]",
      role: "Emprendedor",
      company: "Startup Tech",
      service: "Contratos y cumplimiento",
      quote: t.testimonials.placeholderQuote3 || "Contratos claros y bien estructurados. Nos dieron tranquilidad para operar con confianza.",
      rating: 5,
    },
    {
      id: 4,
      name: "[PENDIENTE]",
      role: "Socio Fundador",
      company: "Comercializadora",
      service: "Prevención legal",
      quote: t.testimonials.placeholderQuote4 || "Su enfoque preventivo nos ahorró problemas costosos. Respuesta rápida y soluciones prácticas.",
      rating: 5,
    },
  ];

  return (
    <section className="py-20 bg-background" ref={ref} id="testimonios" aria-labelledby="testimonials-title">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <span className="inline-block px-3 py-1 mb-4 text-xs font-medium bg-accent/10 text-accent rounded-full">
            {t.testimonials.badge}
          </span>
          <h2 id="testimonials-title" className="font-serif text-3xl sm:text-4xl font-bold text-foreground mb-4">
            {t.testimonials.title}
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            {t.testimonials.subtitle}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {placeholderTestimonials.map((testimonial, index) => (
            <motion.article
              key={testimonial.id}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-secondary rounded-xl p-6 border border-border relative flex flex-col h-full
                         hover:border-accent/30 hover:shadow-lg transition-all duration-300"
              aria-label={`Testimonio de ${testimonial.name}`}
            >
              <Quote className="absolute top-4 right-4 h-8 w-8 text-accent/20" aria-hidden="true" />
              
              {/* Service tag */}
              <span className="inline-block px-2 py-0.5 text-[10px] font-medium bg-primary/10 text-primary rounded-full mb-3 w-fit">
                {testimonial.service}
              </span>
              
              {/* Rating */}
              <div className="flex gap-0.5 mb-3" role="img" aria-label={`Calificación: ${testimonial.rating} de 5 estrellas`}>
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-accent text-accent" aria-hidden="true" />
                ))}
              </div>
              
              {/* Quote */}
              <blockquote className="text-foreground/80 mb-6 text-sm leading-relaxed italic flex-grow">
                "{testimonial.quote}"
              </blockquote>
              
              {/* Author */}
              <footer className="border-t border-border/50 pt-4 mt-auto">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-muted flex items-center justify-center">
                    <User className="h-5 w-5 text-muted-foreground" aria-hidden="true" />
                  </div>
                  <div>
                    <cite className="font-semibold text-foreground not-italic block">{testimonial.name}</cite>
                    <p className="text-xs text-muted-foreground">
                      {testimonial.role}, {testimonial.company}
                    </p>
                  </div>
                </div>
              </footer>
            </motion.article>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="text-center text-sm text-muted-foreground mt-10 bg-muted/50 py-3 px-6 rounded-full inline-block mx-auto w-fit"
          style={{ display: 'table', margin: '2.5rem auto 0' }}
        >
          ✨ {t.testimonials.comingSoon}
        </motion.p>
      </div>
    </section>
  );
};

export default Testimonials;
