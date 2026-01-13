import { Helmet } from 'react-helmet-async';
import { useLanguage } from '@/i18n/LanguageContext';
import { seoConfig } from '@/seo/schema';

export interface SEOHeadProps {
  title: string;
  description: string;
  keywords?: string[];
  canonical?: string;
  ogImage?: string;
  ogType?: 'website' | 'article' | 'profile';
  noindex?: boolean;
  schema?: object | object[];
}

const BASE_URL = seoConfig.baseUrl;
const DEFAULT_OG_IMAGE = `${BASE_URL}/og-image.png`;
const BRAND_NAME = 'Rodriguez Soporte Legal';

// SEO Keywords from brand spec
const BASE_KEYWORDS = [
  'abogados en Culiacán Sinaloa',
  'despacho jurídico en Culiacán',
  'asesoría legal empresarial Culiacán',
  'abogado mercantil Culiacán',
  'derecho mercantil Culiacán Sinaloa',
  'abogado corporativo Culiacán',
  'derecho corporativo y comercial Culiacán',
  'constitución de empresas Culiacán',
  'elaboración de contratos mercantiles Culiacán',
  'contratos civiles Culiacán',
  'abogado civil Culiacán',
  'abogado inmobiliario Culiacán',
  'contrato de arrendamiento Culiacán',
  'abogado familiar Culiacán',
  'divorcio y pensión alimenticia Culiacán',
];

const SEOHead = ({
  title,
  description,
  keywords = [],
  canonical,
  ogImage = DEFAULT_OG_IMAGE,
  ogType = 'website',
  noindex = false,
  schema,
}: SEOHeadProps) => {
  const { locale } = useLanguage();
  
  // Ensure title is ≤60 chars
  const formattedTitle = title.length > 60 
    ? title.substring(0, 57) + '...' 
    : title;
  
  // Ensure description is 150-160 chars
  const formattedDescription = description.length > 160 
    ? description.substring(0, 157) + '...' 
    : description;

  // Merge base keywords with page-specific keywords
  const allKeywords = [...new Set([...keywords, ...BASE_KEYWORDS.slice(0, 10)])];

  // Clean canonical URL (remove query params for SEO)
  const cleanCanonical = canonical || `${BASE_URL}${typeof window !== 'undefined' ? window.location.pathname : '/'}`;
  
  // OG locale format
  const ogLocale = locale === 'en' ? 'en_US' : 'es_MX';
  const alternateLocale = locale === 'en' ? 'es_MX' : 'en_US';

  return (
    <Helmet>
      {/* HTML Lang Attribute */}
      <html lang={locale} />
      
      {/* Basic Meta Tags */}
      <title>{formattedTitle}</title>
      <meta name="description" content={formattedDescription} />
      <meta name="keywords" content={allKeywords.join(', ')} />
      <meta name="author" content={BRAND_NAME} />
      <link rel="canonical" href={cleanCanonical} />
      
      {/* Alternate Languages */}
      <link rel="alternate" hrefLang="es" href={`${cleanCanonical}?lang=es`} />
      <link rel="alternate" hrefLang="en" href={`${cleanCanonical}?lang=en`} />
      <link rel="alternate" hrefLang="x-default" href={cleanCanonical} />
      
      {/* Robots */}
      {noindex ? (
        <meta name="robots" content="noindex, nofollow" />
      ) : (
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
      )}
      
      {/* Open Graph */}
      <meta property="og:title" content={formattedTitle} />
      <meta property="og:description" content={formattedDescription} />
      <meta property="og:type" content={ogType} />
      <meta property="og:url" content={cleanCanonical} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:site_name" content={BRAND_NAME} />
      <meta property="og:locale" content={ogLocale} />
      <meta property="og:locale:alternate" content={alternateLocale} />
      
      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={formattedTitle} />
      <meta name="twitter:description" content={formattedDescription} />
      <meta name="twitter:image" content={ogImage} />
      
      {/* Geo Tags for Local SEO */}
      <meta name="geo.region" content="MX-SIN" />
      <meta name="geo.placename" content="Culiacán, Sinaloa" />
      <meta name="geo.position" content="24.8049;-107.394" />
      <meta name="ICBM" content="24.8049, -107.394" />
      
      {/* JSON-LD Schema */}
      {schema && (
        <script type="application/ld+json">
          {JSON.stringify(Array.isArray(schema) ? schema : [schema])}
        </script>
      )}
    </Helmet>
  );
};

// Export constants for reuse
export { BASE_URL, BRAND_NAME };

// Re-export schemas from centralized location
export {
  organizationSchema,
  legalServiceSchema,
  websiteSchema,
  createBreadcrumbSchema as breadcrumbSchema,
  createFaqSchema as faqSchema,
  createServiceSchema as serviceSchema,
  createPersonSchema as personSchema,
} from '@/seo/schema';

export default SEOHead;
