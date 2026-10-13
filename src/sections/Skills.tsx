import { TechCarousel } from '../components/TechCarousel';
import { ScrollReveal } from '../components/ScrollReveal';
import { skillHighlights } from '../data/technologies';

export function Skills() {
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

        <TechCarousel />

        <ul className="skill-highlights">
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
      </div>
    </section>
  );
}
