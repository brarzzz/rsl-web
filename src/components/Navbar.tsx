import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Phone, MessageCircle, Calendar } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { useTranslation } from "@/i18n/LanguageContext";
import LanguageSwitcher from "@/components/LanguageSwitcher";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { t } = useTranslation();

  const navLinks = [
    { href: "/", label: (t.nav as any).home || "Inicio", isRoute: true },
    { href: "/areas-de-practica", label: t.nav.practiceAreas, isRoute: true },
    { href: "#nosotros", label: t.nav.about, isRoute: false },
    { href: "#equipo", label: t.nav.team, isRoute: false },
    { href: "#contacto", label: t.nav.contact, isRoute: false },
    { href: "/agendar", label: t.nav.booking, isRoute: true },
  ];

  const handleWhatsApp = () => {
    const message = encodeURIComponent(t.common.whatsappMessage);
    window.open(`https://wa.me/526671636472?text=${message}`, "_blank");
  };

  const renderNavLink = (link: typeof navLinks[0], isMobile = false) => {
    const baseClasses = isMobile
      ? "text-base font-medium text-foreground py-2 block"
      : "text-sm font-medium text-foreground/80 hover:text-primary transition-colors";

    if (link.isRoute) {
      return (
        <Link
          key={link.href}
          to={link.href}
          onClick={() => isMobile && setIsOpen(false)}
          className={baseClasses}
        >
          {link.label}
        </Link>
      );
    }

    return (
      <a
        key={link.href}
        href={link.href}
        onClick={() => isMobile && setIsOpen(false)}
        className={baseClasses}
      >
        {link.label}
      </a>
    );
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      {/* Skip link for keyboard users */}
      <a href="#main-content" className="skip-link">
        Saltar al contenido principal
      </a>
      <nav className="container mx-auto px-4 h-16 flex items-center justify-between" aria-label="Navegación principal">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2" aria-label="Rodriguez Soporte Legal - Inicio">
          <span className="font-serif text-xl font-bold text-primary" aria-hidden="true">RSL</span>
          <span className="hidden sm:inline text-sm text-muted-foreground">Rodriguez Soporte Legal</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center gap-6">
          {navLinks.map((link) => renderNavLink(link))}
        </div>

        {/* CTA Buttons + Language Switcher */}
        <div className="hidden lg:flex items-center gap-3">
          <LanguageSwitcher />
          <Button 
            variant="outline" 
            size="sm" 
            onClick={handleWhatsApp}
            className="gap-2"
            aria-label="Enviar WhatsApp - Abre en nueva ventana"
          >
            <MessageCircle className="h-4 w-4" aria-hidden="true" />
            {t.hero.ctaSecondary}
          </Button>
          <Button variant="gold" size="sm" asChild className="gap-2">
            <a href="#contacto" aria-label="Solicitar cotización">
              <Phone className="h-4 w-4" aria-hidden="true" />
              {t.hero.ctaPrimary}
            </a>
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <div className="lg:hidden flex items-center gap-2">
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
            className="lg:hidden bg-background border-b border-border"
            role="navigation"
            aria-label="Menú móvil"
          >
            <div className="container mx-auto px-4 py-4 flex flex-col gap-2">
              {navLinks.map((link) => renderNavLink(link, true))}
              <div className="flex flex-col gap-3 pt-4 border-t border-border mt-2">
                <Button 
                  variant="outline" 
                  onClick={handleWhatsApp}
                  className="w-full gap-2"
                  aria-label="Enviar WhatsApp - Abre en nueva ventana"
                >
                  <MessageCircle className="h-4 w-4" aria-hidden="true" />
                  {t.hero.ctaSecondary}
                </Button>
                <Button variant="gold" asChild className="w-full gap-2">
                  <a href="#contacto" onClick={() => setIsOpen(false)} aria-label="Solicitar cotización">
                    <Phone className="h-4 w-4" aria-hidden="true" />
                    {t.hero.ctaPrimary}
                  </a>
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
