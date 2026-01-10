import React, { createContext, useContext, useState, useCallback, ReactNode } from 'react';
import { translations, TranslationKey } from './translations';

export type Locale = 'es' | 'en';

interface LanguageContextType {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  t: TranslationKey;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

interface LanguageProviderProps {
  children: ReactNode;
  defaultLocale?: Locale;
}

export const LanguageProvider: React.FC<LanguageProviderProps> = ({ 
  children, 
  defaultLocale = 'es' 
}) => {
  const [locale, setLocaleState] = useState<Locale>(() => {
    // Check URL for language param
    const urlParams = new URLSearchParams(window.location.search);
    const urlLang = urlParams.get('lang') as Locale;
    if (urlLang && (urlLang === 'es' || urlLang === 'en')) {
      return urlLang;
    }
    
    // Check localStorage
    const stored = localStorage.getItem('rsl-locale') as Locale;
    if (stored && (stored === 'es' || stored === 'en')) {
      return stored;
    }
    
    return defaultLocale;
  });

  const setLocale = useCallback((newLocale: Locale) => {
    setLocaleState(newLocale);
    localStorage.setItem('rsl-locale', newLocale);
    
    // Update URL without reload
    const url = new URL(window.location.href);
    url.searchParams.set('lang', newLocale);
    window.history.replaceState({}, '', url.toString());
    
    // Update HTML lang attribute
    document.documentElement.lang = newLocale;
  }, []);

  const t = translations[locale];

  return (
    <LanguageContext.Provider value={{ locale, setLocale, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

export const useTranslation = () => {
  const { t, locale } = useLanguage();
  return { t, locale };
};
