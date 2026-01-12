import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Shield, Target, Zap, Heart, Eye, Lightbulb, Users, Laptop } from "lucide-react";
const values = [{
  icon: Shield,
  label: "Integridad",
  description: "Actuamos con honestidad y transparencia."
}, {
  icon: Target,
  label: "Compromiso",
  description: "Tu objetivo es nuestro objetivo."
}, {
  icon: Zap,
  label: "Excelencia",
  description: "Buscamos los mejores resultados."
}, {
  icon: Heart,
  label: "Responsabilidad",
  description: "Cuidamos cada detalle de tu caso."
}];
const differentiators = [{
  icon: Laptop,
  label: "Estilo contemporáneo",
  description: "Enfoque moderno y digital-first."
}, {
  icon: Shield,
  label: "Enfoque preventivo",
  description: "Prevenir siempre es mejor que litigar."
}, {
  icon: Users,
  label: "Comunicación clara",
  description: "Sin jerga legal innecesaria."
}, {
  icon: Lightbulb,
  label: "Herramientas digitales",
  description: "Eficiencia con tecnología."
}];
const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: true,
    margin: "-100px"
  });
  return <section id="nosotros" className="py-20 bg-secondary" ref={ref}>
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div initial={{
        opacity: 0,
        y: 20
      }} animate={isInView ? {
        opacity: 1,
        y: 0
      } : {}} transition={{
        duration: 0.5
      }} className="text-center mb-16">
          <span className="inline-block px-3 py-1 text-sm font-medium text-accent bg-accent/10 rounded-full mb-4">
            Sobre Nosotros
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Prevenir vale más que litigar
          </h2>
        </motion.div>

        {/* History */}
        <motion.div initial={{
        opacity: 0,
        y: 20
      }} animate={isInView ? {
        opacity: 1,
        y: 0
      } : {}} transition={{
        duration: 0.6,
        delay: 0.1
      }} className="max-w-4xl mx-auto mb-16">
          <div className="bg-card rounded-2xl p-8 border border-border">
            <h3 className="font-serif text-2xl font-bold text-foreground mb-4">Nuestra Historia</h3>
            <p className="text-muted-foreground leading-relaxed">
              Nacimos en Culiacán con una idea simple: <strong className="text-foreground">prevenir vale más que litigar</strong>. 
              Empezamos atendiendo a emprendedores y PYMEs que necesitaban ordenar contratos, cumplir normativas y cobrar a tiempo. 
              Adoptamos flujos para revisar documentos, estandarizar checklists y acelerar respuestas. 
              Hoy combinamos consultoría preventiva con defensa estratégica cuando es necesario, 
              manteniendo un lenguaje claro y entregables accionables.
            </p>
          </div>
        </motion.div>

        {/* Mission & Vision */}
        <div className="grid md:grid-cols-2 gap-6 mb-16">
          <motion.div initial={{
          opacity: 0,
          x: -20
        }} animate={isInView ? {
          opacity: 1,
          x: 0
        } : {}} transition={{
          duration: 0.6,
          delay: 0.2
        }} className="bg-primary rounded-2xl p-8 text-primary-foreground">
            <div className="w-12 h-12 rounded-xl bg-primary-foreground/20 flex items-center justify-center mb-4">
              <Target className="h-6 w-6" />
            </div>
            <h3 className="font-serif text-2xl font-bold mb-4 text-white">Nuestra Misión</h3>
            <p className="text-primary-foreground/90 leading-relaxed">
              Proteger y acelerar los negocios de nuestros clientes mediante asesoría legal preventiva, 
              documentación impecable y estrategias que disminuyan riesgos, costos y tiempos, 
              con procesos digitales y comunicación clara.
            </p>
          </motion.div>

          <motion.div initial={{
          opacity: 0,
          x: 20
        }} animate={isInView ? {
          opacity: 1,
          x: 0
        } : {}} transition={{
          duration: 0.6,
          delay: 0.3
        }} className="bg-accent rounded-2xl p-8 text-accent-foreground">
            <div className="w-12 h-12 rounded-xl bg-accent-foreground/20 flex items-center justify-center mb-4">
              <Eye className="h-6 w-6" />
            </div>
            <h3 className="font-serif text-2xl font-bold mb-4 text-white">Nuestra Visión</h3>
            <p className="text-accent-foreground/90 leading-relaxed">
              Ser la firma de referencia en prevención legal y documentación para emprendedores 
              y empresas en México, reconocida por su precisión técnica y tiempos de respuesta cortos.
            </p>
          </motion.div>
        </div>

        {/* Philosophy */}
        <motion.div initial={{
        opacity: 0,
        y: 20
      }} animate={isInView ? {
        opacity: 1,
        y: 0
      } : {}} transition={{
        duration: 0.6,
        delay: 0.4
      }} className="text-center mb-12">
          <h3 className="font-serif text-2xl font-bold text-foreground mb-3">Nuestra Filosofía</h3>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Somos un despacho moderno, accesible, orientado a prevención y uso de tecnología para eficiencia.
          </p>
        </motion.div>

        {/* Values */}
        <motion.div initial={{
        opacity: 0,
        y: 20
      }} animate={isInView ? {
        opacity: 1,
        y: 0
      } : {}} transition={{
        duration: 0.6,
        delay: 0.5
      }} className="mb-16">
          <h3 className="font-serif text-xl font-bold text-foreground text-center mb-8">Nuestros Valores</h3>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {values.map((value, index) => <motion.div key={value.label} initial={{
            opacity: 0,
            y: 20
          }} animate={isInView ? {
            opacity: 1,
            y: 0
          } : {}} transition={{
            duration: 0.5,
            delay: 0.5 + index * 0.1
          }} className="p-6 rounded-xl bg-card border border-border hover:border-accent/50 hover:shadow-md transition-all text-center">
                <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center mb-3 mx-auto">
                  <value.icon className="h-6 w-6 text-accent" />
                </div>
                <h4 className="font-serif text-lg font-bold text-foreground mb-1">
                  {value.label}
                </h4>
                <p className="text-sm text-muted-foreground">{value.description}</p>
              </motion.div>)}
          </div>
        </motion.div>

        {/* Differentiators */}
        <motion.div initial={{
        opacity: 0,
        y: 20
      }} animate={isInView ? {
        opacity: 1,
        y: 0
      } : {}} transition={{
        duration: 0.6,
        delay: 0.7
      }}>
          <h3 className="font-serif text-xl font-bold text-foreground text-center mb-8">Lo que nos diferencia</h3>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {differentiators.map((diff, index) => <motion.div key={diff.label} initial={{
            opacity: 0,
            y: 20
          }} animate={isInView ? {
            opacity: 1,
            y: 0
          } : {}} transition={{
            duration: 0.5,
            delay: 0.7 + index * 0.1
          }} className="p-5 rounded-xl bg-primary/5 border border-primary/10 hover:bg-primary/10 transition-all">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-3">
                  <diff.icon className="h-5 w-5 text-primary" />
                </div>
                <h4 className="font-medium text-foreground mb-1">{diff.label}</h4>
                <p className="text-xs text-muted-foreground">{diff.description}</p>
              </motion.div>)}
          </div>
        </motion.div>
      </div>
    </section>;
};
export default About;