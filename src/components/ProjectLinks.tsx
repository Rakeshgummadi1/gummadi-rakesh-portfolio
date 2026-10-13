import { ExternalLink, Globe } from 'lucide-react';
import { FaAppStoreIos, FaGooglePlay } from 'react-icons/fa';
import type { ProjectLink } from '../data/projects';

type ProjectLinksProps = {
  links: ProjectLink[];
  className?: string;
};

const linkIcons = {
  web: <Globe size={15} aria-hidden="true" />,
  playstore: <FaGooglePlay size={14} aria-hidden="true" />,
  appstore: <FaAppStoreIos size={15} aria-hidden="true" />,
};

export function ProjectLinks({ links, className = '' }: ProjectLinksProps) {
  if (links.length === 0) return null;

  return (
    <ul className={`project-links ${className}`.trim()} aria-label="Project links">
      {links.map(({ label, href, kind }) => (
        <li key={href}>
          <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className={`project-links__item project-links__item--${kind}`}
          >
            {linkIcons[kind]}
            {label}
            <ExternalLink size={12} aria-hidden="true" className="project-links__ext" />
          </a>
        </li>
      ))}
    </ul>
  );
}
