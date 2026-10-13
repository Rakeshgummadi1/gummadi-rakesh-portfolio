import { useEffect, useRef, useState, type MouseEvent } from 'react';
import { Download, Eye, Menu, X } from 'lucide-react';
import { navLinks, profile } from '../data/profile';
import { useActiveSection, useScrolled } from '../hooks/useScroll';
import { useVisitorCount } from '../hooks/useVisitorCount';

const VISITS_VISIBLE_MS = 6000;

const sectionIds = navLinks.map((link) => link.id);

export function Navbar() {
  const scrolled = useScrolled(12);
  const activeId = useActiveSection(sectionIds);
  const [open, setOpen] = useState(false);
  const visitors = useVisitorCount();
  const [showVisits, setShowVisits] = useState(false);
  const hideTimer = useRef<number | undefined>(undefined);

  useEffect(() => () => window.clearTimeout(hideTimer.current), []);

  // Hidden owner shortcut: double-click the RG mark to peek at the live visitor count
  const toggleVisits = (event: MouseEvent) => {
    event.preventDefault();
    window.clearTimeout(hideTimer.current);
    const next = !showVisits;
    setShowVisits(next);
    if (next) hideTimer.current = window.setTimeout(() => setShowVisits(false), VISITS_VISIBLE_MS);
  };

  useEffect(() => {
    if (!open) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setOpen(false);
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [open]);

  const closeMenu = () => setOpen(false);

  return (
    <header className={`topbar ${scrolled ? 'topbar--scrolled' : ''}`.trim()}>
      <div className="topbar__inner container">
        <div className="brand-wrap">
          <a href="#home" className="brand" onClick={closeMenu}>
            <span className="brand__mark" aria-hidden="true" onDoubleClick={toggleVisits}>
              <span className="brand__r">R</span>
              <span className="brand__g">G</span>
            </span>
            <span className="brand__copy">
              <strong>{profile.displayName}</strong>
              <small>{profile.role}</small>
            </span>
          </a>

          {showVisits && (
            <div className="visit-count" role="status">
              <span className="visit-count__icon" aria-hidden="true">
                <Eye size={16} />
              </span>
              <span>
                <small>
                  <i aria-hidden="true" /> Live visitors
                </small>
                <strong>{visitors === null ? '—' : visitors.toLocaleString('en-IN')}</strong>
              </span>
            </div>
          )}
        </div>

        <nav id="primary-nav" className={`nav ${open ? 'nav--open' : ''}`.trim()} aria-label="Primary">
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              className={`nav__link ${activeId === link.id ? 'is-active' : ''}`.trim()}
              aria-current={activeId === link.id ? 'true' : undefined}
              onClick={closeMenu}
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="topbar__actions">
          <a href={profile.resumeUrl} className="btn btn--primary btn--pill topbar__resume" download>
            <Download size={16} aria-hidden="true" />
            <span>Download Resume</span>
          </a>
          <button
            type="button"
            className="icon-button topbar__menu"
            aria-expanded={open}
            aria-controls="primary-nav"
            aria-label={open ? 'Close menu' : 'Open menu'}
            onClick={() => setOpen((value) => !value)}
          >
            {open ? <X size={20} aria-hidden="true" /> : <Menu size={20} aria-hidden="true" />}
          </button>
        </div>
      </div>
    </header>
  );
}
