import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Benefits from "@/components/Benefits";
import Metrics from "@/components/Metrics";
import Services from "@/components/Services";
import LogoWall from "@/components/LogoWall";
import About from "@/components/About";
import Team from "@/components/Team";
import Testimonials from "@/components/Testimonials";
import FinalCTA from "@/components/FinalCTA";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import StickyMobileCTA from "@/components/StickyMobileCTA";
import SEOHead from "@/components/SEOHead";
import { organizationSchema, legalServiceSchema, websiteSchema } from "@/seo/schema";
import { useLanguage } from "@/i18n/LanguageContext";

// Content imports
import * as homeEs from "@/content/home.es";
import * as homeEn from "@/content/home.en";
import { teamContent } from "@/content/team.es";

const Index = () => {
  const { locale, t } = useLanguage();
  
  // Select content based on language
  const content = locale === "en" ? homeEn : homeEs;

  return (
    <div className="min-h-screen bg-background">
      <SEOHead
        title={t.seo.home.title}
        description={t.seo.home.description}
        keywords={[
          'abogados en Culiacán Sinaloa',
          'despacho jurídico en Culiacán',
          'asesoría legal empresarial Culiacán',
          'abogado mercantil Culiacán',
        ]}
        canonical="https://soportelegal.com.mx/"
        schema={[organizationSchema, legalServiceSchema, websiteSchema]}
      />
      <Navbar />
      <main id="main-content">
        <Hero {...content.heroContent} />
        <Benefits {...content.benefitsContent} />
        <Metrics />
        <Services {...content.servicesContent} />
        <LogoWall {...content.logoWallContent} />
        <About />
        <Team {...teamContent} />
        <Testimonials {...content.testimonialsContent} />
        <FinalCTA {...content.finalCtaContent} />
        <Contact {...content.contactContent} />
      </main>
      <Footer />
      <StickyMobileCTA />
    </div>
  );
};

export default Index;
