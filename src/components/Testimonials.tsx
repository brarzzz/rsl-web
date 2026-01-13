import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Quote, Star, User } from "lucide-react";
import { useTranslation } from "@/i18n/LanguageContext";

export interface TestimonialItem {
  nameOrCompany: string;
  role?: string;
  company?: string;
  service?: string;
  text: string;
  rating?: number;
  photoSrc?: string;
}

export interface TestimonialsProps {
  badge?: string;
  title?: string;
  subtitle?: string;
  items?: TestimonialItem[];
}

const Testimonials = (props: TestimonialsProps) => {
  const { t } = useTranslation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  // Default placeholder testimonials from translations
  const defaultItems: TestimonialItem[] = [
    {
      nameOrCompany: "[PENDIENTE]",
      role: "Director General",
      company: "Empresa PYME",
      service: "Mercantil y corporativo",
      text: t.testimonials.placeholderQuote || "Nos ayudaron a constituir nuestra empresa de forma rápida y profesional. El seguimiento fue impecable.",
      rating: 5,
    },
    {
      nameOrCompany: "[PENDIENTE]",
      role: "Propietario",
      company: "Negocio Familiar",
      service: "Civil e inmobiliario",
      text: t.testimonials.placeholderQuote2 || "Resolvieron un tema de prescripción que teníamos pendiente por años. Muy recomendados.",
      rating: 5,
    },
    {
      nameOrCompany: "[PENDIENTE]",
      role: "Emprendedor",
      company: "Startup Tech",
      service: "Contratos y cumplimiento",
      text: t.testimonials.placeholderQuote3 || "Contratos claros y bien estructurados. Nos dieron tranquilidad para operar con confianza.",
      rating: 5,
    },
    {
      nameOrCompany: "[PENDIENTE]",
      role: "Socio Fundador",
      company: "Comercializadora",
      service: "Prevención legal",
      text: t.testimonials.placeholderQuote4 || "Su enfoque preventivo nos ahorró problemas costosos. Respuesta rápida y soluciones prácticas.",
      rating: 5,
    },
  ];

  const {
    badge = t.testimonials.badge,
    title = t.testimonials.title,
    subtitle = t.testimonials.subtitle,
    items = defaultItems,
  } = props;

  return (
    <section className="py-20 bg-background" ref={ref} id="testimonios" aria-labelledby="testimonials-title">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          {badge && (
            <span className="inline-block px-3 py-1 mb-4 text-xs font-medium bg-accent/10 text-accent rounded-full">
              {badge}
            </span>
          )}
          {title && (
            <h2 id="testimonials-title" className="font-serif text-3xl sm:text-4xl font-bold text-foreground mb-4">
              {title}
            </h2>
          )}
          {subtitle && (
            <p className="text-muted-foreground max-w-2xl mx-auto">
              {subtitle}
            </p>
          )}
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {items.map((testimonial, index) => (
            <motion.article
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-secondary rounded-xl p-6 border border-border relative flex flex-col h-full
                         hover:border-accent/30 hover:shadow-lg transition-all duration-300"
              aria-label={`Testimonio de ${testimonial.nameOrCompany}`}
            >
              <Quote className="absolute top-4 right-4 h-8 w-8 text-accent/20" aria-hidden="true" />
              
              {/* Service tag */}
              {testimonial.service && (
                <span className="inline-block px-2 py-0.5 text-[10px] font-medium bg-primary/10 text-primary rounded-full mb-3 w-fit">
                  {testimonial.service}
                </span>
              )}
              
              {/* Rating */}
              {testimonial.rating && (
                <div className="flex gap-0.5 mb-3" role="img" aria-label={`Calificación: ${testimonial.rating} de 5 estrellas`}>
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-accent text-accent" aria-hidden="true" />
                  ))}
                </div>
              )}
              
              {/* Quote */}
              <blockquote className="text-foreground/80 mb-6 text-sm leading-relaxed italic flex-grow">
                "{testimonial.text}"
              </blockquote>
              
              {/* Author */}
              <footer className="border-t border-border/50 pt-4 mt-auto">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-muted flex items-center justify-center overflow-hidden">
                    {testimonial.photoSrc ? (
                      <img src={testimonial.photoSrc} alt="" className="w-full h-full object-cover" />
                    ) : (
                      <User className="h-5 w-5 text-muted-foreground" aria-hidden="true" />
                    )}
                  </div>
                  <div>
                    <cite className="font-semibold text-foreground not-italic block">{testimonial.nameOrCompany}</cite>
                    {(testimonial.role || testimonial.company) && (
                      <p className="text-xs text-muted-foreground">
                        {testimonial.role}{testimonial.role && testimonial.company && ", "}{testimonial.company}
                      </p>
                    )}
                  </div>
                </div>
              </footer>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
