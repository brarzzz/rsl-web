import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Calendar, Phone, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTranslation } from "@/i18n/LanguageContext";
const FinalCTA = () => {
  const {
    t
  } = useTranslation();
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: true,
    margin: "-100px"
  });
  const handleWhatsApp = () => {
    const message = encodeURIComponent(t.common.whatsappMessage);
    window.open(`https://wa.me/526671636472?text=${message}`, "_blank");
  };
  return;
};
export default FinalCTA;