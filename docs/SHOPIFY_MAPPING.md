# Shopify Theme Mapping

Este documento describe cómo cada prop de los componentes React se mapea a settings y blocks de Shopify Theme 2.0.

---

## Tipos de Setting de Shopify

| Tipo | Descripción | Uso típico |
|------|-------------|------------|
| `text` | Campo de texto corto (max ~50 chars) | Títulos, badges, labels |
| `textarea` | Campo de texto multilínea | Descripciones, párrafos |
| `richtext` | Editor de texto enriquecido | Contenido con formato |
| `image_picker` | Selector de imagen | Fotos, backgrounds |
| `url` | Campo de URL | Enlaces, CTAs |
| `checkbox` | Booleano | Mostrar/ocultar elementos |
| `radio` | Selección única | Variantes de estilo |
| `select` | Dropdown | Opciones predefinidas |
| `range` | Slider numérico | Columnas, tamaños |
| `color` | Selector de color | Personalización visual |

---

## 1. Hero Section

### Settings (Configuración de sección)

| Prop React | Shopify Setting | Type | Default |
|------------|-----------------|------|---------|
| `kicker` | `kicker` | `text` | "+22 años protegiendo negocios" |
| `title` | `title` | `text` | "Protegemos tu negocio." |
| `titleAccent` | `title_accent` | `text` | "Respaldamos tu crecimiento." |
| `subtitle` | `subtitle` | `textarea` | "Contratos claros..." |
| `backgroundImage` | `background_image` | `image_picker` | hero-bg.jpg |
| `ctaPrimaryText` | `cta_primary_text` | `text` | "Solicitar Cotización" |
| `ctaPrimaryHref` | `cta_primary_url` | `url` | "#contacto" |
| `ctaSecondaryText` | `cta_secondary_text` | `text` | "Enviar WhatsApp" |
| `ctaSecondaryHref` | `cta_secondary_url` | `url` | (WhatsApp link) |
| `slaText` | `sla_text` | `text` | "Respuesta en menos de 24 horas" |

### Blocks (Bullets/USPs)

| Block Type | Setting | Type |
|------------|---------|------|
| `bullet` | `text` | `text` |

**Preset:**
```json
{
  "name": "Hero",
  "settings": {
    "kicker": "+22 años protegiendo negocios en Culiacán",
    "title": "Protegemos tu negocio.",
    "title_accent": "Respaldamos tu crecimiento.",
    "subtitle": "Contratos claros, cumplimiento al día y respaldo ante conflictos.",
    "cta_primary_text": "Solicitar Cotización",
    "cta_primary_url": "#contacto",
    "cta_secondary_text": "Enviar WhatsApp",
    "sla_text": "Respuesta en menos de 24 horas"
  },
  "blocks": [
    { "type": "bullet", "settings": { "text": "Prevención para PYMEs" } },
    { "type": "bullet", "settings": { "text": "Gobierno corporativo y contratos" } },
    { "type": "bullet", "settings": { "text": "Atención cercana" } }
  ]
}
```

---

## 2. Services Section

### Settings

| Prop React | Shopify Setting | Type | Default |
|------------|-----------------|------|---------|
| `badge` | `badge` | `text` | "Áreas de práctica" |
| `title` | `title` | `text` | "¿Cómo te podemos ayudar?" |
| `subtitle` | `subtitle` | `textarea` | "" |
| `ctaText` | `cta_text` | `text` | "Ver todas las áreas" |
| `ctaHref` | `cta_url` | `url` | "/areas-de-practica" |
| `featuredLabel` | `featured_label` | `text` | "Servicio estrella" |
| `viewMoreLabel` | `view_more_label` | `text` | "Ver área" |

### Blocks (Service Items)

| Block Type | Setting | Type |
|------------|---------|------|
| `service` | `icon` | `select` (shield, building, home, users, file) |
| | `title` | `text` |
| | `description` | `textarea` |
| | `is_featured` | `checkbox` |
| | `link_url` | `url` |

