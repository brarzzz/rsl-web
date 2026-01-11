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
import SchemaMarkup from "@/components/SchemaMarkup";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <SchemaMarkup type="organization" />
      <SchemaMarkup type="legalService" />
      <Navbar />
      <main>
        <Hero />
        <Benefits />
        <Metrics />
        <Services />
        <LogoWall />
        <About />
        <Team />
        <Testimonials />
        <FinalCTA />
        <Contact />
      </main>
      <Footer />
      <StickyMobileCTA />
    </div>
  );
};

export default Index;
