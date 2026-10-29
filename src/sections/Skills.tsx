import { useState } from 'react';
import { TechCarousel } from '../components/TechCarousel';
import { ScrollReveal } from '../components/ScrollReveal';
import { skillHighlights, techLogos, techUsage, type CarouselTech } from '../data/technologies';

function TechUsagePanel({ tech }: { tech: CarouselTech }) {
  const { summary, usedIn } = techUsage[tech];
  return (
    <div className="tech-usage">
      <div className="tech-usage__head">
        <span className="tech-usage__logo" aria-hidden="true">
          {techLogos[tech]}
        </span>
        <span>
          <small>Where I used it</small>
          <strong>{tech}</strong>
          <span className="tech-usage__summary">{summary}</span>
        </span>
      </div>
      {usedIn.length > 0 ? (
        <ul className="tech-usage__list">
          {usedIn.map(({ place, detail }) => (
            <li key={place} className="tech-usage__item">
              <strong>{place}</strong>
              <small>{detail}</small>
            </li>
          ))}
        </ul>
      ) : null}
    </div>
  );
}

export function Skills() {
  const [usageTech, setUsageTech] = useState<CarouselTech | null>(null);

  return (
    <section id="skills" className="skills" aria-labelledby="skills-title">
      <div className="container">
        <ScrollReveal className="skills__heading">
          <p className="eyebrow eyebrow--blue">My Skills</p>
          <h2 id="skills-title">
            Technologies I <span className="text-blue">Work With</span>
          </h2>
          <p>
            A diverse set of tools and technologies to build scalable, secure and high-performance
            applications.
          </p>
        </ScrollReveal>

        <TechCarousel onDetailChange={setUsageTech} />

        <div
          className={`skill-highlights-area ${usageTech ? 'is-showing-usage' : ''}`.trim()}
          aria-live="polite"
        >
          <ul className="skill-highlights" aria-hidden={usageTech ? true : undefined}>
            {skillHighlights.map(({ title, description, icon: Icon, tone }, index) => (
              <li key={title}>
                <ScrollReveal className={`skill-highlight skill-highlight--${tone}`} delay={index * 80}>
                  <span className="skill-highlight__icon">
                    <Icon size={18} aria-hidden="true" />
                  </span>
                  <span>
                    <strong>{title}</strong>
                    <small>{description}</small>
                  </span>
                </ScrollReveal>
              </li>
            ))}
          </ul>
          {usageTech ? <TechUsagePanel key={usageTech} tech={usageTech} /> : null}
        </div>
      </div>
    </section>
  );
}
