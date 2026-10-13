import { useActiveSection } from '../hooks/useScroll';

const sections = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'services', label: 'Services' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'architecture', label: 'Architecture' },
  { id: 'experience', label: 'Experience' },
  { id: 'approach', label: 'Process' },
  { id: 'contact', label: 'Contact' },
] as const;

const sectionIds = sections.map((section) => section.id);

export function SectionRail() {
  const activeId = useActiveSection(sectionIds);
  const activeIndex = sections.findIndex((section) => section.id === activeId);

  return (
    <nav className="section-rail" aria-label="Page sections">
      <ol>
        {sections.map((section, index) => (
          <li key={section.id}>
            <a
              href={`#${section.id}`}
              className={`section-rail__link ${index === activeIndex ? 'is-active' : ''} ${
                index < activeIndex ? 'is-past' : ''
              }`.trim()}
              aria-current={index === activeIndex ? 'true' : undefined}
            >
              <span className="section-rail__label">{section.label}</span>
              <span className="section-rail__dot" aria-hidden="true" />
            </a>
          </li>
        ))}
      </ol>
    </nav>
  );
}
