import { useEffect, useState } from 'react';
import { Menu, Moon, Send, Sun, X } from 'lucide-react';
import { navLinks, profile } from '../data/profile';
import { useActiveSection, useScrolled } from '../hooks/useScroll';
import { useTheme } from '../hooks/useTheme';

const sectionIds = navLinks.map((link) => link.id);

export function Navbar() {
  const scrolled = useScrolled(12);
  const activeId = useActiveSection(sectionIds);
  const { theme, toggleTheme } = useTheme();
  const [open, setOpen] = useState(false);

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
      <a href="#home" className="brand" onClick={closeMenu}>
        <span className="brand__mark" aria-hidden="true">
          {profile.initials}
        </span>
        <span className="brand__copy">
          <strong>{profile.fullName}</strong>
          <small>{profile.shortRole}</small>
        </span>
      </a>

      <nav
        id="primary-nav"
        className={`nav ${open ? 'nav--open' : ''}`.trim()}
        aria-label="Primary"
      >
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
        <a href="#contact" className="btn btn--primary topbar__connect" onClick={closeMenu}>
          <Send size={15} aria-hidden="true" />
          <span>Let&apos;s Connect</span>
        </a>
        <button
          type="button"
          className="icon-button"
          onClick={toggleTheme}
          aria-label={theme === 'dark' ? 'Switch to light theme' : 'Switch to dark theme'}
        >
          {theme === 'dark' ? <Sun size={18} aria-hidden="true" /> : <Moon size={18} aria-hidden="true" />}
        </button>
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
    </header>
  );
}
