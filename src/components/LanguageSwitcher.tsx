import { useLanguage, Locale } from '@/i18n/LanguageContext';
import { Button } from '@/components/ui/button';
import { Globe } from 'lucide-react';

const LanguageSwitcher = () => {
  const { locale, setLocale } = useLanguage();

  const toggleLocale = () => {
    const newLocale: Locale = locale === 'es' ? 'en' : 'es';
    setLocale(newLocale);
  };

  return (
    <Button
      variant="ghost"
      size="sm"
      onClick={toggleLocale}
      className="flex items-center gap-1.5 text-xs font-medium"
      aria-label={locale === 'es' ? 'Switch to English' : 'Cambiar a Español'}
    >
      <Globe className="h-4 w-4" />
      <span className="uppercase">{locale === 'es' ? 'EN' : 'ES'}</span>
    </Button>
  );
};

export default LanguageSwitcher;
