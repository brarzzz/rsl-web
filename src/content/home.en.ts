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
  kicker: "Legal Support for Businesses",
  title: "Prevention and civil defense for",
  titleAccent: "SMEs and entrepreneurs",
  subtitle: "Clear contracts, ongoing compliance, and conflict resolution.",
  bullets: [
    "Free initial consultation",
    "+22 years of experience",
    "Nationwide coverage",
  ],
  ctaPrimaryText: "Request a quote",
  ctaPrimaryHref: "#contacto",
  ctaSecondaryText: "Send WhatsApp",
  slaText: "⏱️ Response guaranteed in less than 24 business hours",
};

// ============================================
// SERVICES SECTION
// ============================================
const serviceItems: ServiceItem[] = [
  {
    icon: Shield,
    title: "Prevention & Consulting",
    text: "Ongoing legal advice to detect risks before they become conflicts.",
    star: true,
    slug: "prevention",
  },
  {
    icon: Building2,
    title: "Commercial & Corporate Law",
    text: "Company formation, commercial contracts, and regulatory compliance.",
    star: true,
    slug: "commercial",
  },
  {
    icon: Home,
    title: "Civil & Real Estate Law",
    text: "Purchase, lease, prescription, and protection of your assets.",
    star: true,
    slug: "civil",
  },
  {
    icon: Users,
    title: "Family Law",
    text: "Divorces, alimony, custody, and estates with a human and decisive approach.",
    star: true,
    slug: "family",
  },
  {
    icon: FileText,
    title: "Contracts & Compliance",
    text: "Drafting, reviewing, and negotiating contracts that protect your interests.",
    star: false,
    slug: "contracts",
  },
];

export const servicesContent: ServicesProps = {
  badge: "Practice Areas",
  title: "Specialized legal services",
  subtitle: "Legal solutions tailored to your business needs",
  items: serviceItems,
  ctaText: "Get a quote",
  ctaHref: "#contacto",
  featuredLabel: "Featured",
  viewMoreLabel: "Learn more",
};

// ============================================
// BENEFITS SECTION
// ============================================
const benefitItems: BenefitItem[] = [
  {
    icon: Shield,
    title: "Preventive approach",
    text: "We detect risks before they become costly problems.",
  },
  {
    icon: MessageSquare,
    title: "Clear communication",
    text: "No unnecessary legal jargon. We explain everything simply and directly.",
  },
  {
    icon: Clock,
    title: "24h response",
    text: "We respond to your inquiry in less than 24 business hours, guaranteed.",
  },
  {
    icon: FileCheck,
    title: "Impeccable documentation",
    text: "Clear contracts and documents that protect your interests.",
  },
];

export const benefitsContent: BenefitsProps = {
  badge: "Why RSL?",
  title: "A different approach",
  subtitle: "We are the legal partner your company needs: accessible, clear, and results-oriented.",
  items: benefitItems,
};

// ============================================
// LOGO WALL SECTION
// ============================================
export const logoWallContent: LogoWallProps = {
  title: "Companies that trust us",
  cols: 6,
  placeholderLabel: "Logo",
  comingSoonText: "Client logos coming soon",
};

// ============================================
// TESTIMONIALS SECTION
// ============================================
const testimonialItems: TestimonialItem[] = [
  {
    nameOrCompany: "[PENDING]",
    role: "General Director",
    company: "SME Company",
    service: "Commercial & corporate",
    text: "They helped us incorporate our company quickly and professionally. The follow-up was impeccable.",
    rating: 5,
  },
  {
    nameOrCompany: "[PENDING]",
    role: "Owner",
    company: "Family Business",
    service: "Civil & real estate",
    text: "They resolved a prescription issue we had pending for years. Highly recommended.",
    rating: 5,
  },
  {
    nameOrCompany: "[PENDING]",
    role: "Entrepreneur",
    company: "Tech Startup",
    service: "Contracts & compliance",
    text: "Clear and well-structured contracts. They gave us peace of mind to operate confidently.",
    rating: 5,
  },
  {
    nameOrCompany: "[PENDING]",
    role: "Founding Partner",
    company: "Trading Company",
    service: "Legal prevention",
    text: "Their preventive approach saved us costly problems. Fast response and practical solutions.",
    rating: 5,
  },
];

export const testimonialsContent: TestimonialsProps = {
  badge: "Testimonials",
  title: "What our clients say",
  subtitle: "Our clients' satisfaction is our best credential.",
  items: testimonialItems,
};

// ============================================
// FINAL CTA SECTION
// ============================================
export const finalCtaContent: FinalCTAProps = {
  title: "Ready to protect your business?",
  subtitle: "Schedule a consultation and receive personalized advice in less than 24 hours.",
  ctaBookingText: "Schedule Appointment",
  ctaBookingHref: "/agendar-cita",
  ctaWhatsappText: "Send WhatsApp",
};

// ============================================
// CONTACT SECTION
// ============================================
export const contactContent: ContactProps = {
  badge: "Contact",
  title: "Ready to protect your business?",
  subtitle: "Tell us your situation and we'll respond within 24 hours with a clear, no-obligation proposal.",
  successTitle: "Thank you for contacting us!",
  successMsg: "We have received your message. A team member will contact you within 24 hours to address your inquiry.",
  submitLabel: "Request Quote",
  whatsappLabel: "WhatsApp",
  disclaimerText: "Each case requires analysis; schedule a consultation for evaluation.",
  privacyUrl: "/aviso-de-privacidad",
  termsUrl: "/terminos",
  subjectOptions: [
    "Business consulting",
    "Commercial/corporate law",
    "Civil/real estate law",
    "Family law",
    "Contracts",
    "Other",
  ],
};
