export type Locale = 'es' | 'en';

export const translations = {
  es: {
    // Navigation
    nav: {
      services: 'Servicios',
      practiceAreas: 'Áreas de Práctica',
      about: 'Nosotros',
      team: 'Equipo',
      contact: 'Contacto',
      booking: 'Agendar Cita',
    },
    // Hero
    hero: {
      badge: '+22 años protegiendo negocios en Culiacán',
      title: 'Protegemos tu negocio.',
      titleAccent: 'Respaldamos tu crecimiento.',
      subtitle: 'Asesoría legal preventiva y estratégica para emprendedores y empresas. Ordenamos contratos, prevenimos riesgos y resolvemos conflictos con claridad.',
      ctaPrimary: 'Solicitar Cotización',
      ctaSecondary: 'Enviar WhatsApp',
      sla: 'Respuesta en menos de 24 horas • Lun–Vie 9:00–19:00',
    },
    // Metrics
    metrics: {
      lawyers: 'Abogados profesionales',
      years: 'Años de experiencia',
      successRate: 'Tasa de éxito',
      consultations: 'Consultas atendidas',
      clients: 'Clientes satisfechos',
      companies: 'Empresas activas',
    },
    // Services
    services: {
      badge: 'Nuestros Servicios',
      title: 'Soluciones legales para cada etapa',
      subtitle: 'Desde prevención hasta resolución de conflictos, te acompañamos con estrategias claras y resultados medibles.',
      featured: 'Destacado',
      moreInfo: 'Más información',
      cta: 'Consultar sobre mi caso',
      items: {
        prevention: {
          name: 'Prevención y Consultoría Legal',
          description: 'Diseños preventivos, auditoría básica de riesgos, políticas y contratos para emprendedores y PYMEs.',
        },
        commercial: {
          name: 'Mercantil y Corporativo',
          description: 'Constitución y gobierno corporativo, actas, socios, fusiones/escisiones básicas, compliance mercantil.',
        },
        civil: {
          name: 'Civil e Inmobiliario',
          description: 'Posesión, declarativas, regularización, contratos civiles, recuperación y defensa de inmueble.',
        },
        family: {
          name: 'Derecho Familiar',
          description: 'Divorcios, convenios, guardia y custodia, convenios patrimoniales, juicios sucesorios.',
        },
        contracts: {
          name: 'Contratos y Cumplimiento',
          description: 'Redacción, revisión y negociación B2B/B2C; cláusulas de riesgo y garantías.',
        },
      },
    },
    // About
    about: {
      badge: 'Sobre Nosotros',
      title: 'Prevenir vale más que litigar',
      history: 'Nacimos en Culiacán con una idea simple: prevenir vale más que litigar. Empezamos atendiendo a emprendedores y PYMEs que necesitaban ordenar contratos, cumplir normativas y cobrar a tiempo.',
      evolution: 'Adoptamos flujos para revisar documentos, estandarizar checklists y acelerar respuestas. Hoy combinamos consultoría preventiva con defensa estratégica cuando es necesario, manteniendo un lenguaje claro y entregables accionables.',
      mission: 'Nuestra misión: proteger y acelerar los negocios de nuestros clientes mediante asesoría legal preventiva, documentación impecable y estrategias que disminuyan riesgos, costos y tiempos.',
      values: {
        integrity: {
          label: 'Integridad',
          description: 'Actuamos con honestidad y transparencia.',
        },
        commitment: {
          label: 'Compromiso',
          description: 'Tu objetivo es nuestro objetivo.',
        },
        excellence: {
          label: 'Excelencia',
          description: 'Buscamos los mejores resultados.',
        },
        responsibility: {
          label: 'Responsabilidad',
          description: 'Cuidamos cada detalle de tu caso.',
        },
      },
    },
    // Team
    team: {
      badge: 'Nuestro Equipo',
      title: 'Profesionales comprometidos',
      subtitle: 'Un equipo multidisciplinario con experiencia en distintas áreas del derecho, unido por el compromiso de proteger tus intereses.',
      years: 'años',
      members: {
        jorge: {
          name: 'Jorge Luis Rodriguez',
          role: 'Founder, CEO y Socio Director',
          expertise: 'Corporativo',
          bio: 'Creo firmemente que lo legal debe ser una herramienta para avanzar, no un freno. Mi enfoque es práctico - entender cómo funciona tu negocio, detectar riesgos antes de que se conviertan en problemas.',
        },
        ramon: {
          name: 'Ramón Antonio Rodriguez',
          role: 'Abogado Senior',
          expertise: 'Civil',
          bio: 'En lo civil, los detalles importan. Mi manera de trabajar es revisar a fondo, ordenar documentos y construir una estrategia que se sostenga con hechos.',
        },
        gerardo: {
          name: 'Gerardo Alejandro López',
          role: 'Abogado Junior',
          expertise: 'Litigio',
          bio: 'Me apasiona el trabajo jurídico y legal bien hecho. Participo en el análisis y preparación de asuntos, cuidando la documentación y los tiempos.',
        },
        dana: {
          name: 'Dana Paola Salazar',
          role: 'Abogada Junior',
          expertise: 'Familiar',
          bio: 'Participo en la preparación y desarrollo de asuntos, cuidando documentación, plazos y comunicación, para que el cliente tenga claridad en cada etapa.',
        },
      },
    },
    // Contact
    contact: {
      badge: 'Contacto',
      title: '¿Listo para proteger tu negocio?',
      subtitle: 'Cuéntanos tu situación y te responderemos en menos de 24 horas con una propuesta clara y sin compromiso.',
      form: {
        name: 'Nombre completo',
        email: 'Correo electrónico',
        phone: 'Teléfono / WhatsApp',
        message: '¿Cómo podemos ayudarte?',
        namePlaceholder: 'Tu nombre',
        emailPlaceholder: 'tu@email.com',
        phonePlaceholder: '667 123 4567',
        messagePlaceholder: 'Cuéntanos brevemente tu situación...',
        submit: 'Solicitar Cotización',
        whatsapp: 'WhatsApp',
        sending: 'Enviando...',
        required: '*',
      },
      validation: {
        nameRequired: 'El nombre es requerido',
        emailInvalid: 'Email inválido',
        phoneRequired: 'El teléfono es requerido',
        messageRequired: 'El mensaje es requerido',
      },
      success: {
        title: '¡Mensaje enviado!',
        description: 'Nos pondremos en contacto contigo en menos de 24 horas.',
      },
      info: {
        phone: 'Teléfono',
        email: 'Email',
        address: 'Dirección',
        hours: 'Horario',
        addressValue: 'Calle Rio Culiacán 113 Pte, Col. Guadalupe, Culiacán, Sinaloa',
        hoursValue: 'Lun–Vie 9:00–19:00',
      },
      callPreference: {
        title: '¿Prefieres llamar?',
        description: 'Nuestro equipo está disponible de lunes a viernes de 9:00 a 19:00.',
      },
      disclaimer: 'Cada caso requiere análisis; agenda una consulta para evaluación.',
    },
    // Footer
    footer: {
      tagline: 'Protegemos tu negocio. Respaldamos tu crecimiento. Asesoría legal preventiva y estratégica desde 2003.',
      links: 'Enlaces',
      servicesTitle: 'Servicios',
      rights: 'Todos los derechos reservados.',
      privacy: 'Aviso de Privacidad',
      terms: 'Términos de Servicio',
    },
    // Booking
    booking: {
      title: 'Agenda tu cita',
      subtitle: 'Selecciona una fecha y hora disponible para tu consulta inicial.',
      selectDate: 'Selecciona una fecha',
      selectTime: 'Selecciona una hora',
      availableSlots: 'Horarios disponibles',
      noSlots: 'No hay horarios disponibles para esta fecha',
      confirm: 'Confirmar cita',
      step1: 'Selecciona fecha',
      step2: 'Elige horario',
      step3: 'Confirma datos',
      placeholder: '[PENDIENTE] Integrar sistema de citas. Por ahora, contáctanos por WhatsApp o teléfono para agendar.',
    },
    // Legal Pages
    legal: {
      privacy: {
        title: 'Aviso de Privacidad',
        lastUpdated: 'Última actualización',
        owner: 'Responsable',
        content: '[PENDIENTE] Contenido completo del Aviso de Privacidad conforme a la LFPDPPP.',
      },
      terms: {
        title: 'Términos y Condiciones',
        lastUpdated: 'Última actualización',
        content: '[PENDIENTE] Contenido completo de los Términos y Condiciones.',
      },
    },
    // Practice Areas Page
    practiceAreas: {
      title: 'Áreas de Práctica',
      subtitle: 'Conoce en detalle nuestras especialidades legales y cómo podemos ayudarte.',
      learnMore: 'Conocer más',
      backToAreas: 'Volver a Áreas',
      relatedServices: 'Servicios relacionados',
      consultation: 'Solicitar consulta',
    },
    // Common
    common: {
      whatsappMessage: 'Hola RSL, quisiera solicitar cotización',
      loading: 'Cargando...',
      error: 'Ha ocurrido un error',
      back: 'Volver',
      more: 'Ver más',
    },
  },
  en: {
    // Navigation
    nav: {
      services: 'Services',
      practiceAreas: 'Practice Areas',
      about: 'About Us',
      team: 'Team',
      contact: 'Contact',
      booking: 'Book Appointment',
    },
    // Hero
    hero: {
      badge: '+22 years protecting businesses in Culiacán',
      title: 'We protect your business.',
      titleAccent: 'We support your growth.',
      subtitle: 'Preventive and strategic legal advice for entrepreneurs and businesses. We organize contracts, prevent risks, and resolve conflicts with clarity.',
      ctaPrimary: 'Request Quote',
      ctaSecondary: 'Send WhatsApp',
      sla: 'Response within 24 hours • Mon–Fri 9:00–19:00',
    },
    // Metrics
    metrics: {
      lawyers: 'Professional lawyers',
      years: 'Years of experience',
      successRate: 'Success rate',
      consultations: 'Consultations served',
      clients: 'Satisfied clients',
      companies: 'Active companies',
    },
    // Services
    services: {
      badge: 'Our Services',
      title: 'Legal solutions for every stage',
      subtitle: 'From prevention to conflict resolution, we accompany you with clear strategies and measurable results.',
      featured: 'Featured',
      moreInfo: 'More information',
      cta: 'Consult about my case',
      items: {
        prevention: {
          name: 'Prevention & Legal Consulting',
          description: 'Preventive designs, basic risk auditing, policies and contracts for entrepreneurs and SMEs.',
        },
        commercial: {
          name: 'Commercial & Corporate',
          description: 'Incorporation and corporate governance, minutes, partners, basic mergers/spin-offs, commercial compliance.',
        },
        civil: {
          name: 'Civil & Real Estate',
          description: 'Possession, declaratory actions, regularization, civil contracts, property recovery and defense.',
        },
        family: {
          name: 'Family Law',
          description: 'Divorces, agreements, custody, property agreements, probate proceedings.',
        },
        contracts: {
          name: 'Contracts & Compliance',
          description: 'B2B/B2C drafting, review and negotiation; risk clauses and guarantees.',
        },
      },
    },
    // About
    about: {
      badge: 'About Us',
      title: 'Prevention is worth more than litigation',
      history: 'We were born in Culiacán with a simple idea: prevention is worth more than litigation. We started serving entrepreneurs and SMEs who needed to organize contracts, comply with regulations, and collect on time.',
      evolution: 'We adopted workflows to review documents, standardize checklists, and accelerate responses. Today we combine preventive consulting with strategic defense when necessary, maintaining clear language and actionable deliverables.',
      mission: 'Our mission: to protect and accelerate our clients\' businesses through preventive legal advice, impeccable documentation, and strategies that reduce risks, costs, and time.',
      values: {
        integrity: {
          label: 'Integrity',
          description: 'We act with honesty and transparency.',
        },
        commitment: {
          label: 'Commitment',
          description: 'Your goal is our goal.',
        },
        excellence: {
          label: 'Excellence',
          description: 'We seek the best results.',
        },
        responsibility: {
          label: 'Responsibility',
          description: 'We take care of every detail of your case.',
        },
      },
    },
    // Team
    team: {
      badge: 'Our Team',
      title: 'Committed professionals',
      subtitle: 'A multidisciplinary team with experience in different areas of law, united by the commitment to protect your interests.',
      years: 'years',
      members: {
        jorge: {
          name: 'Jorge Luis Rodriguez',
          role: 'Founder, CEO & Managing Partner',
          expertise: 'Corporate',
          bio: 'I firmly believe that legal should be a tool to move forward, not a brake. My approach is practical - understanding how your business works, detecting risks before they become problems.',
        },
        ramon: {
          name: 'Ramón Antonio Rodriguez',
          role: 'Senior Attorney',
          expertise: 'Civil',
          bio: 'In civil matters, details matter. My way of working is to review thoroughly, organize documents, and build a strategy that is supported by facts.',
        },
        gerardo: {
          name: 'Gerardo Alejandro López',
          role: 'Junior Attorney',
          expertise: 'Litigation',
          bio: 'I am passionate about well-done legal work. I participate in the analysis and preparation of matters, taking care of documentation and deadlines.',
        },
        dana: {
          name: 'Dana Paola Salazar',
          role: 'Junior Attorney',
          expertise: 'Family',
          bio: 'I participate in the preparation and development of matters, taking care of documentation, deadlines, and communication, so that the client has clarity at every stage.',
        },
      },
    },
    // Contact
    contact: {
      badge: 'Contact',
      title: 'Ready to protect your business?',
      subtitle: 'Tell us about your situation and we will respond within 24 hours with a clear, no-obligation proposal.',
      form: {
        name: 'Full name',
        email: 'Email',
        phone: 'Phone / WhatsApp',
        message: 'How can we help you?',
        namePlaceholder: 'Your name',
        emailPlaceholder: 'you@email.com',
        phonePlaceholder: '667 123 4567',
        messagePlaceholder: 'Briefly tell us about your situation...',
        submit: 'Request Quote',
        whatsapp: 'WhatsApp',
        sending: 'Sending...',
        required: '*',
      },
      validation: {
        nameRequired: 'Name is required',
        emailInvalid: 'Invalid email',
        phoneRequired: 'Phone is required',
        messageRequired: 'Message is required',
      },
      success: {
        title: 'Message sent!',
        description: 'We will contact you within 24 hours.',
      },
      info: {
        phone: 'Phone',
        email: 'Email',
        address: 'Address',
        hours: 'Hours',
        addressValue: 'Calle Rio Culiacán 113 Pte, Col. Guadalupe, Culiacán, Sinaloa',
        hoursValue: 'Mon–Fri 9:00–19:00',
      },
      callPreference: {
        title: 'Prefer to call?',
        description: 'Our team is available Monday through Friday from 9:00 to 19:00.',
      },
      disclaimer: 'Each case requires analysis; schedule a consultation for evaluation.',
    },
    // Footer
    footer: {
      tagline: 'We protect your business. We support your growth. Preventive and strategic legal advice since 2003.',
      links: 'Links',
      servicesTitle: 'Services',
      rights: 'All rights reserved.',
      privacy: 'Privacy Policy',
      terms: 'Terms of Service',
    },
    // Booking
    booking: {
      title: 'Book your appointment',
      subtitle: 'Select an available date and time for your initial consultation.',
      selectDate: 'Select a date',
      selectTime: 'Select a time',
      availableSlots: 'Available times',
      noSlots: 'No times available for this date',
      confirm: 'Confirm appointment',
      step1: 'Select date',
      step2: 'Choose time',
      step3: 'Confirm details',
      placeholder: '[PENDING] Integrate booking system. For now, contact us via WhatsApp or phone to schedule.',
    },
    // Legal Pages
    legal: {
      privacy: {
        title: 'Privacy Policy',
        lastUpdated: 'Last updated',
        owner: 'Data Controller',
        content: '[PENDING] Full content of Privacy Policy according to LFPDPPP.',
      },
      terms: {
        title: 'Terms and Conditions',
        lastUpdated: 'Last updated',
        content: '[PENDING] Full content of Terms and Conditions.',
      },
    },
    // Practice Areas Page
    practiceAreas: {
      title: 'Practice Areas',
      subtitle: 'Learn about our legal specialties in detail and how we can help you.',
      learnMore: 'Learn more',
      backToAreas: 'Back to Areas',
      relatedServices: 'Related services',
      consultation: 'Request consultation',
    },
    // Common
    common: {
      whatsappMessage: 'Hello RSL, I would like to request a quote',
      loading: 'Loading...',
      error: 'An error has occurred',
      back: 'Back',
      more: 'See more',
    },
  },
} as const;

export type TranslationKey = typeof translations.es | typeof translations.en;
