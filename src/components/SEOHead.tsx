import { Helmet } from 'react-helmet-async';

interface SEOHeadProps {
  title: string;
  description: string;
  keywords?: string[];
  canonical?: string;
  ogImage?: string;
  ogType?: 'website' | 'article' | 'profile';
  noindex?: boolean;
  schema?: object | object[];
}

const BASE_URL = 'https://soportelegal.com.mx';
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

  const canonicalUrl = canonical || (typeof window !== 'undefined' ? window.location.href : BASE_URL);

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{formattedTitle}</title>
      <meta name="description" content={formattedDescription} />
      <meta name="keywords" content={allKeywords.join(', ')} />
      <meta name="author" content={BRAND_NAME} />
      <link rel="canonical" href={canonicalUrl} />
      
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
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:site_name" content={BRAND_NAME} />
      <meta property="og:locale" content="es_MX" />
      
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

// Pre-configured schemas
export const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  '@id': `${BASE_URL}/#organization`,
  name: BRAND_NAME,
  legalName: 'Rodriguez, Integración de Servicios Jurídicos S.A. de C.V.',
  url: BASE_URL,
  logo: {
    '@type': 'ImageObject',
    url: `${BASE_URL}/logo.png`,
    width: 512,
    height: 512,
  },
  foundingDate: '2003',
  description: 'Despacho jurídico en Culiacán especializado en derecho mercantil, corporativo, civil, inmobiliario y familiar. +22 años protegiendo negocios.',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Calle Rio Culiacán 113 Poniente, entre Domingo Rubí y Manuel Bonilla, Colonia Guadalupe',
    addressLocality: 'Culiacán',
    addressRegion: 'Sinaloa',
    postalCode: '80220',
    addressCountry: 'MX',
  },
  contactPoint: {
    '@type': 'ContactPoint',
    telephone: '+52-667-752-2429',
    contactType: 'customer service',
    email: 'jorgeluis@soportelegal.com.mx',
    availableLanguage: ['Spanish', 'English'],
    hoursAvailable: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        opens: '09:00',
        closes: '14:00',
      },
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        opens: '16:00',
        closes: '19:00',
      },
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Saturday'],
        opens: '10:00',
        closes: '13:00',
      },
    ],
  },
  sameAs: [
    'https://instagram.com/rodriguez.soportelegal',
  ],
};

export const legalServiceSchema = {
  '@context': 'https://schema.org',
  '@type': 'LegalService',
  '@id': `${BASE_URL}/#legalservice`,
  name: BRAND_NAME,
  image: `${BASE_URL}/og-image.png`,
  priceRange: '$$',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Calle Rio Culiacán 113 Poniente',
    addressLocality: 'Culiacán',
    addressRegion: 'Sinaloa',
    postalCode: '80220',
    addressCountry: 'MX',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 24.8049,
    longitude: -107.394,
  },
  url: BASE_URL,
  telephone: '+52-667-752-2429',
  email: 'jorgeluis@soportelegal.com.mx',
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      opens: '09:00',
      closes: '14:00',
    },
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      opens: '16:00',
      closes: '19:00',
    },
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Saturday'],
      opens: '10:00',
      closes: '13:00',
    },
  ],
  areaServed: [
    {
      '@type': 'City',
      name: 'Culiacán',
      sameAs: 'https://en.wikipedia.org/wiki/Culiac%C3%A1n',
    },
    {
      '@type': 'State',
      name: 'Sinaloa',
    },
    {
      '@type': 'Country',
      name: 'Mexico',
    },
  ],
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Servicios Legales',
    itemListElement: [
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Consultoría Legal Preventiva',
          description: 'Diseños preventivos, auditoría de riesgos, políticas y contratos para empresas y PYMEs.',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Derecho Mercantil y Corporativo',
          description: 'Constitución de empresas, gobierno corporativo, fusiones, escisiones y compliance.',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Derecho Civil e Inmobiliario',
          description: 'Contratos civiles, regularización de inmuebles, prescripción positiva, defensa de patrimonio.',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Derecho Familiar',
          description: 'Divorcios, custodia, pensión alimenticia, convenios patrimoniales, juicios sucesorios.',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Contratos y Cumplimiento',
          description: 'Redacción, revisión y negociación B2B/B2C, cláusulas de riesgo y garantías.',
        },
      },
    ],
  },
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '4.9',
    reviewCount: '127',
    bestRating: '5',
    worstRating: '1',
  },
};

export const websiteSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  '@id': `${BASE_URL}/#website`,
  name: BRAND_NAME,
  url: BASE_URL,
  description: 'Despacho jurídico en Culiacán especializado en asesoría legal preventiva para empresas y particulares.',
  publisher: {
    '@id': `${BASE_URL}/#organization`,
  },
  inLanguage: ['es-MX', 'en'],
  potentialAction: {
    '@type': 'SearchAction',
    target: `${BASE_URL}/?s={search_term_string}`,
    'query-input': 'required name=search_term_string',
  },
};

export const breadcrumbSchema = (items: { name: string; url: string }[]) => ({
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: items.map((item, index) => ({
    '@type': 'ListItem',
    position: index + 1,
    name: item.name,
    item: item.url,
  })),
});

export const faqSchema = (faqs: { question: string; answer: string }[]) => ({
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map((faq) => ({
    '@type': 'Question',
    name: faq.question,
    acceptedAnswer: {
      '@type': 'Answer',
      text: faq.answer,
    },
  })),
});

export const serviceSchema = (service: {
  name: string;
  description: string;
  slug: string;
}) => ({
  '@context': 'https://schema.org',
  '@type': 'Service',
  '@id': `${BASE_URL}/areas-de-practica/${service.slug}`,
  name: service.name,
  description: service.description,
  provider: {
    '@id': `${BASE_URL}/#organization`,
  },
  areaServed: {
    '@type': 'City',
    name: 'Culiacán',
  },
  serviceType: 'Legal Services',
});

export const personSchema = (person: {
  name: string;
  role: string;
  slug: string;
  image?: string;
  description?: string;
}) => ({
  '@context': 'https://schema.org',
  '@type': 'Person',
  '@id': `${BASE_URL}/equipo/${person.slug}`,
  name: person.name,
  jobTitle: person.role,
  image: person.image,
  description: person.description,
  worksFor: {
    '@id': `${BASE_URL}/#organization`,
  },
  knowsAbout: ['Derecho Mexicano', 'Asesoría Legal', 'Contratos'],
});

export default SEOHead;
