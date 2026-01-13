import { MessageCircle } from 'lucide-react';
import { motion } from 'framer-motion';
import { useTranslation } from '@/i18n/LanguageContext';
import { siteConfig } from '@/config/siteConfig';

export interface StickyMobileCTAProps {
  /** Custom button text (defaults to siteConfig.ctas.secondary) */
  text?: string;
  /** Custom WhatsApp href (defaults to siteConfig.whatsappLink()) */
  href?: string;
  /** Show/hide the CTA (defaults to true) */
  show?: boolean;
  /** Custom aria-label */
  ariaLabel?: string;
}

const StickyMobileCTA = ({
  text = siteConfig.ctas.secondary,
  href = siteConfig.whatsappLink(siteConfig.ctas.primary),
  show = true,
  ariaLabel,
}: StickyMobileCTAProps) => {
  const { t } = useTranslation();

  const resolvedAriaLabel = ariaLabel || t.aria?.sendWhatsappNewWindow || "Send WhatsApp message";

  const handleClick = () => {
    window.open(href, '_blank', 'noopener,noreferrer');
  };

  if (!show) return null;

  return (
    <motion.button
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 1, type: 'spring', stiffness: 200 }}
      onClick={handleClick}
      className="fixed bottom-6 right-6 z-50 md:hidden w-14 h-14 rounded-full bg-whatsapp text-whatsapp-foreground shadow-lg flex items-center justify-center hover:bg-whatsapp-hover active:scale-95 transition-all focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
      aria-label={resolvedAriaLabel}
    >
      <MessageCircle className="h-6 w-6" fill="currentColor" aria-hidden="true" />
      {text && <span className="sr-only">{text}</span>}
    </motion.button>
  );
};

export default StickyMobileCTA;
