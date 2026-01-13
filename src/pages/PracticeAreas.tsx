import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Shield, Building2, Home, Users, FileText, ArrowRight, Scale } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import StickyMobileCTA from '@/components/StickyMobileCTA';
import SchemaMarkup from '@/components/SchemaMarkup';
import { useTranslation } from '@/i18n/LanguageContext';

const practiceAreas = [
  {
    id: 'prevencion-consultoria',
    icon: Shield,
    nameEs: 'Prevención y Consultoría Legal',
    nameEn: 'Prevention & Legal Consulting',
    shortEs: 'Diseños preventivos, auditoría básica de riesgos, políticas y contratos para emprendedores y PYMEs.',
    shortEn: 'Preventive designs, basic risk auditing, policies and contracts for entrepreneurs and SMEs.',
    descriptionEs: 'Ayudamos a empresarios y emprendedores a establecer bases legales sólidas antes de que surjan problemas. Nuestro enfoque preventivo incluye auditorías de riesgo, diseño de políticas internas, y estructuración de contratos que protejan tus intereses comerciales.',
    descriptionEn: 'We help business owners and entrepreneurs establish solid legal foundations before problems arise. Our preventive approach includes risk audits, internal policy design, and contract structuring to protect your commercial interests.',
    servicesEs: ['Auditoría de riesgos legales', 'Diseño de políticas internas', 'Contratos comerciales', 'Asesoría para startups', 'Compliance empresarial'],
    servicesEn: ['Legal risk auditing', 'Internal policy design', 'Commercial contracts', 'Startup advisory', 'Business compliance'],
    star: true,
  },
  {
    id: 'mercantil-corporativo',
    icon: Scale,
    nameEs: 'Mercantil y Corporativo',
    nameEn: 'Commercial & Corporate',
    shortEs: 'Constitución y gobierno corporativo, actas, socios, fusiones/escisiones básicas, compliance mercantil.',
    shortEn: 'Incorporation and corporate governance, minutes, partners, basic mergers/spin-offs, commercial compliance.',
    descriptionEs: 'Desde la constitución de tu empresa hasta operaciones corporativas complejas, te acompañamos en cada paso. Manejamos asambleas de accionistas, modificaciones estatutarias, fusiones, escisiones y todo lo relacionado con el gobierno de tu sociedad.',
    descriptionEn: 'From incorporating your company to complex corporate operations, we accompany you every step of the way. We handle shareholder meetings, bylaw modifications, mergers, spin-offs, and everything related to your company\'s governance.',
    servicesEs: ['Constitución de sociedades', 'Asambleas y actas', 'Fusiones y escisiones', 'Pactos de socios', 'Gobierno corporativo'],
    servicesEn: ['Company incorporation', 'Meetings and minutes', 'Mergers and spin-offs', 'Shareholder agreements', 'Corporate governance'],
    star: true,
  },
  {
    id: 'civil-inmobiliario',
    icon: Home,
    nameEs: 'Civil e Inmobiliario',
    nameEn: 'Civil & Real Estate',
    shortEs: 'Posesión, declarativas, regularización, contratos civiles, recuperación y defensa de inmueble.',
    shortEn: 'Possession, declaratory actions, regularization, civil contracts, property recovery and defense.',
    descriptionEs: 'Protegemos tu patrimonio inmobiliario con servicios que van desde la regularización de propiedades hasta la defensa en juicios. Manejamos prescripción positiva, contratos de compraventa, arrendamiento y todo tipo de controversias civiles.',
    descriptionEn: 'We protect your real estate assets with services ranging from property regularization to court defense. We handle adverse possession, sales contracts, leases, and all types of civil disputes.',
    servicesEs: ['Prescripción positiva', 'Regularización de inmuebles', 'Contratos de compraventa', 'Arrendamientos', 'Juicios civiles'],
    servicesEn: ['Adverse possession', 'Property regularization', 'Sales contracts', 'Leases', 'Civil litigation'],
    star: true,
  },
  {
    id: 'familiar',
    icon: Users,
    nameEs: 'Derecho Familiar',
    nameEn: 'Family Law',
    shortEs: 'Divorcios, convenios, guardia y custodia, convenios patrimoniales, juicios sucesorios.',
    shortEn: 'Divorces, agreements, custody, property agreements, probate proceedings.',
    descriptionEs: 'Acompañamos a familias en los momentos más difíciles con sensibilidad y profesionalismo. Manejamos divorcios (voluntarios y contenciosos), custodia de menores, pensiones alimenticias, y juicios sucesorios con enfoque en soluciones pacíficas.',
    descriptionEn: 'We accompany families in difficult times with sensitivity and professionalism. We handle divorces (voluntary and contested), child custody, alimony, and probate proceedings with a focus on peaceful solutions.',
    servicesEs: ['Divorcios voluntarios', 'Divorcios contenciosos', 'Guardia y custodia', 'Pensión alimenticia', 'Sucesiones testamentarias'],
    servicesEn: ['Voluntary divorces', 'Contested divorces', 'Custody arrangements', 'Child support', 'Probate proceedings'],
    star: true,
  },
  {
    id: 'contratos-cumplimiento',
    icon: FileText,
    nameEs: 'Contratos y Cumplimiento',
    nameEn: 'Contracts & Compliance',
    shortEs: 'Redacción, revisión y negociación B2B/B2C; cláusulas de riesgo y garantías.',
    shortEn: 'B2B/B2C drafting, review and negotiation; risk clauses and guarantees.',
    descriptionEs: 'Cada contrato es una oportunidad para proteger tu negocio o un riesgo latente. Redactamos, revisamos y negociamos contratos con enfoque en minimizar riesgos y maximizar beneficios, tanto en relaciones B2B como B2C.',
    descriptionEn: 'Every contract is an opportunity to protect your business or a latent risk. We draft, review, and negotiate contracts with a focus on minimizing risks and maximizing benefits, in both B2B and B2C relationships.',
    servicesEs: ['Redacción de contratos', 'Revisión y análisis', 'Negociación contractual', 'Cláusulas de riesgo', 'Garantías y penalidades'],
    servicesEn: ['Contract drafting', 'Review and analysis', 'Contract negotiation', 'Risk clauses', 'Guarantees and penalties'],
    star: false,
  },
];

