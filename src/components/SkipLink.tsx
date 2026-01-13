import { useTranslation } from '@/i18n/LanguageContext';

interface SkipLinkProps {
  targetId?: string;
}

const SkipLink = ({ targetId = 'main-content' }: SkipLinkProps) => {
  const { t } = useTranslation();
  
  return (
    <a 
      href={`#${targetId}`} 
      className="skip-link focus:outline-none focus:ring-2 focus:ring-accent"
    >
      {t.common?.skipToContent || 'Saltar al contenido principal'}
    </a>
  );
};

export default SkipLink;