**Preset:**
```json
{
  "name": "Services",
  "settings": {
    "badge": "Áreas de práctica",
    "title": "¿Cómo te podemos ayudar?",
    "cta_text": "Ver todas las áreas",
    "cta_url": "/areas-de-practica",
    "featured_label": "Servicio estrella"
  },
  "blocks": [
    {
      "type": "service",
      "settings": {
        "icon": "shield",
        "title": "Prevención legal",
        "description": "Anticipa riesgos y protege tu negocio antes de que surjan problemas.",
        "is_featured": true,
        "link_url": "/areas-de-practica/prevencion"
      }
    },
    {
      "type": "service",
      "settings": {
        "icon": "building",
        "title": "Mercantil y corporativo",
        "description": "Constitución de empresas, actas, contratos comerciales y gobierno corporativo.",
        "is_featured": true,
        "link_url": "/areas-de-practica/mercantil"
      }
    }
  ]
}
```

---

## 3. Benefits Section

### Settings

| Prop React | Shopify Setting | Type | Default |
|------------|-----------------|------|---------|
| `badge` | `badge` | `text` | "¿Por qué Rodriguez, Soporte Legal?" |
| `title` | `title` | `text` | "¿Por qué elegirnos?" |
| `subtitle` | `subtitle` | `textarea` | "Combinamos experiencia..." |

### Blocks (Benefit Items)

| Block Type | Setting | Type |
|------------|---------|------|
| `benefit` | `icon` | `select` (shield, message, clock, file-check) |
| | `title` | `text` |
| | `description` | `textarea` |

**Preset:**
```json
{
  "name": "Benefits",
  "settings": {
    "badge": "¿Por qué Rodriguez, Soporte Legal?",
    "title": "¿Por qué elegirnos?",
    "subtitle": "Combinamos experiencia legal con procesos modernos para proteger tu negocio."
  },
  "blocks": [
    {
      "type": "benefit",
      "settings": {
        "icon": "shield",
        "title": "Enfoque preventivo",
        "description": "Anticipamos riesgos legales antes de que se conviertan en problemas costosos."
      }
    },
    {
      "type": "benefit",
      "settings": {
        "icon": "message",
        "title": "Comunicación clara",
        "description": "Sin tecnicismos innecesarios. Entenderás cada paso del proceso."
      }
    },
    {
      "type": "benefit",
      "settings": {
        "icon": "clock",
        "title": "Tiempos de respuesta",
        "description": "Respuesta garantizada en 24 horas. Tu tiempo es valioso."
      }
    },
    {
      "type": "benefit",
      "settings": {
        "icon": "file-check",
        "title": "Documentación impecable",
        "description": "Contratos y documentos precisos que protegen tus intereses."
      }
    }
  ]
}
```

---

## 4. LogoWall Section

### Settings

| Prop React | Shopify Setting | Type | Default |
|------------|-----------------|------|---------|
| `title` | `title` | `text` | "Confían en nosotros" |
| `cols` | `columns` | `range` (2-6) | 6 |
| `comingSoonText` | `coming_soon_text` | `text` | "Logos de clientes próximamente" |

### Blocks (Logo Items)

| Block Type | Setting | Type |
|------------|---------|------|
| `logo` | `image` | `image_picker` |
| | `alt_text` | `text` |
| | `link_url` | `url` (opcional) |

**Preset:**
```json
{
  "name": "Logo Wall",
  "settings": {
    "title": "Confían en nosotros",
    "columns": 6,
    "coming_soon_text": "Logos de clientes próximamente"
  },
  "blocks": []
}
```

---

## 5. Testimonials Section

### Settings

| Prop React | Shopify Setting | Type | Default |
|------------|-----------------|------|---------|
| `badge` | `badge` | `text` | "Testimonios" |
| `title` | `title` | `text` | "Lo que dicen nuestros clientes" |
| `subtitle` | `subtitle` | `textarea` | "" |

