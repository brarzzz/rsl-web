export const siteConfig = {
  phone: '6677522429',
  phoneFormatted: '(667) 752-2429',
  whatsappE164: '526671636472',
  email: 'jorgeluis@soportelegal.com.mx',
  address: 'Calle Rio Culiacán 113 Poniente, entre Domingo Rubí y Manuel Bonilla, Colonia Guadalupe.',
  addressShort: 'Calle Rio Culiacán 113 Pte, Col. Guadalupe',
  cityState: 'Culiacán, Sinaloa',
  hours: 'Lun–Vie 9:00am a 2:00pm / 4:00pm a 7:00pm, Sáb 9:00am a 1:00pm',
  hoursShort: 'Lun–Vie 9:00–14:00 / 16:00–19:00\nSáb 10:00–13:00',
  sla: 'Respuesta en 24 h',
  ctas: { 
    primary: 'Solicitar cotización', 
    secondary: 'Enviar WhatsApp' 
  },
  social: { 
    instagram: 'https://instagram.com/rodriguez.soportelegal', 
    linkedin: 'https://www.linkedin.com/in/rodriguez-soporte-legal-4a16493a5/' 
  },
  whatsappLink(text = 'Solicitar cotización') {
    const msg = encodeURIComponent(`Hola RSL, quisiera ${text}`);
    return `https://wa.me/${this.whatsappE164}?text=${msg}`;
  },
  whatsappLinkWithName(text: string, name?: string) {
    const baseMessage = `Hola, Licenciado, quisiera ${text}`;
    const message = name 
      ? `${baseMessage}. Mi nombre es ${name}.`
      : baseMessage;
    return `https://wa.me/${this.whatsappE164}?text=${encodeURIComponent(message)}`;
  }
};
