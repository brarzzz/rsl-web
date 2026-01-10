import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import teamJorge from "@/assets/team-jorge.jpg";
import teamRamon from "@/assets/team-ramon.jpg";
import teamGerardo from "@/assets/team-gerardo.jpg";
import teamDana from "@/assets/team-dana.jpg";

const team = [
  {
    name: "Jorge Luis Rodriguez",
    role: "Founder, CEO y Socio Director",
    photo: teamJorge,
    expertise: "Corporativo",
    years: 28,
    bio: "Creo firmemente que lo legal debe ser una herramienta para avanzar, no un freno. Mi enfoque es práctico - entender cómo funciona tu negocio, detectar riesgos antes de que se conviertan en problemas.",
  },
  {
    name: "Ramón Antonio Rodriguez",
    role: "Abogado Senior",
    photo: teamRamon,
    expertise: "Civil",
    years: 18,
    bio: "En lo civil, los detalles importan. Mi manera de trabajar es revisar a fondo, ordenar documentos y construir una estrategia que se sostenga con hechos.",
  },
  {
    name: "Gerardo Alejandro López",
    role: "Abogado Junior",
    photo: teamGerardo,
    expertise: "Litigio",
    years: 3,
    bio: "Me apasiona el trabajo jurídico y legal bien hecho. Participo en el análisis y preparación de asuntos, cuidando la documentación y los tiempos.",
  },
  {
    name: "Dana Paola Salazar",
    role: "Abogada Junior",
    photo: teamDana,
    expertise: "Familiar",
    years: 2,
    bio: "Participo en la preparación y desarrollo de asuntos, cuidando documentación, plazos y comunicación, para que el cliente tenga claridad en cada etapa.",
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
              className="group"
            >
              <div className="relative overflow-hidden rounded-xl mb-4">
                <img
                  src={member.photo}
                  alt={member.name}
                  className="w-full aspect-[4/5] object-cover object-top group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-4 left-4 right-4 text-primary-foreground">
                    <p className="text-sm line-clamp-3">{member.bio}</p>
                  </div>
                </div>
              </div>
              <h3 className="font-serif text-lg font-bold text-foreground">{member.name}</h3>
              <p className="text-sm text-muted-foreground mb-2">{member.role}</p>
              <div className="flex items-center gap-2">
                <span className="px-2 py-0.5 text-xs font-medium bg-accent/10 text-accent rounded">
                  {member.expertise}
                </span>
                <span className="text-xs text-muted-foreground">
                  +{member.years} años
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
