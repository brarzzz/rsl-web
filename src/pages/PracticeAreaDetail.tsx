import { useParams, Link, Navigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useRef, useEffect } from 'react';
import { 
  Shield, Building2, Home, Users, FileText, ArrowRight, 
  Search, FileCheck, Clock, CheckCircle, Phone, MessageSquare
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { useTranslation } from '@/i18n/LanguageContext';
import { Helmet } from 'react-helmet-async';

// Practice area data with SEO content
const practiceAreasData = {
  prevention: {
    id: 'prevention',
    slug: 'prevencion-consultoria',
    icon: Shield,
    h1Es: 'Prevención y Consultoría Legal para Empresas',
    h1En: 'Prevention & Legal Consulting for Businesses',
    shortEs: 'Diseños preventivos, auditoría básica de riesgos, políticas y contratos para emprendedores y PYMEs.',
    shortEn: 'Preventive designs, basic risk auditing, policies and contracts for entrepreneurs and SMEs.',
    problemsEs: [
      'No sabes si tus contratos realmente te protegen',
      'Tu empresa creció pero las políticas siguen siendo informales',
      'Preocupación constante por posibles demandas o multas',
      'Falta de claridad sobre obligaciones fiscales y laborales',
      'Contratos copiados de internet sin adaptación',
      'Socios sin acuerdos claros por escrito',
    ],
    problemsEn: [
      "You don't know if your contracts really protect you",
      'Your company grew but policies remain informal',
      'Constant worry about potential lawsuits or fines',
      'Lack of clarity about tax and labor obligations',
      'Contracts copied from the internet without adaptation',
      'Partners without clear written agreements',
    ],
    faqsEs: [
      { q: '¿Qué incluye una auditoría de riesgos legales?', a: 'Revisamos contratos existentes, políticas internas, estructura societaria, cumplimiento laboral y fiscal. Entregamos un reporte con hallazgos y recomendaciones priorizadas.' },
      { q: '¿Cuánto tiempo toma una auditoría básica?', a: 'Para PYMEs, generalmente entre 5 y 10 días hábiles, dependiendo del volumen de documentación.' },
      { q: '¿Necesito un abogado de planta o puedo contratar por proyecto?', a: 'Ofrecemos ambas modalidades: retainer mensual para asesoría continua o proyectos específicos con entregables definidos.' },
      { q: '¿Pueden ayudarme a cumplir con la NOM-035?', a: 'Sí, diseñamos políticas y procedimientos para cumplir con normativas laborales incluyendo NOM-035 y otras obligaciones.' },
      { q: '¿Trabajan con startups en etapa temprana?', a: 'Absolutamente. Tenemos paquetes diseñados para emprendedores que necesitan establecer bases legales sólidas desde el inicio.' },
    ],
    faqsEn: [
      { q: 'What does a legal risk audit include?', a: 'We review existing contracts, internal policies, corporate structure, labor and tax compliance. We deliver a report with findings and prioritized recommendations.' },
      { q: 'How long does a basic audit take?', a: 'For SMEs, generally between 5 and 10 business days, depending on the volume of documentation.' },
      { q: 'Do I need an in-house lawyer or can I hire by project?', a: 'We offer both: monthly retainer for ongoing advice or specific projects with defined deliverables.' },
      { q: 'Can you help me comply with NOM-035?', a: 'Yes, we design policies and procedures to comply with labor regulations including NOM-035 and other obligations.' },
      { q: 'Do you work with early-stage startups?', a: 'Absolutely. We have packages designed for entrepreneurs who need to establish solid legal foundations from the start.' },
    ],
    keywords: ['asesoría legal empresarial Culiacán', 'abogado corporativo Culiacán', 'prevención legal empresas'],
  },
  commercial: {
    id: 'commercial',
    slug: 'mercantil-corporativo',
    icon: Building2,
    h1Es: 'Derecho Mercantil y Corporativo en Culiacán',
    h1En: 'Commercial & Corporate Law in Culiacán',
    shortEs: 'Constitución y gobierno corporativo, actas, socios, fusiones/escisiones básicas, compliance mercantil.',
    shortEn: 'Incorporation and corporate governance, minutes, partners, basic mergers/spin-offs, commercial compliance.',
    problemsEs: [
      'Necesitas constituir una empresa y no sabes qué tipo de sociedad te conviene',
      'Conflictos entre socios sin acuerdos claros',
      'Actas de asamblea atrasadas o inexistentes',
      'Quieres incorporar un nuevo socio o inversionista',
      'Fusión o escisión de sociedades',
      'Incumplimiento de obligaciones corporativas ante el SAT o SE',
    ],
    problemsEn: [
      "You need to incorporate a company and don't know which type suits you",
      'Conflicts between partners without clear agreements',
      'Meeting minutes delayed or nonexistent',
      'You want to bring in a new partner or investor',
      'Merger or spin-off of companies',
      'Non-compliance with corporate obligations before SAT or SE',
    ],
    faqsEs: [
      { q: '¿Qué tipo de sociedad me conviene más?', a: 'Depende de tu giro, número de socios y planes de crecimiento. Las más comunes son S.A. de C.V., S. de R.L. de C.V. y SAPI. En consulta evaluamos cuál se adapta mejor.' },
      { q: '¿Cuánto tarda constituir una empresa?', a: 'Con documentación completa, entre 2 y 4 semanas para tener todo formalizado ante notario e inscrito en el Registro Público.' },
      { q: '¿Qué pasa si no tengo mis actas al día?', a: 'Podemos regularizar tu situación corporativa preparando las actas faltantes y actualizando libros sociales.' },
      { q: '¿Pueden redactar un pacto de socios?', a: 'Sí, diseñamos acuerdos parasocietarios que regulan toma de decisiones, reparto de utilidades, entrada/salida de socios y resolución de conflictos.' },
      { q: '¿Manejan fusiones y escisiones?', a: 'Sí, para operaciones básicas a medianas. Coordinamos con notarios y auditores para ejecutar el proceso completo.' },
    ],
    faqsEn: [
      { q: 'Which type of company suits me best?', a: 'It depends on your business, number of partners, and growth plans. The most common are S.A. de C.V., S. de R.L. de C.V., and SAPI. We evaluate which one fits better in consultation.' },
      { q: 'How long does it take to incorporate a company?', a: 'With complete documentation, between 2 and 4 weeks to have everything formalized before a notary and registered in the Public Registry.' },
      { q: 'What if my meeting minutes are not up to date?', a: 'We can regularize your corporate situation by preparing missing minutes and updating corporate books.' },
      { q: 'Can you draft a shareholders agreement?', a: 'Yes, we design shareholder agreements that regulate decision-making, profit distribution, partner entry/exit, and conflict resolution.' },
      { q: 'Do you handle mergers and spin-offs?', a: 'Yes, for basic to medium operations. We coordinate with notaries and auditors to execute the complete process.' },
    ],
    keywords: ['abogado mercantil Culiacán', 'derecho corporativo Culiacán', 'constitución de empresas Culiacán'],
  },
  civil: {
    id: 'civil',
    slug: 'civil-inmobiliario',
    icon: Home,
    h1Es: 'Derecho Civil e Inmobiliario en Culiacán',
    h1En: 'Civil & Real Estate Law in Culiacán',
    shortEs: 'Posesión, declarativas, regularización, contratos civiles, recuperación y defensa de inmueble.',
    shortEn: 'Possession, declaratory actions, regularization, civil contracts, property recovery and defense.',
    problemsEs: [
      'Tienes un terreno o propiedad sin escrituras',
      'Alguien ocupa tu propiedad sin autorización',
      'Conflictos por herencias o sucesiones',
      'El inquilino no paga y no desocupa',
      'Necesitas regularizar un inmueble adquirido hace años',
      'Contratos de compraventa o arrendamiento mal redactados',
    ],
    problemsEn: [
      'You have land or property without title deeds',
      'Someone occupies your property without authorization',
      'Conflicts over inheritances or successions',
      "The tenant doesn't pay and won't vacate",
      'You need to regularize a property acquired years ago',
      'Poorly drafted purchase or lease contracts',
    ],
    faqsEs: [
      { q: '¿Qué es la prescripción positiva y cómo funciona?', a: 'Es un juicio que permite obtener escrituras de un inmueble que has poseído de forma pacífica, continua y pública durante al menos 5 años (buena fe) o 10 años (mala fe).' },
      { q: '¿Cuánto tiempo toma un juicio de prescripción?', a: 'Generalmente entre 8 y 18 meses, dependiendo de la carga del juzgado y la complejidad del caso.' },
      { q: '¿Pueden ayudarme a recuperar una propiedad invadida?', a: 'Sí, iniciamos acciones de reivindicación o desalojo según corresponda, con medidas precautorias cuando sea posible.' },
      { q: '¿Qué documentos necesito para regularizar mi propiedad?', a: 'Identificación, comprobantes de domicilio, recibos de servicios a tu nombre, y cualquier documento que acredite tu posesión (contratos previos, testimonios).' },
      { q: '¿Manejan contratos de arrendamiento?', a: 'Sí, redactamos contratos que protegen al arrendador con cláusulas claras sobre pagos, depósitos, causales de rescisión y procedimientos de desocupación.' },
    ],
    faqsEn: [
      { q: 'What is adverse possession and how does it work?', a: 'It is a lawsuit that allows you to obtain title deeds for a property you have possessed peacefully, continuously, and publicly for at least 5 years (good faith) or 10 years (bad faith).' },
      { q: 'How long does an adverse possession case take?', a: 'Generally between 8 and 18 months, depending on the court workload and case complexity.' },
      { q: 'Can you help me recover an invaded property?', a: 'Yes, we initiate recovery or eviction actions as appropriate, with precautionary measures when possible.' },
      { q: 'What documents do I need to regularize my property?', a: 'ID, proof of address, utility receipts in your name, and any document proving your possession (previous contracts, testimonies).' },
      { q: 'Do you handle lease contracts?', a: 'Yes, we draft contracts that protect the landlord with clear clauses on payments, deposits, termination causes, and eviction procedures.' },
    ],
    keywords: ['abogado civil Culiacán', 'abogado inmobiliario Culiacán', 'prescripción positiva Culiacán'],
  },
  family: {
    id: 'family',
    slug: 'derecho-familiar',
    icon: Users,
    h1Es: 'Derecho Familiar – Divorcios y Custodia en Culiacán',
    h1En: 'Family Law – Divorce & Custody in Culiacán',
    shortEs: 'Divorcios, convenios, guardia y custodia, convenios patrimoniales, juicios sucesorios.',
    shortEn: 'Divorces, agreements, custody, property agreements, probate proceedings.',
    problemsEs: [
      'Quieres divorciarte pero no sabes si tu pareja aceptará',
      'Conflictos por la custodia de los hijos',
      'Tu ex-pareja no cumple con la pensión alimenticia',
      'Necesitas modificar un convenio de divorcio existente',
      'Sucesión o herencia sin testamento',
      'Disputa familiar por bienes heredados',
    ],
    problemsEn: [
      "You want to divorce but don't know if your spouse will agree",
      'Conflicts over child custody',
      "Your ex-partner doesn't comply with child support",
      'You need to modify an existing divorce agreement',
      'Succession or inheritance without a will',
      'Family dispute over inherited assets',
    ],
    faqsEs: [
      { q: '¿Cuánto tiempo toma un divorcio voluntario?', a: 'Si ambas partes están de acuerdo y la documentación está completa, entre 1 y 3 meses aproximadamente.' },
      { q: '¿Y si mi pareja no quiere divorciarse?', a: 'Procedemos con divorcio contencioso. Actualmente no se requiere acreditar causales, pero el proceso es más largo (6-12 meses o más).' },
      { q: '¿Cómo se determina la custodia de los hijos?', a: 'El juez prioriza el interés superior del menor. Se consideran edad, vínculo con cada padre, estabilidad, y capacidad de cada progenitor.' },
      { q: '¿Pueden ayudarme a cobrar pensión alimenticia atrasada?', a: 'Sí, iniciamos procedimientos de ejecución para obligar al pago, incluyendo embargo de cuentas o bienes si es necesario.' },
      { q: '¿Qué pasa si no hay testamento?', a: 'Iniciamos un juicio sucesorio intestamentario donde se determina quiénes son los herederos legítimos según la ley.' },
      { q: '¿Manejan casos de violencia familiar?', a: 'Sí, coordinamos órdenes de protección y acompañamos en el proceso penal y familiar simultáneamente.' },
    ],
    faqsEn: [
      { q: 'How long does a voluntary divorce take?', a: 'If both parties agree and documentation is complete, approximately 1 to 3 months.' },
      { q: "What if my spouse doesn't want to divorce?", a: "We proceed with contested divorce. Currently, grounds don't need to be proven, but the process is longer (6-12 months or more)." },
      { q: 'How is child custody determined?', a: "The judge prioritizes the child's best interest. Age, bond with each parent, stability, and each parent's capacity are considered." },
      { q: 'Can you help me collect overdue child support?', a: 'Yes, we initiate enforcement procedures to compel payment, including account or asset seizure if necessary.' },
      { q: 'What happens if there is no will?', a: 'We initiate an intestate succession lawsuit where legal heirs are determined according to law.' },
      { q: 'Do you handle domestic violence cases?', a: 'Yes, we coordinate protection orders and accompany clients in criminal and family proceedings simultaneously.' },
    ],
    keywords: ['abogado familiar Culiacán', 'divorcio Culiacán', 'custodia hijos Culiacán'],
  },
  contracts: {
    id: 'contracts',
    slug: 'contratos-cumplimiento',
    icon: FileText,
    h1Es: 'Contratos y Cumplimiento Comercial',
    h1En: 'Contracts & Commercial Compliance',
    shortEs: 'Redacción, revisión y negociación B2B/B2C; cláusulas de riesgo y garantías.',
    shortEn: 'B2B/B2C drafting, review and negotiation; risk clauses and guarantees.',
    problemsEs: [
      'Tu cliente o proveedor incumplió el contrato',
      'Usas contratos genéricos que no reflejan tu operación real',
      'Necesitas renegociar términos con un socio comercial',
      'No sabes qué cláusulas incluir para protegerte',
      'Contratos internacionales o en otro idioma',
      'Disputas sobre interpretación de términos contractuales',
    ],
    problemsEn: [
      'Your client or supplier breached the contract',
      "You use generic contracts that don't reflect your actual operation",
      'You need to renegotiate terms with a business partner',
      "You don't know what clauses to include to protect yourself",
      'International contracts or in another language',
      'Disputes over interpretation of contract terms',
    ],
    faqsEs: [
      { q: '¿Por qué no puedo usar contratos de internet?', a: 'Esos contratos son genéricos y no consideran tu situación específica, las leyes mexicanas aplicables, ni los riesgos particulares de tu operación.' },
      { q: '¿Cuánto cuesta redactar un contrato?', a: 'Depende de la complejidad. Tenemos opciones desde contratos básicos hasta acuerdos complejos de múltiples partes. Cotizamos sin compromiso.' },
      { q: '¿Pueden revisar un contrato que me enviaron?', a: 'Sí, analizamos contratos de terceros, identificamos riesgos y proponemos modificaciones o alertamos sobre cláusulas problemáticas.' },
      { q: '¿Qué pasa si la otra parte no cumple?', a: 'Evaluamos si conviene negociar, mediar o litigar. Preparamos cartas de incumplimiento y, si es necesario, iniciamos procedimiento judicial.' },
      { q: '¿Manejan contratos en inglés?', a: 'Sí, redactamos y revisamos contratos bilingües o en inglés, especialmente para operaciones con empresas extranjeras.' },
    ],
    faqsEn: [
      { q: "Why can't I use contracts from the internet?", a: "Those contracts are generic and don't consider your specific situation, applicable Mexican laws, or the particular risks of your operation." },
      { q: 'How much does drafting a contract cost?', a: 'It depends on complexity. We have options from basic contracts to complex multi-party agreements. We quote without obligation.' },
      { q: 'Can you review a contract sent to me?', a: 'Yes, we analyze third-party contracts, identify risks, and propose modifications or alert about problematic clauses.' },
      { q: "What happens if the other party doesn't comply?", a: 'We evaluate whether to negotiate, mediate, or litigate. We prepare breach letters and, if necessary, initiate legal proceedings.' },
      { q: 'Do you handle contracts in English?', a: 'Yes, we draft and review bilingual or English contracts, especially for operations with foreign companies.' },
    ],
    keywords: ['contratos comerciales Culiacán', 'abogado contratos Culiacán', 'elaboración de contratos Culiacán'],
  },
};

const PracticeAreaDetail = () => {
  const { areaSlug } = useParams<{ areaSlug: string }>();
  const { t, locale } = useTranslation();
  const stickyRef = useRef<HTMLDivElement>(null);

  // Find area by slug
  const area = Object.values(practiceAreasData).find(a => a.slug === areaSlug);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [areaSlug]);

  if (!area) {
    return <Navigate to="/areas-de-practica" replace />;
  }

  const Icon = area.icon;
  const h1 = locale === 'es' ? area.h1Es : area.h1En;
  const short = locale === 'es' ? area.shortEs : area.shortEn;
  const problems = locale === 'es' ? area.problemsEs : area.problemsEn;
  const faqs = locale === 'es' ? area.faqsEs : area.faqsEn;

  const processSteps = locale === 'es' 
    ? [
        { icon: Search, title: 'Diagnóstico', desc: 'Analizamos tu situación, documentos y objetivos para entender el panorama completo.' },
        { icon: FileCheck, title: 'Documentación', desc: 'Preparamos la estrategia y documentos necesarios con precisión y claridad.' },
        { icon: Clock, title: 'Seguimiento', desc: 'Te mantenemos informado en cada paso hasta resolver tu caso.' },
      ]
    : [
        { icon: Search, title: 'Diagnosis', desc: 'We analyze your situation, documents, and objectives to understand the complete picture.' },
        { icon: FileCheck, title: 'Documentation', desc: 'We prepare the strategy and necessary documents with precision and clarity.' },
        { icon: Clock, title: 'Follow-up', desc: 'We keep you informed every step of the way until your case is resolved.' },
      ];

  const handleWhatsApp = () => {
    const message = encodeURIComponent(locale === 'es' 
      ? `Hola RSL, me interesa información sobre ${h1}`
      : `Hello RSL, I'm interested in information about ${h1}`);
    window.open(`https://wa.me/526671636472?text=${message}`, '_blank');
  };

  // FAQ Schema
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map(faq => ({
      '@type': 'Question',
      name: faq.q,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.a,
      },
    })),
  };

  // LegalService Schema
  const legalServiceSchema = {
    '@context': 'https://schema.org',
    '@type': 'LegalService',
    name: h1,
    description: short,
    provider: {
      '@type': 'LegalService',
      name: 'Rodriguez Soporte Legal',
      address: {
        '@type': 'PostalAddress',
        streetAddress: 'Calle Rio Culiacán 113 Poniente',
        addressLocality: 'Culiacán',
        addressRegion: 'Sinaloa',
        postalCode: '80000',
        addressCountry: 'MX',
      },
      telephone: '+52 667 752 2429',
    },
    areaServed: {
      '@type': 'City',
      name: 'Culiacán, Sinaloa',
    },
  };

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>{h1} | Rodriguez Soporte Legal</title>
        <meta name="description" content={short} />
        <meta name="keywords" content={area.keywords.join(', ')} />
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(legalServiceSchema)}</script>
      </Helmet>
      
      <Navbar />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-16 bg-primary">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex items-center gap-4 mb-6"
            >
              <div className="w-16 h-16 rounded-xl bg-primary-foreground/10 flex items-center justify-center">
                <Icon className="h-8 w-8 text-primary-foreground" />
              </div>
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-primary-foreground mb-4"
            >
              {h1}
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-lg text-primary-foreground/80 max-w-3xl"
            >
              {short}
            </motion.p>
          </div>
        </section>

        {/* Main Content with Sticky CTA */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-3 gap-12">
              {/* Main Content */}
              <div className="lg:col-span-2 space-y-16">
                {/* How We Work */}
                <div>
                  <h2 className="font-serif text-2xl sm:text-3xl font-bold text-foreground mb-8">
                    {locale === 'es' ? 'Cómo Trabajamos' : 'How We Work'}
                  </h2>
                  <div className="grid sm:grid-cols-3 gap-6">
                    {processSteps.map((step, index) => (
                      <motion.div
                        key={step.title}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1 }}
                        className="relative"
                      >
                        <div className="flex flex-col items-center text-center p-6 rounded-xl bg-card border border-border">
                          <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center mb-4">
                            <step.icon className="h-6 w-6 text-accent" />
                          </div>
                          <span className="text-xs font-medium text-muted-foreground mb-2">
                            {locale === 'es' ? `Paso ${index + 1}` : `Step ${index + 1}`}
                          </span>
                          <h3 className="font-serif text-lg font-bold text-foreground mb-2">
                            {step.title}
                          </h3>
                          <p className="text-sm text-muted-foreground">
                            {step.desc}
                          </p>
                        </div>
                        {index < processSteps.length - 1 && (
                          <div className="hidden sm:block absolute top-1/2 -right-3 transform -translate-y-1/2">
                            <ArrowRight className="h-6 w-6 text-muted-foreground/30" />
                          </div>
                        )}
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Problems We Solve */}
                <div>
                  <h2 className="font-serif text-2xl sm:text-3xl font-bold text-foreground mb-8">
                    {locale === 'es' ? 'Problemas que Resolvemos' : 'Problems We Solve'}
                  </h2>
                  <div className="grid sm:grid-cols-2 gap-4">
                    {problems.map((problem, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.05 }}
                        className="flex items-start gap-3 p-4 rounded-lg bg-card border border-border"
                      >
                        <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                        <span className="text-foreground">{problem}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* FAQs */}
                <div>
                  <h2 className="font-serif text-2xl sm:text-3xl font-bold text-foreground mb-8">
                    {locale === 'es' ? 'Preguntas Frecuentes' : 'Frequently Asked Questions'}
                  </h2>
                  <Accordion type="single" collapsible className="space-y-4">
                    {faqs.map((faq, index) => (
                      <AccordionItem
                        key={index}
                        value={`faq-${index}`}
                        className="border border-border rounded-lg px-4 data-[state=open]:bg-card"
                      >
                        <AccordionTrigger className="text-left font-medium text-foreground hover:no-underline py-4">
                          {faq.q}
                        </AccordionTrigger>
                        <AccordionContent className="text-muted-foreground pb-4">
                          {faq.a}
                        </AccordionContent>
                      </AccordionItem>
                    ))}
                  </Accordion>
                </div>
              </div>

              {/* Sticky CTA Sidebar */}
              <div className="lg:col-span-1">
                <div
                  ref={stickyRef}
                  className="lg:sticky lg:top-24 space-y-6"
                >
                  <div className="p-6 rounded-xl bg-primary text-primary-foreground">
                    <h3 className="font-serif text-xl font-bold mb-3">
                      {locale === 'es' ? '¿Tienes dudas sobre tu caso?' : 'Have questions about your case?'}
                    </h3>
                    <p className="text-primary-foreground/80 text-sm mb-6">
                      {locale === 'es' 
                        ? 'Cada situación es única. Contáctanos para una evaluación personalizada.' 
                        : 'Every situation is unique. Contact us for a personalized evaluation.'}
                    </p>
                    <div className="space-y-3">
                      <Button
                        variant="gold"
                        size="lg"
                        className="w-full"
                        asChild
                      >
                        <Link to="/#contacto">
                          <MessageSquare className="h-4 w-4 mr-2" />
                          {locale === 'es' ? 'Solicitar Cotización' : 'Request Quote'}
                        </Link>
                      </Button>
                      <Button
                        variant="outline"
                        size="lg"
                        className="w-full bg-transparent border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10"
                        onClick={handleWhatsApp}
                      >
                        <Phone className="h-4 w-4 mr-2" />
                        WhatsApp
                      </Button>
                    </div>
                  </div>

                  <div className="p-6 rounded-xl border border-border bg-card">
                    <h4 className="font-semibold text-foreground mb-3">
                      {locale === 'es' ? 'Respuesta en 24 horas' : 'Response within 24 hours'}
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      {locale === 'es'
                        ? 'Lunes a Viernes 9:00 - 19:00. Te respondemos al siguiente día hábil.'
                        : 'Monday to Friday 9:00 - 19:00. We respond the next business day.'}
                    </p>
                  </div>

                  <Link
                    to="/areas-de-practica"
                    className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    <ArrowRight className="h-4 w-4 rotate-180" />
                    {t.practiceAreas.backToAreas}
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default PracticeAreaDetail;
