import { useState } from 'react';
import { skillCategories, skillGroups } from '../data/skills';
import { SectionHeading } from '../components/SectionHeading';
import { ScrollReveal } from '../components/ScrollReveal';

type Filter = (typeof skillCategories)[number];

export function Skills() {
  const [filter, setFilter] = useState<Filter>('All');
  const visible = filter === 'All' ? skillGroups : skillGroups.filter((g) => g.category === filter);

  return (
    <section id="skills" className="content-section section-wrap" aria-labelledby="skills-title">
      <ScrollReveal>
        <SectionHeading
          id="skills-title"
          eyebrow="MY TOOLKIT"
          title="Skills I use to turn"
          highlight="ideas into software."
        />
      </ScrollReveal>

      <ScrollReveal>
        <div className="filter-tabs" role="group" aria-label="Filter skills by category">
          {skillCategories.map((category) => {
            const count =
              category === 'All'
                ? skillGroups.length
                : skillGroups.filter((g) => g.category === category).length;
            return (
              <button
                key={category}
                type="button"
                className={`filter-tabs__tab ${filter === category ? 'is-active' : ''}`.trim()}
                aria-pressed={filter === category}
                onClick={() => setFilter(category)}
              >
                {category}
                <span className="filter-tabs__count">{count}</span>
              </button>
            );
          })}
        </div>
      </ScrollReveal>

      <div className="skill-grid accent-cycle" key={filter}>
        {visible.map(({ title, icon: Icon, skills }, index) => (
          <article
            key={title}
            className="card skill-card pop-in"
            style={{ animationDelay: `${index * 50}ms` }}
          >
            <div className="skill-card__head">
              <span className="icon-tile">
                <Icon size={20} aria-hidden="true" />
              </span>
              <h3>{title}</h3>
            </div>
            <ul className="chip-list">
              {skills.map((skill) => (
                <li key={skill}>{skill}</li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
}
