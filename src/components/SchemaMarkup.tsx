import { Helmet } from 'react-helmet-async';
import {
  organizationSchema,
  legalServiceSchema,
  websiteSchema,
  createBreadcrumbSchema,
  createFaqSchema,
  createServiceSchema,
  createPersonSchema,
} from '@/seo/schema';

export type SchemaType = 'Organization' | 'LegalService' | 'WebSite' | 'Breadcrumb' | 'FAQ' | 'Service' | 'Person';

export interface SchemaMarkupProps {
  type: SchemaType | SchemaType[];
  breadcrumbs?: { name: string; url: string }[];
  faqs?: { question: string; answer: string }[];
  service?: { name: string; description: string; slug: string };
  person?: { name: string; role: string; slug: string; image?: string; description?: string };
}

const SchemaMarkup = ({ type, breadcrumbs, faqs, service, person }: SchemaMarkupProps) => {
  const types = Array.isArray(type) ? type : [type];
  
  const schemas = types.map((schemaType) => {
    switch (schemaType) {
      case 'Organization':
        return organizationSchema;
      case 'LegalService':
        return legalServiceSchema;
      case 'WebSite':
        return websiteSchema;
      case 'Breadcrumb':
        return breadcrumbs ? createBreadcrumbSchema(breadcrumbs) : null;
      case 'FAQ':
        return faqs ? createFaqSchema(faqs) : null;
      case 'Service':
        return service ? createServiceSchema(service) : null;
      case 'Person':
        return person ? createPersonSchema(person) : null;
      default:
        return null;
    }
  }).filter(Boolean);

  if (schemas.length === 0) return null;

  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(schemas.length === 1 ? schemas[0] : schemas)}
      </script>
    </Helmet>
  );
};

export default SchemaMarkup;
