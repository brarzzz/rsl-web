import { useState } from "react";
import { Menu, X, Phone, Mail, MapPin, Clock, ArrowRight, Send, Star, Shield, Target, Zap, Heart, ChevronLeft, ChevronRight, Building2, Scale, Home, Users, FileText, MessageCircle, Instagram, Linkedin } from "lucide-react";

// Wireframe Page - Grayscale structure with technical labels
const Wireframe = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [formData, setFormData] = useState({ name: "", email: "", phone: "", message: "" });

  const navLinks = [
    { href: "#hero", label: "Hero" },
    { href: "#benefits", label: "Benefits" },
    { href: "#services-grid", label: "ServicesGrid" },
    { href: "#why-us", label: "WhyUs" },
    { href: "#team", label: "Team" },
    { href: "#testimonials", label: "Testimonials" },
    { href: "#cta", label: "CTA" },
  ];

  return (
    <div className="min-h-screen bg-gray-100 font-sans">
      {/* ===== NAVBAR ===== */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white border-b-2 border-gray-300">
        <div className="absolute top-0 left-0 bg-gray-800 text-white text-xs px-2 py-0.5 font-mono">
          NAVBAR
        </div>
        <nav className="container mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-gray-400 rounded flex items-center justify-center text-white text-xs font-mono">
              LOGO
            </div>
            <span className="text-sm text-gray-600">Nombre de Empresa</span>
          </div>

          <div className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm text-gray-600 hover:text-gray-900 transition-colors font-mono"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="hidden md:flex items-center gap-2">
            <button className="px-4 py-2 bg-gray-300 text-gray-700 text-sm rounded border border-gray-400 font-mono">
              CTA Secundario
            </button>
            <button className="px-4 py-2 bg-gray-700 text-white text-sm rounded font-mono">
              CTA Primario
            </button>
          </div>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-gray-600"
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </nav>

        {mobileMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-200 p-4 space-y-2">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="block py-2 text-gray-600 font-mono text-sm"
              >
                {link.label}
              </a>
            ))}
            <div className="pt-4 border-t border-gray-200 space-y-2">
              <button className="w-full px-4 py-2 bg-gray-300 text-gray-700 text-sm rounded border border-gray-400 font-mono">
                CTA Secundario
              </button>
              <button className="w-full px-4 py-2 bg-gray-700 text-white text-sm rounded font-mono">
                CTA Primario
              </button>
            </div>
          </div>
        )}
      </header>

      {/* ===== HERO ===== */}
      <section id="hero" className="relative min-h-screen flex items-center justify-center bg-gray-300 pt-16">
        <div className="absolute top-4 left-4 bg-gray-800 text-white text-xs px-2 py-1 font-mono z-10">
          HERO
        </div>
        
        {/* Background placeholder */}
        <div className="absolute inset-0 bg-gradient-to-b from-gray-400 to-gray-500 opacity-80" />
        <div className="absolute inset-0 flex items-center justify-center opacity-20">
          <span className="text-6xl font-mono text-gray-700">[IMAGEN DE FONDO]</span>
        </div>
        
        <div className="relative z-10 container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <div className="inline-block px-4 py-1 mb-6 text-sm bg-gray-200 text-gray-600 rounded-full border border-gray-400 font-mono">
              [Badge: Credibilidad]
            </div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-800 leading-tight mb-6">
              Título Principal Hero.{" "}
              <span className="text-gray-600">Subtítulo Destacado.</span>
            </h1>
            
            <p className="text-lg sm:text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Descripción breve del servicio o propuesta de valor. Texto que explica el beneficio principal para el usuario en una o dos oraciones.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-gray-700 text-white rounded-lg font-mono text-base">
                CTA Primario
                <ArrowRight className="h-5 w-5" />
              </button>
              <button className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-gray-700 border-2 border-gray-400 rounded-lg font-mono text-base">
                <Phone className="h-5 w-5" />
                CTA Secundario
              </button>
            </div>
            
            <p className="mt-6 text-sm text-gray-500 font-mono">
              [SLA: Tiempo de respuesta] • [Horario de atención]
            </p>
          </div>
        </div>
      </section>

      {/* ===== BENEFITS ===== */}
      <section id="benefits" className="relative py-16 bg-gray-200">
        <div className="absolute top-4 left-4 bg-gray-800 text-white text-xs px-2 py-1 font-mono">
          BENEFITS (Metrics Strip)
        </div>
        
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { value: "+XX", label: "Métrica 1" },
              { value: "+X,XXX", label: "Métrica 2" },
              { value: "+XXX", label: "Métrica 3" },
              { value: "XX%", label: "Métrica 4" },
            ].map((metric, index) => (
              <div key={index} className="text-center p-4 bg-white rounded-lg border border-gray-300">
                <div className="text-3xl sm:text-4xl font-bold text-gray-700 mb-2 font-mono">
                  {metric.value}
                </div>
                <div className="text-sm text-gray-500 font-mono">{metric.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== SERVICES GRID ===== */}
      <section id="services-grid" className="relative py-20 bg-white">
        <div className="absolute top-4 left-4 bg-gray-800 text-white text-xs px-2 py-1 font-mono">
          SERVICES GRID
        </div>
        
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <span className="inline-block px-3 py-1 text-sm bg-gray-200 text-gray-600 rounded-full border border-gray-300 font-mono mb-4">
              [Badge Sección]
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-800 mb-4">
              Título de Sección Servicios
            </h2>
            <p className="text-lg text-gray-500 max-w-2xl mx-auto">
              Subtítulo descriptivo que explica brevemente el valor de los servicios ofrecidos.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: Building2, name: "Servicio 1", star: true },
              { icon: Scale, name: "Servicio 2", star: true },
              { icon: Home, name: "Servicio 3", star: true },
              { icon: Users, name: "Servicio 4", star: true },
              { icon: FileText, name: "Servicio 5", star: false },
            ].map((service, index) => (
              <div
                key={index}
                className="relative p-6 rounded-xl border-2 border-gray-300 bg-gray-50 hover:border-gray-500 transition-all"
              >
                {service.star && (
                  <span className="absolute top-4 right-4 px-2 py-0.5 text-xs bg-gray-300 text-gray-700 rounded font-mono">
                    Destacado
                  </span>
                )}
                <div className="w-12 h-12 rounded-lg bg-gray-300 flex items-center justify-center mb-4">
                  <service.icon className="h-6 w-6 text-gray-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2 font-mono">
                  {service.name}
                </h3>
                <p className="text-gray-500 mb-4">
                  Descripción breve del servicio explicando el valor y beneficio para el cliente.
                </p>
                <a href="#cta" className="inline-flex items-center gap-1 text-sm text-gray-600 hover:text-gray-900 font-mono">
                  Más información
                  <ArrowRight className="h-4 w-4" />
                </a>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <button className="inline-flex items-center gap-2 px-6 py-3 bg-gray-700 text-white rounded-lg font-mono">
              CTA Sección
              <ArrowRight className="h-5 w-5" />
            </button>
          </div>
        </div>
      </section>

      {/* ===== WHY US ===== */}
      <section id="why-us" className="relative py-20 bg-gray-100">
        <div className="absolute top-4 left-4 bg-gray-800 text-white text-xs px-2 py-1 font-mono">
          WHY US (About + Values)
        </div>
        
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-block px-3 py-1 text-sm bg-gray-200 text-gray-600 rounded-full border border-gray-300 font-mono mb-4">
                [Badge Sección]
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-800 mb-6">
                Título Por Qué Elegirnos
              </h2>
              <div className="space-y-4 text-gray-600">
                <p>
                  Párrafo 1: Historia o contexto de la empresa. Explicación de los inicios y la filosofía de trabajo.
                </p>
                <p>
                  Párrafo 2: Enfoque y metodología. Descripción de cómo se trabaja y qué hace diferente a la empresa.
                </p>
                <p className="font-semibold text-gray-800">
                  Misión: Declaración de la misión empresarial destacada visualmente.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {[
                { icon: Shield, label: "Valor 1" },
                { icon: Target, label: "Valor 2" },
                { icon: Zap, label: "Valor 3" },
                { icon: Heart, label: "Valor 4" },
              ].map((value, index) => (
                <div
                  key={index}
                  className="p-6 rounded-xl bg-white border-2 border-gray-300 hover:border-gray-500 transition-all"
                >
                  <div className="w-10 h-10 rounded-lg bg-gray-300 flex items-center justify-center mb-3">
                    <value.icon className="h-5 w-5 text-gray-600" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-800 mb-1 font-mono">
                    {value.label}
                  </h3>
                  <p className="text-sm text-gray-500">Descripción breve del valor.</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ===== TEAM ===== */}
      <section id="team" className="relative py-20 bg-white">
        <div className="absolute top-4 left-4 bg-gray-800 text-white text-xs px-2 py-1 font-mono">
          TEAM
        </div>
        
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <span className="inline-block px-3 py-1 text-sm bg-gray-200 text-gray-600 rounded-full border border-gray-300 font-mono mb-4">
              [Badge Sección]
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-800 mb-4">
              Título Sección Equipo
            </h2>
            <p className="text-lg text-gray-500 max-w-2xl mx-auto">
              Subtítulo describiendo al equipo de profesionales.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[1, 2, 3, 4].map((member) => (
              <div key={member} className="group">
                <div className="relative overflow-hidden rounded-xl mb-4 bg-gray-300 aspect-[4/5] flex items-center justify-center">
                  <span className="text-gray-500 font-mono text-sm">[FOTO {member}]</span>
                  <div className="absolute inset-0 bg-gray-800/80 opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
                    <p className="text-white text-sm">Bio breve del miembro del equipo visible en hover.</p>
                  </div>
                </div>
                <h3 className="text-lg font-bold text-gray-800 font-mono">Nombre {member}</h3>
                <p className="text-sm text-gray-500 mb-2">Cargo / Rol</p>
                <div className="flex items-center gap-2">
                  <span className="px-2 py-0.5 text-xs bg-gray-200 text-gray-600 rounded font-mono">
                    Especialidad
                  </span>
                  <span className="text-xs text-gray-400">+X años</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== TESTIMONIALS ===== */}
      <section id="testimonials" className="relative py-20 bg-gray-100">
        <div className="absolute top-4 left-4 bg-gray-800 text-white text-xs px-2 py-1 font-mono">
          TESTIMONIALS
        </div>
        
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <span className="inline-block px-3 py-1 text-sm bg-gray-200 text-gray-600 rounded-full border border-gray-300 font-mono mb-4">
              [Badge Sección]
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-800 mb-4">
              Título Testimonios
            </h2>
            <p className="text-lg text-gray-500 max-w-2xl mx-auto">
              Subtítulo sobre la satisfacción de los clientes.
            </p>
          </div>

          <div className="relative max-w-4xl mx-auto">
            <div className="flex gap-6 overflow-x-auto pb-4 snap-x snap-mandatory">
              {[1, 2, 3].map((testimonial) => (
                <div
                  key={testimonial}
                  className="flex-shrink-0 w-full md:w-[calc(50%-12px)] snap-start p-6 rounded-xl bg-white border-2 border-gray-300"
                >
                  <div className="flex gap-1 mb-4">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star key={star} className="h-5 w-5 fill-gray-400 text-gray-400" />
                    ))}
                  </div>
                  <p className="text-gray-600 mb-6 italic">
                    "Texto del testimonio del cliente. Comentario sobre la experiencia y satisfacción con el servicio recibido."
                  </p>
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-full bg-gray-300 flex items-center justify-center">
                      <span className="text-xs text-gray-500 font-mono">IMG</span>
                    </div>
                    <div>
                      <p className="font-bold text-gray-800 font-mono">Cliente {testimonial}</p>
                      <p className="text-sm text-gray-500">Empresa / Cargo</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="flex justify-center gap-4 mt-6">
              <button className="p-2 rounded-full bg-gray-300 hover:bg-gray-400 transition-colors">
                <ChevronLeft className="h-5 w-5 text-gray-600" />
              </button>
              <div className="flex gap-2 items-center">
                {[1, 2, 3].map((dot) => (
                  <div
                    key={dot}
                    className={`w-2 h-2 rounded-full ${dot === 1 ? "bg-gray-600" : "bg-gray-300"}`}
                  />
                ))}
              </div>
              <button className="p-2 rounded-full bg-gray-300 hover:bg-gray-400 transition-colors">
                <ChevronRight className="h-5 w-5 text-gray-600" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ===== CTA (Contact) ===== */}
      <section id="cta" className="relative py-20 bg-gray-700">
        <div className="absolute top-4 left-4 bg-white text-gray-800 text-xs px-2 py-1 font-mono">
          CTA (Contact Section)
        </div>
        
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <span className="inline-block px-3 py-1 text-sm bg-gray-600 text-gray-200 rounded-full border border-gray-500 font-mono mb-4">
              [Badge Sección]
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
              Título CTA Principal
            </h2>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              Texto persuasivo invitando al usuario a tomar acción.
            </p>
          </div>

          <div className="grid lg:grid-cols-5 gap-12">
            {/* Form */}
            <div className="lg:col-span-3">
              <div className="bg-white rounded-xl p-6 sm:p-8">
                <div className="grid sm:grid-cols-2 gap-4 mb-4">
                  <div>
                    <label className="block text-sm text-gray-600 mb-1.5 font-mono">Campo 1 *</label>
                    <input
                      type="text"
                      placeholder="Placeholder"
                      className="w-full px-4 py-2 border-2 border-gray-300 rounded-lg text-gray-700 focus:border-gray-500 outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-sm text-gray-600 mb-1.5 font-mono">Campo 2 *</label>
                    <input
                      type="email"
                      placeholder="Placeholder"
                      className="w-full px-4 py-2 border-2 border-gray-300 rounded-lg text-gray-700 focus:border-gray-500 outline-none"
                    />
                  </div>
                </div>
                
                <div className="mb-4">
                  <label className="block text-sm text-gray-600 mb-1.5 font-mono">Campo 3 *</label>
                  <input
                    type="tel"
                    placeholder="Placeholder"
                    className="w-full px-4 py-2 border-2 border-gray-300 rounded-lg text-gray-700 focus:border-gray-500 outline-none"
                  />
                </div>
                
                <div className="mb-6">
                  <label className="block text-sm text-gray-600 mb-1.5 font-mono">Campo 4 (Textarea) *</label>
                  <textarea
                    placeholder="Placeholder para mensaje..."
                    rows={4}
                    className="w-full px-4 py-2 border-2 border-gray-300 rounded-lg text-gray-700 focus:border-gray-500 outline-none resize-none"
                  />
                </div>
                
                <div className="flex flex-col sm:flex-row gap-3">
                  <button className="flex-1 inline-flex items-center justify-center gap-2 px-6 py-3 bg-gray-700 text-white rounded-lg font-mono">
                    <Send className="h-4 w-4" />
                    Enviar Formulario
                  </button>
                  <button className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-gray-500 text-white rounded-lg font-mono">
                    <MessageCircle className="h-4 w-4" />
                    Alt CTA
                  </button>
                </div>
                
                <p className="text-xs text-gray-400 mt-4 text-center font-mono">
                  [Disclaimer legal o nota sobre privacidad]
                </p>
              </div>
            </div>

            {/* Contact Info */}
            <div className="lg:col-span-2">
              <div className="space-y-6">
                {[
                  { icon: Phone, label: "Teléfono", value: "XXX XXX XXXX" },
                  { icon: Mail, label: "Email", value: "email@ejemplo.com" },
                  { icon: MapPin, label: "Dirección", value: "Calle, Ciudad, Estado" },
                  { icon: Clock, label: "Horario", value: "Lun–Vie X:XX–X:XX" },
                ].map((item, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-gray-600 flex items-center justify-center flex-shrink-0">
                      <item.icon className="h-5 w-5 text-gray-300" />
                    </div>
                    <div>
                      <h3 className="text-sm text-gray-400 font-mono">{item.label}</h3>
                      <p className="text-white">{item.value}</p>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="mt-8 p-6 rounded-xl bg-gray-600 border border-gray-500">
                <h3 className="text-lg font-bold text-white mb-2 font-mono">
                  CTA Alternativo
                </h3>
                <p className="text-gray-300 text-sm mb-4">
                  Texto adicional con información de contacto alternativa.
                </p>
                <a href="#" className="inline-flex items-center gap-2 text-gray-200 font-semibold hover:text-white font-mono">
                  <Phone className="h-4 w-4" />
                  XXX XXX XXXX
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== FOOTER ===== */}
      <footer id="footer" className="relative py-12 bg-gray-800">
        <div className="absolute top-4 left-4 bg-white text-gray-800 text-xs px-2 py-1 font-mono">
          FOOTER
        </div>
        
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            {/* Brand */}
            <div className="md:col-span-2">
              <h3 className="text-2xl font-bold text-white mb-2 font-mono">
                Nombre Empresa
              </h3>
              <p className="text-gray-400 mb-4 max-w-md">
                Tagline o descripción breve de la empresa. Texto que resume la propuesta de valor.
              </p>
              <div className="flex gap-4">
                <div className="w-10 h-10 rounded-full bg-gray-700 flex items-center justify-center">
                  <Instagram className="h-5 w-5 text-gray-400" />
                </div>
                <div className="w-10 h-10 rounded-full bg-gray-700 flex items-center justify-center">
                  <Linkedin className="h-5 w-5 text-gray-400" />
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-semibold text-white mb-4 font-mono">Enlaces</h4>
              <ul className="space-y-2">
                {["Enlace 1", "Enlace 2", "Enlace 3", "Enlace 4"].map((link) => (
                  <li key={link}>
                    <a href="#" className="text-gray-400 hover:text-white transition-colors">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services */}
            <div>
              <h4 className="font-semibold text-white mb-4 font-mono">Servicios</h4>
              <ul className="space-y-2">
                {["Servicio 1", "Servicio 2", "Servicio 3", "Servicio 4"].map((service) => (
                  <li key={service} className="text-gray-400">{service}</li>
                ))}
              </ul>
            </div>
          </div>

          <div className="pt-8 border-t border-gray-700">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <p className="text-gray-500 text-sm font-mono">
                © 2024 Nombre Legal Empresa. Todos los derechos reservados.
              </p>
              <div className="flex gap-6 text-sm">
                <a href="#" className="text-gray-500 hover:text-white transition-colors font-mono">
                  Aviso de Privacidad
                </a>
                <a href="#" className="text-gray-500 hover:text-white transition-colors font-mono">
                  Términos
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>

      {/* Sticky Mobile CTA */}
      <div className="fixed bottom-4 right-4 md:hidden z-50">
        <button className="w-14 h-14 rounded-full bg-gray-700 text-white flex items-center justify-center shadow-lg">
          <MessageCircle className="h-6 w-6" />
        </button>
        <div className="absolute -top-1 -right-1 bg-white text-gray-800 text-[8px] px-1 py-0.5 font-mono rounded">
          STICKY CTA
        </div>
      </div>
    </div>
  );
};

export default Wireframe;
