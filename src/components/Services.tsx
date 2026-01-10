import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Building2, Scale, Home, Users, FileText, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const services = [
  {
    icon: Building2,
    name: "Prevención y Consultoría Legal",
    description: "Diseños preventivos, auditoría básica de riesgos, políticas y contratos para emprendedores y PYMEs.",
    star: true,
  },
  {
    icon: Scale,
    name: "Mercantil y Corporativo",
    description: "Constitución y gobierno corporativo, actas, socios, fusiones/escisiones básicas, compliance mercantil.",
    star: true,
  },
  {
    icon: Home,
    name: "Civil e Inmobiliario",
    description: "Posesión, declarativas, regularización, contratos civiles, recuperación y defensa de inmueble.",
    star: true,
  },
  {
    icon: Users,
    name: "Derecho Familiar",
    description: "Divorcios, convenios, guardia y custodia, convenios patrimoniales, juicios sucesorios.",
    star: true,
  },
  {
    icon: FileText,
    name: "Contratos y Cumplimiento",
    description: "Redacción, revisión y negociación B2B/B2C; cláusulas de riesgo y garantías.",
    star: false,
  },
];

const Services = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

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
            Nuestros Servicios
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Soluciones legales para cada etapa
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Desde prevención hasta resolución de conflictos, te acompañamos con estrategias claras y resultados medibles.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.name}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`group relative p-6 rounded-xl border border-border bg-card hover:border-accent/50 hover:shadow-lg transition-all duration-300 ${
                service.star ? "lg:col-span-1" : "md:col-span-2 lg:col-span-1"
              }`}
            >
              {service.star && (
                <span className="absolute top-4 right-4 px-2 py-0.5 text-xs font-medium bg-accent/10 text-accent rounded">
                  Destacado
                </span>
              )}
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-accent/20 transition-colors">
                <service.icon className="h-6 w-6 text-primary group-hover:text-accent transition-colors" />
              </div>
              <h3 className="font-serif text-xl font-bold text-foreground mb-2">
                {service.name}
              </h3>
              <p className="text-muted-foreground mb-4">{service.description}</p>
              <a
                href="#contacto"
                className="inline-flex items-center gap-1 text-sm font-medium text-primary hover:text-accent transition-colors"
              >
                Más información
                <ArrowRight className="h-4 w-4" />
              </a>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="text-center mt-12"
        >
          <Button variant="gold" size="lg" asChild>
            <a href="#contacto">
              Consultar sobre mi caso
              <ArrowRight className="h-5 w-5" />
            </a>
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
