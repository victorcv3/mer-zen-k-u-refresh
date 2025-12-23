import { Layout } from "@/components/layout/Layout";
import { Section, SectionHeader } from "@/components/Section";
import { AnimatedSection } from "@/components/AnimatedSection";
import { ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import makeupBridalImage from "@/assets/makeup-bridal.jpg";
import hairstylingImage from "@/assets/hairstyling-elegant.jpg";

const formacion = [
  "Stick Art Studio Barcelona",
  "Salma Makeup Artist",
  "Master 35MM Fotografía y Maquillaje",
  "Formación continua en las últimas tendencias",
];

const proyectos = [
  {
    title: "L'enigma de la Seu",
    description: "Caracterización y maquillaje artístico para producción teatral histórica.",
  },
  {
    title: "La dona jueva",
    description: "Maquillaje de época para cortometraje documental.",
  },
  {
    title: "Sesiones fotográficas editoriales",
    description: "Colaboraciones con fotógrafos locales para publicaciones de moda.",
  },
  {
    title: "Bodas y eventos especiales",
    description: "Maquillaje y peluquería para novias y eventos importantes.",
  },
];

const galeria = [
  { id: 1, alt: "Maquillaje editorial 1", image: makeupBridalImage },
  { id: 2, alt: "Maquillaje novia", image: hairstylingImage },
  { id: 3, alt: "Caracterización teatral", image: makeupBridalImage },
  { id: 4, alt: "Peinado evento", image: hairstylingImage },
  { id: 5, alt: "Maquillaje artístico", image: makeupBridalImage },
  { id: 6, alt: "Look natural", image: hairstylingImage },
];

const videos = [
  {
    title: "Tutorial Maquillaje Natural",
    url: "https://www.youtube.com/@merzenkiu",
  },
  {
    title: "Preparación de Piel para Eventos",
    url: "https://www.youtube.com/@merzenkiu",
  },
  {
    title: "Peinados para Bodas",
    url: "https://www.youtube.com/@merzenkiu",
  },
];

const MaquillajePeluqueria = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="bg-gradient-hero py-16 md:py-24 relative overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src={makeupBridalImage} 
            alt="Maquillaje profesional" 
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/80 to-background" />
        </div>
        <div className="content-container text-center relative z-10">
          <AnimatedSection animation="fade-up">
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-medium text-foreground mb-6">
              Maquillaje y Peluquería
            </h1>
            <p className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto">
              Arte y belleza para tus momentos especiales. 
              Maquillaje profesional y estilismo para eventos, bodas, sesiones fotográficas y más.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Formación */}
      <Section>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <AnimatedSection animation="fade-right">
            <div>
              <h2 className="font-serif text-3xl md:text-4xl font-medium text-foreground mb-6">
                Formación Profesional
              </h2>
              <p className="text-muted-foreground text-lg mb-6 leading-relaxed">
                Mi pasión por el maquillaje y la peluquería me ha llevado a formarme con los mejores 
                profesionales del sector. Cada técnica aprendida, cada curso realizado, suma a mi 
                capacidad de ofrecerte un servicio excepcional adaptado a tus necesidades.
              </p>
              <ul className="space-y-3">
                {formacion.map((item, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <span className="w-2 h-2 rounded-full bg-primary flex-shrink-0" />
                    <span className="text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </AnimatedSection>
          <AnimatedSection animation="fade-left" delay={100}>
            <div className="rounded-2xl overflow-hidden shadow-soft">
              <img 
                src={makeupBridalImage} 
                alt="Formación profesional en maquillaje" 
                className="w-full h-auto object-cover aspect-square"
              />
            </div>
          </AnimatedSection>
        </div>
      </Section>

      {/* Proyectos */}
      <Section className="bg-secondary/30">
        <AnimatedSection animation="fade-up">
          <SectionHeader 
            title="Proyectos Destacados" 
            subtitle="Algunos de los trabajos en los que he participado"
          />
        </AnimatedSection>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {proyectos.map((proyecto, index) => (
            <AnimatedSection key={index} animation="fade-up" delay={index * 100}>
              <div className="bg-card rounded-xl p-6 shadow-soft border border-border/50 hover-lift">
                <h3 className="font-serif text-xl font-medium text-foreground mb-2">
                  {proyecto.title}
                </h3>
                <p className="text-muted-foreground">
                  {proyecto.description}
                </p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </Section>

      {/* Galería */}
      <Section>
        <AnimatedSection animation="fade-up">
          <SectionHeader 
            title="Galería de Trabajos" 
            subtitle="Una muestra de mi trabajo en maquillaje y peluquería"
          />
        </AnimatedSection>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {galeria.map((item, index) => (
            <AnimatedSection key={item.id} animation="scale" delay={index * 50}>
              <div className="aspect-square rounded-xl overflow-hidden hover-lift cursor-pointer">
                <img 
                  src={item.image} 
                  alt={item.alt}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
              </div>
            </AnimatedSection>
          ))}
        </div>
      </Section>

      {/* Videos */}
      <Section className="bg-secondary/30">
        <AnimatedSection animation="fade-up">
          <SectionHeader 
            title="Videos y Tutoriales" 
            subtitle="Descubre técnicas y consejos en mi canal de YouTube"
          />
        </AnimatedSection>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {videos.map((video, index) => (
            <AnimatedSection key={index} animation="fade-up" delay={index * 100}>
              <div className="bg-card rounded-xl overflow-hidden shadow-soft border border-border/50 hover-lift">
                <div className="aspect-video relative overflow-hidden">
                  <img 
                    src={hairstylingImage} 
                    alt={video.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-foreground/20 flex items-center justify-center">
                    <div className="w-16 h-16 rounded-full bg-primary/90 flex items-center justify-center">
                      <div className="w-0 h-0 border-t-8 border-t-transparent border-l-12 border-l-primary-foreground border-b-8 border-b-transparent ml-1" />
                    </div>
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="font-medium text-foreground mb-3">{video.title}</h3>
                  <Button variant="outline" size="sm" asChild>
                    <a href={video.url} target="_blank" rel="noopener noreferrer">
                      Ver en YouTube
                      <ExternalLink className="ml-2 h-4 w-4" />
                    </a>
                  </Button>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </Section>
    </Layout>
  );
};

export default MaquillajePeluqueria;
