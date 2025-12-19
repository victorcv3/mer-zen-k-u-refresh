import { Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { Section, SectionHeader } from "@/components/Section";
import { InfoCard } from "@/components/InfoCard";
import { Button } from "@/components/ui/button";
import { Clock, Gift, MapPin, Sparkles, Heart, Leaf, ArrowRight } from "lucide-react";

const Home = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative min-h-[80vh] flex items-center justify-center bg-gradient-hero">
        <div className="absolute inset-0 bg-texture opacity-30" />
        <div className="relative content-container text-center py-20">
          <div className="animate-fade-in-up">
            <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
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
              <Button asChild variant="outline" size="lg" className="text-base">
                <Link to="/contacto">Contactar</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Filosofía Section */}
      <Section className="bg-secondary/30">
        <div className="max-w-4xl mx-auto text-center">
          <SectionHeader 
            title="Nuestra Filosofía" 
            subtitle="Tu bienestar es nuestra prioridad"
          />
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
        </div>
      </Section>

      {/* Services Preview */}
      <Section>
        <SectionHeader 
          title="Nuestros Servicios" 
          subtitle="Descubre todo lo que podemos ofrecerte"
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Link to="/tratamientos" className="group">
            <div className="bg-card rounded-xl p-8 shadow-soft border border-border/50 hover-lift h-full">
              <div className="p-4 rounded-xl bg-primary/10 text-primary w-fit mb-6">
                <Sparkles className="h-8 w-8" />
              </div>
              <h3 className="font-serif text-2xl font-medium text-foreground mb-3 group-hover:text-primary transition-smooth">
                Tratamientos
              </h3>
              <p className="text-muted-foreground">
                Masajes descontracturantes, relajantes, personalizados, anticelulíticos y más. 
                Terapias energéticas con Reiki.
              </p>
            </div>
          </Link>
          
          <Link to="/facial" className="group">
            <div className="bg-card rounded-xl p-8 shadow-soft border border-border/50 hover-lift h-full">
              <div className="p-4 rounded-xl bg-primary/10 text-primary w-fit mb-6">
                <Heart className="h-8 w-8" />
              </div>
              <h3 className="font-serif text-2xl font-medium text-foreground mb-3 group-hover:text-primary transition-smooth">
                Facial
              </h3>
              <p className="text-muted-foreground">
                Rituales faciales regeneradores: Rege-Peel, Vitamina C, tratamientos hidratantes 
                y rejuvenecedores.
              </p>
            </div>
          </Link>
          
          <Link to="/rituales" className="group">
            <div className="bg-card rounded-xl p-8 shadow-soft border border-border/50 hover-lift h-full">
              <div className="p-4 rounded-xl bg-primary/10 text-primary w-fit mb-6">
                <Leaf className="h-8 w-8" />
              </div>
              <h3 className="font-serif text-2xl font-medium text-foreground mb-3 group-hover:text-primary transition-smooth">
                Rituales
              </h3>
              <p className="text-muted-foreground">
                Experiencias únicas: Lomi-Lomi hawaiano, rituales estilo Ayurveda, 
                tratamientos corporales integrales.
              </p>
            </div>
          </Link>
        </div>
      </Section>

      {/* Info Cards */}
      <Section className="bg-gradient-warm">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <InfoCard
            icon={Gift}
            title="Tarjetas Regalo"
            content="¿Buscas el regalo perfecto? Nuestras tarjetas regalo son la opción ideal para que tus seres queridos disfruten de una experiencia de bienestar única. Disponibles para cualquier tratamiento o por un importe a elegir."
          />
          <InfoCard
            icon={Clock}
            title="Horario de Apertura"
            content={`Lunes a Viernes: 10:00 - 20:00\nSábados: 10:00 - 14:00\n\nCita previa requerida`}
          />
          <InfoCard
            icon={MapPin}
            title="Ubicación"
            content="Nos encontramos en Terrassa, Barcelona. Un espacio acogedor y tranquilo donde podrás desconectar del ajetreo diario y dedicarte tiempo a ti mismo."
          />
        </div>
      </Section>

      {/* CTA Section */}
      <Section>
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
      </Section>
    </Layout>
  );
};

export default Home;