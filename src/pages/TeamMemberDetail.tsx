import { useParams, Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { ArrowLeft, Briefcase, GraduationCap, Globe, Award, MessageSquare, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { defaultTeamMembers } from "@/components/Team";
import { siteConfig } from "@/config/siteConfig";

const TeamMemberDetail = () => {
  const { memberSlug } = useParams();
  const member = defaultTeamMembers.find((m) => m.slug === memberSlug);

  if (!member) {
    return (
      <div className="min-h-screen bg-background">
        <Navbar />
        <main className="py-20">
          <div className="container mx-auto px-4 text-center">
            <h1 className="font-serif text-3xl font-bold text-foreground mb-4">
              Miembro no encontrado
            </h1>
            <Button asChild>
              <Link to="/#equipo">Volver al equipo</Link>
            </Button>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  const handleWhatsApp = () => {
    window.open(siteConfig.whatsappLinkWithName(`agendar una cita con ${member.name}`, undefined), "_blank");
  };

  const schemaData = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: member.name,
    jobTitle: member.role,
    worksFor: {
      "@type": "LegalService",
      name: "Rodriguez Soporte Legal",
    },
    knowsAbout: member.specialty,
    description: member.bio,
  };

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>{member.name} - {member.role} | Rodriguez Soporte Legal</title>
        <meta 
          name="description" 
          content={`${member.name}, ${member.role} en Rodriguez Soporte Legal. Especialista en ${member.specialty} con ${member.xpYears} años de experiencia.`} 
        />
        <script type="application/ld+json">{JSON.stringify(schemaData)}</script>
      </Helmet>

      <Navbar />

      <main className="py-12 lg:py-20">
        <div className="container mx-auto px-4">
          {/* Back button */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3 }}
            className="mb-8"
          >
            <Button asChild variant="ghost" size="sm">
              <Link to="/#equipo">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Volver al equipo
              </Link>
            </Button>
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-8 lg:gap-12">
            {/* Left - Photo & Quick Info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="lg:col-span-1"
            >
              <div className="sticky top-24 space-y-6">
                {/* Photo with aspect ratio container for CLS prevention */}
                <div className="relative aspect-[4/5] max-w-sm mx-auto">
                  <img
                    src={member.photoSrc}
                    alt={`Foto de ${member.name}, ${member.role} en Rodriguez Soporte Legal`}
                    className="w-full h-full object-cover object-top rounded-2xl shadow-lg"
                    loading="lazy"
                    decoding="async"
                    width="320"
                    height="400"
                  />
                </div>

                {/* Quick Contact CTA */}
                <div className="bg-card rounded-xl border border-border p-6 space-y-4">
                  <h3 className="font-serif text-lg font-bold text-foreground">
                    ¿Necesitas asesoría?
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    Agenda una consulta con {member.name.split(" ")[0]} para revisar tu caso.
                  </p>
                  <div className="space-y-3">
                    <Button onClick={handleWhatsApp} variant="whatsapp" className="w-full">
                      <MessageSquare className="mr-2 h-4 w-4" />
                      {siteConfig.ctas.secondary}
                    </Button>
                    <Button asChild variant="outline" className="w-full">
                      <Link to="/agendar-cita">
                        <Calendar className="mr-2 h-4 w-4" />
                        Agendar cita
                      </Link>
                    </Button>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Right - Full Profile */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="lg:col-span-2 space-y-8"
            >
              {/* Header */}
              <div>
                <h1 className="font-serif text-3xl lg:text-4xl font-bold text-foreground mb-2">
                  {member.name}
                </h1>
                <p className="text-xl text-accent font-medium mb-4">{member.role}</p>
                <div className="flex flex-wrap gap-2">
                  {member.specialty && (
                    <span className="inline-flex items-center px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium">
                      <Briefcase className="mr-1.5 h-3.5 w-3.5" />
                      {member.specialty}
                    </span>
                  )}
                  {member.xpYears && (
                    <span className="inline-flex items-center px-3 py-1 bg-accent/10 text-accent rounded-full text-sm font-medium">
                      +{member.xpYears} años de experiencia
                    </span>
                  )}
                </div>
              </div>

              {/* Bio */}
              <div className="bg-secondary rounded-xl p-6">
                <h2 className="font-serif text-xl font-bold text-foreground mb-4">Sobre mí</h2>
                <p className="text-muted-foreground leading-relaxed">{member.bio}</p>
              </div>

              {/* Details Grid */}
              <div className="grid sm:grid-cols-2 gap-4">
                {/* Experience */}
                {member.xpYears && (
                  <div className="bg-card rounded-xl border border-border p-5">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                        <Briefcase className="h-5 w-5 text-primary" />
                      </div>
                      <h3 className="font-semibold text-foreground">Experiencia</h3>
                    </div>
                    <p className="text-2xl font-bold text-foreground">+{member.xpYears} años</p>
                    <p className="text-sm text-muted-foreground">ejerciendo el derecho</p>
                  </div>
                )}

                {/* Education */}
                {member.education && (
                  <div className="bg-card rounded-xl border border-border p-5">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center">
                        <GraduationCap className="h-5 w-5 text-accent" />
                      </div>
                      <h3 className="font-semibold text-foreground">Educación</h3>
                    </div>
                    <p className="text-2xl font-bold text-foreground">{member.education}</p>
                    <p className="text-sm text-muted-foreground">en Derecho</p>
                  </div>
                )}

                {/* Languages */}
                {member.langs && member.langs.length > 0 && (
                  <div className="bg-card rounded-xl border border-border p-5">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-10 h-10 rounded-lg bg-green-500/10 flex items-center justify-center">
                        <Globe className="h-5 w-5 text-green-600" />
                      </div>
                      <h3 className="font-semibold text-foreground">Idiomas</h3>
                    </div>
                    <p className="text-lg font-bold text-foreground">{member.langs.join(", ")}</p>
                  </div>
                )}

                {/* Specialty */}
                {member.specialty && (
                  <div className="bg-card rounded-xl border border-border p-5">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-10 h-10 rounded-lg bg-purple-500/10 flex items-center justify-center">
                        <Award className="h-5 w-5 text-purple-600" />
                      </div>
                      <h3 className="font-semibold text-foreground">Especialidad</h3>
                    </div>
                    <p className="text-lg font-bold text-foreground">{member.specialty}</p>
                  </div>
                )}
              </div>

              {/* Pending Info */}
              <div className="bg-muted/50 rounded-xl p-6 border border-dashed border-border">
                <h3 className="font-serif text-lg font-bold text-foreground mb-3">Información adicional</h3>
                <div className="space-y-2 text-sm text-muted-foreground">
                  <p><strong>Membresías:</strong> <span className="italic">Próximamente</span></p>
                  <p><strong>Cédula profesional:</strong> <span className="italic">Próximamente</span></p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default TeamMemberDetail;
