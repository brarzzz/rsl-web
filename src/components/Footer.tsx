import { Instagram, Linkedin } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-foreground py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div className="md:col-span-2">
            <h3 className="font-serif text-2xl font-bold text-background mb-2">
              Rodriguez Soporte Legal
            </h3>
            <p className="text-background/70 mb-4 max-w-md">
              Protegemos tu negocio. Respaldamos tu crecimiento. 
              Asesoría legal preventiva y estratégica desde 2003.
            </p>
            <div className="flex gap-4">
              <a
                href="https://instagram.com/rodriguez.soportelegal"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-background/10 flex items-center justify-center hover:bg-accent/20 transition-colors"
              >
                <Instagram className="h-5 w-5 text-background" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-background/10 flex items-center justify-center hover:bg-accent/20 transition-colors"
              >
                <Linkedin className="h-5 w-5 text-background" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-background mb-4">Enlaces</h4>
            <ul className="space-y-2">
              <li>
                <a href="#servicios" className="text-background/70 hover:text-accent transition-colors">
                  Servicios
                </a>
              </li>
              <li>
                <a href="#nosotros" className="text-background/70 hover:text-accent transition-colors">
                  Nosotros
                </a>
              </li>
              <li>
                <a href="#equipo" className="text-background/70 hover:text-accent transition-colors">
                  Equipo
                </a>
              </li>
              <li>
                <a href="#contacto" className="text-background/70 hover:text-accent transition-colors">
                  Contacto
                </a>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold text-background mb-4">Servicios</h4>
            <ul className="space-y-2">
              <li className="text-background/70">Derecho Mercantil</li>
              <li className="text-background/70">Derecho Corporativo</li>
              <li className="text-background/70">Derecho Civil</li>
              <li className="text-background/70">Derecho Familiar</li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-background/10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-background/50 text-sm">
              © {currentYear} Rodriguez, Integración de Servicios Jurídicos S.A. de C.V. Todos los derechos reservados.
            </p>
            <div className="flex gap-6 text-sm">
              <a href="#" className="text-background/50 hover:text-accent transition-colors">
                Aviso de Privacidad
              </a>
              <a href="#" className="text-background/50 hover:text-accent transition-colors">
                Términos de Servicio
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
