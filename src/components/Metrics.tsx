import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const metrics = [
  { value: "+22", label: "Años de experiencia" },
  { value: "+3,000", label: "Consultas atendidas" },
  { value: "+700", label: "Clientes satisfechos" },
  { value: "96%", label: "Casos exitosos" },
];

const Metrics = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-16 bg-secondary" ref={ref}>
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {metrics.map((metric, index) => (
            <motion.div
              key={metric.label}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="text-center"
            >
              <div className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-primary mb-2">
                {metric.value}
              </div>
              <div className="text-sm text-muted-foreground">{metric.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Metrics;