### Blocks (Testimonial Items)

| Block Type | Setting | Type |
|------------|---------|------|
| `testimonial` | `name` | `text` |
| | `role` | `text` |
| | `company` | `text` |
| | `service` | `text` |
| | `quote` | `textarea` |
| | `rating` | `range` (1-5) |
| | `photo` | `image_picker` |

**Preset:**
```json
{
  "name": "Testimonials",
  "settings": {
    "badge": "Testimonios",
    "title": "Lo que dicen nuestros clientes"
  },
  "blocks": [
    {
      "type": "testimonial",
      "settings": {
        "name": "[PENDIENTE]",
        "role": "Director General",
        "company": "Empresa PYME",
        "service": "Mercantil y corporativo",
        "quote": "Nos ayudaron a constituir nuestra empresa de forma rápida y profesional.",
        "rating": 5
      }
    }
  ]
}
```

---

## 6. Team Section

### Settings

| Prop React | Shopify Setting | Type | Default |
|------------|-----------------|------|---------|
| `badge` | `badge` | `text` | "Nuestro equipo" |
| `title` | `title` | `text` | "Profesionales a tu servicio" |
| `subtitle` | `subtitle` | `textarea` | "" |
| `viewProfileLabel` | `view_profile_label` | `text` | "Ver perfil" |
| `yearsLabel` | `years_label` | `text` | "años" |

### Blocks (Team Members)

| Block Type | Setting | Type |
|------------|---------|------|
| `member` | `name` | `text` |
| | `role` | `text` |
| | `photo` | `image_picker` |
| | `specialty` | `text` |
| | `years_experience` | `range` (1-50) |
| | `short_bio` | `textarea` |
| | `profile_url` | `url` |

**Preset:**
```json
{
  "name": "Team",
  "settings": {
    "badge": "Nuestro equipo",
    "title": "Profesionales a tu servicio",
    "view_profile_label": "Ver perfil",
    "years_label": "años"
  },
  "blocks": [
    {
      "type": "member",
      "settings": {
        "name": "Jorge Luis Rodriguez",
        "role": "Founder, CEO y Socio Director",
        "specialty": "Corporativo",
        "years_experience": 28,
        "short_bio": "Mi enfoque es práctico - entender cómo funciona tu negocio.",
        "profile_url": "/equipo/jorge-luis-rodriguez"
      }
    }
  ]
}
```

---

## 7. Contact Section

### Settings

| Prop React | Shopify Setting | Type | Default |
|------------|-----------------|------|---------|
| `badge` | `badge` | `text` | "Contacto" |
| `title` | `title` | `text` | "¿Listo para empezar?" |
| `subtitle` | `subtitle` | `textarea` | "Envíanos un mensaje..." |
| `successTitle` | `success_title` | `text` | "¡Mensaje enviado!" |
| `successMsg` | `success_message` | `textarea` | "Nos pondremos en contacto..." |
| `submitLabel` | `submit_label` | `text` | "Enviar mensaje" |
| `whatsappLabel` | `whatsapp_label` | `text` | "Enviar WhatsApp" |
| `disclaimerText` | `disclaimer` | `textarea` | "Respuesta en 24 horas..." |
| `privacyUrl` | `privacy_url` | `url` | "/aviso-de-privacidad" |
| `termsUrl` | `terms_url` | `url` | "/terminos" |

### Blocks (Subject Options)

| Block Type | Setting | Type |
|------------|---------|------|
| `subject_option` | `label` | `text` |

