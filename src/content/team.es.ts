import type { TeamProps, TeamMember } from "@/components/Team";
import teamJorge from "@/assets/team-jorge.jpg";
import teamRamon from "@/assets/team-ramon.jpg";
import teamGerardo from "@/assets/team-gerardo.jpg";
import teamDana from "@/assets/team-dana.jpg";

// ============================================
// TEAM MEMBERS DATA
// ============================================
export const teamMembers: TeamMember[] = [
  {
    slug: "jorge-luis-rodriguez",
    name: "Jorge Luis Rodriguez",
    role: "Founder, CEO y Socio Director",
    photoSrc: teamJorge,
    specialty: "Corporativo",
    xpYears: 28,
    education: "Maestría",
    langs: ["Español"],
    bio: "Creo firmemente que lo legal debe ser una herramienta para avanzar, no un freno. Por eso mi enfoque es práctico - entender cómo funciona tu negocio, detectar riesgos antes de que se conviertan en problemas y dejar acuerdos claros que den tranquilidad para operar y crecer. Mi prioridad es que cada paso tenga sentido para ti y que salgas con claridad, ruta y respaldo.",
    shortBio: "Mi enfoque es práctico - entender cómo funciona tu negocio y detectar riesgos antes de que se conviertan en problemas.",
  },
  {
    slug: "ramon-antonio-rodriguez",
    name: "Ramón Antonio Rodriguez",
    role: "Abogado Senior",
    photoSrc: teamRamon,
    specialty: "Civil",
    xpYears: 18,
    education: "Licenciatura",
    langs: ["Español"],
    bio: "En lo civil, los detalles importan. Por eso mi manera de trabajar es revisar a fondo, ordenar documentos y construir una estrategia que se sostenga con hechos. He aprendido que la tranquilidad llega cuando hay ruta y control del proceso, y eso es lo que busco en cada asunto - proteger el patrimonio, prevenir problemas mayores y resolver con firmeza cuando ya existe un conflicto.",
    shortBio: "Mi manera de trabajar es revisar a fondo, ordenar documentos y construir una estrategia que se sostenga con hechos.",
  },
  {
    slug: "gerardo-alejandro-lopez",
    name: "Gerardo Alejandro López",
    role: "Abogado Junior",
    photoSrc: teamGerardo,
    specialty: "Litigio",
    xpYears: 3,
    education: "Licenciatura",
    langs: ["Español"],
    bio: "Me apasiona el trabajo jurídico y legal bien hecho. En RSL participo en el análisis y preparación de asuntos, cuidando la documentación, el seguimiento y los tiempos, porque ahí es donde se gana confianza. Mi objetivo es aportar orden y claridad para que cada cliente sienta que su caso está en buenas manos y que el proceso avanza con seriedad y atención real.",
    shortBio: "Participo en el análisis y preparación de asuntos, cuidando la documentación, el seguimiento y los tiempos.",
  },
  {
    slug: "dana-paola-salazar",
    name: "Dana Paola Salazar",
    role: "Abogada Junior",
    photoSrc: teamDana,
    specialty: "Familiar",
    xpYears: 2,
    education: "Licenciatura",
    langs: ["Español"],
    bio: "En RSL participo en la preparación y desarrollo de asuntos, cuidando documentación, plazos y comunicación, para que el cliente tenga claridad en cada etapa. Mi objetivo es que cada persona se sienta acompañada y respaldada, con un proceso entendible y una forma de trabajo seria, humana y consistente.",
    shortBio: "Cuido documentación, plazos y comunicación, para que el cliente tenga claridad en cada etapa.",
  },
];

// ============================================
// TEAM SECTION CONTENT
// ============================================
export const teamContent: TeamProps = {
  badge: "Nuestro Equipo",
  title: "Profesionales comprometidos",
  subtitle: "Un equipo multidisciplinario con experiencia en distintas áreas del derecho, unido por el compromiso de proteger tus intereses.",
  people: teamMembers,
  viewProfileLabel: "Ver perfil",
  yearsLabel: "años",
};
