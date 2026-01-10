import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Metrics from "@/components/Metrics";
import Services from "@/components/Services";
import About from "@/components/About";
import Team from "@/components/Team";
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
        <Metrics />
        <Services />
        <About />
        <Team />
        <Contact />
      </main>
      <Footer />
      <StickyMobileCTA />
    </div>
  );
};

export default Index;
