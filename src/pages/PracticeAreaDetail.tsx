import { useParams, Navigate } from 'react-router-dom';
import { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import PracticeAreaTemplate from '@/components/PracticeAreaTemplate';
import SEOHead from '@/components/SEOHead';
import { createServiceSchema, createFaqSchema, createBreadcrumbSchema, seoConfig } from '@/seo/schema';
import { useLanguage } from '@/i18n/LanguageContext';
import { getAreaBySlug } from '@/content/practiceAreas';

const PracticeAreaDetail = () => {
  const { areaSlug } = useParams<{ areaSlug: string }>();
  const { locale, t } = useLanguage();

  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [areaSlug]);

  // Find area by slug
  const area = areaSlug ? getAreaBySlug(areaSlug) : undefined;

  if (!area) {
    return <Navigate to="/areas-de-practica" replace />;
  }

  // Get localized content
  const content = locale === 'es' ? area.es : area.en;
  const Icon = area.icon;

  // Generate schemas
  const serviceSchema = createServiceSchema({
    name: content.name,
    description: content.shortDescription,
    slug: area.slug,
  });

  const faqSchema = createFaqSchema(
    content.faqs.map((faq) => ({
      question: faq.question,
      answer: faq.answer,
    }))
  );

  const breadcrumbSchema = createBreadcrumbSchema([
    { name: t.nav?.home || 'Inicio', url: seoConfig.baseUrl },
    { name: t.practiceAreas?.title || 'Áreas de Práctica', url: `${seoConfig.baseUrl}/areas-de-practica` },
    { name: content.name, url: `${seoConfig.baseUrl}/areas-de-practica/${area.slug}` },
  ]);

  return (
    <div className="min-h-screen bg-background">
      <SEOHead
        title={`${content.name} | Rodriguez Soporte Legal`}
        description={content.shortDescription}
        canonical={`${seoConfig.baseUrl}/areas-de-practica/${area.slug}`}
        keywords={content.keywords}
        schema={[serviceSchema, faqSchema, breadcrumbSchema]}
      />
      
      <Navbar />
      
      <main className="pt-20">
        <PracticeAreaTemplate
          icon={Icon}
          title={content.h1}
          summary={content.shortDescription}
          steps={content.steps}
          problems={content.problems}
          faqs={content.faqs}
          star={area.star}
          cta={{
            text: t.hero?.ctaPrimary || 'Solicitar Cotización',
            href: '#contacto',
          }}
        />
      </main>
      
      <Footer />
    </div>
  );
};

export default PracticeAreaDetail;
