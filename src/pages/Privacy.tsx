import { motion } from 'framer-motion';
import { Shield } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import SchemaMarkup from '@/components/SchemaMarkup';
import { useTranslation } from '@/i18n/LanguageContext';

const Privacy = () => {
  const { t, locale } = useTranslation();
  const currentDate = new Date().toLocaleDateString(locale === 'es' ? 'es-MX' : 'en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  return (
    <div className="min-h-screen bg-background">
      <SchemaMarkup 
        type="webpage" 
        pageTitle={t.seo.privacy.title} 
        pageDescription={t.seo.privacy.description} 
      />
      <Navbar />
      
      <main className="pt-20">
        {/* Hero */}
        <section className="py-12 bg-primary">
          <div className="container mx-auto px-4 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex justify-center mb-4"
            >
              <div className="w-16 h-16 rounded-full bg-accent/20 flex items-center justify-center">
                <Shield className="h-8 w-8 text-accent" />
              </div>
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="font-serif text-3xl sm:text-4xl font-bold text-primary-foreground"
            >
              {t.legal.privacy.title}
            </motion.h1>
          </div>
        </section>

        {/* Content */}
        <section className="py-16">
          <div className="container mx-auto px-4 max-w-3xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-card border border-border rounded-xl p-8 md:p-12"
            >
              <div className="mb-8 pb-6 border-b border-border">
                <p className="text-sm text-muted-foreground">
                  <strong>{t.legal.privacy.lastUpdated}:</strong> {currentDate}
                </p>
                <p className="text-sm text-muted-foreground mt-1">
                  <strong>{t.legal.privacy.owner}:</strong> Rodriguez, Integración de Servicios Jurídicos S.A. de C.V.
                </p>
              </div>

              <div className="prose prose-slate max-w-none">
                <div className="p-4 bg-accent/10 rounded-lg text-center">
                  <p className="text-accent font-medium">{t.legal.privacy.content}</p>
                </div>

                {locale === 'es' ? (
                  <div className="mt-8 space-y-6 text-muted-foreground">
                    <section>
                      <h2 className="font-serif text-xl font-bold text-foreground mb-3">1. Identidad y Domicilio del Responsable</h2>
                      <p>
                        Rodriguez, Integración de Servicios Jurídicos S.A. de C.V. ("RSL"), con domicilio en Calle Rio Culiacán 113 Poniente, 
                        entre Domingo Rubí y Manuel Bonilla, Colonia Guadalupe, Culiacán, Sinaloa, México, es responsable del tratamiento 
                        de sus datos personales.
                      </p>
                    </section>

                    <section>
                      <h2 className="font-serif text-xl font-bold text-foreground mb-3">2. Datos Personales que Recabamos</h2>
                      <p>Para las finalidades señaladas en el presente aviso de privacidad, podemos recabar:</p>
                      <ul className="list-disc pl-6 mt-2 space-y-1">
                        <li>Datos de identificación: nombre, teléfono, correo electrónico</li>
                        <li>Datos de contacto: dirección, código postal</li>
                        <li>Información relacionada con su consulta legal</li>
                      </ul>
                    </section>

                    <section>
                      <h2 className="font-serif text-xl font-bold text-foreground mb-3">3. Finalidades del Tratamiento</h2>
                      <p>Sus datos personales serán utilizados para:</p>
                      <ul className="list-disc pl-6 mt-2 space-y-1">
                        <li>Proporcionar los servicios legales solicitados</li>
                        <li>Contactarlo para dar seguimiento a su consulta</li>
                        <li>Enviar información relevante sobre nuestros servicios</li>
                        <li>Cumplir con obligaciones legales aplicables</li>
                      </ul>
                    </section>

                    <section>
                      <h2 className="font-serif text-xl font-bold text-foreground mb-3">4. Derechos ARCO</h2>
                      <p>
                        Usted tiene derecho a Acceder, Rectificar, Cancelar u Oponerse al tratamiento de sus datos personales. 
                        Para ejercer estos derechos, envíe un correo a: jorgeluis@soportelegal.com.mx
                      </p>
                    </section>

                    <section>
                      <h2 className="font-serif text-xl font-bold text-foreground mb-3">5. Contacto</h2>
                      <p>
                        Para cualquier duda sobre este Aviso de Privacidad, puede contactarnos en:<br />
                        Email: jorgeluis@soportelegal.com.mx<br />
                        Teléfono: 667 752 2429
                      </p>
                    </section>
                  </div>
                ) : (
                  <div className="mt-8 space-y-6 text-muted-foreground">
                    <section>
                      <h2 className="font-serif text-xl font-bold text-foreground mb-3">1. Identity and Address of the Controller</h2>
                      <p>
                        Rodriguez, Integración de Servicios Jurídicos S.A. de C.V. ("RSL"), located at Calle Rio Culiacán 113 Poniente, 
                        between Domingo Rubí and Manuel Bonilla, Colonia Guadalupe, Culiacán, Sinaloa, Mexico, is responsible for the 
                        processing of your personal data.
                      </p>
                    </section>

                    <section>
                      <h2 className="font-serif text-xl font-bold text-foreground mb-3">2. Personal Data We Collect</h2>
                      <p>For the purposes stated in this privacy notice, we may collect:</p>
                      <ul className="list-disc pl-6 mt-2 space-y-1">
                        <li>Identification data: name, phone, email</li>
                        <li>Contact data: address, postal code</li>
                        <li>Information related to your legal inquiry</li>
                      </ul>
                    </section>

                    <section>
                      <h2 className="font-serif text-xl font-bold text-foreground mb-3">3. Purposes of Processing</h2>
                      <p>Your personal data will be used to:</p>
                      <ul className="list-disc pl-6 mt-2 space-y-1">
                        <li>Provide the requested legal services</li>
                        <li>Contact you to follow up on your inquiry</li>
                        <li>Send relevant information about our services</li>
                        <li>Comply with applicable legal obligations</li>
                      </ul>
                    </section>

                    <section>
                      <h2 className="font-serif text-xl font-bold text-foreground mb-3">4. Your Rights</h2>
                      <p>
                        You have the right to Access, Rectify, Cancel, or Object to the processing of your personal data. 
                        To exercise these rights, send an email to: jorgeluis@soportelegal.com.mx
                      </p>
                    </section>

                    <section>
                      <h2 className="font-serif text-xl font-bold text-foreground mb-3">5. Contact</h2>
                      <p>
                        For any questions about this Privacy Policy, you can contact us at:<br />
                        Email: jorgeluis@soportelegal.com.mx<br />
                        Phone: 667 752 2429
                      </p>
                    </section>
                  </div>
                )}
              </div>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Privacy;
