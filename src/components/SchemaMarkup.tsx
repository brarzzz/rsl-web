import { Helmet } from 'react-helmet-async';

interface SchemaMarkupProps {
  type: 'organization' | 'legalService' | 'webpage';
  pageTitle?: string;
  pageDescription?: string;
}

const SchemaMarkup = ({ type, pageTitle, pageDescription }: SchemaMarkupProps) => {
  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Rodriguez Soporte Legal',
    legalName: 'Rodriguez, Integración de Servicios Jurídicos S.A. de C.V.',
    url: 'https://soportelegal.com.mx',
    logo: 'https://soportelegal.com.mx/logo.png',
    foundingDate: '2003',
    description: 'Despacho jurídico en Culiacán especializado en derecho mercantil, corporativo, civil, inmobiliario y familiar.',
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
      availableLanguage: ['Spanish'],
      hoursAvailable: {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        opens: '09:00',
        closes: '19:00',
      },
    },
    sameAs: [
      'https://instagram.com/rodriguez.soportelegal',
    ],
  };

  const legalServiceSchema = {
    '@context': 'https://schema.org',
    '@type': 'LegalService',
    name: 'Rodriguez Soporte Legal',
    image: 'https://soportelegal.com.mx/logo.png',
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
    url: 'https://soportelegal.com.mx',
    telephone: '+52-667-752-2429',
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        opens: '09:00',
        closes: '19:00',
      },
    ],
    areaServed: {
      '@type': 'Country',
      name: 'Mexico',
    },
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Servicios Legales',
      itemListElement: [
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Consultoría Legal Preventiva',
            description: 'Diseños preventivos, auditoría de riesgos, políticas y contratos para empresas.',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Derecho Mercantil y Corporativo',
            description: 'Constitución de empresas, gobierno corporativo, fusiones y compliance.',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Derecho Civil e Inmobiliario',
            description: 'Contratos civiles, regularización de inmuebles, prescripción positiva.',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Derecho Familiar',
            description: 'Divorcios, custodia, pensión alimenticia, juicios sucesorios.',
          },
        },
      ],
    },
  };

  const webpageSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: pageTitle || 'Rodriguez Soporte Legal',
    description: pageDescription || 'Despacho jurídico en Culiacán especializado en derecho mercantil, corporativo, civil, inmobiliario y familiar.',
    url: typeof window !== 'undefined' ? window.location.href : '',
    isPartOf: {
      '@type': 'WebSite',
      name: 'Rodriguez Soporte Legal',
      url: 'https://soportelegal.com.mx',
    },
  };

  const getSchema = () => {
    switch (type) {
      case 'organization':
        return organizationSchema;
      case 'legalService':
        return legalServiceSchema;
      case 'webpage':
        return webpageSchema;
      default:
        return organizationSchema;
    }
  };

  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(getSchema())}
      </script>
    </Helmet>
  );
};

export default SchemaMarkup;
