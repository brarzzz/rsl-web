import { Shield, Building2, Home, Users, FileText, LucideIcon, Scale } from 'lucide-react';

// ============================================
// PRACTICE AREAS DATA-DRIVEN CONTENT
// ============================================

export interface PracticeAreaFaq {
  question: string;
  answer: string;
}

export interface PracticeAreaData {
  id: string;
  slug: string;
  icon: LucideIcon;
  order: number;
  star: boolean; // "Servicio Estrella" flag
  
  // Spanish content
  es: {
    name: string;
    h1: string;
    shortDescription: string;
    steps: [string, string, string]; // Diagnóstico, Documentación, Seguimiento
    problems: string[];
    faqs: PracticeAreaFaq[];
    keywords: string[];
  };
  
  // English content
  en: {
    name: string;
    h1: string;
    shortDescription: string;
    steps: [string, string, string];
    problems: string[];
    faqs: PracticeAreaFaq[];
    keywords: string[];
  };
}

export const practiceAreasData: PracticeAreaData[] = [
  {
    id: 'prevention',
    slug: 'prevencion-consultoria',
    icon: Shield,
    order: 1,
    star: true,
    es: {
      name: 'Prevención y Consultoría Legal',
      h1: 'Prevención y Consultoría Legal para Empresas',
      shortDescription: 'Diseños preventivos, auditoría básica de riesgos, políticas y contratos para emprendedores y PYMEs.',
      steps: [
        'Analizamos tu situación, documentos y objetivos para entender el panorama completo.',
        'Preparamos la estrategia y documentos necesarios con precisión y claridad.',
        'Te mantenemos informado en cada paso hasta resolver tu caso.',
      ],
      problems: [
        'No sabes si tus contratos realmente te protegen',
        'Tu empresa creció pero las políticas siguen siendo informales',
        'Preocupación constante por posibles demandas o multas',
        'Falta de claridad sobre obligaciones fiscales y laborales',
        'Contratos copiados de internet sin adaptación',
        'Socios sin acuerdos claros por escrito',
      ],
      faqs: [
        { question: '¿Qué incluye una auditoría de riesgos legales?', answer: 'Revisamos contratos existentes, políticas internas, estructura societaria, cumplimiento laboral y fiscal. Entregamos un reporte con hallazgos y recomendaciones priorizadas.' },
        { question: '¿Cuánto tiempo toma una auditoría básica?', answer: 'Para PYMEs, generalmente entre 5 y 10 días hábiles, dependiendo del volumen de documentación.' },
        { question: '¿Necesito un abogado de planta o puedo contratar por proyecto?', answer: 'Ofrecemos ambas modalidades: retainer mensual para asesoría continua o proyectos específicos con entregables definidos.' },
        { question: '¿Pueden ayudarme a cumplir con la NOM-035?', answer: 'Sí, diseñamos políticas y procedimientos para cumplir con normativas laborales incluyendo NOM-035 y otras obligaciones.' },
        { question: '¿Trabajan con startups en etapa temprana?', answer: 'Absolutamente. Tenemos paquetes diseñados para emprendedores que necesitan establecer bases legales sólidas desde el inicio.' },
      ],
      keywords: ['asesoría legal empresarial Culiacán', 'abogado corporativo Culiacán', 'prevención legal empresas'],
    },
    en: {
      name: 'Prevention & Legal Consulting',
      h1: 'Prevention & Legal Consulting for Businesses',
      shortDescription: 'Preventive designs, basic risk auditing, policies and contracts for entrepreneurs and SMEs.',
      steps: [
        'We analyze your situation, documents, and objectives to understand the complete picture.',
        'We prepare the strategy and necessary documents with precision and clarity.',
        'We keep you informed at every step until your case is resolved.',
      ],
      problems: [
        "You don't know if your contracts really protect you",
        'Your company grew but policies remain informal',
        'Constant worry about potential lawsuits or fines',
        'Lack of clarity about tax and labor obligations',
        'Contracts copied from the internet without adaptation',
        'Partners without clear written agreements',
      ],
      faqs: [
        { question: 'What does a legal risk audit include?', answer: 'We review existing contracts, internal policies, corporate structure, labor and tax compliance. We deliver a report with findings and prioritized recommendations.' },
        { question: 'How long does a basic audit take?', answer: 'For SMEs, generally between 5 and 10 business days, depending on the volume of documentation.' },
        { question: 'Do I need an in-house lawyer or can I hire by project?', answer: 'We offer both: monthly retainer for ongoing advice or specific projects with defined deliverables.' },
        { question: 'Can you help me comply with NOM-035?', answer: 'Yes, we design policies and procedures to comply with labor regulations including NOM-035 and other obligations.' },
        { question: 'Do you work with early-stage startups?', answer: 'Absolutely. We have packages designed for entrepreneurs who need to establish solid legal foundations from the start.' },
      ],
      keywords: ['legal consulting Culiacan', 'corporate lawyer Culiacan', 'business legal prevention'],
    },
  },
  {
    id: 'commercial',
    slug: 'mercantil-corporativo',
    icon: Scale,
    order: 2,
    star: true,
    es: {
      name: 'Mercantil y Corporativo',
      h1: 'Derecho Mercantil y Corporativo en Culiacán',
      shortDescription: 'Constitución y gobierno corporativo, actas, socios, fusiones/escisiones básicas, compliance mercantil.',
      steps: [
        'Analizamos tu estructura empresarial y objetivos comerciales.',
        'Redactamos estatutos, contratos y acuerdos de socios.',
        'Asesoría continua para modificaciones y cumplimiento.',
      ],
      problems: [
        'Necesitas constituir una empresa y no sabes qué tipo de sociedad te conviene',
        'Conflictos entre socios sin acuerdos claros',
        'Actas de asamblea atrasadas o inexistentes',
        'Quieres incorporar un nuevo socio o inversionista',
        'Fusión o escisión de sociedades',
        'Incumplimiento de obligaciones corporativas ante el SAT o SE',
      ],
      faqs: [
        { question: '¿Qué tipo de sociedad me conviene más?', answer: 'Depende de tu giro, número de socios y planes de crecimiento. Las más comunes son S.A. de C.V., S. de R.L. de C.V. y SAPI. En consulta evaluamos cuál se adapta mejor.' },
        { question: '¿Cuánto tarda constituir una empresa?', answer: 'Con documentación completa, entre 2 y 4 semanas para tener todo formalizado ante notario e inscrito en el Registro Público.' },
        { question: '¿Qué pasa si no tengo mis actas al día?', answer: 'Podemos regularizar tu situación corporativa preparando las actas faltantes y actualizando libros sociales.' },
        { question: '¿Pueden redactar un pacto de socios?', answer: 'Sí, diseñamos acuerdos parasocietarios que regulan toma de decisiones, reparto de utilidades, entrada/salida de socios y resolución de conflictos.' },
        { question: '¿Manejan fusiones y escisiones?', answer: 'Sí, para operaciones básicas a medianas. Coordinamos con notarios y auditores para ejecutar el proceso completo.' },
      ],
      keywords: ['abogado mercantil Culiacán', 'derecho corporativo Culiacán', 'constitución de empresas Culiacán'],
    },
    en: {
      name: 'Commercial & Corporate',
      h1: 'Commercial & Corporate Law in Culiacán',
      shortDescription: 'Incorporation and corporate governance, minutes, partners, basic mergers/spin-offs, commercial compliance.',
      steps: [
        'We analyze your business structure and commercial objectives.',
        'We draft bylaws, contracts, and shareholder agreements.',
        'Ongoing advice for modifications and compliance.',
      ],
      problems: [
        "You need to incorporate a company and don't know which type suits you",
        'Conflicts between partners without clear agreements',
        'Meeting minutes delayed or nonexistent',
        'You want to bring in a new partner or investor',
        'Merger or spin-off of companies',
        'Non-compliance with corporate obligations before SAT or SE',
      ],
      faqs: [
        { question: 'Which type of company suits me best?', answer: 'It depends on your business, number of partners, and growth plans. The most common are S.A. de C.V., S. de R.L. de C.V., and SAPI. We evaluate which one fits better in consultation.' },
        { question: 'How long does it take to incorporate a company?', answer: 'With complete documentation, between 2 and 4 weeks to have everything formalized before a notary and registered in the Public Registry.' },
        { question: 'What if my meeting minutes are not up to date?', answer: 'We can regularize your corporate situation by preparing missing minutes and updating corporate books.' },
        { question: 'Can you draft a shareholders agreement?', answer: 'Yes, we design shareholder agreements that regulate decision-making, profit distribution, partner entry/exit, and conflict resolution.' },
        { question: 'Do you handle mergers and spin-offs?', answer: 'Yes, for basic to medium operations. We coordinate with notaries and auditors to execute the complete process.' },
      ],
      keywords: ['commercial lawyer Culiacan', 'corporate law Culiacan', 'company incorporation Culiacan'],
    },
  },
  {
    id: 'civil',
    slug: 'civil-inmobiliario',
    icon: Home,
    order: 3,
    star: true,
    es: {
      name: 'Civil e Inmobiliario',
      h1: 'Derecho Civil e Inmobiliario en Culiacán',
      shortDescription: 'Posesión, declarativas, regularización, contratos civiles, recuperación y defensa de inmueble.',
      steps: [
        'Revisamos títulos de propiedad, contratos vigentes y situación legal.',
        'Preparamos escrituras, contratos y documentos de regularización.',
        'Acompañamiento hasta el cierre de la operación o resolución del caso.',
      ],
      problems: [
        'Tienes un terreno o propiedad sin escrituras',
        'Alguien ocupa tu propiedad sin autorización',
        'Conflictos por herencias o sucesiones',
        'El inquilino no paga y no desocupa',
        'Necesitas regularizar un inmueble adquirido hace años',
        'Contratos de compraventa o arrendamiento mal redactados',
      ],
      faqs: [
        { question: '¿Qué es la prescripción positiva y cómo funciona?', answer: 'Es un juicio que permite obtener escrituras de un inmueble que has poseído de forma pacífica, continua y pública durante al menos 5 años (buena fe) o 10 años (mala fe).' },
        { question: '¿Cuánto tiempo toma un juicio de prescripción?', answer: 'Generalmente entre 8 y 18 meses, dependiendo de la carga del juzgado y la complejidad del caso.' },
        { question: '¿Pueden ayudarme a recuperar una propiedad invadida?', answer: 'Sí, iniciamos acciones de reivindicación o desalojo según corresponda, con medidas precautorias cuando sea posible.' },
        { question: '¿Qué documentos necesito para regularizar mi propiedad?', answer: 'Identificación, comprobantes de domicilio, recibos de servicios a tu nombre, y cualquier documento que acredite tu posesión (contratos previos, testimonios).' },
        { question: '¿Manejan contratos de arrendamiento?', answer: 'Sí, redactamos contratos que protegen al arrendador con cláusulas claras sobre pagos, depósitos, causales de rescisión y procedimientos de desocupación.' },
      ],
      keywords: ['abogado civil Culiacán', 'abogado inmobiliario Culiacán', 'prescripción positiva Culiacán'],
    },
    en: {
      name: 'Civil & Real Estate',
      h1: 'Civil & Real Estate Law in Culiacán',
      shortDescription: 'Possession, declaratory actions, regularization, civil contracts, property recovery and defense.',
      steps: [
        'We review property titles, existing contracts, and legal situation.',
        'We prepare deeds, contracts, and regularization documents.',
        'Accompaniment until the closing of the operation or case resolution.',
      ],
      problems: [
        'You have land or property without title deeds',
        'Someone occupies your property without authorization',
        'Conflicts over inheritances or successions',
        "The tenant doesn't pay and won't vacate",
        'You need to regularize a property acquired years ago',
        'Poorly drafted purchase or lease contracts',
      ],
      faqs: [
        { question: 'What is adverse possession and how does it work?', answer: 'It is a lawsuit that allows you to obtain title deeds for a property you have possessed peacefully, continuously, and publicly for at least 5 years (good faith) or 10 years (bad faith).' },
        { question: 'How long does an adverse possession case take?', answer: 'Generally between 8 and 18 months, depending on the court workload and case complexity.' },
        { question: 'Can you help me recover an invaded property?', answer: 'Yes, we initiate recovery or eviction actions as appropriate, with precautionary measures when possible.' },
        { question: 'What documents do I need to regularize my property?', answer: 'ID, proof of address, utility receipts in your name, and any document proving your possession (previous contracts, testimonies).' },
        { question: 'Do you handle lease contracts?', answer: 'Yes, we draft contracts that protect the landlord with clear clauses on payments, deposits, termination causes, and eviction procedures.' },
      ],
      keywords: ['civil lawyer Culiacan', 'real estate lawyer Culiacan', 'adverse possession Culiacan'],
    },
  },
  {
    id: 'family',
    slug: 'derecho-familiar',
    icon: Users,
    order: 4,
    star: true,
    es: {
      name: 'Derecho Familiar',
      h1: 'Derecho Familiar – Divorcios y Custodia en Culiacán',
      shortDescription: 'Divorcios, convenios, guardia y custodia, convenios patrimoniales, juicios sucesorios.',
      steps: [
        'Escuchamos tu situación y evaluamos las mejores opciones legales.',
        'Preparamos demandas, convenios o acuerdos según el caso.',
        'Te acompañamos durante todo el proceso judicial o extrajudicial.',
      ],
      problems: [
        'Quieres divorciarte pero no sabes si tu pareja aceptará',
        'Conflictos por la custodia de los hijos',
        'Tu ex-pareja no cumple con la pensión alimenticia',
        'Necesitas modificar un convenio de divorcio existente',
        'Sucesión o herencia sin testamento',
        'Disputa familiar por bienes heredados',
      ],
      faqs: [
        { question: '¿Cuánto tiempo toma un divorcio voluntario?', answer: 'Si ambas partes están de acuerdo y la documentación está completa, entre 1 y 3 meses aproximadamente.' },
        { question: '¿Y si mi pareja no quiere divorciarse?', answer: 'Procedemos con divorcio contencioso. Actualmente no se requiere acreditar causales, pero el proceso es más largo (6-12 meses o más).' },
        { question: '¿Cómo se determina la custodia de los hijos?', answer: 'El juez prioriza el interés superior del menor. Se consideran edad, vínculo con cada padre, estabilidad, y capacidad de cada progenitor.' },
        { question: '¿Pueden ayudarme a cobrar pensión alimenticia atrasada?', answer: 'Sí, iniciamos procedimientos de ejecución para obligar al pago, incluyendo embargo de cuentas o bienes si es necesario.' },
        { question: '¿Qué pasa si no hay testamento?', answer: 'Iniciamos un juicio sucesorio intestamentario donde se determina quiénes son los herederos legítimos según la ley.' },
        { question: '¿Manejan casos de violencia familiar?', answer: 'Sí, coordinamos órdenes de protección y acompañamos en el proceso penal y familiar simultáneamente.' },
      ],
      keywords: ['abogado familiar Culiacán', 'divorcio Culiacán', 'custodia hijos Culiacán'],
    },
    en: {
      name: 'Family Law',
      h1: 'Family Law – Divorce & Custody in Culiacán',
      shortDescription: 'Divorces, agreements, custody, property agreements, probate proceedings.',
      steps: [
        'We listen to your situation and evaluate the best legal options.',
        'We prepare lawsuits, agreements, or settlements as needed.',
        'We accompany you throughout the judicial or extrajudicial process.',
      ],
      problems: [
        "You want to divorce but don't know if your spouse will agree",
        'Conflicts over child custody',
        "Your ex-partner doesn't comply with child support",
        'You need to modify an existing divorce agreement',
        'Succession or inheritance without a will',
        'Family dispute over inherited assets',
      ],
      faqs: [
        { question: 'How long does a voluntary divorce take?', answer: 'If both parties agree and documentation is complete, approximately 1 to 3 months.' },
        { question: "What if my spouse doesn't want to divorce?", answer: "We proceed with contested divorce. Currently, grounds don't need to be proven, but the process is longer (6-12 months or more)." },
        { question: 'How is child custody determined?', answer: "The judge prioritizes the child's best interest. Age, bond with each parent, stability, and each parent's capacity are considered." },
        { question: 'Can you help me collect overdue child support?', answer: 'Yes, we initiate enforcement procedures to compel payment, including account or asset seizure if necessary.' },
        { question: 'What happens if there is no will?', answer: 'We initiate an intestate succession lawsuit where legal heirs are determined according to law.' },
        { question: 'Do you handle domestic violence cases?', answer: 'Yes, we coordinate protection orders and accompany clients in criminal and family proceedings simultaneously.' },
      ],
      keywords: ['family lawyer Culiacan', 'divorce Culiacan', 'child custody Culiacan'],
    },
  },
  {
    id: 'contracts',
    slug: 'contratos-cumplimiento',
    icon: FileText,
    order: 5,
    star: false,
    es: {
      name: 'Contratos y Cumplimiento',
      h1: 'Contratos y Cumplimiento Comercial',
      shortDescription: 'Redacción, revisión y negociación B2B/B2C; cláusulas de riesgo y garantías.',
      steps: [
        'Entendemos el objetivo del contrato y los riesgos involucrados.',
        'Redactamos o revisamos el contrato con cláusulas de protección.',
        'Asesoría en negociación y modificaciones posteriores.',
      ],
      problems: [
        'Tu cliente o proveedor incumplió el contrato',
        'Usas contratos genéricos que no reflejan tu operación real',
        'Necesitas renegociar términos con un socio comercial',
        'No sabes qué cláusulas incluir para protegerte',
        'Contratos internacionales o en otro idioma',
        'Disputas sobre interpretación de términos contractuales',
      ],
      faqs: [
        { question: '¿Por qué no puedo usar contratos de internet?', answer: 'Esos contratos son genéricos y no consideran tu situación específica, las leyes mexicanas aplicables, ni los riesgos particulares de tu operación.' },
        { question: '¿Cuánto cuesta redactar un contrato?', answer: 'Depende de la complejidad. Tenemos opciones desde contratos básicos hasta acuerdos complejos de múltiples partes. Cotizamos sin compromiso.' },
        { question: '¿Pueden revisar un contrato que me enviaron?', answer: 'Sí, analizamos contratos de terceros, identificamos riesgos y proponemos modificaciones o alertamos sobre cláusulas problemáticas.' },
        { question: '¿Qué pasa si la otra parte no cumple?', answer: 'Evaluamos si conviene negociar, mediar o litigar. Preparamos cartas de incumplimiento y, si es necesario, iniciamos procedimiento judicial.' },
        { question: '¿Manejan contratos en inglés?', answer: 'Sí, redactamos y revisamos contratos bilingües o en inglés, especialmente para operaciones con empresas extranjeras.' },
      ],
      keywords: ['contratos comerciales Culiacán', 'abogado contratos Culiacán', 'elaboración de contratos Culiacán'],
    },
    en: {
      name: 'Contracts & Compliance',
      h1: 'Contracts & Commercial Compliance',
      shortDescription: 'B2B/B2C drafting, review and negotiation; risk clauses and guarantees.',
      steps: [
        'We understand the contract objective and risks involved.',
        'We draft or review the contract with protective clauses.',
        'Advisory on negotiation and subsequent modifications.',
      ],
      problems: [
        'Your client or supplier breached the contract',
        "You use generic contracts that don't reflect your actual operation",
        'You need to renegotiate terms with a business partner',
        "You don't know what clauses to include to protect yourself",
        'International contracts or in another language',
        'Disputes over interpretation of contract terms',
      ],
      faqs: [
        { question: "Why can't I use contracts from the internet?", answer: "Those contracts are generic and don't consider your specific situation, applicable Mexican laws, or the particular risks of your operation." },
        { question: 'How much does drafting a contract cost?', answer: 'It depends on complexity. We have options from basic contracts to complex multi-party agreements. We quote without obligation.' },
        { question: 'Can you review a contract sent to me?', answer: 'Yes, we analyze third-party contracts, identify risks, and propose modifications or alert about problematic clauses.' },
        { question: "What happens if the other party doesn't comply?", answer: 'We evaluate whether to negotiate, mediate, or litigate. We prepare breach letters and, if necessary, initiate legal proceedings.' },
        { question: 'Do you handle contracts in English?', answer: 'Yes, we draft and review bilingual or English contracts, especially for operations with foreign companies.' },
      ],
      keywords: ['commercial contracts Culiacan', 'contract lawyer Culiacan', 'contract drafting Culiacan'],
    },
  },
];

// Helper to get area by slug
export const getAreaBySlug = (slug: string): PracticeAreaData | undefined => {
  return practiceAreasData.find((area) => area.slug === slug);
};

// Helper to get sorted areas (by order, stars first)
export const getSortedAreas = (): PracticeAreaData[] => {
  return [...practiceAreasData].sort((a, b) => {
    if (a.star !== b.star) return a.star ? -1 : 1;
    return a.order - b.order;
  });
};

// Helper to get star areas
export const getStarAreas = (): PracticeAreaData[] => {
  return practiceAreasData.filter((area) => area.star);
};