**Preset:**
```json
{
  "name": "Contact",
  "settings": {
    "badge": "Contacto",
    "title": "¿Listo para empezar?",
    "subtitle": "Envíanos un mensaje y te responderemos en menos de 24 horas.",
    "success_title": "¡Mensaje enviado!",
    "success_message": "Nos pondremos en contacto contigo en menos de 24 horas.",
    "submit_label": "Enviar mensaje",
    "whatsapp_label": "Enviar WhatsApp",
    "privacy_url": "/aviso-de-privacidad",
    "terms_url": "/terminos"
  },
  "blocks": [
    { "type": "subject_option", "settings": { "label": "Consulta general" } },
    { "type": "subject_option", "settings": { "label": "Mercantil y corporativo" } },
    { "type": "subject_option", "settings": { "label": "Civil e inmobiliario" } },
    { "type": "subject_option", "settings": { "label": "Familiar" } },
    { "type": "subject_option", "settings": { "label": "Contratos" } }
  ]
}
```

---

## 8. StickyMobileCTA

### Settings (App Block o Section Settings)

| Prop React | Shopify Setting | Type | Default |
|------------|-----------------|------|---------|
| `show` | `enable` | `checkbox` | true |
| `text` | `button_text` | `text` | "Enviar WhatsApp" |
| `href` | `whatsapp_url` | `url` | wa.me link |
| `ariaLabel` | `aria_label` | `text` | "Enviar mensaje por WhatsApp" |

**Preset:**
```json
{
  "name": "Sticky Mobile CTA",
  "settings": {
    "enable": true,
    "button_text": "Enviar WhatsApp",
    "whatsapp_url": "https://wa.me/526671636472?text=Hola%20RSL",
    "aria_label": "Enviar mensaje por WhatsApp - abre en nueva ventana"
  }
}
```

---

## Notas de Implementación

### Consideraciones Generales

1. **Internacionalización**: Shopify maneja i18n a través de locales de tema (`locales/es.json`, `locales/en.json`). Los defaults se definen en el locale principal.

2. **Iconos**: Usar un `select` con opciones predefinidas que mapeen a SVGs o Lucide icons incluidos en el tema.

3. **Imágenes**: `image_picker` devuelve un objeto con `src`, `width`, `height` y `alt`. Usar `image_tag` o `img_url` filters.

4. **URLs**: Validar que los enlaces internos usen `url` filter de Shopify para rutas correctas.

5. **Blocks máximos**: Definir `max_blocks` por sección según necesidades (ej: 6 para logos, 10 para testimonios).

### Ejemplo de Schema Shopify

```liquid
{% schema %}
{
  "name": "Hero",
  "tag": "section",
  "class": "hero-section",
  "settings": [
    {
      "type": "text",
      "id": "kicker",
      "label": "Badge/Kicker",
      "default": "+22 años protegiendo negocios"
    },
    {
      "type": "text",
      "id": "title",
      "label": "Título principal",
      "default": "Protegemos tu negocio."
    },
    {
      "type": "image_picker",
      "id": "background_image",
      "label": "Imagen de fondo"
    }
  ],
  "blocks": [
    {
      "type": "bullet",
      "name": "Bullet point",
      "settings": [
        {
          "type": "text",
          "id": "text",
          "label": "Texto",
          "default": "Beneficio clave"
        }
      ]
    }
  ],
  "presets": [
    {
      "name": "Hero",
      "blocks": [
        { "type": "bullet" },
        { "type": "bullet" },
        { "type": "bullet" }
      ]
    }
  ]
}
{% endschema %}
```

---

## Checklist de Migración

- [ ] Hero → `sections/hero.liquid`
- [ ] Services → `sections/services.liquid`
- [ ] Benefits → `sections/benefits.liquid`
- [ ] LogoWall → `sections/logo-wall.liquid`
- [ ] Testimonials → `sections/testimonials.liquid`
- [ ] Team → `sections/team.liquid`
- [ ] Contact → `sections/contact.liquid`
- [ ] StickyMobileCTA → `snippets/sticky-mobile-cta.liquid` + app block
- [ ] Crear `locales/es.default.json` con traducciones
- [ ] Crear `locales/en.json` con traducciones EN
