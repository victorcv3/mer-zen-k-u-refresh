import { Layout } from "@/components/layout/Layout";
import { Section, SectionHeader } from "@/components/Section";
import { BlogCard } from "@/components/BlogCard";
import { AnimatedSection } from "@/components/AnimatedSection";
import wellnessBlogImage from "@/assets/wellness-blog.jpg";

const categorias = [
  "Todos",
  "Bienestar",
  "Consejos de Belleza",
  "Tratamientos",
  "Novedades",
];

const posts = [
  {
    title: "Los beneficios del masaje descontracturante para tu salud",
    excerpt: "Descubre cómo el masaje descontracturante puede aliviar tensiones musculares, mejorar la circulación y contribuir a tu bienestar general. Te explicamos todo lo que necesitas saber.",
    date: "15 Diciembre 2024",
    category: "Bienestar",
    slug: "beneficios-masaje-descontracturante",
  },
  {
    title: "Rutina de cuidado facial para el invierno",
    excerpt: "El frío y la calefacción pueden dañar tu piel. Te compartimos una rutina completa para mantener tu rostro hidratado y protegido durante los meses más fríos del año.",
    date: "10 Diciembre 2024",
    category: "Consejos de Belleza",
    slug: "rutina-cuidado-facial-invierno",
  },
  {
    title: "¿Qué es el Reiki y cómo puede ayudarte?",
    excerpt: "El Reiki es una técnica de sanación energética japonesa que promueve la relajación y el equilibrio. Conoce sus principios, beneficios y qué esperar en una sesión.",
    date: "5 Diciembre 2024",
    category: "Tratamientos",
    slug: "que-es-el-reiki",
  },
  {
    title: "Nuevo ritual Lomi-Lomi: la tradición hawaiana llega a Terrassa",
    excerpt: "Presentamos nuestro nuevo ritual inspirado en el masaje tradicional hawaiano. Una experiencia única de conexión y liberación que trabaja cuerpo y espíritu.",
    date: "28 Noviembre 2024",
    category: "Novedades",
    slug: "nuevo-ritual-lomi-lomi",
  },
  {
    title: "5 señales de que tu piel necesita hidratación profunda",
    excerpt: "¿Tu piel se siente tirante, áspera o sin brillo? Estos pueden ser signos de deshidratación. Aprende a identificar las señales y qué tratamientos pueden ayudarte.",
    date: "20 Noviembre 2024",
    category: "Consejos de Belleza",
    slug: "senales-piel-necesita-hidratacion",
  },
  {
    title: "El poder de los aceites esenciales en aromaterapia",
    excerpt: "Cada aceite esencial tiene propiedades únicas que pueden influir en tu estado de ánimo y bienestar. Descubre cuáles son los más utilizados y sus beneficios.",
    date: "12 Noviembre 2024",
    category: "Bienestar",
    slug: "poder-aceites-esenciales-aromaterapia",
  },
];

const Blog = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="bg-gradient-hero py-16 md:py-24 relative overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src={wellnessBlogImage} 
            alt="Wellness Blog" 
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/80 to-background" />
        </div>
        <div className="content-container text-center relative z-10">
          <AnimatedSection animation="fade-up">
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-medium text-foreground mb-6">
              Blog
            </h1>
            <p className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto">
              Consejos, novedades y todo lo que necesitas saber sobre bienestar, 
              belleza y cuidado personal.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Categories */}
      <Section className="!py-8">
        <AnimatedSection animation="fade-up" delay={100}>
          <div className="flex flex-wrap items-center justify-center gap-2">
            {categorias.map((categoria, index) => (
              <button
                key={index}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-smooth ${
                  index === 0
                    ? "bg-primary text-primary-foreground"
                    : "bg-secondary text-muted-foreground hover:bg-secondary/80"
                }`}
              >
                {categoria}
              </button>
            ))}
          </div>
        </AnimatedSection>
      </Section>

      {/* Posts Grid */}
      <Section className="!pt-0">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts.map((post, index) => (
            <AnimatedSection key={index} animation="fade-up" delay={index * 100}>
              <BlogCard
                title={post.title}
                excerpt={post.excerpt}
                date={post.date}
                category={post.category}
                slug={post.slug}
              />
            </AnimatedSection>
          ))}
        </div>
      </Section>
    </Layout>
  );
};

export default Blog;
