// ============================================
// PRACTICE AREAS CONTENT (Spanish)
// ============================================

export interface PracticeAreaDetail {
  slug: string;
  name: string;
  shortDescription: string;
  fullDescription: string;
  howWeWork: {
    diagnosis: string;
    documentation: string;
    followUp: string;
  };
  problemsWeSolve: string[];
  faqs: Array<{
    question: string;
    answer: string;
  }>;
}

export const practiceAreas: PracticeAreaDetail[] = [
  {
    slug: "prevention",
    name: "Prevención y Consultoría",
    shortDescription: "Asesoría legal continua para detectar riesgos antes de que se vuelvan conflictos.",
    fullDescription: "Nuestro servicio de prevención legal está diseñado para empresas que entienden que es más económico prevenir que litigar. Ofrecemos asesoría continua, revisión de contratos y análisis de riesgos.",
    howWeWork: {
      diagnosis: "Evaluamos tu situación actual, contratos vigentes y posibles riesgos.",
      documentation: "Preparamos o actualizamos los documentos necesarios para protegerte.",
      followUp: "Monitoreo continuo y asesoría disponible cuando la necesites.",
    },
    problemsWeSolve: [
      "Contratos mal redactados que generan conflictos",
      "Incumplimiento de normativas laborales o fiscales",
      "Falta de protección en acuerdos comerciales",
      "Riesgos no identificados en operaciones",
    ],
    faqs: [
      {
        question: "¿Con qué frecuencia debo revisar mis contratos?",
        answer: "Recomendamos una revisión anual mínima, o cada vez que cambien las condiciones del negocio.",
      },
      {
        question: "¿Qué incluye el servicio de consultoría?",
        answer: "Incluye revisión de contratos, asesoría telefónica ilimitada, y análisis de riesgos trimestrales.",
      },
    ],
  },
  {
    slug: "commercial",
    name: "Derecho Mercantil y Corporativo",
    shortDescription: "Constitución de sociedades, contratos comerciales y cumplimiento regulatorio.",
    fullDescription: "Acompañamos a empresas desde su constitución hasta su operación diaria, asegurando que cada transacción comercial esté legalmente protegida.",
    howWeWork: {
      diagnosis: "Analizamos tu estructura empresarial y objetivos comerciales.",
      documentation: "Redactamos estatutos, contratos y acuerdos de socios.",
      followUp: "Asesoría continua para modificaciones y cumplimiento.",
    },
    problemsWeSolve: [
      "Conflictos entre socios",
      "Contratos comerciales incumplidos",
      "Problemas de constitución o fusión",
      "Incumplimiento de regulaciones",
    ],
    faqs: [
      {
        question: "¿Cuánto tarda constituir una empresa?",
        answer: "El proceso típico toma entre 2 y 4 semanas, dependiendo de la complejidad.",
      },
      {
        question: "¿Qué tipo de sociedad me conviene?",
        answer: "Depende de tus objetivos. En la consulta inicial analizamos opciones y recomendamos la mejor para tu caso.",
      },
    ],
  },
  {
    slug: "civil",
    name: "Derecho Civil e Inmobiliario",
    shortDescription: "Compraventa, arrendamiento, prescripción y protección de tu patrimonio.",
    fullDescription: "Protegemos tu patrimonio con asesoría especializada en transacciones inmobiliarias, contratos de arrendamiento y resolución de conflictos civiles.",
    howWeWork: {
      diagnosis: "Revisamos títulos de propiedad, contratos vigentes y situación legal.",
      documentation: "Preparamos escrituras, contratos y documentos de regularización.",
      followUp: "Acompañamiento hasta el cierre de la operación o resolución del caso.",
    },
    problemsWeSolve: [
      "Propiedades sin escriturar",
      "Conflictos de arrendamiento",
      "Prescripción positiva o negativa",
      "Disputas de propiedad",
    ],
    faqs: [
      {
        question: "¿Qué es la prescripción positiva?",
        answer: "Es el derecho de adquirir la propiedad de un bien por haberlo poseído durante cierto tiempo bajo determinadas condiciones.",
      },
      {
        question: "¿Cómo puedo regularizar una propiedad?",
        answer: "Depende del caso. Puede ser por escrituración, prescripción o juicio sucesorio. Evaluamos tu situación específica.",
      },
    ],
  },
  {
    slug: "family",
    name: "Derecho Familiar",
    shortDescription: "Divorcios, pensiones, custodia y sucesiones con un enfoque humano y resolutivo.",
    fullDescription: "Entendemos que los asuntos familiares son sensibles. Ofrecemos asesoría con empatía y profesionalismo para proteger tus derechos y los de tu familia.",
    howWeWork: {
      diagnosis: "Escuchamos tu situación y evaluamos las mejores opciones legales.",
      documentation: "Preparamos demandas, convenios o acuerdos según el caso.",
      followUp: "Te acompañamos durante todo el proceso judicial o extrajudicial.",
    },
    problemsWeSolve: [
      "Divorcios contenciosos o de mutuo acuerdo",
      "Pensiones alimenticias",
      "Guarda y custodia de menores",
      "Sucesiones y testamentos",
    ],
    faqs: [
      {
        question: "¿Cuánto tarda un divorcio?",
        answer: "Un divorcio de mutuo acuerdo puede resolverse en 1-2 meses. Uno contencioso puede tomar 6 meses a 2 años.",
      },
      {
        question: "¿Cómo se calcula la pensión alimenticia?",
        answer: "Se considera el ingreso del obligado, las necesidades del acreedor y otros factores del caso específico.",
      },
    ],
  },
  {
    slug: "contracts",
    name: "Contratos y Cumplimiento",
    shortDescription: "Redacción, revisión y negociación de contratos que protejan tus intereses.",
    fullDescription: "Un contrato bien redactado evita conflictos futuros. Nos especializamos en crear documentos claros que protejan tus intereses comerciales.",
    howWeWork: {
      diagnosis: "Entendemos el objetivo del contrato y los riesgos involucrados.",
      documentation: "Redactamos o revisamos el contrato con cláusulas de protección.",
      followUp: "Asesoría en negociación y modificaciones posteriores.",
    },
    problemsWeSolve: [
      "Contratos ambiguos o incompletos",
      "Cláusulas abusivas",
      "Incumplimiento de contratos",
      "Falta de protección en acuerdos",
    ],
    faqs: [
      {
        question: "¿Qué debe incluir un buen contrato?",
        answer: "Identificación de partes, objeto, obligaciones, plazos, penalizaciones y jurisdicción aplicable.",
      },
      {
        question: "¿Puedo modificar un contrato ya firmado?",
        answer: "Sí, mediante un convenio modificatorio firmado por ambas partes.",
      },
    ],
  },
];

export const areasPageContent = {
  title: "Áreas de Práctica",
  subtitle: "Servicios legales especializados para proteger y hacer crecer tu negocio",
  ctaSidebar: {
    title: "¿Necesitas asesoría?",
    text: "Agenda una consulta para revisar tu caso específico.",
    ctaBookingText: "Agendar cita",
    ctaWhatsappText: "Enviar WhatsApp",
  },
};
