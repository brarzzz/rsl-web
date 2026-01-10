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
      className="fixed bottom-6 right-6 z-50 md:hidden w-14 h-14 rounded-full bg-[#25D366] text-white shadow-lg flex items-center justify-center hover:bg-[#20bd5a] active:scale-95 transition-all"
      aria-label="Enviar WhatsApp"
    >
      <MessageCircle className="h-6 w-6" fill="currentColor" />
    </motion.button>
  );
};

export default StickyMobileCTA;
