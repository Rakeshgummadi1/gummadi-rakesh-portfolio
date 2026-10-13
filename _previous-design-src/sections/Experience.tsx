import { experience } from '../data/experience';
import { SectionHeading } from '../components/SectionHeading';
import { ScrollReveal } from '../components/ScrollReveal';

export function Experience() {
  return (
    <section id="experience" className="content-section section-wrap" aria-labelledby="experience-title">
      <ScrollReveal>
        <SectionHeading
          id="experience-title"
          eyebrow="THE JOURNEY"
          title="Experience built through"
          highlight="shipping real work."
        />
      </ScrollReveal>

      <ScrollReveal delay={100}>
        <article className="card experience">
          <span className="experience__dot" aria-hidden="true" />
          <div>
            <p className="kicker">PROFESSIONAL EXPERIENCE</p>
            <h3>{experience.title}</h3>
            <p className="experience__company">
              {experience.company} · {experience.location}
            </p>
            <ul className="experience__list">
              {experience.responsibilities.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <ul className="tag-row accent-cycle" aria-label="Technologies used">
              {experience.technologies.map((tech) => (
                <li key={tech}>{tech}</li>
              ))}
            </ul>
          </div>
          <span className="pill experience__years">{experience.duration}</span>
        </article>
      </ScrollReveal>
    </section>
  );
}
