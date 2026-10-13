import { useEffect, useRef } from 'react';
import {
  CircleCheck,
  Layers,
  ListChecks,
  MonitorSmartphone,
  Smartphone,
  Sparkles,
  Tag,
  UserRound,
  X,
} from 'lucide-react';
import { productName, type Project } from '../data/projects';
import { techLogos } from '../data/technologies';
import { ProjectLinks } from './ProjectLinks';

type ProjectModalProps = {
  project: Project | null;
  onClose: () => void;
};

function TechChips({ items }: { items: string[] }) {
  return (
    <ul className="project-modal__chips">
      {items.map((tech) => (
        <li key={tech}>
          {techLogos[tech] ? (
            <span className="project-card__tag-logo" aria-hidden="true">
              {techLogos[tech]}
            </span>
          ) : null}
          {tech}
        </li>
      ))}
    </ul>
  );
}

function CheckList({ items }: { items: string[] }) {
  return (
    <ul className="project-modal__list">
      {items.map((item) => (
        <li key={item}>
          <CircleCheck size={16} aria-hidden="true" />
          {item}
        </li>
      ))}
    </ul>
  );
}

export function ProjectModal({ project, onClose }: ProjectModalProps) {
  const dialogRef = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;
    if (project && !dialog.open) dialog.showModal();
    if (!project && dialog.open) dialog.close();
  }, [project]);

  const Icon = project?.icon;

  return (
    <dialog
      ref={dialogRef}
      className={`project-modal project-modal--${project?.accent ?? 'blue'}`}
      aria-labelledby="project-modal-title"
      onClose={onClose}
      onClick={(event) => {
        if (event.target === event.currentTarget) onClose();
      }}
    >
      {project && Icon ? (
        <>
          <header className="project-modal__hero">
            <button type="button" className="project-modal__close" onClick={onClose} aria-label="Close">
              <X size={18} aria-hidden="true" />
            </button>
            <div className="project-modal__brand">
              <span className="project-modal__logo">
                <img src={project.logo} alt={`${productName(project)} logo`} width={64} height={64} />
              </span>
              <div>
                <p className="project-modal__product">
                  {productName(project)}
                  {project.current ? (
                    <span className="pcard__status pcard__status--inline">
                      <i aria-hidden="true" />
                      Currently Working
                    </span>
                  ) : null}
                </p>
                <p className="project-modal__role">{project.role}</p>
              </div>
            </div>
            <h3 id="project-modal-title">{project.title}</h3>
            <ul className="project-modal__highlights">
              {project.highlights.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <ProjectLinks links={project.links} className="project-modal__links" />
          </header>

          <div className="project-modal__content">
            <dl className="project-modal__facts">
              {[
                { label: 'Category', value: project.category, icon: Tag },
                { label: 'My Role', value: project.role.split('·')[0].trim(), icon: UserRound },
                { label: 'Platforms', value: project.platforms.join(' + '), icon: MonitorSmartphone },
                {
                  label: 'Tech Stack',
                  value: `${project.technologies.length + (project.mobileApp?.technologies.length ?? 0)}+ tools`,
                  icon: Layers,
                },
              ].map(({ label, value, icon: FactIcon }) => (
                <div key={label}>
                  <dt>
                    <FactIcon size={14} aria-hidden="true" />
                    {label}
                  </dt>
                  <dd>{value}</dd>
                </div>
              ))}
            </dl>

            <p className="project-modal__description">{project.description}</p>

            <h4>
              <ListChecks size={17} aria-hidden="true" />
              Roles &amp; Responsibilities
            </h4>
            <CheckList items={project.responsibilities} />

            <h4>
              <Layers size={17} aria-hidden="true" />
              Technologies
            </h4>
            <TechChips items={project.technologies} />

            {project.mobileApp ? (
              <section className="project-modal__extension" aria-labelledby="project-modal-mobile">
                <div className="project-modal__extension-head">
                  <span className="project-modal__extension-icon">
                    <Smartphone size={18} aria-hidden="true" />
                  </span>
                  <h4 id="project-modal-mobile">{project.mobileApp.title}</h4>
                  <span className="project-modal__badge">
                    <Sparkles size={13} aria-hidden="true" />
                    {project.mobileApp.badge}
                  </span>
                </div>
                <p className="project-modal__description">{project.mobileApp.description}</p>
                <CheckList items={project.mobileApp.responsibilities} />
                <TechChips items={project.mobileApp.technologies} />
              </section>
            ) : null}
          </div>
        </>
      ) : null}
    </dialog>
  );
}
