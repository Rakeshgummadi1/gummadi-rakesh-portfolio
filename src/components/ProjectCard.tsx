import { ArrowUpRight, BriefcaseBusiness, Globe, Smartphone, Sparkles } from 'lucide-react';
import { productName, type Project } from '../data/projects';
import { techLogos } from '../data/technologies';
import { ProjectLinks } from './ProjectLinks';

type ProjectCardProps = {
  project: Project;
  index: number;
  onOpen: (project: Project) => void;
};

export function ProjectCard({ project, index, onOpen }: ProjectCardProps) {
  const open = () => onOpen(project);
  const name = productName(project);

  return (
    <article className={`pcard pcard--${project.accent}`}>
      <div className="pcard__cover">
        <span className="pcard__no" aria-hidden="true">
          {String(index + 1).padStart(2, '0')}
        </span>
        {project.current ? (
          <span className="pcard__status">
            <i aria-hidden="true" />
            Currently Working
          </span>
        ) : null}
        <ul className="pcard__platforms" aria-label="Platforms">
          {project.platforms.map((platform) => (
            <li key={platform}>
              {platform === 'Mobile' ? (
                <Smartphone size={13} aria-hidden="true" />
              ) : (
                <Globe size={13} aria-hidden="true" />
              )}
              {platform}
            </li>
          ))}
        </ul>
        <div className="pcard__brand">
          <span className={`pcard__logo pcard__logo--${project.logoShape}`}>
            <img src={project.logo} alt={`${name} logo`} width={150} height={150} loading="lazy" />
          </span>
          <span className="pcard__divider" aria-hidden="true" />
          <div className="pcard__brand-copy">
            <strong className="pcard__brand-name">
              {project.product}
              {project.productSuffix ? <span>{project.productSuffix}</span> : null}
            </strong>
            <span className="pcard__brand-category">{project.category}</span>
            <span className="pcard__brand-subtitle">{project.coverSubtitle}</span>
          </div>
        </div>
        <svg className="pcard__wave" viewBox="0 0 400 40" preserveAspectRatio="none" aria-hidden="true">
          <path d="M0 26 C 90 6, 170 6, 250 22 S 360 40, 400 18 L400 40 L0 40 Z" />
        </svg>
      </div>

      <div className="pcard__body">
        <p className="pcard__product">
          {name}
          <span>{project.category}</span>
        </p>
        <h3>{project.title}</h3>
        <p className="pcard__role">
          <BriefcaseBusiness size={14} aria-hidden="true" />
          {project.role}
        </p>

        <p className="pcard__desc">
          {project.description}
        </p>
        <button type="button" className="pcard__more" onClick={open}>
          Show more
        </button>

        <ul className="pcard__highlights">
          {project.highlights.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>

        {project.mobileApp ? (
          <button type="button" className="pcard__mobile" onClick={open}>
            <Smartphone size={15} aria-hidden="true" />
            Includes {project.mobileApp.title}
            <span>
              <Sparkles size={11} aria-hidden="true" />
              {project.mobileApp.badge}
            </span>
          </button>
        ) : null}

        <div className="pcard__footer">
          <ul className="pcard__stack" aria-label="Technologies">
            {project.tags.map((tag) =>
              techLogos[tag] ? (
                <li key={tag} title={tag}>
                  {techLogos[tag]}
                  <span className="sr-only">{tag}</span>
                </li>
              ) : null,
            )}
          </ul>
          <ProjectLinks links={project.links} />
        </div>

        <button type="button" className="pcard__cta" onClick={open}>
          View Full Details
          <ArrowUpRight size={17} aria-hidden="true" />
        </button>
      </div>
    </article>
  );
}
