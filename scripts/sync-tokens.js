#!/usr/bin/env node

/**
 * Token Sync Script
 * 
 * Reads tokens from src/theme/tokens.ts and updates the CSS variables
 * in src/index.css automatically.
 * 
 * Usage: node scripts/sync-tokens.js
 * 
 * This script:
 * 1. Reads the tokens from tokens.ts
 * 2. Generates CSS custom properties
 * 3. Updates the marked section in index.css
 */

const fs = require('fs');
const path = require('path');

// Read tokens.ts and extract values using regex (avoiding TypeScript compilation)
const tokensPath = path.join(__dirname, '../src/theme/tokens.ts');
const indexCssPath = path.join(__dirname, '../src/index.css');

const tokensContent = fs.readFileSync(tokensPath, 'utf-8');

// Extract color values
function extractValue(content, pattern) {
  const match = content.match(pattern);
  return match ? match[1] : null;
}

// Parse tokens from the file
const colors = {
  primary: extractValue(tokensContent, /primary:\s*['"]([^'"]+)['"]/),
  success: extractValue(tokensContent, /success:\s*['"]([^'"]+)['"]/),
  accent: extractValue(tokensContent, /accent:\s*['"]([^'"]+)['"]/),
  neutral: extractValue(tokensContent, /neutral:\s*['"]([^'"]+)['"]/),
  bg: extractValue(tokensContent, /bg:\s*['"]([^'"]+)['"]/),
  text: extractValue(tokensContent, /text:\s*['"]([^'"]+)['"]/),
  whatsapp: extractValue(tokensContent, /whatsapp:\s*['"]([^'"]+)['"]/),
  whatsappHover: extractValue(tokensContent, /whatsappHover:\s*['"]([^'"]+)['"]/),
};

const hsl = {
  primary: extractValue(tokensContent, /primary:\s*['"](\d+\s+\d+%\s+\d+%)['"]/),
  success: extractValue(tokensContent, /success:\s*['"](\d+\s+\d+%\s+\d+%)['"]/),
  accent: extractValue(tokensContent, /accent:\s*['"](\d+\s+\d+%\s+\d+%)['"]/),
  neutral: extractValue(tokensContent, /neutral:\s*['"](\d+\s+\d+%\s+\d+%)['"]/),
  whatsapp: extractValue(tokensContent, /whatsapp:\s*['"](\d+\s+\d+%\s+\d+%)['"]/),
  whatsappHover: extractValue(tokensContent, /whatsappHover:\s*['"](\d+\s+\d+%\s+\d+%)['"]/),
};

// Read current index.css
let indexCss = fs.readFileSync(indexCssPath, 'utf-8');

// Update HEX color values
const hexReplacements = [
  ['--rsl-primary:', colors.primary],
  ['--rsl-success:', colors.success],
  ['--rsl-accent:', colors.accent],
  ['--rsl-neutral:', colors.neutral],
  ['--rsl-bg:', colors.bg],
  ['--rsl-text:', colors.text],
  ['--rsl-whatsapp:', colors.whatsapp],
  ['--rsl-whatsapp-hover:', colors.whatsappHover],
];

hexReplacements.forEach(([varName, value]) => {
  if (value) {
    const regex = new RegExp(`(${varName.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')})\\s*[^;]+;`);
    indexCss = indexCss.replace(regex, `${varName} ${value};`);
  }
});

// Update HSL color values (for Tailwind)
const hslReplacements = [
  ['--primary:', hsl.primary, '--primary-foreground'],
  ['--success:', hsl.success, '--success-foreground'],
  ['--accent:', hsl.accent, '--accent-foreground'],
  ['--neutral:', hsl.neutral, '--neutral-foreground'],
  ['--whatsapp:', hsl.whatsapp, '--whatsapp-hover'],
  ['--whatsapp-hover:', hsl.whatsappHover, '--whatsapp-foreground'],
];

hslReplacements.forEach(([varName, value, stopBefore]) => {
  if (value) {
    // Match the variable but stop before the next variable
    const regex = new RegExp(`(${varName.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')})\\s*[^;]+;`);
    indexCss = indexCss.replace(regex, `${varName} ${value};`);
  }
});

// Write updated index.css
fs.writeFileSync(indexCssPath, indexCss);

console.log('✅ Tokens synchronized successfully!');
console.log('');
console.log('Updated values:');
console.log('  Colors (HEX):');
Object.entries(colors).forEach(([key, value]) => {
  if (value) console.log(`    ${key}: ${value}`);
});
console.log('');
console.log('  Colors (HSL):');
Object.entries(hsl).forEach(([key, value]) => {
  if (value) console.log(`    ${key}: ${value}`);
});
console.log('');
console.log('📝 Remember to commit both tokens.ts and index.css');
