/**
 * CSS Token Generator
 * 
 * This script generates CSS custom properties from src/theme/tokens.ts
 * Run with: npx ts-node scripts/generate-css-tokens.ts
 * 
 * The generated CSS is output to stdout and can be copy-pasted into index.css
 * or piped to a file: npx ts-node scripts/generate-css-tokens.ts > src/generated-tokens.css
 */

import tokens from '../src/theme/tokens';

// Helper to convert hex to HSL string
function hexToHSL(hex: string): string {
  // Remove # if present
  hex = hex.replace('#', '');
  
  // Parse hex values
  const r = parseInt(hex.substring(0, 2), 16) / 255;
  const g = parseInt(hex.substring(2, 4), 16) / 255;
  const b = parseInt(hex.substring(4, 6), 16) / 255;
  
  const max = Math.max(r, g, b);
  const min = Math.min(r, g, b);
  let h = 0;
  let s = 0;
  const l = (max + min) / 2;
  
  if (max !== min) {
    const d = max - min;
    s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
    
    switch (max) {
      case r:
        h = ((g - b) / d + (g < b ? 6 : 0)) / 6;
        break;
      case g:
        h = ((b - r) / d + 2) / 6;
        break;
      case b:
        h = ((r - g) / d + 4) / 6;
        break;
    }
  }
  
  // Convert to degrees and percentages
  const hDeg = Math.round(h * 360);
  const sPercent = Math.round(s * 100);
  const lPercent = Math.round(l * 100);
  
  return `${hDeg} ${sPercent}% ${lPercent}%`;
}

// Generate spacing values in rem
function pxToRem(px: number): string {
  return `${px / 16}rem`;
}

// Spacing index mapping
const spacingIndexMap: Record<number, string> = {
  0: '1',
  1: '2',
  2: '3',
  3: '4',
  4: '6',
  5: '8',
  6: '12',
  7: '16',
};

function generateCSS(): string {
  const lines: string[] = [];
  
  lines.push('/* ===========================================');
  lines.push('   AUTO-GENERATED FROM src/theme/tokens.ts');
  lines.push('   DO NOT EDIT MANUALLY - Run: npm run generate:tokens');
  lines.push('   =========================================== */');
  lines.push('');
  lines.push(':root {');
  
  // =====================
  // HEX Colors (for direct use)
  // =====================
  lines.push('  /* RSL GLOBAL TOKENS (HEX) */');
  lines.push(`  --rsl-primary: ${tokens.colors.primary};`);
  lines.push(`  --rsl-success: ${tokens.colors.success};`);
  lines.push(`  --rsl-accent: ${tokens.colors.accent};`);
  lines.push(`  --rsl-neutral: ${tokens.colors.neutral};`);
  lines.push(`  --rsl-bg: ${tokens.colors.bg};`);
  lines.push(`  --rsl-text: ${tokens.colors.text};`);
  lines.push(`  --rsl-whatsapp: ${tokens.colors.whatsapp};`);
  lines.push(`  --rsl-whatsapp-hover: ${tokens.colors.whatsappHover};`);
  lines.push('');
  
  // =====================
  // HSL Colors (for Tailwind)
  // =====================
  lines.push('  /* COLOR TOKENS (HSL for Tailwind) */');
  lines.push(`  --primary: ${tokens.colors.hsl.primary};`);
  lines.push('  --primary-foreground: 0 0% 100%;');
  lines.push('');
  lines.push(`  --accent: ${tokens.colors.hsl.accent};`);
  lines.push('  --accent-foreground: 210 52% 15%;');
  lines.push('');
  lines.push(`  --success: ${tokens.colors.hsl.success};`);
  lines.push('  --success-foreground: 0 0% 100%;');
  lines.push('');
  lines.push(`  --neutral: ${tokens.colors.hsl.neutral};`);
  lines.push('  --neutral-foreground: 210 29% 24%;');
  lines.push('');
  lines.push(`  --whatsapp: ${tokens.colors.hsl.whatsapp};`);
  lines.push(`  --whatsapp-hover: ${tokens.colors.hsl.whatsappHover};`);
  lines.push('  --whatsapp-foreground: 0 0% 100%;');
  lines.push('');
  
  // =====================
  // Spacing
  // =====================
  lines.push('  /* SPACING SCALE */');
  tokens.spacing.forEach((px, index) => {
    const key = spacingIndexMap[index];
    lines.push(`  --space-${key}: ${pxToRem(px)}; /* ${px}px */`);
  });
  lines.push('');
  
  // =====================
  // Border Radius
  // =====================
  lines.push('  /* BORDER RADIUS */');
  lines.push(`  --radius-sm: ${pxToRem(tokens.radius.sm)}; /* ${tokens.radius.sm}px */`);
  lines.push(`  --radius: ${pxToRem(tokens.radius.md)}; /* ${tokens.radius.md}px */`);
  lines.push(`  --radius-lg: ${pxToRem(tokens.radius.lg)}; /* ${tokens.radius.lg}px */`);
  lines.push('  --radius-full: 9999px;');
  lines.push('');
  
  // =====================
  // Shadows
  // =====================
  lines.push('  /* SHADOWS */');
  lines.push(`  --shadow-xs: ${tokens.shadow.xs};`);
  lines.push(`  --shadow-sm: ${tokens.shadow.sm};`);
  lines.push(`  --shadow-md: ${tokens.shadow.md};`);
  lines.push('');
  
  // =====================
  // Typography
  // =====================
  lines.push('  /* TYPOGRAPHY */');
  lines.push(`  --font-heading: '${tokens.fonts.heading.split(',')[0]}', serif;`);
  lines.push(`  --font-body: '${tokens.fonts.body.split(',')[0]}', system-ui, -apple-system, 'Segoe UI', Roboto, Arial, sans-serif;`);
  lines.push('');
  
  lines.push('}');
  
  return lines.join('\n');
}

// Generate and output
const css = generateCSS();
console.log(css);

// Also log instructions
console.log('\n/* =========================================== */');
console.log('/* INSTRUCTIONS:');
console.log('   1. Copy the CSS above');
console.log('   2. Replace the corresponding section in src/index.css');
console.log('   3. Or run: npm run generate:tokens > src/generated-tokens.css');
console.log('   =========================================== */');

export { generateCSS, hexToHSL };
