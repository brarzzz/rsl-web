import type { ContactProps } from "@/components/Contact";

// ============================================
// CONTACT PAGE CONTENT (Spanish)
// ============================================
export const contactPageContent: ContactProps = {
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

// Form field labels (for future i18n)
export const formLabels = {
  name: "Nombre completo",
  email: "Correo electrónico",
  phone: "Teléfono / WhatsApp",
  subject: "Asunto",
  subjectPlaceholder: "Selecciona un asunto",
  message: "¿Cómo podemos ayudarte?",
  messagePlaceholder: "Cuéntanos brevemente tu situación...",
  consent: "He leído y acepto el Aviso de Privacidad y los Términos y Condiciones. Autorizo el uso de mis datos para ser contactado.",
  required: "(requerido)",
  sending: "Enviando...",
  sendAnother: "Enviar otro mensaje",
  preferCall: "¿Prefieres llamar?",
  preferCallText: "Nuestro equipo está disponible en horario de oficina.",
  viewOnMap: "Ver en Google Maps →",
};

// Contact info labels
export const contactInfoLabels = {
  phone: "Teléfono",
  email: "Email",
  address: "Dirección",
  hours: "Horario",
};
