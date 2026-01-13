import { Phone, MessageCircle } from 'lucide-react';
import { siteConfig } from '@/config/siteConfig';
import { useLanguage } from '@/i18n/LanguageContext';
import { trackEvent, getCurrentPage } from '@/lib/analytics';

export interface MobileTopBarProps {
  /** Show/hide the top bar (defaults to true) */
  show?: boolean;
  /** Show phone link (defaults to true) */
  showPhone?: boolean;
  /** Show WhatsApp link (defaults to true) */
  showWhatsApp?: boolean;
}

const MobileTopBar = ({
  show = true,
  showPhone = true,
  showWhatsApp = true,
}: MobileTopBarProps) => {
  const { locale } = useLanguage();

  if (!show) return null;

  const handlePhoneClick = () => {
    trackEvent('phone_click', {
      label: siteConfig.phoneFormatted,
      page: getCurrentPage(),
      lang: locale,
      section: 'mobile_top_bar',
    });
  };

  const handleWhatsAppClick = () => {
    trackEvent('cta_whatsapp_click', {
      label: 'WhatsApp TopBar',
      page: getCurrentPage(),
      lang: locale,
      section: 'mobile_top_bar',
    });
  };

  return (
    <div className="md:hidden fixed top-0 left-0 right-0 z-50 bg-primary text-primary-foreground">
      <div className="flex items-center justify-center gap-4 px-4 py-2 text-sm">
        {showPhone && (
          <a
            href={`tel:+52${siteConfig.phone}`}
            onClick={handlePhoneClick}
            className="flex items-center gap-1.5 hover:opacity-80 transition-opacity focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 rounded px-2 py-1"
            aria-label={`Llamar al ${siteConfig.phoneFormatted}`}
          >
            <Phone className="h-4 w-4" aria-hidden="true" />
            <span>{siteConfig.phoneFormatted}</span>
          </a>
        )}
        {showPhone && showWhatsApp && (
          <span className="text-primary-foreground/50" aria-hidden="true">|</span>
        )}
        {showWhatsApp && (
          <a
            href={siteConfig.whatsappLink(siteConfig.ctas.primary)}
            target="_blank"
            rel="noopener noreferrer"
            onClick={handleWhatsAppClick}
            className="flex items-center gap-1.5 hover:opacity-80 transition-opacity focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 rounded px-2 py-1"
            aria-label="Enviar mensaje por WhatsApp"
          >
            <MessageCircle className="h-4 w-4" fill="currentColor" aria-hidden="true" />
            <span>WhatsApp</span>
          </a>
        )}
      </div>
    </div>
  );
};

export default MobileTopBar;
