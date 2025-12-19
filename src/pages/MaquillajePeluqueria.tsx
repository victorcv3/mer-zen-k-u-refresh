import { Layout } from "@/components/layout/Layout";
import { Section, SectionHeader } from "@/components/Section";
import { ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

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
  { id: 1, alt: "Maquillaje editorial 1" },
  { id: 2, alt: "Maquillaje novia" },
  { id: 3, alt: "Caracterización teatral" },
  { id: 4, alt: "Peinado evento" },
  { id: 5, alt: "Maquillaje artístico" },
  { id: 6, alt: "Look natural" },
];

const videos = [
  {
    title: "Tutorial Maquillaje Natural",
    url: "https://www.youtube.com/watch?v=example1",
  },
  {
    title: "Preparación de Piel para Eventos",
    url: "https://www.youtube.com/watch?v=example2",
  },
  {
    title: "Peinados para Bodas",
    url: "https://www.youtube.com/watch?v=example3",
  },
];

const MaquillajePeluqueria = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="bg-gradient-hero py-16 md:py-24">
        <div className="content-container text-center">
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-medium text-foreground mb-6">
            Maquillaje y Peluquería
          </h1>
          <p className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto">
            Arte y belleza para tus momentos especiales. 
            Maquillaje profesional y estilismo para eventos, bodas, sesiones fotográficas y más.
          </p>
        </div>
      </section>

      {/* Formación */}
      <Section>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
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
          <div className="bg-secondary/30 rounded-2xl aspect-square flex items-center justify-center">
            <span className="text-muted-foreground/50 text-sm">Imagen profesional</span>
          </div>
        </div>
      </Section>

      {/* Proyectos */}
      <Section className="bg-secondary/30">
        <SectionHeader 
          title="Proyectos Destacados" 
          subtitle="Algunos de los trabajos en los que he participado"
        />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {proyectos.map((proyecto, index) => (
            <div 
              key={index}
              className="bg-card rounded-xl p-6 shadow-soft border border-border/50 hover-lift"
            >
              <h3 className="font-serif text-xl font-medium text-foreground mb-2">
                {proyecto.title}
              </h3>
              <p className="text-muted-foreground">
                {proyecto.description}
              </p>
            </div>
          ))}
        </div>
      </Section>

      {/* Galería */}
      <Section>
        <SectionHeader 
          title="Galería de Trabajos" 
          subtitle="Una muestra de mi trabajo en maquillaje y peluquería"
        />
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {galeria.map((item) => (
            <div 
              key={item.id}
              className="aspect-square bg-secondary/50 rounded-xl overflow-hidden hover-lift cursor-pointer"
            >
              <div className="w-full h-full flex items-center justify-center">
                <span className="text-muted-foreground/50 text-sm">{item.alt}</span>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* Videos */}
      <Section className="bg-secondary/30">
        <SectionHeader 
          title="Videos y Tutoriales" 
          subtitle="Descubre técnicas y consejos en mi canal de YouTube"
        />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {videos.map((video, index) => (
            <div 
              key={index}
              className="bg-card rounded-xl overflow-hidden shadow-soft border border-border/50 hover-lift"
            >
              <div className="aspect-video bg-secondary flex items-center justify-center">
                <span className="text-muted-foreground/50 text-sm">Video thumbnail</span>
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
          ))}
        </div>
      </Section>
    </Layout>
  );
};

export default MaquillajePeluqueria;