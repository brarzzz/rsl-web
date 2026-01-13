# Token Synchronization Guide

## Overview

The design system uses a **single source of truth** pattern where all design tokens are defined in `src/theme/tokens.ts` and automatically synchronized to `src/index.css`.

## File Structure

```
src/
├── theme/
│   └── tokens.ts          # 🎯 Single source of truth
├── index.css              # Generated CSS variables
└── lib/
    └── theme.ts           # TypeScript exports for JS usage

scripts/
├── sync-tokens.js         # Sync script (Node.js)
└── generate-css-tokens.ts # Full generator (TypeScript)
```

## Quick Start

### Changing a Color

1. **Edit** `src/theme/tokens.ts`:
   ```ts
   export const tokens = {
     colors: {
       primary: '#2A4A6F',     // Changed from #1E3A5F
       // ...
       hsl: {
         primary: '210 45% 30%', // Updated HSL value
         // ...
       }
     }
   };
   ```

2. **Run sync script**:
   ```bash
   node scripts/sync-tokens.js
   ```

3. **Verify** changes in `src/index.css` and the app preview.

## Sync Script (`scripts/sync-tokens.js`)

The sync script reads `tokens.ts` using regex and updates the corresponding CSS variables in `index.css`.

### What it syncs:
- `--rsl-*` HEX color variables
- `--primary`, `--accent`, etc. HSL variables for Tailwind

### Usage:
```bash
# Sync tokens to CSS
node scripts/sync-tokens.js

# Or add to package.json scripts:
# "sync:tokens": "node scripts/sync-tokens.js"
```

## Full Generator (`scripts/generate-css-tokens.ts`)

For a complete regeneration of CSS tokens (useful when adding new token categories):

```bash
npx ts-node scripts/generate-css-tokens.ts
```

This outputs the full CSS to stdout, which you can copy-paste into `index.css`.

## Token Reference

### Colors

| Token Key | CSS Variable (HEX) | CSS Variable (HSL) | Usage |
|-----------|-------------------|-------------------|-------|
| `primary` | `--rsl-primary` | `--primary` | Navy blue, main brand |
| `success` | `--rsl-success` | `--success` | Green, positive states |
| `accent` | `--rsl-accent` | `--accent` | Gold, highlights/CTAs |
| `neutral` | `--rsl-neutral` | `--neutral` | Gray, borders/subtle |
| `whatsapp` | `--rsl-whatsapp` | `--whatsapp` | WhatsApp green |

### Spacing

Defined in `tokens.spacing` array: `[4, 8, 12, 16, 24, 32, 48, 64]`

Maps to CSS variables:
- `--space-1` (4px)
- `--space-2` (8px)
- `--space-3` (12px)
- `--space-4` (16px)
- `--space-6` (24px)
- `--space-8` (32px)
- `--space-12` (48px)
- `--space-16` (64px)

### Border Radius

- `--radius-sm` (6px)
- `--radius` (12px)
- `--radius-lg` (16px)

### Shadows

- `--shadow-xs`
- `--shadow-sm`
- `--shadow-md`

## Best Practices

1. **Always edit `tokens.ts`** - Never manually edit CSS variables in `index.css`
2. **Run sync after changes** - The CSS won't update automatically
3. **Commit both files** - Both `tokens.ts` and `index.css` should be committed together
4. **Use HSL for Tailwind** - The `hsl` object in tokens maps to Tailwind-compatible values

## Troubleshooting

### Changes not appearing?
1. Make sure you ran `node scripts/sync-tokens.js`
2. Check that both HEX and HSL values are updated in `tokens.ts`
3. Hard refresh the browser (Cmd+Shift+R / Ctrl+Shift+R)

### Script not finding values?
The sync script uses regex to parse `tokens.ts`. Ensure the format matches:
```ts
primary: '#1E3A5F',      // HEX with quotes
primary: '210 52% 24%',  // HSL with quotes
```

## Future Improvements

- [ ] Add file watcher for automatic sync
- [ ] Generate Tailwind config values from tokens
- [ ] Add validation for HSL values
- [ ] Create VS Code task for one-click sync
