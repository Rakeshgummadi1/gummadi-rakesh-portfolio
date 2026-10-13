import { Activity, Link2, Lock, Rocket, Sparkles, type LucideIcon } from 'lucide-react';
import { approachItems } from '../data/experience';
import { SectionHeading } from '../components/SectionHeading';
import { ScrollReveal } from '../components/ScrollReveal';

const icons: Record<(typeof approachItems)[number]['title'], LucideIcon> = {
  Build: Rocket,
  Integrate: Link2,
  Secure: Lock,
  Observe: Activity,
  Improve: Sparkles,
};

export function Approach() {
  return (
    <section id="approach" className="content-section section-wrap band band--peach" aria-labelledby="approach-title">
      <ScrollReveal>
        <SectionHeading
          id="approach-title"
          eyebrow="MY PROCESS"
          title="How I approach"
          highlight="every feature."
        />
      </ScrollReveal>

      <ol className="process accent-cycle">
        {approachItems.map((item, index) => {
          const Icon = icons[item.title];
          return (
            <li key={item.title} className="process__step">
              <ScrollReveal delay={index * 90}>
                <div className="process__marker">
                  <span className="process__icon">
                    <Icon size={20} aria-hidden="true" />
                  </span>
                  <span className="process__number">{String(index + 1).padStart(2, '0')}</span>
                </div>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </ScrollReveal>
            </li>
          );
        })}
      </ol>
    </section>
  );
}
