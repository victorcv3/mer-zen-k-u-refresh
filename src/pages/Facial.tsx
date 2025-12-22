import { Layout } from "@/components/layout/Layout";
import { Section, SectionHeader } from "@/components/Section";
import { ServiceCard } from "@/components/ServiceCard";
import { AnimatedSection } from "@/components/AnimatedSection";
import facialImage from "@/assets/facial-treatment.jpg";

const ritualesFaciales = [
  {
    title: "Ritual Rege-Peel",
    description: "Tratamiento regenerador con efecto peeling suave. Elimina células muertas, estimula la renovación celular y deja la piel visiblemente más joven y luminosa. Incluye limpieza profunda, exfoliación, mascarilla regeneradora y sérum vitamínico.",
    duration: "60 min",
    price: "55",
  },
  {
    title: "Ritual Vitamina C",
    description: "Potente tratamiento antioxidante con alta concentración de Vitamina C. Combate los signos del envejecimiento, unifica el tono de la piel y aporta una luminosidad extraordinaria. Ideal para pieles apagadas o con manchas.",
    duration: "60 min",
    price: "55",
  },
  {
    title: "Ritual Hidratación Profunda",
    description: "Tratamiento intensivo para pieles deshidratadas. Devuelve la elasticidad y jugosidad a la piel con activos de última generación. Tu rostro recuperará su aspecto saludable y confortable.",
    duration: "50 min",
    price: "48",
  },
  {
    title: "Ritual Anti-Edad",
    description: "Tratamiento completo antiaging que trabaja arrugas, flacidez y pérdida de firmeza. Utilizamos activos de alta eficacia como ácido hialurónico, colágeno y péptidos reafirmantes.",
    duration: "75 min",
    price: "65",
  },
  {
    title: "Ritual Limpieza Profunda",
    description: "Higiene facial completa que incluye vaporización, extracción de impurezas, peeling enzimático, mascarilla purificante y sérum regulador. Esencial para mantener la piel sana y libre de imperfecciones.",
    duration: "60 min",
    price: "45",
  },
  {
    title: "Ritual Calmante Piel Sensible",
    description: "Tratamiento específico para pieles reactivas, sensibles o con rosácea. Productos hipoalergénicos que calman, descongestionar y fortalecen la barrera cutánea.",
    duration: "55 min",
    price: "50",
  },
];

const toppingsFaciales = [
  {
    title: "Masaje Facial Kobido",
    description: "Antigua técnica japonesa de lifting natural. Tonifica los músculos faciales y mejora la circulación.",
    duration: "20 min",
    price: "18",
  },
  {
    title: "Contorno de Ojos",
    description: "Tratamiento específico para reducir ojeras, bolsas y líneas de expresión en la zona periocular.",
    duration: "15 min",
    price: "12",
  },
  {
    title: "Mascarilla LED",
    description: "Fototerapia con luz LED para potenciar los resultados del tratamiento. Según el color: antiedad, antimanchas o calmante.",
    duration: "15 min",
    price: "15",
  },
  {
    title: "Ampolla Flash",
    description: "Concentrado de activos para un efecto inmediato: luminosidad, hidratación o tensor según necesidad.",
    duration: "10 min",
    price: "10",
  },
];

const Facial = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="relative py-16 md:py-24 overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${facialImage})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/70 to-background" />
        <div className="relative content-container text-center z-10">
          <AnimatedSection animation="fade-up">
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-medium text-foreground mb-6">
              Tratamientos Faciales
            </h1>
            <p className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto">
              Rituales faciales diseñados para cada tipo de piel. 
              Recupera la luminosidad, juventud y vitalidad de tu rostro.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Rituales Faciales */}
      <Section>
        <AnimatedSection animation="fade-up">
          <SectionHeader 
            title="Rituales Faciales" 
            subtitle="Tratamientos personalizados para las necesidades de tu piel"
          />
        </AnimatedSection>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {ritualesFaciales.map((ritual, index) => (
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

      {/* Toppings Faciales */}
      <Section className="bg-secondary/30">
        <AnimatedSection animation="fade-up">
          <SectionHeader 
            title="Toppings Faciales" 
            subtitle="Potencia tu ritual con estos tratamientos complementarios"
          />
        </AnimatedSection>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {toppingsFaciales.map((topping, index) => (
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

export default Facial;
