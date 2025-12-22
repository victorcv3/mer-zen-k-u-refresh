import { Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { Section, SectionHeader } from "@/components/Section";
import { ProductCard } from "@/components/ProductCard";
import { AnimatedSection } from "@/components/AnimatedSection";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import productsImage from "@/assets/skincare-products.jpg";

const productos = [
  {
    title: "Crema Hidratante Intensiva",
    description: "Crema de día con ácido hialurónico de triple peso molecular. Hidratación profunda durante 24 horas. Textura ligera que se absorbe rápidamente sin dejar sensación grasa. Ideal para todo tipo de pieles, especialmente las deshidratadas. Contiene extracto de aloe vera y vitamina E para calmar y proteger la piel. Uso: Aplicar mañana y noche sobre el rostro limpio con suaves movimientos ascendentes.",
    price: "38",
    stock: "En stock",
  },
  {
    title: "Sérum Vitamina C 20%",
    description: "Sérum antioxidante de alta potencia con vitamina C estabilizada al 20%. Ilumina el rostro, unifica el tono y combate las manchas. Formulado con vitamina E y ácido ferúlico para potenciar la eficacia antioxidante. Uso diario por la mañana antes de la hidratante y protector solar. Resultados visibles desde las primeras semanas.",
    price: "52",
    stock: "En stock",
  },
  {
    title: "Aceite Corporal Relajante",
    description: "Aceite de masaje con aceites esenciales de lavanda, manzanilla y ylang-ylang. Base de aceite de almendras dulces y jojoba que nutre la piel dejándola sedosa. Perfecto para automasaje antes de dormir o para potenciar tus tratamientos en casa. Aroma envolvente que ayuda a conciliar el sueño.",
    price: "28",
    stock: "En stock",
  },
  {
    title: "Exfoliante Corporal Sales del Mar Muerto",
    description: "Exfoliante corporal con sales minerales del Mar Muerto enriquecido con aceite de argán. Elimina células muertas, suaviza asperezas y prepara la piel para una mejor absorción de tratamientos posteriores. Ideal usar 1-2 veces por semana en la ducha. La piel queda increíblemente suave y renovada.",
    price: "24",
    stock: "Últimas unidades",
  },
  {
    title: "Mascarilla Facial Purificante",
    description: "Mascarilla de arcilla verde con extracto de árbol de té. Limpieza profunda de poros, regula el exceso de sebo y matifica la piel. Ideal para pieles mixtas a grasas o con tendencia acneica. Aplicar 1-2 veces por semana, dejar actuar 15 minutos y retirar con agua tibia. No recomendado para pieles sensibles.",
    price: "22",
    stock: "En stock",
  },
  {
    title: "Contorno de Ojos Anti-fatiga",
    description: "Tratamiento específico para la zona periocular con cafeína, vitamina K y péptidos. Reduce bolsas, ojeras y líneas de expresión. Textura gel-crema refrescante de rápida absorción. Aplicar mañana y noche con suaves toques sin arrastrar la piel. Incluye aplicador metálico para potenciar el efecto descongestionante.",
    price: "35",
    stock: "En stock",
  },
  {
    title: "Protector Solar Facial SPF50",
    description: "Protección solar de amplio espectro UVA/UVB con acabado invisible. Fórmula ligera que no deja residuo blanco ni sensación grasa. Apto para usar bajo maquillaje. Con antioxidantes que protegen del fotoenvejecimiento. Imprescindible a diario, todo el año. Reaplicar cada 2 horas en exposición solar directa.",
    price: "32",
    stock: "En stock",
  },
  {
    title: "Bálsamo Labial Reparador",
    description: "Tratamiento intensivo para labios secos y agrietados. Con manteca de karité, aceite de coco y cera de abejas. Repara, hidrata y protege los labios de las agresiones externas. Puede usarse tantas veces como sea necesario. Deja un acabado suave y natural.",
    price: "12",
    stock: "En stock",
  },
];

const Producto = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="relative py-16 md:py-24 overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${productsImage})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/70 to-background" />
        <div className="relative content-container text-center z-10">
          <AnimatedSection animation="fade-up">
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-medium text-foreground mb-6">
              Productos
            </h1>
            <p className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto">
              Selección de productos de alta calidad para continuar tu rutina de cuidado en casa. 
              Los mismos que utilizamos en nuestros tratamientos profesionales.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Productos */}
      <Section>
        <AnimatedSection animation="fade-up">
          <SectionHeader 
            title="Nuestro Catálogo" 
            subtitle="Productos seleccionados para tu bienestar"
          />
        </AnimatedSection>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {productos.map((producto, index) => (
            <AnimatedSection key={index} animation="fade-up" delay={index * 50}>
              <ProductCard
                title={producto.title}
                description={producto.description}
                price={producto.price}
                stock={producto.stock}
              />
            </AnimatedSection>
          ))}
        </div>
      </Section>

      {/* Info */}
      <Section className="bg-secondary/30">
        <AnimatedSection animation="scale">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-serif text-2xl md:text-3xl font-medium text-foreground mb-4">
              ¿Interesada en algún producto?
            </h2>
            <p className="text-muted-foreground text-lg mb-6">
              Todos nuestros productos están disponibles en el centro. También podemos 
              asesorarte sobre qué productos son los más adecuados para tu tipo de piel 
              y tus necesidades específicas.
            </p>
            <p className="text-muted-foreground mb-8">
              Consulta disponibilidad y reserva tus productos contactando con nosotros.
            </p>
            <Button asChild size="lg">
              <Link to="/contacto">
                Contactar
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </AnimatedSection>
      </Section>
    </Layout>
  );
};

export default Producto;
