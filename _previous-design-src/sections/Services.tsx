import { ArrowUpRight } from 'lucide-react';
import { services } from '../data/services';
import { SectionHeading } from '../components/SectionHeading';
import { ScrollReveal } from '../components/ScrollReveal';

export function Services() {
  return (
    <section id="services" className="content-section section-wrap band band--lavender" aria-labelledby="services-title">
      <ScrollReveal>
        <SectionHeading
          id="services-title"
          eyebrow="WHAT I CAN DO FOR YOU"
          title="Backend work that moves"
          highlight="your product forward."
          aside="From the first API to production-ready services, here is where I can help your team."
        />
      </ScrollReveal>

      <div className="service-grid accent-cycle">
        {services.map(({ title, icon: Icon, description, tags }, index) => (
          <ScrollReveal key={title} delay={(index % 3) * 80}>
            <article className="card service-card">
              <span className="service-card__index" aria-hidden="true">
                {String(index + 1).padStart(2, '0')}
              </span>
              <span className="icon-tile service-card__icon">
                <Icon size={22} aria-hidden="true" />
              </span>
              <h3>{title}</h3>
              <p>{description}</p>
              <ul className="tag-row" aria-label={`${title} tools`}>
                {tags.map((tag) => (
                  <li key={tag}>{tag}</li>
                ))}
              </ul>
              <a href="#contact" className="service-card__link">
                Discuss this
                <ArrowUpRight size={16} aria-hidden="true" />
                <span className="sr-only"> service: {title}</span>
              </a>
            </article>
          </ScrollReveal>
        ))}
      </div>
    </section>
  );
}
