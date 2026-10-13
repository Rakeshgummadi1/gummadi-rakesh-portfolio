import type { CSSProperties } from 'react';
import { ChevronRight } from 'lucide-react';
import { techStrip } from '../data/profile';

export function TechStrip() {
  return (
    <section className="tech-strip section-wrap" aria-label="Core technology stack">
      <ul className="tech-strip__list">
        {techStrip.map(({ name, icon: Icon, color }) => (
          <li
            key={name}
            className="tech-strip__item"
            style={{ '--tech-color': color } as CSSProperties}
          >
            <Icon size={26} strokeWidth={1.8} aria-hidden="true" />
            <span>{name}</span>
          </li>
        ))}
      </ul>
      <a href="#skills" className="tech-strip__more">
        <span>and more...</span>
        <span className="tech-strip__more-icon" aria-hidden="true">
          <ChevronRight size={16} />
        </span>
        <span className="sr-only">See all skills</span>
      </a>
    </section>
  );
}
