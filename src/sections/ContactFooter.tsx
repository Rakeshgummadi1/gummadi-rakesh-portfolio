import { ArrowUp, Download, Github, Linkedin, Mail, MapPin, Phone, type LucideIcon } from 'lucide-react';
import { navLinks, profile } from '../data/profile';

type Channel = {
  icon: LucideIcon;
  label: string;
  caption: string;
  tone: 'blue' | 'green' | 'orange' | 'purple';
  href?: string;
  external?: boolean;
};

export function ContactFooter() {
  const { email, phone, linkedin, github } = profile.social;
  const channels: Channel[] = [
    { icon: Mail, label: email, caption: 'Email me', tone: 'blue', href: `mailto:${email}` },
    { icon: Phone, label: phone, caption: 'Call me', tone: 'green', href: `tel:${phone.replace(/\s/g, '')}` },
    { icon: MapPin, label: profile.location, caption: 'Based in', tone: 'orange' },
  ];
  if (linkedin) {
    channels.push({
      icon: Linkedin,
      label: 'Message me on LinkedIn',
      caption: 'Want to hire me?',
      tone: 'purple',
      href: linkedin,
      external: true,
    });
  }
  if (github) {
    channels.push({ icon: Github, label: 'GitHub', caption: 'See my code', tone: 'purple', href: github, external: true });
  }

  return (
    <footer id="contact" className="contact" aria-labelledby="contact-title">
      <div className="container">
        <div className="contact__panel">
          <div className="contact__copy">
            <p className="contact__eyebrow">
              <i aria-hidden="true" />
              Open to new opportunities
            </p>
            <h2 id="contact-title">
              Let&apos;s Build Something <span>Great Together</span>
            </h2>
            <p>
              Looking for a Java Full Stack Developer for your team? I&apos;d love to hear about it. Reach out and
              I&apos;ll get back to you quickly.
            </p>
            <div className="contact__actions">
              <a href={`mailto:${email}`} className="btn contact__cta">
                <span className="contact__cta-icon" aria-hidden="true">
                  <Mail size={15} />
                </span>
                Say Hello
              </a>
              <a href={profile.resumeUrl} className="btn contact__ghost" download>
                <Download size={16} aria-hidden="true" />
                Download Resume
              </a>
            </div>
          </div>

          <ul className="contact__channels">
            {channels.map(({ icon: Icon, label, caption, tone, href, external }) => {
              const content = (
                <>
                  <span className={`contact__icon contact__icon--${tone}`}>
                    <Icon size={20} aria-hidden="true" />
                  </span>
                  <span>
                    <small>{caption}</small>
                    <strong>{label}</strong>
                  </span>
                </>
              );
              return (
                <li key={caption}>
                  {href ? (
                    <a
                      href={href}
                      target={external ? '_blank' : undefined}
                      rel={external ? 'noopener noreferrer' : undefined}
                    >
                      {content}
                    </a>
                  ) : (
                    <span>{content}</span>
                  )}
                </li>
              );
            })}
          </ul>
        </div>

        <div className="contact__bottom">
          <a href="#home" className="contact__brand">
            <span className="contact__brand-mark" aria-hidden="true">
              {profile.initials}
            </span>
            <span>
              <strong>{profile.displayName}</strong>
              <small>{profile.role}</small>
            </span>
          </a>

          <nav className="contact__links" aria-label="Footer">
            {navLinks.map((link) => (
              <a key={link.id} href={`#${link.id}`}>
                {link.label}
              </a>
            ))}
          </nav>

          <div className="contact__legal">
            <small suppressHydrationWarning>
              © {new Date().getFullYear()} {profile.displayName}. All rights reserved.
            </small>
            <a href="#home" className="contact__top" aria-label="Back to top">
              <ArrowUp size={16} aria-hidden="true" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
