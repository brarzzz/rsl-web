/**
 * RSL Design System - Theme Tokens
 * 
 * This file exposes design tokens as JavaScript constants for programmatic use.
 * These values mirror the CSS custom properties defined in index.css
 */

export const colors = {
  primary: {
    DEFAULT: '#1E3A5F',
    foreground: '#FFFFFF',
    hsl: '210 52% 24%',
  },
  accent: {
    DEFAULT: '#C4A76B',
    foreground: '#1E3A5F',
    hsl: '40 45% 59%',
  },
  success: {
    DEFAULT: '#4A7856',
    foreground: '#FFFFFF',
    hsl: '140 25% 40%',
  },
  neutral: {
    DEFAULT: '#B5B5B5',
    foreground: '#1E3A5F',
    hsl: '0 0% 71%',
  },
  white: '#FFFFFF',
  black: '#000000',
} as const;

export const typography = {
  fontFamily: {
    heading: '"DM Serif Display", serif',
    body: '"Open Sans", system-ui, -apple-system, "Segoe UI", Roboto, Arial, sans-serif',
  },
  fontSize: {
    xs: '0.75rem',     // 12px
    sm: '0.875rem',    // 14px
    base: '1rem',      // 16px
    lg: '1.125rem',    // 18px
    xl: '1.25rem',     // 20px
    '2xl': '1.5rem',   // 24px
    '3xl': '1.875rem', // 30px
    '4xl': '2.25rem',  // 36px
    '5xl': '3rem',     // 48px
    '6xl': '3.75rem',  // 60px
  },
  fontWeight: {
    normal: 400,
    medium: 500,
    semibold: 600,
    bold: 700,
  },
  lineHeight: {
    tight: 1.2,
    normal: 1.5,
    relaxed: 1.625,
  },
} as const;

export const spacing = {
  1: '0.25rem',   // 4px
  2: '0.5rem',    // 8px
  3: '0.75rem',   // 12px
  4: '1rem',      // 16px
  6: '1.5rem',    // 24px
  8: '2rem',      // 32px
  12: '3rem',     // 48px
  16: '4rem',     // 64px
} as const;

export const radii = {
  sm: '0.375rem',   // 6px
  DEFAULT: '0.75rem', // 12px
  lg: '1rem',       // 16px
  full: '9999px',
} as const;

export const shadows = {
  xs: '0 1px 2px 0 hsla(210, 52%, 24%, 0.04)',
  sm: '0 1px 3px 0 hsla(210, 52%, 24%, 0.06), 0 1px 2px -1px hsla(210, 52%, 24%, 0.06)',
  md: '0 4px 6px -1px hsla(210, 52%, 24%, 0.08), 0 2px 4px -2px hsla(210, 52%, 24%, 0.08)',
  lg: '0 10px 15px -3px hsla(210, 52%, 24%, 0.1), 0 4px 6px -4px hsla(210, 52%, 24%, 0.1)',
  xl: '0 20px 25px -5px hsla(210, 52%, 24%, 0.1), 0 8px 10px -6px hsla(210, 52%, 24%, 0.1)',
  accent: '0 4px 14px 0 hsla(40, 45%, 59%, 0.25)',
} as const;

export const transitions = {
  fast: '150ms ease',
  base: '200ms ease',
  slow: '300ms ease',
} as const;

export const zIndex = {
  dropdown: 50,
  sticky: 100,
  fixed: 200,
  modal: 300,
  toast: 400,
} as const;

// Brand specific tokens
export const brand = {
  name: 'Rodriguez Soporte Legal',
  legalName: 'Rodriguez, Integración de Servicios Jurídicos S.A. de C.V.',
  tagline: 'Protegemos tu negocio. Respaldamos tu crecimiento.',
  founded: 2003,
} as const;

export const contact = {
  whatsapp: '+526671636472',
  phone: '6677522429',
  email: 'jorgeluis@soportelegal.com.mx',
  hours: 'Lun–Vie 9:00–19:00',
  sla: 'Respuesta en 24 horas',
  address: 'Calle Rio Culiacán 113 Poniente, entre Domingo Rubí y Manuel Bonilla, Colonia Guadalupe.',
  city: 'Culiacán, Sinaloa',
} as const;

// WhatsApp deep link generator
export const getWhatsAppLink = (message: string = 'Hola RSL, quisiera solicitar cotización') => {
  return `https://wa.me/526671636472?text=${encodeURIComponent(message)}`;
};

// Theme export
const theme = {
  colors,
  typography,
  spacing,
  radii,
  shadows,
  transitions,
  zIndex,
  brand,
  contact,
  getWhatsAppLink,
} as const;

export default theme;
