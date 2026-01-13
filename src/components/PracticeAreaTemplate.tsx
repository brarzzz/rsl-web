import { useRef } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Search, FileCheck, Clock, CheckCircle, Phone, MessageSquare, ArrowRight, Star, LucideIcon } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { useTranslation } from '@/i18n/LanguageContext';
import { siteConfig } from '@/config/siteConfig';

export interface PracticeAreaTemplateProps {
  icon: LucideIcon;
  title: string;
  summary: string;
  steps: [string, string, string];
  problems: string[];
  faqs: { question: string; answer: string }[];
  star?: boolean;
  cta: {
    text: string;
    href: string;
  };
}

const PracticeAreaTemplate = ({
  icon: Icon,
  title,
  summary,
  steps,
  problems,
  faqs,
  star = false,
  cta,
}: PracticeAreaTemplateProps) => {
  const { t } = useTranslation();
  const stickyRef = useRef<HTMLDivElement>(null);

  // Cast practiceAreas to access new keys (type will be updated on next build)
  const pa = t.practiceAreas as Record<string, string>;

  const processSteps = [
    { icon: Search, title: pa.stepDiagnosis || 'Diagnóstico', desc: steps[0] },
    { icon: FileCheck, title: pa.stepDocumentation || 'Documentación', desc: steps[1] },
    { icon: Clock, title: pa.stepFollowUp || 'Seguimiento', desc: steps[2] },
  ];

  const handleWhatsApp = () => {
    window.open(siteConfig.whatsappLink(t.common.whatsappMessage), '_blank');
  };

  return (
    <>
      {/* Hero Section */}
      <section className="py-16 bg-primary">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl mx-auto text-center"
          >
            <div className="inline-flex items-center justify-center w-16 h-16 bg-accent/20 rounded-full mb-6">
              <Icon className="h-8 w-8 text-accent" aria-hidden="true" />
            </div>
            
            {star && (
              <span className="inline-flex items-center gap-1.5 px-3 py-1 mb-4 text-xs font-medium bg-accent/20 text-accent border border-accent/30 rounded-full">
                <Star className="h-3 w-3" aria-hidden="true" />
                {t.services?.featured || 'Servicio Estrella'}
              </span>
            )}

            <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-primary-foreground mb-4">
              {title}
            </h1>
            <p className="text-lg text-primary-foreground/80">{summary}</p>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Main Column */}
            <div className="lg:col-span-2 space-y-12">
              {/* How We Work */}
              <div>
              <h2 className="font-serif text-2xl font-bold text-foreground mb-6">
                {pa.howWeWork || '¿Cómo trabajamos?'}
              </h2>
                <div className="grid gap-6">
                  {processSteps.map((step, index) => {
                    const StepIcon = step.icon;
                    return (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                        className="flex gap-4 p-4 bg-muted/50 rounded-lg border border-border"
                      >
                        <div className="flex-shrink-0 w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                          <StepIcon className="h-5 w-5 text-primary" aria-hidden="true" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-foreground mb-1">
                            {index + 1}. {step.title}
                          </h3>
                          <p className="text-muted-foreground text-sm">{step.desc}</p>
                        </div>
                      </motion.div>
                    );
                  })}
                </div>
              </div>

              {/* Problems We Solve */}
              <div>
              <h2 className="font-serif text-2xl font-bold text-foreground mb-6">
                {pa.problemsWeSolve || 'Problemas que resolvemos'}
              </h2>
                <div className="grid sm:grid-cols-2 gap-3">
                  {problems.map((problem, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.05 }}
                      className="flex items-start gap-3 p-3 bg-background border border-border rounded-lg"
                    >
                      <CheckCircle className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" aria-hidden="true" />
                      <span className="text-sm text-foreground">{problem}</span>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* FAQs */}
              <div>
              <h2 className="font-serif text-2xl font-bold text-foreground mb-6">
                {pa.faq || 'Preguntas frecuentes'}
              </h2>
                <Accordion type="single" collapsible className="space-y-3">
                  {faqs.map((faq, index) => (
                    <AccordionItem
                      key={index}
                      value={`faq-${index}`}
                      className="border border-border rounded-lg px-4 bg-background"
                    >
                      <AccordionTrigger className="text-left font-medium text-foreground hover:no-underline py-4">
                        {faq.question}
                      </AccordionTrigger>
                      <AccordionContent className="text-muted-foreground pb-4">
                        {faq.answer}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>
            </div>

            {/* Sticky Sidebar */}
            <div className="lg:col-span-1">
              <div ref={stickyRef} className="lg:sticky lg:top-24 space-y-6">
                {/* CTA Card */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="bg-primary text-primary-foreground rounded-2xl p-6 shadow-xl"
                >
                  <h3 className="font-serif text-xl font-bold mb-2">
                    {pa.needAdvice || '¿Necesitas asesoría?'}
                  </h3>
                  <p className="text-primary-foreground/80 text-sm mb-6">
                    {pa.ctaDescription || 'Agenda una consulta para revisar tu caso específico.'}
                  </p>

                  <div className="space-y-3">
                    <Button variant="heroGold" size="lg" className="w-full" asChild>
                      <a href={cta.href}>
                        {cta.text}
                        <ArrowRight className="h-4 w-4" aria-hidden="true" />
                      </a>
                    </Button>

                    <Button
                      variant="heroOutline"
                      size="lg"
                      className="w-full"
                      onClick={handleWhatsApp}
                    >
                      <MessageSquare className="h-4 w-4" aria-hidden="true" />
                      {t.hero?.ctaSecondary || 'Enviar WhatsApp'}
                    </Button>
                  </div>

                  <div className="mt-6 pt-4 border-t border-primary-foreground/20">
                    <div className="flex items-center gap-2 text-sm text-primary-foreground/70">
                      <Phone className="h-4 w-4" aria-hidden="true" />
                      <a href={`tel:+52${siteConfig.phone}`} className="hover:text-primary-foreground transition-colors">
                        {siteConfig.phoneFormatted}
                      </a>
                    </div>
                  </div>
                </motion.div>

                {/* Back Link */}
                <Link
                  to="/areas-de-practica"
                  className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  <ArrowRight className="h-4 w-4 rotate-180" aria-hidden="true" />
                  {t.practiceAreas?.backToAreas || 'Volver a Áreas'}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default PracticeAreaTemplate;
