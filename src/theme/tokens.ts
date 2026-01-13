/**
 * RSL Global Design Tokens
 * 
 * Single source of truth for all design values.
 * Changes here automatically propagate to all components.
 */

export const tokens = {
  colors: {
    // Core brand colors
    primary: '#1E3A5F',      // Deep Navy Blue
    success: '#4A7856',      // Brand Green
    accent: '#C4A76B',       // Gold
    neutral: '#B5B5B5',      // Gray
    bg: '#FFFFFF',           // Background
    text: '#000000',         // Text
    
    // Extended palette
    whatsapp: '#25D366',     // WhatsApp Green
    whatsappHover: '#20BD5A',
    
    // HSL values for CSS custom properties
    hsl: {
      primary: '210 52% 24%',
      success: '140 25% 40%',
      accent: '40 45% 59%',
      neutral: '0 0% 71%',
      whatsapp: '142 70% 49%',
      whatsappHover: '142 70% 44%',
    }
  },
  
  fonts: {
    heading: 'DM Serif Display, serif',
    body: 'Open Sans, system-ui, -apple-system, Segoe UI, Roboto, Arial, sans-serif',
  },
  
  radius: {
    sm: 6,   // px
    md: 12,  // px
    lg: 16,  // px
  },
  
  spacing: [4, 8, 12, 16, 24, 32, 48, 64] as const,
  
  shadow: {
    xs: '0 1px 2px rgba(0,0,0,.05)',
    sm: '0 1px 3px rgba(0,0,0,.1)',
    md: '0 4px 16px rgba(0,0,0,.12)',
  }
} as const;

// Type exports for TypeScript consumption
export type TokenColors = typeof tokens.colors;
export type TokenFonts = typeof tokens.fonts;
export type TokenRadius = typeof tokens.radius;
export type TokenShadow = typeof tokens.shadow;

export default tokens;
