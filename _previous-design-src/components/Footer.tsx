import { ArrowUp, Mail, Phone } from 'lucide-react';
import { profile } from '../data/profile';

export function Footer() {
  const { email, phone } = profile.social;

  return (
    <footer className="footer section-wrap">
      <a href="#home" className="brand brand--small">
        <span className="brand__mark" aria-hidden="true">
          {profile.initials}
        </span>
        <span className="brand__copy">
          <strong>{profile.fullName}</strong>
          <small>{profile.shortRole}</small>
        </span>
      </a>

      <div className="footer__contact">
        <a href={`mailto:${email}`}>
          <Mail size={14} aria-hidden="true" />
          {email}
        </a>
        <a href={`tel:${phone.replace(/\s/g, '')}`}>
          <Phone size={14} aria-hidden="true" />
          {phone}
        </a>
      </div>

      <a href="#home" className="footer__top">
        Back to top <ArrowUp size={14} aria-hidden="true" />
      </a>
    </footer>
  );
}
