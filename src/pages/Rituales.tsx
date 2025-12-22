import { Layout } from "@/components/layout/Layout";
import { Section, SectionHeader } from "@/components/Section";
import { ServiceCard } from "@/components/ServiceCard";
import { AnimatedSection } from "@/components/AnimatedSection";
import { Sparkles, Heart, Leaf, Droplets } from "lucide-react";
import ritualImage from "@/assets/wellness-ritual.jpg";
import reikiImage from "@/assets/reiki-healing.jpg";

const rituales = [
  {
    title: "Ritual Lomi-Lomi Hawaiano",
    description: "Antiguo masaje hawaiano que utiliza movimientos fluidos y continuos imitando las olas del mar. Este ritual trabaja todo el cuerpo de forma conectada, liberando bloqueos físicos y emocionales. Una experiencia profundamente relajante y transformadora.",
    duration: "90 min",
    price: "75",
  },
  {
    title: "Ritual Estilo Ayurveda",
    description: "Inspirado en la medicina tradicional india, este ritual equilibra los doshas (energías vitales) de tu cuerpo. Incluye masaje con aceites tibios infusionados con hierbas, técnicas de presión en puntos marma y un ambiente aromático único.",
    duration: "80 min",
    price: "70",
  },
  {
    title: "Ritual Piedras Calientes",
    description: "Combina masaje manual con la aplicación de piedras volcánicas calientes. El calor penetra en los músculos, aliviando tensiones profundas y mejorando la circulación. Una experiencia que equilibra cuerpo y mente.",
    duration: "75 min",
    price: "65",
  },
  {
    title: "Ritual Aromaterapia",
    description: "Masaje corporal completo con una selección de aceites esenciales elegidos según tu estado emocional y necesidades. Los aromas actúan sobre el sistema límbico, generando bienestar profundo.",
    duration: "70 min",
    price: "58",
  },
  {
    title: "Ritual Detox Corporal",
    description: "Tratamiento desintoxicante completo: exfoliación con sales marinas, envoltura de algas o arcillas, y masaje drenante. Elimina toxinas, reduce retención de líquidos y revitaliza la piel.",
    duration: "90 min",
    price: "80",
  },
  {
    title: "Ritual Renovación Total",
    description: "Nuestra experiencia más completa. Combina peeling corporal, envoltura nutritiva, masaje relajante de cuerpo entero y tratamiento facial express. Sales renovada por dentro y por fuera.",
    duration: "120 min",
    price: "110",
  },
];

const beneficios = [
  {
    icon: Sparkles,
    title: "Equilibrio Interior",
    description: "Nuestros rituales trabajan más allá de lo físico, ayudándote a reconectar con tu centro y encontrar paz interior.",
  },
  {
    icon: Heart,
    title: "Bienestar Integral",
    description: "Cada experiencia está diseñada para nutrir cuerpo, mente y espíritu de forma holística.",
  },
  {
    icon: Leaf,
    title: "Ingredientes Naturales",
    description: "Utilizamos productos de alta calidad con ingredientes naturales y respetuosos con tu piel.",
  },
  {
    icon: Droplets,
    title: "Técnicas Ancestrales",
    description: "Combinamos sabiduría milenaria con conocimientos modernos para ofrecerte lo mejor.",
  },
];

const toppingsRituales = [
  {
    title: "Reflexología Podal",
    description: "Masaje de pies basado en la conexión de puntos reflejos con órganos y sistemas del cuerpo.",
    duration: "20 min",
    price: "15",
  },
  {
    title: "Masaje Cuero Cabelludo",
    description: "Alivia tensiones, estimula la circulación y promueve el crecimiento capilar saludable.",
    duration: "15 min",
    price: "12",
  },
  {
    title: "Ritual de Manos",
    description: "Exfoliación, masaje y mascarilla hidratante para unas manos suaves y cuidadas.",
    duration: "15 min",
    price: "12",
  },
];

const Rituales = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="relative py-16 md:py-24 overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${ritualImage})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/70 to-background" />
        <div className="relative content-container text-center z-10">
          <AnimatedSection animation="fade-up">
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-medium text-foreground mb-6">
              Rituales
            </h1>
            <p className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto">
              Experiencias únicas de bienestar que combinan técnicas ancestrales 
              con el arte del cuidado personal. Más que tratamientos, son viajes sensoriales.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Rituales */}
      <Section>
        <AnimatedSection animation="fade-up">
          <SectionHeader 
            title="Nuestros Rituales" 
            subtitle="Experiencias transformadoras para cuerpo y alma"
          />
        </AnimatedSection>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {rituales.map((ritual, index) => (
            <AnimatedSection key={index} animation="fade-up" delay={index * 100}>
              <ServiceCard
                title={ritual.title}
                description={ritual.description}
                duration={ritual.duration}
                price={ritual.price}
              />
            </AnimatedSection>
          ))}
        </div>
      </Section>

      {/* Reiki Feature */}
      <Section className="bg-secondary/30">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <AnimatedSection animation="fade-right">
            <div className="rounded-2xl overflow-hidden shadow-soft">
              <img 
                src={reikiImage} 
                alt="Terapia Reiki" 
                className="w-full h-[400px] object-cover"
              />
            </div>
          </AnimatedSection>
          <AnimatedSection animation="fade-left" delay={200}>
            <div>
              <h2 className="font-serif text-3xl md:text-4xl font-medium text-foreground mb-4">
                Terapia Reiki
              </h2>
              <p className="text-muted-foreground text-lg mb-4">
                El Reiki es una técnica de sanación energética que canaliza la energía universal 
                a través de las manos del terapeuta hacia el receptor.
              </p>
              <p className="text-muted-foreground">
                Esta terapia milenaria japonesa ayuda a equilibrar los chakras, reducir el estrés, 
                aliviar el dolor y promover la sanación natural del cuerpo. Una experiencia 
                profundamente relajante y restauradora.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </Section>

      {/* Beneficios */}
      <Section>
        <AnimatedSection animation="fade-up">
          <SectionHeader 
            title="Beneficios de Nuestros Rituales" 
          />
        </AnimatedSection>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {beneficios.map((beneficio, index) => (
            <AnimatedSection key={index} animation="fade-up" delay={index * 100}>
              <div className="bg-card rounded-xl p-6 shadow-soft border border-border/50 text-center hover-lift h-full">
                <div className="p-4 rounded-xl bg-primary/10 text-primary w-fit mx-auto mb-4">
                  <beneficio.icon className="h-8 w-8" />
                </div>
                <h3 className="font-serif text-lg font-medium text-foreground mb-2">
                  {beneficio.title}
                </h3>
                <p className="text-muted-foreground text-sm">
                  {beneficio.description}
                </p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </Section>

      {/* Toppings */}
      <Section className="bg-secondary/30">
        <AnimatedSection animation="fade-up">
          <SectionHeader 
            title="Toppings para Rituales" 
            subtitle="Personaliza tu experiencia con estos extras"
          />
        </AnimatedSection>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {toppingsRituales.map((topping, index) => (
            <AnimatedSection key={index} animation="fade-up" delay={index * 100}>
              <ServiceCard
                title={topping.title}
                description={topping.description}
                duration={topping.duration}
                price={topping.price}
              />
            </AnimatedSection>
          ))}
        </div>
      </Section>
    </Layout>
  );
};

export default Rituales;
