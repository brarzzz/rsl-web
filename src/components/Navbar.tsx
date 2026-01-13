import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Phone, MessageCircle, Calendar } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { useTranslation } from "@/i18n/LanguageContext";
import { siteConfig } from "@/config/siteConfig";
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
    { href: "/agendar-cita", label: "Agendar Cita", isRoute: true },
  ];

  const handleWhatsApp = () => {
    window.open(siteConfig.whatsappLink(t.common.whatsappMessage), "_blank");
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
    <header className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-border">
      {/* Skip link for keyboard users */}
      <a href="#main-content" className="skip-link">
        {t.common.skipToContent}
      </a>
      <nav className="container mx-auto px-4 h-16 grid grid-cols-3 items-center" aria-label={t.common.mainNavigation}>
        {/* Logo - Izquierda */}
        <Link to="/" className="flex items-center gap-2 justify-self-start" aria-label={`${t.footer.brandName} - ${t.nav.home}`}>
          <span className="font-serif text-xl font-bold text-primary" aria-hidden="true">RSL</span>
          <span className="hidden sm:inline text-sm text-muted-foreground">{t.footer.brandName}</span>
        </Link>

        {/* Desktop Navigation - Centro */}
        <div className="hidden lg:flex items-center justify-center gap-6">
          {navLinks.map((link) => renderNavLink(link))}
        </div>

        {/* Language Switcher - Derecha */}
        <div className="hidden lg:flex items-center justify-self-end">
          <LanguageSwitcher />
        </div>

        {/* Mobile Menu Button */}
        <div className="lg:hidden flex items-center gap-2 justify-self-end col-start-3">
          <LanguageSwitcher />
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="p-2 text-foreground min-h-[44px] min-w-[44px] flex items-center justify-center"
            aria-label={isOpen ? t.common.closeMenu : t.common.openMenu}
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
            aria-label={t.common.mobileMenu}
          >
            <div className="container mx-auto px-4 py-4 flex flex-col gap-2">
              {navLinks.map((link) => renderNavLink(link, true))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
