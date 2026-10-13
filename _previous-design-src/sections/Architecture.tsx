import { ArchitectureDiagram } from '../components/ArchitectureDiagram';
import { SectionHeading } from '../components/SectionHeading';
import { ScrollReveal } from '../components/ScrollReveal';

export function Architecture() {
  return (
    <section
      id="architecture"
      className="content-section section-wrap band band--dark"
      aria-labelledby="architecture-title"
    >
      <ScrollReveal>
        <SectionHeading
          id="architecture-title"
          eyebrow="SYSTEM DESIGN"
          title="How I build"
          highlight="backend systems."
          aside="Clear entry points, secure access, modular services, and observable event flows."
        />
      </ScrollReveal>
      <ScrollReveal delay={100}>
        <ArchitectureDiagram />
      </ScrollReveal>
    </section>
  );
}
