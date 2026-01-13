import { Instagram, Linkedin, Phone, Mail, MapPin, Clock, MessageCircle } from "lucide-react";
import { Link } from "react-router-dom";
import { useTranslation } from "@/i18n/LanguageContext";
import { siteConfig } from "@/config/siteConfig";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const { t } = useTranslation();

  const handleWhatsApp = () => {
    window.open(siteConfig.whatsappLink(t.common.whatsappMessage), "_blank");
  };

  return (
    <footer className="bg-foreground py-12" role="contentinfo" aria-label={t.footer.footerLabel}>
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div className="lg:col-span-1">
            <h3 className="font-serif text-2xl font-bold text-background mb-2">
              {t.footer.brandName}
            </h3>
            <p className="text-background/70 mb-4 text-sm">
              {t.hero.title} {t.hero.titleAccent}
            </p>
            <div className="flex gap-3">
              <a
                href={siteConfig.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-background/10 flex items-center justify-center hover:bg-accent/20 transition-colors focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                aria-label={`${t.footer.visitInstagram} - ${t.footer.opensNewWindow}`}
              >
                <Instagram className="h-5 w-5 text-background" aria-hidden="true" />
              </a>
              <a
                href={siteConfig.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-background/10 flex items-center justify-center hover:bg-accent/20 transition-colors focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                aria-label={`${t.footer.visitLinkedin} - ${t.footer.opensNewWindow}`}
              >
                <Linkedin className="h-5 w-5 text-background" aria-hidden="true" />
              </a>
              <button
                onClick={handleWhatsApp}
                className="w-10 h-10 rounded-full bg-whatsapp/20 flex items-center justify-center hover:bg-whatsapp/30 transition-colors focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                aria-label={`${t.footer.contactWhatsapp} - ${t.footer.opensNewWindow}`}
              >
                <MessageCircle className="h-5 w-5 text-whatsapp" aria-hidden="true" />
              </button>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold text-background mb-4">{t.nav.contact}</h4>
            <ul className="space-y-3" role="list">
              <li>
                <a
                  href={`tel:+52${siteConfig.phone}`}
                  className="flex items-start gap-2 text-background/70 hover:text-accent transition-colors text-sm"
                >
                  <Phone className="h-4 w-4 mt-0.5 flex-shrink-0" aria-hidden="true" />
                  <span>{siteConfig.phoneFormatted}</span>
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="flex items-start gap-2 text-background/70 hover:text-accent transition-colors text-sm"
                >
                  <Mail className="h-4 w-4 mt-0.5 flex-shrink-0" aria-hidden="true" />
                  <span>{siteConfig.email}</span>
                </a>
              </li>
              <li className="flex items-start gap-2 text-background/70 text-sm">
                <MapPin className="h-4 w-4 mt-0.5 flex-shrink-0" aria-hidden="true" />
                <span>{siteConfig.addressShort}, {siteConfig.cityState}</span>
              </li>
              <li className="flex items-start gap-2 text-background/70 text-sm">
                <Clock className="h-4 w-4 mt-0.5 flex-shrink-0" aria-hidden="true" />
                <span style={{ whiteSpace: 'pre-line' }}>{siteConfig.hoursShort}</span>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <nav aria-label={t.footer.quickLinks}>
            <h4 className="font-semibold text-background mb-4">{t.nav.links}</h4>
            <ul className="space-y-2" role="list">
              <li>
                <Link to="/" className="text-background/70 hover:text-accent transition-colors text-sm">
                  {t.nav.home}
                </Link>
              </li>
              <li>
                <Link to="/areas-de-practica" className="text-background/70 hover:text-accent transition-colors text-sm">
                  {t.nav.practiceAreas}
                </Link>
              </li>
              <li>
                <a href="#nosotros" className="text-background/70 hover:text-accent transition-colors text-sm">
                  {t.nav.about}
                </a>
              </li>
              <li>
                <a href="#equipo" className="text-background/70 hover:text-accent transition-colors text-sm">
                  {t.nav.team}
                </a>
              </li>
              <li>
                <Link to="/agendar" className="text-background/70 hover:text-accent transition-colors text-sm">
                  {t.nav.booking}
                </Link>
              </li>
            </ul>
          </nav>

          {/* Services */}
          <div>
            <h4 className="font-semibold text-background mb-4">{t.nav.services}</h4>
            <ul className="space-y-2" role="list">
              <li className="text-background/70 text-sm">{t.footer.services.prevention}</li>
              <li className="text-background/70 text-sm">{t.footer.services.commercial}</li>
              <li className="text-background/70 text-sm">{t.footer.services.corporate}</li>
              <li className="text-background/70 text-sm">{t.footer.services.civil}</li>
              <li className="text-background/70 text-sm">{t.footer.services.family}</li>
            </ul>
          </div>
        </div>

        {/* SLA Notice */}
        <div className="py-4 mb-4 bg-accent/10 rounded-lg">
          <p className="text-center text-sm font-medium text-accent">
            ⏱️ {t.hero.sla}
          </p>
        </div>

        {/* Disclaimer */}
        <div className="py-4 border-t border-background/10">
          <p className="text-background/60 text-sm text-center italic">
            {t.legal.disclaimer}
          </p>
        </div>

        <div className="pt-4 border-t border-background/10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-background/50 text-sm text-center md:text-left">
              © {currentYear} {t.footer.copyright}. {t.footer.rights}
            </p>
            <div className="flex gap-6 text-sm">
              <Link to="/aviso-de-privacidad" className="text-background/50 hover:text-accent transition-colors">
                {t.legal.privacyPolicy}
              </Link>
              <Link to="/terminos" className="text-background/50 hover:text-accent transition-colors">
                {t.legal.termsConditions}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
