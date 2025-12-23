import { Layout } from "@/components/layout/Layout";
import { Section, SectionHeader } from "@/components/Section";
import { InfoCard } from "@/components/InfoCard";
import { AnimatedSection } from "@/components/AnimatedSection";
import { Calendar, Clock, Gift, XCircle, AlertCircle } from "lucide-react";

const normativas = [
  {
    icon: Calendar,
    title: "Reservas",
    content: `Las reservas se realizan por teléfono, WhatsApp o a través del formulario de contacto de nuestra web.

Para garantizar tu plaza, te recomendamos reservar con al menos 48 horas de antelación, especialmente para rituales y tratamientos de larga duración.

Recibirás una confirmación de tu cita por el medio que prefieras (SMS, WhatsApp o email).`,
  },
  {
    icon: Clock,
    title: "Puntualidad",
    content: `Te rogamos llegues 5-10 minutos antes de tu cita para poder comenzar puntualmente y disfrutar del tratamiento completo.

En caso de retraso, el tiempo perdido se descontará de la duración del tratamiento para no afectar a las siguientes citas programadas.

Si llegas con más de 15 minutos de retraso, nos reservamos el derecho de cancelar la cita.`,
  },
  {
    icon: Gift,
    title: "Vales Regalo",
    content: `Los vales regalo son válidos durante 6 meses desde la fecha de compra.

Pueden canjearse por cualquier tratamiento o producto de nuestro catálogo por el valor indicado.

No son reembolsables ni canjeables por dinero en efectivo.

Para utilizar un vale regalo, es necesario indicarlo en el momento de la reserva.`,
  },
  {
    icon: XCircle,
    title: "Política de Cancelación",
    content: `Entendemos que pueden surgir imprevistos. Te pedimos que nos avises con la mayor antelación posible si no puedes acudir a tu cita.

• Cancelación con más de 24h de antelación: Sin cargo
• Cancelación con menos de 24h: Se cobrará el 50% del tratamiento
• No presentarse sin aviso: Se cobrará el 100% del tratamiento

En caso de llegar tarde, aplicaremos la política de puntualidad.`,
  },
];

const informacionAdicional = [
  {
    icon: AlertCircle,
    title: "Información Importante",
    content: `• Los menores de 18 años deben venir acompañados de un adulto.
• Por favor, infórmanos de cualquier condición médica, alergia o embarazo antes del tratamiento.
• Te recomendamos no tomar el sol ni realizar actividades intensas inmediatamente después de ciertos tratamientos.
• El uso de móviles no está permitido durante los tratamientos para garantizar la relajación de todos.
• Nuestras instalaciones están adaptadas para personas con movilidad reducida.`,
  },
];

const Normativa = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="bg-gradient-hero py-16 md:py-24">
        <div className="content-container text-center">
          <AnimatedSection animation="fade-up">
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-medium text-foreground mb-6">
              Normativa del Centro
            </h1>
            <p className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto">
              Para que tu experiencia sea perfecta, te pedimos que leas y respetes 
              nuestras políticas y normas.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Normativas */}
      <Section>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {normativas.map((normativa, index) => (
            <AnimatedSection key={index} animation="fade-up" delay={index * 100}>
              <InfoCard
                icon={normativa.icon}
                title={normativa.title}
                content={normativa.content}
              />
            </AnimatedSection>
          ))}
        </div>
      </Section>

      {/* Información Adicional */}
      <Section className="bg-secondary/30">
        <AnimatedSection animation="fade-up">
          <SectionHeader 
            title="Información Adicional" 
            subtitle="Datos importantes a tener en cuenta"
          />
        </AnimatedSection>
        <div className="max-w-3xl mx-auto">
          {informacionAdicional.map((info, index) => (
            <AnimatedSection key={index} animation="fade-up" delay={100}>
              <InfoCard
                icon={info.icon}
                title={info.title}
                content={info.content}
              />
            </AnimatedSection>
          ))}
        </div>
      </Section>

      {/* Contact CTA */}
      <Section>
        <AnimatedSection animation="scale">
          <div className="text-center bg-card rounded-2xl p-8 md:p-12 shadow-soft border border-border/50">
            <h2 className="font-serif text-2xl md:text-3xl font-medium text-foreground mb-4">
              ¿Tienes alguna pregunta?
            </h2>
            <p className="text-muted-foreground mb-6 max-w-xl mx-auto">
              Si tienes dudas sobre nuestras políticas o necesitas información adicional, 
              no dudes en contactarnos.
            </p>
            <a
              href="/contacto"
              className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-primary text-primary-foreground font-medium hover:bg-primary/90 transition-smooth"
            >
              Contactar
            </a>
          </div>
        </AnimatedSection>
      </Section>
    </Layout>
  );
};

export default Normativa;
