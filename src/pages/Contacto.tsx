import { Layout } from "@/components/layout/Layout";
import { Section } from "@/components/Section";
import { ContactForm } from "@/components/ContactForm";
import { AnimatedSection } from "@/components/AnimatedSection";
import { Phone, Mail, MapPin, Clock, Instagram, Facebook, Youtube, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import spaReceptionImage from "@/assets/spa-reception.jpg";

const Contacto = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="bg-gradient-hero py-16 md:py-24 relative overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src={spaReceptionImage} 
            alt="Recepción del spa" 
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/80 to-background" />
        </div>
        <div className="content-container text-center relative z-10">
          <AnimatedSection animation="fade-up">
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-medium text-foreground mb-6">
              Contacto
            </h1>
            <p className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto">
              Estamos aquí para ayudarte. Contáctanos para reservar tu cita 
              o resolver cualquier duda.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Contact Info */}
      <Section>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="space-y-8">
            <AnimatedSection animation="fade-right">
              <h2 className="font-serif text-2xl md:text-3xl font-medium text-foreground mb-6">
                Información de Contacto
              </h2>
              
              <div className="space-y-4">
                <a 
                  href="tel:677242258"
                  className="flex items-center gap-4 p-4 bg-card rounded-xl border border-border/50 hover:border-primary/50 transition-smooth group"
                >
                  <div className="p-3 rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-smooth">
                    <Phone className="h-6 w-6" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Teléfono</p>
                    <p className="text-foreground font-medium">677 242 258</p>
                  </div>
                </a>

                <a 
                  href="mailto:merzenkiu@gmail.com"
                  className="flex items-center gap-4 p-4 bg-card rounded-xl border border-border/50 hover:border-primary/50 transition-smooth group"
                >
                  <div className="p-3 rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-smooth">
                    <Mail className="h-6 w-6" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Email</p>
                    <p className="text-foreground font-medium">merzenkiu@gmail.com</p>
                  </div>
                </a>

                <div className="flex items-center gap-4 p-4 bg-card rounded-xl border border-border/50">
                  <div className="p-3 rounded-lg bg-primary/10 text-primary">
                    <MapPin className="h-6 w-6" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Ubicación</p>
                    <p className="text-foreground font-medium">Terrassa - Barcelona</p>
                  </div>
                </div>

                <div className="flex items-center gap-4 p-4 bg-card rounded-xl border border-border/50">
                  <div className="p-3 rounded-lg bg-primary/10 text-primary">
                    <Clock className="h-6 w-6" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Horario</p>
                    <p className="text-foreground font-medium">Lunes - Viernes: 10:00 - 20:00</p>
                    <p className="text-foreground font-medium">Sábados: 10:00 - 14:00</p>
                  </div>
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection animation="fade-right" delay={100}>
              <div>
                <h3 className="font-serif text-xl font-medium text-foreground mb-4">
                  Síguenos en Redes
                </h3>
                <div className="flex items-center gap-3">
                  <a
                    href="https://www.instagram.com/merzenkiu/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-xl bg-card border border-border/50 hover:bg-primary hover:text-primary-foreground hover:border-primary transition-smooth"
                    aria-label="Instagram"
                  >
                    <Instagram className="h-6 w-6" />
                  </a>
                  <a
                    href="https://www.facebook.com/merzenkiu"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-xl bg-card border border-border/50 hover:bg-primary hover:text-primary-foreground hover:border-primary transition-smooth"
                    aria-label="Facebook"
                  >
                    <Facebook className="h-6 w-6" />
                  </a>
                  <a
                    href="https://www.youtube.com/@merzenkiu"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-xl bg-card border border-border/50 hover:bg-primary hover:text-primary-foreground hover:border-primary transition-smooth"
                    aria-label="YouTube"
                  >
                    <Youtube className="h-6 w-6" />
                  </a>
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection animation="fade-right" delay={200}>
              <div className="p-6 bg-secondary/50 rounded-xl border border-border/50">
                <h3 className="font-serif text-lg font-medium text-foreground mb-2">
                  Productos Nu Skin
                </h3>
                <p className="text-muted-foreground text-sm mb-4">
                  Descubre la línea de productos Nu Skin para el cuidado de tu piel.
                </p>
                <Button variant="outline" size="sm" asChild>
                  <a 
                    href="https://www.nuskin.com/content/nuskin/es_ES/home.html" 
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    Ver productos
                    <ExternalLink className="ml-2 h-4 w-4" />
                  </a>
                </Button>
              </div>
            </AnimatedSection>
          </div>

          {/* Contact Form */}
          <AnimatedSection animation="fade-left" delay={100}>
            <div>
              <h2 className="font-serif text-2xl md:text-3xl font-medium text-foreground mb-6">
                Envíanos un Mensaje
              </h2>
              <ContactForm />
            </div>
          </AnimatedSection>
        </div>
      </Section>
    </Layout>
  );
};

export default Contacto;
