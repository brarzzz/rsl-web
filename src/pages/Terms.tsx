import { motion } from 'framer-motion';
import { FileText } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import SEOHead from '@/components/SEOHead';
import { useTranslation } from '@/i18n/LanguageContext';

const Terms = () => {
  const { t, locale } = useTranslation();
  const currentDate = new Date().toLocaleDateString(locale === 'es' ? 'es-MX' : 'en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  return (
    <div className="min-h-screen bg-background">
      <SEOHead 
        title={t.seo.terms.title} 
        description={t.seo.terms.description}
        canonical="https://soportelegal.com.mx/terminos"
        noindex
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
                <FileText className="h-8 w-8 text-accent" />
              </div>
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="font-serif text-3xl sm:text-4xl font-bold text-primary-foreground"
            >
              {t.legal.terms.title}
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
                  <strong>{t.legal.terms.lastUpdated}:</strong> {currentDate}
                </p>
              </div>

              <div className="prose prose-slate max-w-none">
                <div className="p-4 bg-accent/10 rounded-lg text-center">
                  <p className="text-accent font-medium">{t.legal.terms.content}</p>
                </div>

                {locale === 'es' ? (
                  <div className="mt-8 space-y-6 text-muted-foreground">
                    <section>
                      <h2 className="font-serif text-xl font-bold text-foreground mb-3">1. Aceptación de los Términos</h2>
                      <p>
                        Al utilizar este sitio web y/o contratar los servicios de Rodriguez, Integración de Servicios Jurídicos S.A. de C.V. 
                        ("RSL"), usted acepta estos términos y condiciones en su totalidad. Si no está de acuerdo con alguna parte, 
                        no utilice nuestros servicios.
                      </p>
                    </section>

                    <section>
                      <h2 className="font-serif text-xl font-bold text-foreground mb-3">2. Servicios Legales</h2>
                      <p>
                        RSL ofrece servicios de asesoría y representación legal en diversas áreas del derecho. 
                        Los servicios específicos, honorarios y términos se establecerán en un contrato de prestación 
                        de servicios profesionales independiente.
                      </p>
                    </section>

                    <section>
                      <h2 className="font-serif text-xl font-bold text-foreground mb-3">3. Confidencialidad</h2>
                      <p>
                        Toda la información compartida entre el cliente y RSL se mantendrá en estricta confidencialidad, 
                        de acuerdo con las obligaciones éticas y legales de la profesión jurídica en México.
                      </p>
                    </section>

                    <section>
                      <h2 className="font-serif text-xl font-bold text-foreground mb-3">4. Responsabilidad</h2>
                      <p>
                        RSL se compromete a proporcionar servicios legales con profesionalismo y diligencia. 
                        Sin embargo, no podemos garantizar resultados específicos, ya que estos dependen de 
                        factores fuera de nuestro control.
                      </p>
                    </section>

                    <section>
                      <h2 className="font-serif text-xl font-bold text-foreground mb-3">5. Uso del Sitio Web</h2>
                      <p>
                        La información contenida en este sitio web es de carácter general y no constituye asesoría legal. 
                        Para obtener asesoría específica sobre su situación, contáctenos directamente.
                      </p>
                    </section>

                    <section>
                      <h2 className="font-serif text-xl font-bold text-foreground mb-3">6. Legislación Aplicable</h2>
                      <p>
                        Estos términos se rigen por las leyes de los Estados Unidos Mexicanos. 
                        Cualquier controversia será sometida a los tribunales competentes de Culiacán, Sinaloa.
                      </p>
                    </section>

                    <section>
                      <h2 className="font-serif text-xl font-bold text-foreground mb-3">7. Contacto</h2>
                      <p>
                        Para cualquier pregunta sobre estos términos:<br />
                        Email: jorgeluis@soportelegal.com.mx<br />
                        Teléfono: 667 752 2429
                      </p>
                    </section>
                  </div>
                ) : (
                  <div className="mt-8 space-y-6 text-muted-foreground">
                    <section>
                      <h2 className="font-serif text-xl font-bold text-foreground mb-3">1. Acceptance of Terms</h2>
                      <p>
                        By using this website and/or contracting the services of Rodriguez, Integración de Servicios Jurídicos S.A. de C.V. 
                        ("RSL"), you agree to these terms and conditions in their entirety. If you disagree with any part, 
                        please do not use our services.
                      </p>
                    </section>

                    <section>
                      <h2 className="font-serif text-xl font-bold text-foreground mb-3">2. Legal Services</h2>
                      <p>
                        RSL offers legal advisory and representation services in various areas of law. 
                        Specific services, fees, and terms will be established in an independent professional 
                        services agreement.
                      </p>
                    </section>

                    <section>
                      <h2 className="font-serif text-xl font-bold text-foreground mb-3">3. Confidentiality</h2>
                      <p>
                        All information shared between the client and RSL will be kept in strict confidentiality, 
                        in accordance with the ethical and legal obligations of the legal profession in Mexico.
                      </p>
                    </section>

                    <section>
                      <h2 className="font-serif text-xl font-bold text-foreground mb-3">4. Liability</h2>
                      <p>
                        RSL is committed to providing legal services with professionalism and diligence. 
                        However, we cannot guarantee specific results, as these depend on factors beyond our control.
                      </p>
                    </section>

                    <section>
                      <h2 className="font-serif text-xl font-bold text-foreground mb-3">5. Website Use</h2>
                      <p>
                        The information contained on this website is general in nature and does not constitute legal advice. 
                        To obtain specific advice about your situation, please contact us directly.
                      </p>
                    </section>

                    <section>
                      <h2 className="font-serif text-xl font-bold text-foreground mb-3">6. Governing Law</h2>
                      <p>
                        These terms are governed by the laws of the United Mexican States. 
                        Any disputes will be submitted to the competent courts of Culiacán, Sinaloa.
                      </p>
                    </section>

                    <section>
                      <h2 className="font-serif text-xl font-bold text-foreground mb-3">7. Contact</h2>
                      <p>
                        For any questions about these terms:<br />
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

export default Terms;
