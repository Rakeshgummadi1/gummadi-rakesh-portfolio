import { ChevronDown, ChevronRight, CircleCheck } from 'lucide-react';
import type { Project } from '../data/projects';

type ProjectCardProps = {
  project: Project;
  index: number;
};

export function ProjectCard({ project, index }: ProjectCardProps) {
  const Icon = project.icon;

  return (
    <article className={`card project-card project-card--${project.accent}`}>
      <div className="project-card__banner">
        <div className="project-card__banner-top">
          <span className="project-card__icon">
            <Icon size={26} aria-hidden="true" />
          </span>
          <span className="project-card__number">{String(index + 1).padStart(2, '0')}</span>
        </div>
        <ol className="project-card__flow" aria-label="How it works">
          {project.flow.map((step, i) => (
            <li key={step}>
              <span>{step}</span>
              {i < project.flow.length - 1 ? <ChevronRight size={14} aria-hidden="true" /> : null}
            </li>
          ))}
        </ol>
      </div>

      <div className="project-card__body">
        <div className="project-card__top">
          <p className="kicker">{project.category}</p>
          <span className="pill">{project.role}</span>
        </div>
        <h3>{project.title}</h3>
        <p className="project-card__description">{project.description}</p>

        {project.highlights ? (
          <ul className="project-card__highlights">
            {project.highlights.map((item) => (
              <li key={item}>
                <CircleCheck size={15} aria-hidden="true" />
                {item}
              </li>
            ))}
          </ul>
        ) : null}

        <details className="project-card__details">
          <summary>
            Roles &amp; responsibilities
            <ChevronDown size={16} aria-hidden="true" />
          </summary>
          <ul>
            {project.responsibilities.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </details>

        <ul className="tag-row accent-cycle" aria-label="Technologies used">
          {project.technologies.map((tech) => (
            <li key={tech}>{tech}</li>
          ))}
        </ul>
      </div>
    </article>
  );
}
