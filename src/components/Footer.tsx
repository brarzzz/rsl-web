import { Instagram, Linkedin, Phone, Mail, MapPin, Clock, MessageCircle } from "lucide-react";
import { Link } from "react-router-dom";
import { useTranslation } from "@/i18n/LanguageContext";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const { t } = useTranslation();

  const handleWhatsApp = () => {
    const message = encodeURIComponent(t.common.whatsappMessage);
    window.open(`https://wa.me/526671636472?text=${message}`, "_blank");
  };

  return (
    <footer className="bg-foreground py-12" role="contentinfo" aria-label="Pie de página">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div className="lg:col-span-1">
            <h3 className="font-serif text-2xl font-bold text-background mb-2">
              Rodriguez Soporte Legal
            </h3>
            <p className="text-background/70 mb-4 text-sm">
              {t.hero.title} {t.hero.titleAccent}
            </p>
            <div className="flex gap-3">
              <a
                href="https://instagram.com/rodriguez.soportelegal"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-background/10 flex items-center justify-center hover:bg-accent/20 transition-colors focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                aria-label="Visitar nuestro Instagram - Abre en nueva ventana"
              >
                <Instagram className="h-5 w-5 text-background" aria-hidden="true" />
              </a>
              <a
                href="https://www.linkedin.com/in/rodriguez-soporte-legal-4a16493a5/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-background/10 flex items-center justify-center hover:bg-accent/20 transition-colors focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                aria-label="Visitar nuestro LinkedIn - Abre en nueva ventana"
              >
                <Linkedin className="h-5 w-5 text-background" aria-hidden="true" />
              </a>
              <button
                onClick={handleWhatsApp}
                className="w-10 h-10 rounded-full bg-whatsapp/20 flex items-center justify-center hover:bg-whatsapp/30 transition-colors focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                aria-label="Contactar por WhatsApp - Abre en nueva ventana"
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
                  href="tel:+526677522429"
                  className="flex items-start gap-2 text-background/70 hover:text-accent transition-colors text-sm"
                >
                  <Phone className="h-4 w-4 mt-0.5 flex-shrink-0" aria-hidden="true" />
                  <span>(667) 752-2429</span>
                </a>
              </li>
              <li>
                <a
                  href="mailto:jorgeluis@soportelegal.com.mx"
                  className="flex items-start gap-2 text-background/70 hover:text-accent transition-colors text-sm"
                >
                  <Mail className="h-4 w-4 mt-0.5 flex-shrink-0" aria-hidden="true" />
                  <span>jorgeluis@soportelegal.com.mx</span>
                </a>
              </li>
              <li className="flex items-start gap-2 text-background/70 text-sm">
                <MapPin className="h-4 w-4 mt-0.5 flex-shrink-0" aria-hidden="true" />
                <span>Calle Rio Culiacán 113 Pte, Col. Guadalupe, Culiacán, Sinaloa</span>
              </li>
              <li className="flex items-start gap-2 text-background/70 text-sm">
                <Clock className="h-4 w-4 mt-0.5 flex-shrink-0" aria-hidden="true" />
                <span>Lun–Vie 9:00–14:00 / 16:00–19:00<br />Sáb 10:00–13:00</span>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <nav aria-label="Enlaces rápidos">
            <h4 className="font-semibold text-background mb-4">Enlaces</h4>
            <ul className="space-y-2" role="list">
              <li>
                <Link to="/" className="text-background/70 hover:text-accent transition-colors text-sm">
                  {(t.nav as any).home || "Inicio"}
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
              <li className="text-background/70 text-sm">Prevención y Consultoría</li>
              <li className="text-background/70 text-sm">Derecho Mercantil</li>
              <li className="text-background/70 text-sm">Derecho Corporativo</li>
              <li className="text-background/70 text-sm">Derecho Civil e Inmobiliario</li>
              <li className="text-background/70 text-sm">Derecho Familiar</li>
            </ul>
          </div>
        </div>

        {/* SLA Notice */}
        <div className="py-4 mb-4 bg-accent/10 rounded-lg">
          <p className="text-center text-sm font-medium text-accent">
            ⏱️ {t.hero.sla || "Respuesta en menos de 24 horas • Lun–Vie 9:00–19:00"}
          </p>
        </div>

        {/* Disclaimer */}
        <div className="py-4 border-t border-background/10">
          <p className="text-background/60 text-sm text-center italic">
            {(t.legal as any)?.disclaimer || "Cada caso requiere análisis; agenda una consulta para evaluación."}
          </p>
        </div>

        <div className="pt-4 border-t border-background/10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-background/50 text-sm text-center md:text-left">
              © {currentYear} Rodriguez, Integración de Servicios Jurídicos S.A. de C.V. Todos los derechos reservados.
            </p>
            <div className="flex gap-6 text-sm">
              <Link to="/aviso-de-privacidad" className="text-background/50 hover:text-accent transition-colors">
                {(t.legal as any)?.privacyPolicy || "Aviso de Privacidad"}
              </Link>
              <Link to="/terminos" className="text-background/50 hover:text-accent transition-colors">
                {(t.legal as any)?.termsConditions || "Términos y Condiciones"}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
