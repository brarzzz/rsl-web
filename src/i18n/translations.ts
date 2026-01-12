import esTranslations from '@/locales/es.json';

// Type augmentation for additional translation keys
type TranslationsWithExtras = typeof esTranslations & {
  logoWall: typeof esTranslations.logoWall & { comingSoon?: string };
  testimonials: typeof esTranslations.testimonials & { 
    placeholderQuote2?: string;
    placeholderQuote3?: string;
    placeholderQuote4?: string;
  };
};
import enTranslations from '@/locales/en.json';

export type Locale = 'es' | 'en';

export const translations = {
  es: esTranslations,
  en: enTranslations,
} as const;

export type TranslationKey = typeof esTranslations;
