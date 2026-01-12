import esTranslations from '@/locales/es.json';
import enTranslations from '@/locales/en.json';

export type Locale = 'es' | 'en';

export const translations = {
  es: esTranslations,
  en: enTranslations,
} as const;

export type TranslationKey = typeof esTranslations;
