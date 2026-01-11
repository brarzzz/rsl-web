import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Quote, Star } from "lucide-react";
import { useTranslation } from "@/i18n/LanguageContext";

const Testimonials = () => {
  const { t } = useTranslation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  // Placeholder testimonials - will be replaced with real ones
  const placeholderTestimonials = [
    {
      id: 1,
      name: "[PENDIENTE]",
      role: "Empresario",
      company: "Empresa ejemplo",
      quote: t.testimonials.placeholderQuote,
      rating: 5,
    },
    {
      id: 2,
      name: "[PENDIENTE]",
      role: "Directora General",
      company: "PYME ejemplo",
      quote: t.testimonials.placeholderQuote,
      rating: 5,
    },
    {
      id: 3,
      name: "[PENDIENTE]",
      role: "Socio Fundador",
      company: "Startup ejemplo",
      quote: t.testimonials.placeholderQuote,
      rating: 5,
    },
  ];

  return (
    <section className="py-20 bg-background" ref={ref} id="testimonios">
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
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-foreground mb-4">
            {t.testimonials.title}
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            {t.testimonials.subtitle}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {placeholderTestimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-secondary rounded-xl p-6 border border-border relative"
            >
              <Quote className="absolute top-4 right-4 h-8 w-8 text-accent/20" />
              
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-accent text-accent" />
                ))}
              </div>
              
              <p className="text-foreground/80 mb-6 text-sm leading-relaxed italic">
                "{testimonial.quote}"
              </p>
              
              <div className="border-t border-border/50 pt-4">
                <p className="font-semibold text-foreground">{testimonial.name}</p>
                <p className="text-xs text-muted-foreground">
                  {testimonial.role}, {testimonial.company}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-center text-sm text-muted-foreground mt-8"
        >
          {t.testimonials.comingSoon}
        </motion.p>
      </div>
    </section>
  );
};

export default Testimonials;
