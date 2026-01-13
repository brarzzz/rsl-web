import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: ["./pages/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./app/**/*.{ts,tsx}", "./src/**/*.{ts,tsx}"],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      /* ===========================================
         TYPOGRAPHY
         =========================================== */
      fontFamily: {
        serif: ['var(--font-heading)', 'DM Serif Display', 'serif'],
        sans: ['var(--font-body)', 'Open Sans', 'system-ui', '-apple-system', 'Segoe UI', 'Roboto', 'Arial', 'sans-serif'],
      },
      fontSize: {
        'xs': ['var(--font-size-xs)', { lineHeight: '1.5' }],
        'sm': ['var(--font-size-sm)', { lineHeight: '1.5' }],
        'base': ['var(--font-size-base)', { lineHeight: '1.625' }],
        'lg': ['var(--font-size-lg)', { lineHeight: '1.625' }],
        'xl': ['var(--font-size-xl)', { lineHeight: '1.5' }],
        '2xl': ['var(--font-size-2xl)', { lineHeight: '1.4' }],
        '3xl': ['var(--font-size-3xl)', { lineHeight: '1.3' }],
        '4xl': ['var(--font-size-4xl)', { lineHeight: '1.2' }],
        '5xl': ['var(--font-size-5xl)', { lineHeight: '1.1' }],
        '6xl': ['var(--font-size-6xl)', { lineHeight: '1.1' }],
      },
      /* ===========================================
         COLORS - All semantic tokens
         =========================================== */
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        success: {
          DEFAULT: "hsl(var(--success))",
          foreground: "hsl(var(--success-foreground))",
        },
        neutral: {
          DEFAULT: "hsl(var(--neutral))",
          foreground: "hsl(var(--neutral-foreground))",
        },
        whatsapp: {
          DEFAULT: "hsl(var(--whatsapp))",
          hover: "hsl(var(--whatsapp-hover))",
          foreground: "hsl(var(--whatsapp-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        sidebar: {
          DEFAULT: "hsl(var(--sidebar-background))",
          foreground: "hsl(var(--sidebar-foreground))",
          primary: "hsl(var(--sidebar-primary))",
          "primary-foreground": "hsl(var(--sidebar-primary-foreground))",
          accent: "hsl(var(--sidebar-accent))",
          "accent-foreground": "hsl(var(--sidebar-accent-foreground))",
          border: "hsl(var(--sidebar-border))",
          ring: "hsl(var(--sidebar-ring))",
        },
        // Brand extended colors
        navy: {
          DEFAULT: "hsl(var(--navy-deep))",
          light: "hsl(var(--navy-light))",
        },
        gold: {
          DEFAULT: "hsl(var(--gold))",
          light: "hsl(var(--gold-light))",
        },
        cream: "hsl(var(--cream))",
      },
      /* ===========================================
         SPACING SCALE - 4, 8, 12, 16, 24, 32, 48, 64
         =========================================== */
      spacing: {
        'space-1': 'var(--space-1)',   // 4px
        'space-2': 'var(--space-2)',   // 8px
        'space-3': 'var(--space-3)',   // 12px
        'space-4': 'var(--space-4)',   // 16px
        'space-6': 'var(--space-6)',   // 24px
        'space-8': 'var(--space-8)',   // 32px
        'space-12': 'var(--space-12)', // 48px
        'space-16': 'var(--space-16)', // 64px
      },
      /* ===========================================
         BORDER RADIUS - 6, 12, 16
         =========================================== */
      borderRadius: {
        'sm': 'var(--radius-sm)',     // 6px
        DEFAULT: 'var(--radius)',      // 12px
        'lg': 'var(--radius-lg)',     // 16px
        'md': 'calc(var(--radius) - 2px)',
        'full': 'var(--radius-full)',
      },
      /* ===========================================
         SHADOWS - xs, sm, md
         =========================================== */
      boxShadow: {
        'xs': 'var(--shadow-xs)',
        'sm': 'var(--shadow-sm)',
        'md': 'var(--shadow-md)',
        'lg': 'var(--shadow-lg)',
        'xl': 'var(--shadow-xl)',
        'gold': 'var(--shadow-gold)',
        'accent': 'var(--shadow-accent)',
      },
      /* ===========================================
         Z-INDEX
         =========================================== */
      zIndex: {
        'dropdown': 'var(--z-dropdown)',
        'sticky': 'var(--z-sticky)',
        'fixed': 'var(--z-fixed)',
        'modal': 'var(--z-modal)',
        'toast': 'var(--z-toast)',
      },
      /* ===========================================
         TRANSITIONS
         =========================================== */
      transitionDuration: {
        'fast': '150ms',
        'base': '200ms',
        'slow': '300ms',
      },
      /* ===========================================
         KEYFRAMES & ANIMATIONS
         =========================================== */
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "fade-in": {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        "slide-in-right": {
          "0%": { opacity: "0", transform: "translateX(20px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
        "slide-in-left": {
          "0%": { opacity: "0", transform: "translateX(-20px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
        "scale-in": {
          "0%": { opacity: "0", transform: "scale(0.95)" },
          "100%": { opacity: "1", transform: "scale(1)" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "fade-up": "fade-up 0.6s ease-out forwards",
        "fade-in": "fade-in 0.6s ease-out forwards",
        "slide-in-right": "slide-in-right 0.4s ease-out forwards",
        "slide-in-left": "slide-in-left 0.4s ease-out forwards",
        "scale-in": "scale-in 0.3s ease-out forwards",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
