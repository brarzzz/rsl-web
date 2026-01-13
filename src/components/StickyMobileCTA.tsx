import { MessageCircle } from 'lucide-react';
import { motion } from 'framer-motion';
import { useTranslation } from '@/i18n/LanguageContext';

const StickyMobileCTA = () => {
  const { t } = useTranslation();

  const handleWhatsApp = () => {
    const message = encodeURIComponent(t.common.whatsappMessage);
    window.open(`https://wa.me/526671636472?text=${message}`, '_blank');
  };

  return (
    <motion.button
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 1, type: 'spring', stiffness: 200 }}
      onClick={handleWhatsApp}
      className="fixed bottom-6 right-6 z-50 md:hidden w-14 h-14 rounded-full bg-whatsapp text-whatsapp-foreground shadow-lg flex items-center justify-center hover:bg-whatsapp-hover active:scale-95 transition-all focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
      aria-label="Enviar mensaje por WhatsApp - Abre en nueva ventana"
    >
      <MessageCircle className="h-6 w-6" fill="currentColor" aria-hidden="true" />
    </motion.button>
  );
};

export default StickyMobileCTA;
