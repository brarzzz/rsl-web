import type { HeroProps } from "@/components/Hero";
import type { ServicesProps, ServiceItem } from "@/components/Services";
import type { BenefitsProps, BenefitItem } from "@/components/Benefits";
import type { LogoWallProps } from "@/components/LogoWall";
import type { TestimonialsProps, TestimonialItem } from "@/components/Testimonials";
import type { FinalCTAProps } from "@/components/FinalCTA";
import type { ContactProps } from "@/components/Contact";
import { Shield, Building2, Home, Users, FileText, MessageSquare, Clock, FileCheck } from "lucide-react";

// ============================================
// HERO SECTION
// ============================================
export const heroContent: Partial<HeroProps> = {
  kicker: "Soporte Legal para Empresas",
  title: "Prevención y defensa civil para",
  titleAccent: "PyMEs y emprendedores",
  subtitle: "Contratos claros, cumplimiento al día y respaldo ante conflictos.",
  bullets: [
    "Consulta inicial sin costo",
    "+22 años de experiencia",
    "Cobertura nacional",
  ],
  ctaPrimaryText: "Solicitar cotización",
  ctaPrimaryHref: "#contacto",
  ctaSecondaryText: "Enviar WhatsApp",
  slaText: "⏱️ Respuesta garantizada en menos de 24 horas hábiles",
};

// ============================================
// SERVICES SECTION
// ============================================
const serviceItems: ServiceItem[] = [
  {
    icon: Shield,
    title: "Prevención y Consultoría",
    text: "Asesoría legal continua para detectar riesgos antes de que se vuelvan conflictos.",
    star: true,
    slug: "prevention",
  },
  {
    icon: Building2,
    title: "Derecho Mercantil y Corporativo",
    text: "Constitución de sociedades, contratos comerciales y cumplimiento regulatorio.",
    star: true,
    slug: "commercial",
  },
  {
    icon: Home,
    title: "Derecho Civil e Inmobiliario",
    text: "Compraventa, arrendamiento, prescripción y protección de tu patrimonio.",
    star: true,
    slug: "civil",
  },
  {
    icon: Users,
    title: "Derecho Familiar",
    text: "Divorcios, pensiones, custodia y sucesiones con un enfoque humano y resolutivo.",
    star: true,
    slug: "family",
  },
  {
    icon: FileText,
    title: "Contratos y Cumplimiento",
    text: "Redacción, revisión y negociación de contratos que protejan tus intereses.",
    star: false,
    slug: "contracts",
  },
];

export const servicesContent: ServicesProps = {
  badge: "Áreas de Práctica",
  title: "Servicios legales especializados",
  subtitle: "Soluciones jurídicas adaptadas a las necesidades de tu negocio",
  items: serviceItems,
  ctaText: "Cotizar ahora",
  ctaHref: "#contacto",
  featuredLabel: "Destacado",
  viewMoreLabel: "Ver más",
};

// ============================================
// BENEFITS SECTION
// ============================================
const benefitItems: BenefitItem[] = [
  {
    icon: Shield,
    title: "Enfoque preventivo",
    text: "Detectamos riesgos antes de que se conviertan en problemas costosos.",
  },
  {
    icon: MessageSquare,
    title: "Comunicación clara",
    text: "Sin jerga legal innecesaria. Explicamos todo de forma simple y directa.",
  },
  {
    icon: Clock,
    title: "Respuesta en 24h",
    text: "Respondemos a tu consulta en menos de 24 horas hábiles, garantizado.",
  },
  {
    icon: FileCheck,
    title: "Documentación impecable",
    text: "Contratos y documentos claros que protegen tus intereses.",
  },
];

export const benefitsContent: BenefitsProps = {
  badge: "¿Por qué RSL?",
  title: "Un enfoque diferente",
  subtitle: "Somos el aliado legal que tu empresa necesita: accesibles, claros y orientados a resultados.",
  items: benefitItems,
};

// ============================================
// LOGO WALL SECTION
// ============================================
export const logoWallContent: LogoWallProps = {
  title: "Empresas que confían en nosotros",
  cols: 6,
  placeholderLabel: "Logo",
  comingSoonText: "Logos de clientes próximamente",
};

// ============================================
// TESTIMONIALS SECTION
// ============================================
const testimonialItems: TestimonialItem[] = [
  {
    nameOrCompany: "[PENDIENTE]",
    role: "Director General",
    company: "Empresa PYME",
    service: "Mercantil y corporativo",
    text: "Nos ayudaron a constituir nuestra empresa de forma rápida y profesional. El seguimiento fue impecable.",
    rating: 5,
  },
  {
    nameOrCompany: "[PENDIENTE]",
    role: "Propietario",
    company: "Negocio Familiar",
    service: "Civil e inmobiliario",
    text: "Resolvieron un tema de prescripción que teníamos pendiente por años. Muy recomendados.",
    rating: 5,
  },
  {
    nameOrCompany: "[PENDIENTE]",
    role: "Emprendedor",
    company: "Startup Tech",
    service: "Contratos y cumplimiento",
    text: "Contratos claros y bien estructurados. Nos dieron tranquilidad para operar con confianza.",
    rating: 5,
  },
  {
    nameOrCompany: "[PENDIENTE]",
    role: "Socio Fundador",
    company: "Comercializadora",
    service: "Prevención legal",
    text: "Su enfoque preventivo nos ahorró problemas costosos. Respuesta rápida y soluciones prácticas.",
    rating: 5,
  },
];

export const testimonialsContent: TestimonialsProps = {
  badge: "Testimonios",
  title: "Lo que dicen nuestros clientes",
  subtitle: "La satisfacción de nuestros clientes es nuestra mejor carta de presentación.",
  items: testimonialItems,
};

// ============================================
// FINAL CTA SECTION
// ============================================
export const finalCtaContent: FinalCTAProps = {
  title: "¿Listo para proteger tu negocio?",
  subtitle: "Agenda una consulta y recibe asesoría personalizada en menos de 24 horas.",
  ctaBookingText: "Agendar Cita",
  ctaBookingHref: "/agendar-cita",
  ctaWhatsappText: "Enviar WhatsApp",
};

// ============================================
// CONTACT SECTION
// ============================================
export const contactContent: ContactProps = {
  badge: "Contacto",
  title: "¿Listo para proteger tu negocio?",
  subtitle: "Cuéntanos tu situación y te responderemos en menos de 24 horas con una propuesta clara y sin compromiso.",
  successTitle: "¡Gracias por contactarnos!",
  successMsg: "Hemos recibido tu mensaje. Un miembro de nuestro equipo te contactará en menos de 24 horas para atender tu consulta.",
  submitLabel: "Solicitar Cotización",
  whatsappLabel: "WhatsApp",
  disclaimerText: "Cada caso requiere análisis; agenda una consulta para evaluación.",
  privacyUrl: "/aviso-de-privacidad",
  termsUrl: "/terminos",
  subjectOptions: [
    "Consultoría empresarial",
    "Derecho mercantil/corporativo",
    "Derecho civil/inmobiliario",
    "Derecho familiar",
    "Contratos",
    "Otro",
  ],
};
