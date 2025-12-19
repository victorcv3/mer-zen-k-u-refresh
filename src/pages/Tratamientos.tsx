import { Layout } from "@/components/layout/Layout";
import { Section, SectionHeader } from "@/components/Section";
import { ServiceCard } from "@/components/ServiceCard";

const tratamientos = [
  {
    title: "Masaje Descontracturante",
    description: "Masaje terapéutico enfocado en liberar la tensión muscular acumulada. Ideal para personas con estrés, malas posturas o dolor muscular. Trabajamos las zonas más afectadas para devolver la movilidad y el bienestar.",
    duration: "30 min / 60 min",
    price: "30 / 40",
  },
  {
    title: "Masaje Relajante",
    description: "Un masaje suave y envolvente que te transportará a un estado de calma profunda. Perfecto para desconectar de la rutina diaria, reducir el estrés y mejorar la calidad del sueño. Utilizamos aceites esenciales para potenciar la experiencia.",
    duration: "60 min",
    price: "55",
  },
  {
    title: "Masaje Descontracturante + Reiki",
    description: "Combina los beneficios del masaje terapéutico con la energía sanadora del Reiki. Una experiencia completa que trabaja tanto el cuerpo físico como el energético, ideal para quien busca un equilibrio integral.",
    duration: "70 min",
    price: "45",
  },
  {
    title: "Masaje Personalizado",
    description: "Diseñamos un tratamiento a medida según tus necesidades específicas. Combinamos diferentes técnicas y enfoques para crear una experiencia única que aborde exactamente lo que tu cuerpo necesita.",
    duration: "90 min",
    price: "55",
  },
  {
    title: "Masaje Anticelulítico",
    description: "Tratamiento específico para combatir la celulitis y mejorar la circulación. Utilizamos técnicas de drenaje y movimientos vigorizantes que ayudan a eliminar toxinas y mejorar la textura de la piel.",
    duration: "50 min",
    price: "40",
  },
  {
    title: "Peeling Corporal + Masaje Hidratante",
    description: "Exfoliación completa del cuerpo seguida de un masaje con productos hidratantes. Tu piel quedará renovada, suave y luminosa. Ideal para preparar la piel antes del verano o recuperarla después.",
    duration: "60 min",
    price: "50",
  },
  {
    title: "Peeling Corporal + Masaje Relajante",
    description: "Combina la renovación celular del peeling con la paz interior del masaje relajante. Una experiencia completa de mimo para tu piel y tu mente.",
    duration: "75 min",
    price: "60",
  },
  {
    title: "Terapia Energética - Reiki",
    description: "Sesión de Reiki para equilibrar tus chakras y restaurar el flujo natural de energía en tu cuerpo. El Reiki ayuda a reducir el estrés, aliviar dolores y promover la sanación natural del cuerpo. Una experiencia profunda de paz y reconexión.",
    duration: "45 min",
    price: "37",
  },
];

const toppings = [
  {
    title: "Masaje Craneal",
    description: "Alivia la tensión de la cabeza y cuero cabelludo. Perfecto para dolores de cabeza tensionales.",
    duration: "15 min",
    price: "10",
  },
  {
    title: "Masaje Facial",
    description: "Relaja los músculos faciales y estimula la circulación. Deja el rostro descansado y luminoso.",
    duration: "15 min",
    price: "10",
  },
  {
    title: "Masaje de Pies",
    description: "Reflexología podal para liberar la tensión acumulada y equilibrar todo el organismo.",
    duration: "15 min",
    price: "10",
  },
  {
    title: "Envoltura Corporal",
    description: "Potencia los efectos del tratamiento con una envoltura nutritiva o desintoxicante.",
    duration: "20 min",
    price: "15",
  },
];

const Tratamientos = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="bg-gradient-hero py-16 md:py-24">
        <div className="content-container text-center">
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-medium text-foreground mb-6">
            Tratamientos
          </h1>
          <p className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto">
            Descubre nuestra carta de tratamientos corporales y energéticos. 
            Cada sesión está diseñada para ofrecerte bienestar y relajación profunda.
          </p>
        </div>
      </section>

      {/* Tratamientos */}
      <Section>
        <SectionHeader 
          title="Masajes y Terapias" 
          subtitle="Elige el tratamiento que mejor se adapte a tus necesidades"
        />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {tratamientos.map((tratamiento, index) => (
            <ServiceCard
              key={index}
              title={tratamiento.title}
              description={tratamiento.description}
              duration={tratamiento.duration}
              price={tratamiento.price}
            />
          ))}
        </div>
      </Section>

      {/* Toppings */}
      <Section className="bg-secondary/30">
        <SectionHeader 
          title="Toppings" 
          subtitle="Complementa tu tratamiento con estos extras"
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {toppings.map((topping, index) => (
            <ServiceCard
              key={index}
              title={topping.title}
              description={topping.description}
              duration={topping.duration}
              price={topping.price}
            />
          ))}
        </div>
      </Section>
    </Layout>
  );
};

export default Tratamientos;