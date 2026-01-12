import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import teamJorge from "@/assets/team-jorge.jpg";
import teamRamon from "@/assets/team-ramon.jpg";
import teamGerardo from "@/assets/team-gerardo.jpg";
import teamDana from "@/assets/team-dana.jpg";

export const team = [
  {
    slug: "jorge-luis-rodriguez",
    name: "Jorge Luis Rodriguez",
    role: "Founder, CEO y Socio Director",
    photo: teamJorge,
    expertise: "Corporativo",
    years: 28,
    education: "Maestría",
    langs: ["Español"],
    bio: "Creo firmemente que lo legal debe ser una herramienta para avanzar, no un freno. Por eso mi enfoque es práctico - entender cómo funciona tu negocio, detectar riesgos antes de que se conviertan en problemas y dejar acuerdos claros que den tranquilidad para operar y crecer. Mi prioridad es que cada paso tenga sentido para ti y que salgas con claridad, ruta y respaldo.",
    shortBio: "Mi enfoque es práctico - entender cómo funciona tu negocio y detectar riesgos antes de que se conviertan en problemas.",
  },
  {
    slug: "ramon-antonio-rodriguez",
    name: "Ramón Antonio Rodriguez",
    role: "Abogado Senior",
    photo: teamRamon,
    expertise: "Civil",
    years: 18,
    education: "Licenciatura",
    langs: ["Español"],
    bio: "En lo civil, los detalles importan. Por eso mi manera de trabajar es revisar a fondo, ordenar documentos y construir una estrategia que se sostenga con hechos. He aprendido que la tranquilidad llega cuando hay ruta y control del proceso, y eso es lo que busco en cada asunto - proteger el patrimonio, prevenir problemas mayores y resolver con firmeza cuando ya existe un conflicto.",
    shortBio: "Mi manera de trabajar es revisar a fondo, ordenar documentos y construir una estrategia que se sostenga con hechos.",
  },
  {
    slug: "gerardo-alejandro-lopez",
    name: "Gerardo Alejandro López",
    role: "Abogado Junior",
    photo: teamGerardo,
    expertise: "Litigio",
    years: 3,
    education: "Licenciatura",
    langs: ["Español"],
    bio: "Me apasiona el trabajo jurídico y legal bien hecho. En RSL participo en el análisis y preparación de asuntos, cuidando la documentación, el seguimiento y los tiempos, porque ahí es donde se gana confianza. Mi objetivo es aportar orden y claridad para que cada cliente sienta que su caso está en buenas manos y que el proceso avanza con seriedad y atención real.",
    shortBio: "Participo en el análisis y preparación de asuntos, cuidando la documentación, el seguimiento y los tiempos.",
  },
  {
    slug: "dana-paola-salazar",
    name: "Dana Paola Salazar",
    role: "Abogada Junior",
    photo: teamDana,
    expertise: "Familiar",
    years: 2,
    education: "Licenciatura",
    langs: ["Español"],
    bio: "En RSL participo en la preparación y desarrollo de asuntos, cuidando documentación, plazos y comunicación, para que el cliente tenga claridad en cada etapa. Mi objetivo es que cada persona se sienta acompañada y respaldada, con un proceso entendible y una forma de trabajo seria, humana y consistente.",
    shortBio: "Cuido documentación, plazos y comunicación, para que el cliente tenga claridad en cada etapa.",
  },
];

const Team = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="equipo" className="py-20 bg-background" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-3 py-1 text-sm font-medium text-accent bg-accent/10 rounded-full mb-4">
            Nuestro Equipo
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Profesionales comprometidos
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Un equipo multidisciplinario con experiencia en distintas áreas del derecho, 
            unido por el compromiso de proteger tus intereses.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {team.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group bg-card rounded-2xl border border-border overflow-hidden hover:shadow-lg transition-all"
            >
              {/* Circular photo */}
              <div className="p-6 pb-4 flex justify-center">
                <div className="relative">
                  <img
                    src={member.photo}
                    alt={member.name}
                    className="w-32 h-32 rounded-full object-cover object-top border-4 border-accent/20 group-hover:border-accent/50 transition-colors"
                  />
                  <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 px-3 py-1 bg-accent text-accent-foreground text-xs font-medium rounded-full whitespace-nowrap">
                    +{member.years} años
                  </div>
                </div>
              </div>

              {/* Info */}
              <div className="px-6 pb-2 text-center">
                <h3 className="font-serif text-lg font-bold text-foreground">{member.name}</h3>
                <p className="text-sm text-muted-foreground mb-3">{member.role}</p>
                <span className="inline-block px-3 py-1 text-xs font-medium bg-primary/10 text-primary rounded-full">
                  {member.expertise}
                </span>
              </div>

              {/* CTA */}
              <div className="p-6 pt-4">
                <Button asChild variant="outline" className="w-full group/btn">
                  <Link to={`/equipo/${member.slug}`}>
                    Ver perfil
                    <ArrowRight className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                  </Link>
                </Button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