const PracticeAreas = () => {
  const { t, locale } = useTranslation();

  return (
    <div className="min-h-screen bg-background">
      <SchemaMarkup 
        type="webpage" 
        pageTitle={t.seo.practiceAreas.title} 
        pageDescription={t.seo.practiceAreas.description} 
      />
      <Navbar />
      
      <main className="pt-20">
        {/* Hero */}
        <section className="py-16 bg-primary">
          <div className="container mx-auto px-4 text-center">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="font-serif text-4xl sm:text-5xl font-bold text-primary-foreground mb-4"
            >
              {t.practiceAreas.title}
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-lg text-primary-foreground/80 max-w-2xl mx-auto"
            >
              {t.practiceAreas.subtitle}
            </motion.p>
          </div>
        </section>

        {/* Practice Areas Grid */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-8">
              {practiceAreas.map((area, index) => (
                <motion.div
                  key={area.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="group relative p-8 rounded-xl border border-border bg-card hover:border-accent/50 hover:shadow-lg transition-all"
                >
                  {area.star && (
                    <span className="absolute top-4 right-4 px-2 py-0.5 text-xs font-medium bg-accent/10 text-accent rounded">
                      {t.services.featured}
                    </span>
                  )}
                  
                  <div className="w-14 h-14 rounded-lg bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-accent/20 transition-colors">
                    <area.icon className="h-7 w-7 text-primary group-hover:text-accent transition-colors" />
                  </div>
                  
                  <h2 className="font-serif text-2xl font-bold text-foreground mb-3">
                    {locale === 'es' ? area.nameEs : area.nameEn}
                  </h2>
                  
                  <p className="text-muted-foreground mb-4">
                    {locale === 'es' ? area.shortEs : area.shortEn}
                  </p>
                  
                  <p className="text-sm text-muted-foreground mb-6">
                    {locale === 'es' ? area.descriptionEs : area.descriptionEn}
                  </p>
                  
                  <div className="mb-6">
                    <h3 className="text-sm font-semibold text-foreground mb-2">
                      {t.practiceAreas.relatedServices}:
                    </h3>
                    <ul className="flex flex-wrap gap-2">
                      {(locale === 'es' ? area.servicesEs : area.servicesEn).map((service) => (
                        <li 
                          key={service}
                          className="px-2 py-1 text-xs bg-secondary text-secondary-foreground rounded"
                        >
                          {service}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <Button variant="outline" asChild className="group-hover:border-accent group-hover:text-accent">
                    <Link to={`/areas-de-practica/${area.id}`}>
                      {t.services.viewArea}
                      <ArrowRight className="h-4 w-4 ml-1" />
                    </Link>
                  </Button>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
      <StickyMobileCTA />
    </div>
  );
};

export default PracticeAreas;
