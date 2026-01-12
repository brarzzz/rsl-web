import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTranslation } from "@/i18n/LanguageContext";
import LanguageSwitcher from "@/components/LanguageSwitcher";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { t } = useTranslation();

  const navLinks = [
    { href: "#servicios", label: t.nav.services },
    { href: "#nosotros", label: t.nav.about },
    { href: "#equipo", label: t.nav.team },
    { href: "#contacto", label: t.nav.contact },
  ];

  const handleWhatsApp = () => {
    const message = encodeURIComponent(t.common.whatsappMessage);
    window.open(`https://wa.me/526671636472?text=${message}`, "_blank");
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      {/* Skip link for keyboard users */}
      <a href="#main-content" className="skip-link">
        Saltar al contenido principal
      </a>
      <nav className="container mx-auto px-4 h-16 flex items-center justify-between" aria-label="Navegación principal">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2" aria-label="Rodriguez Soporte Legal - Inicio">
          <span className="font-serif text-xl font-bold text-primary" aria-hidden="true">RSL</span>
          <span className="hidden sm:inline text-sm text-muted-foreground">Rodriguez Soporte Legal</span>
        </a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* CTA Buttons + Language Switcher */}
        <div className="hidden md:flex items-center gap-2">
          <LanguageSwitcher />
          <Button 
            variant="whatsapp" 
            size="sm" 
            onClick={handleWhatsApp}
            aria-label="Contactar por WhatsApp - Abre en nueva ventana"
          >
            <Phone className="h-4 w-4" aria-hidden="true" />
            WhatsApp
          </Button>
          <Button variant="gold" size="sm" asChild>
            <a href="#contacto" aria-label="Ir a la sección de contacto">{t.hero.ctaPrimary}</a>
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center gap-2">
          <LanguageSwitcher />
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="p-2 text-foreground min-h-[44px] min-w-[44px] flex items-center justify-center"
            aria-label={isOpen ? "Cerrar menú de navegación" : "Abrir menú de navegación"}
            aria-expanded={isOpen}
            aria-controls="mobile-menu"
          >
            {isOpen ? <X className="h-6 w-6" aria-hidden="true" /> : <Menu className="h-6 w-6" aria-hidden="true" />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            id="mobile-menu"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-background border-b border-border"
            role="navigation"
            aria-label="Menú móvil"
          >
            <div className="container mx-auto px-4 py-4 flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="text-base font-medium text-foreground py-2"
                >
                  {link.label}
                </a>
              ))}
              <div className="flex flex-col gap-2 pt-4 border-t border-border">
                <Button 
                  variant="whatsapp" 
                  onClick={handleWhatsApp}
                  aria-label="Contactar por WhatsApp - Abre en nueva ventana"
                >
                  <Phone className="h-4 w-4" aria-hidden="true" />
                  {t.hero.ctaSecondary}
                </Button>
                <Button variant="gold" asChild>
                  <a href="#contacto" aria-label="Ir a la sección de contacto">{t.hero.ctaPrimary}</a>
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
