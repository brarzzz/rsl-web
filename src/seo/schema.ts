import { siteConfig } from '@/config/siteConfig';

// Base configuration derived from siteConfig
export const seoConfig = {
  baseUrl: 'https://soportelegal.com.mx',
  brandName: 'Rodriguez Soporte Legal',
  legalName: 'Rodriguez, Integración de Servicios Jurídicos S.A. de C.V.',
  foundingDate: '2003',
  phone: `+52-${siteConfig.phone.slice(0, 3)}-${siteConfig.phone.slice(3, 6)}-${siteConfig.phone.slice(6)}`,
  email: siteConfig.email,
  address: {
    streetAddress: 'Calle Rio Culiacán 113 Poniente, entre Domingo Rubí y Manuel Bonilla, Colonia Guadalupe',
    addressLocality: 'Culiacán',
    addressRegion: 'Sinaloa',
    postalCode: '80220',
    addressCountry: 'MX',
  },
  geo: {
    latitude: 24.8049,
    longitude: -107.394,
  },
  sameAs: [
    siteConfig.social.instagram,
    siteConfig.social.linkedin,
  ],
  openingHours: [
    {
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      opens: '09:00',
      closes: '14:00',
    },
    {
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      opens: '16:00',
      closes: '19:00',
    },
    {
      dayOfWeek: ['Saturday'],
      opens: '10:00',
      closes: '13:00',
    },
  ],
};

// Organization Schema Generator
export const createOrganizationSchema = () => ({
  '@context': 'https://schema.org',
  '@type': 'Organization',
  '@id': `${seoConfig.baseUrl}/#organization`,
  name: seoConfig.brandName,
  legalName: seoConfig.legalName,
  url: seoConfig.baseUrl,
  logo: {
    '@type': 'ImageObject',
    url: `${seoConfig.baseUrl}/logo.png`,
    width: 512,
    height: 512,
  },
  foundingDate: seoConfig.foundingDate,
  description: 'Despacho jurídico en Culiacán especializado en derecho mercantil, corporativo, civil, inmobiliario y familiar. +22 años protegiendo negocios.',
  address: {
    '@type': 'PostalAddress',
    ...seoConfig.address,
  },
  contactPoint: {
    '@type': 'ContactPoint',
    telephone: seoConfig.phone,
    contactType: 'customer service',
    email: seoConfig.email,
    availableLanguage: ['Spanish', 'English'],
    hoursAvailable: seoConfig.openingHours.map((hours) => ({
      '@type': 'OpeningHoursSpecification',
      ...hours,
    })),
  },
  sameAs: seoConfig.sameAs,
});

// Legal Service Schema Generator
export const createLegalServiceSchema = () => ({
  '@context': 'https://schema.org',
  '@type': 'LegalService',
  '@id': `${seoConfig.baseUrl}/#legalservice`,
  name: seoConfig.brandName,
  image: `${seoConfig.baseUrl}/og-image.png`,
  priceRange: '$$',
  address: {
    '@type': 'PostalAddress',
    ...seoConfig.address,
  },
  geo: {
    '@type': 'GeoCoordinates',
    ...seoConfig.geo,
  },
  url: seoConfig.baseUrl,
  telephone: seoConfig.phone,
  email: seoConfig.email,
  openingHoursSpecification: seoConfig.openingHours.map((hours) => ({
    '@type': 'OpeningHoursSpecification',
    ...hours,
  })),
  areaServed: [
    {
      '@type': 'City',
      name: 'Culiacán',
      sameAs: 'https://en.wikipedia.org/wiki/Culiac%C3%A1n',
    },
    { '@type': 'State', name: 'Sinaloa' },
    { '@type': 'Country', name: 'Mexico' },
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
});

// Website Schema Generator
export const createWebsiteSchema = () => ({
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  '@id': `${seoConfig.baseUrl}/#website`,
  name: seoConfig.brandName,
  url: seoConfig.baseUrl,
  description: 'Despacho jurídico en Culiacán especializado en asesoría legal preventiva para empresas y particulares.',
  publisher: {
    '@id': `${seoConfig.baseUrl}/#organization`,
  },
  inLanguage: ['es-MX', 'en'],
  potentialAction: {
    '@type': 'SearchAction',
    target: `${seoConfig.baseUrl}/?s={search_term_string}`,
    'query-input': 'required name=search_term_string',
  },
});

// Breadcrumb Schema Generator
export const createBreadcrumbSchema = (items: { name: string; url: string }[]) => ({
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: items.map((item, index) => ({
    '@type': 'ListItem',
    position: index + 1,
    name: item.name,
    item: item.url,
  })),
});

// FAQ Schema Generator
export const createFaqSchema = (faqs: { question: string; answer: string }[]) => ({
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

// Service Schema Generator
export const createServiceSchema = (service: {
  name: string;
  description: string;
  slug: string;
}) => ({
  '@context': 'https://schema.org',
  '@type': 'Service',
  '@id': `${seoConfig.baseUrl}/areas-de-practica/${service.slug}`,
  name: service.name,
  description: service.description,
  provider: {
    '@id': `${seoConfig.baseUrl}/#organization`,
  },
  areaServed: {
    '@type': 'City',
    name: 'Culiacán',
  },
  serviceType: 'Legal Services',
});

// Person Schema Generator
export const createPersonSchema = (person: {
  name: string;
  role: string;
  slug: string;
  image?: string;
  description?: string;
}) => ({
  '@context': 'https://schema.org',
  '@type': 'Person',
  '@id': `${seoConfig.baseUrl}/equipo/${person.slug}`,
  name: person.name,
  jobTitle: person.role,
  image: person.image,
  description: person.description,
  worksFor: {
    '@id': `${seoConfig.baseUrl}/#organization`,
  },
  knowsAbout: ['Derecho Mexicano', 'Asesoría Legal', 'Contratos'],
});

// Pre-generated schemas for convenience
export const organizationSchema = createOrganizationSchema();
export const legalServiceSchema = createLegalServiceSchema();
export const websiteSchema = createWebsiteSchema();
