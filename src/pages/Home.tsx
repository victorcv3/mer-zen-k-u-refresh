import { Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { Section, SectionHeader } from "@/components/Section";
import { InfoCard } from "@/components/InfoCard";
import { Button } from "@/components/ui/button";
import { AnimatedSection } from "@/components/AnimatedSection";
import { ZenParticles } from "@/components/ZenParticles";
import { Clock, Gift, MapPin, Sparkles, Heart, Leaf, ArrowRight } from "lucide-react";
import heroImage from "@/assets/hero-spa.jpg";
import massageImage from "@/assets/massage-treatment.jpg";
import facialImage from "@/assets/facial-treatment.jpg";
import ritualImage from "@/assets/wellness-ritual.jpg";

const Home = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${heroImage})` }}
        />
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/40 to-background/80" />
        {/* Zen Particles */}
        <ZenParticles />
        {/* Content */}
        <div className="relative content-container text-center py-20 z-10">
          <AnimatedSection animation="fade-up">
            <span className="inline-block px-4 py-2 rounded-full bg-background/80 backdrop-blur-sm text-primary text-sm font-medium mb-6 border border-border/50">
              Bienestar Holístico en Terrassa
            </span>
            <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl font-medium text-foreground mb-6 text-shadow-soft">
              Mer Zen Kïu
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto mb-8 font-light">
              Belleza y Salud
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button asChild size="lg" className="text-base">
                <Link to="/tratamientos">
                  Ver Tratamientos
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="text-base bg-background/50 backdrop-blur-sm">
                <Link to="/contacto">Contactar</Link>
              </Button>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Filosofía Section */}
      <Section className="bg-secondary/30">
        <div className="max-w-4xl mx-auto text-center">
          <AnimatedSection animation="fade-up">
            <SectionHeader 
              title="Nuestra Filosofía" 
              subtitle="Tu bienestar es nuestra prioridad"
            />
          </AnimatedSection>
          <AnimatedSection animation="fade-up" delay={200}>
            <div className="bg-card rounded-2xl p-8 md:p-12 shadow-soft border border-border/50">
              <p className="text-muted-foreground leading-relaxed text-lg">
                En Mer Zen Kïu creemos en el equilibrio entre cuerpo y mente. Nuestro espacio 
                está diseñado para ofrecerte un refugio de tranquilidad donde puedas reconectar 
                contigo mismo. Cada tratamiento está pensado para nutrir tu bienestar integral, 
                combinando técnicas ancestrales con los avances más modernos en el cuidado personal.
              </p>
              <p className="text-muted-foreground leading-relaxed text-lg mt-4">
                Nos especializamos en masajes terapéuticos, Reiki, tratamientos faciales y rituales 
                de belleza que transforman no solo tu aspecto exterior, sino también tu energía interior.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </Section>

      {/* Services Preview */}
      <Section>
        <AnimatedSection animation="fade-up">
          <SectionHeader 
            title="Nuestros Servicios" 
            subtitle="Descubre todo lo que podemos ofrecerte"
          />
        </AnimatedSection>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatedSection animation="fade-up" delay={100}>
            <Link to="/tratamientos" className="group block h-full">
              <div className="bg-card rounded-xl overflow-hidden shadow-soft border border-border/50 hover-lift h-full">
                <div className="aspect-[4/3] overflow-hidden">
                  <img 
                    src={massageImage} 
                    alt="Tratamientos de masaje" 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <div className="p-3 rounded-xl bg-primary/10 text-primary w-fit mb-4">
                    <Sparkles className="h-6 w-6" />
                  </div>
                  <h3 className="font-serif text-2xl font-medium text-foreground mb-3 group-hover:text-primary transition-smooth">
                    Tratamientos
                  </h3>
                  <p className="text-muted-foreground">
                    Masajes descontracturantes, relajantes, personalizados, anticelulíticos y más. 
                    Terapias energéticas con Reiki.
                  </p>
                </div>
              </div>
            </Link>
          </AnimatedSection>
          
          <AnimatedSection animation="fade-up" delay={200}>
            <Link to="/facial" className="group block h-full">
              <div className="bg-card rounded-xl overflow-hidden shadow-soft border border-border/50 hover-lift h-full">
                <div className="aspect-[4/3] overflow-hidden">
                  <img 
                    src={facialImage} 
                    alt="Tratamientos faciales" 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <div className="p-3 rounded-xl bg-primary/10 text-primary w-fit mb-4">
                    <Heart className="h-6 w-6" />
                  </div>
                  <h3 className="font-serif text-2xl font-medium text-foreground mb-3 group-hover:text-primary transition-smooth">
                    Facial
                  </h3>
                  <p className="text-muted-foreground">
                    Rituales faciales regeneradores: Rege-Peel, Vitamina C, tratamientos hidratantes 
                    y rejuvenecedores.
                  </p>
                </div>
              </div>
            </Link>
          </AnimatedSection>
          
          <AnimatedSection animation="fade-up" delay={300}>
            <Link to="/rituales" className="group block h-full">
              <div className="bg-card rounded-xl overflow-hidden shadow-soft border border-border/50 hover-lift h-full">
                <div className="aspect-[4/3] overflow-hidden">
                  <img 
                    src={ritualImage} 
                    alt="Rituales de bienestar" 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <div className="p-3 rounded-xl bg-primary/10 text-primary w-fit mb-4">
                    <Leaf className="h-6 w-6" />
                  </div>
                  <h3 className="font-serif text-2xl font-medium text-foreground mb-3 group-hover:text-primary transition-smooth">
                    Rituales
                  </h3>
                  <p className="text-muted-foreground">
                    Experiencias únicas: Lomi-Lomi hawaiano, rituales estilo Ayurveda, 
                    tratamientos corporales integrales.
                  </p>
                </div>
              </div>
            </Link>
          </AnimatedSection>
        </div>
      </Section>

      {/* Info Cards */}
      <Section className="bg-gradient-warm">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatedSection animation="fade-up" delay={100}>
            <InfoCard
              icon={Gift}
              title="Tarjetas Regalo"
              content="¿Buscas el regalo perfecto? Nuestras tarjetas regalo son la opción ideal para que tus seres queridos disfruten de una experiencia de bienestar única. Disponibles para cualquier tratamiento o por un importe a elegir."
            />
          </AnimatedSection>
          <AnimatedSection animation="fade-up" delay={200}>
            <InfoCard
              icon={Clock}
              title="Horario de Apertura"
              content={`Lunes a Viernes: 10:00 - 20:00\nSábados: 10:00 - 14:00\n\nCita previa requerida`}
            />
          </AnimatedSection>
          <AnimatedSection animation="fade-up" delay={300}>
            <InfoCard
              icon={MapPin}
              title="Ubicación"
              content="Nos encontramos en Terrassa, Barcelona. Un espacio acogedor y tranquilo donde podrás desconectar del ajetreo diario y dedicarte tiempo a ti mismo."
            />
          </AnimatedSection>
        </div>
      </Section>

      {/* CTA Section */}
      <Section>
        <AnimatedSection animation="scale">
          <div className="bg-primary/5 rounded-2xl p-8 md:p-12 text-center">
            <h2 className="font-serif text-3xl md:text-4xl font-medium text-foreground mb-4">
              ¿Lista para tu momento de relax?
            </h2>
            <p className="text-muted-foreground text-lg mb-8 max-w-2xl mx-auto">
              Reserva tu cita y déjate cuidar por profesionales dedicados a tu bienestar.
            </p>
            <Button asChild size="lg">
              <Link to="/contacto">
                Reservar Cita
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </AnimatedSection>
      </Section>
    </Layout>
  );
};

export default Home;
