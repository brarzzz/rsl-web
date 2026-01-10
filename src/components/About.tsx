import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Shield, Target, Zap, Heart } from "lucide-react";

const values = [
  { icon: Shield, label: "Integridad", description: "Actuamos con honestidad y transparencia." },
  { icon: Target, label: "Compromiso", description: "Tu objetivo es nuestro objetivo." },
  { icon: Zap, label: "Excelencia", description: "Buscamos los mejores resultados." },
  { icon: Heart, label: "Responsabilidad", description: "Cuidamos cada detalle de tu caso." },
];

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="nosotros" className="py-20 bg-secondary" ref={ref}>
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left - Story */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block px-3 py-1 text-sm font-medium text-accent bg-accent/10 rounded-full mb-4">
              Sobre Nosotros
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Prevenir vale más que litigar
            </h2>
            <div className="space-y-4 text-muted-foreground">
              <p>
                Nacimos en Culiacán con una idea simple: <strong className="text-foreground">prevenir vale más que litigar</strong>. 
                Empezamos atendiendo a emprendedores y PYMEs que necesitaban ordenar contratos, cumplir normativas y cobrar a tiempo.
              </p>
              <p>
                Adoptamos flujos para revisar documentos, estandarizar checklists y acelerar respuestas. 
                Hoy combinamos consultoría preventiva con defensa estratégica cuando es necesario, 
                manteniendo un lenguaje claro y entregables accionables.
              </p>
              <p className="text-foreground font-medium">
                Nuestra misión: proteger y acelerar los negocios de nuestros clientes mediante asesoría legal preventiva, 
                documentación impecable y estrategias que disminuyan riesgos, costos y tiempos.
              </p>
            </div>
          </motion.div>

          {/* Right - Values */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="grid grid-cols-2 gap-4">
              {values.map((value, index) => (
                <motion.div
                  key={value.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                  className="p-6 rounded-xl bg-card border border-border hover:border-accent/50 hover:shadow-md transition-all"
                >
                  <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center mb-3">
                    <value.icon className="h-5 w-5 text-accent" />
                  </div>
                  <h3 className="font-serif text-lg font-bold text-foreground mb-1">
                    {value.label}
                  </h3>
                  <p className="text-sm text-muted-foreground">{value.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
