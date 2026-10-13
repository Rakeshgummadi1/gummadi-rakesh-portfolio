import { ArrowRight, Mail } from 'lucide-react';
import { FaLinkedinIn } from 'react-icons/fa';
import { heroStats, profile } from '../data/profile';
import { CountUp } from '../components/CountUp';
export function Hero() {
  return (
    <section id="home" className="hero" aria-labelledby="hero-title">
      <div className="hero__inner container">
        <div className="hero__copy">
          <p className="eyebrow eyebrow--blue">{profile.role}</p>
          <h1 id="hero-title">
            Hi, I&rsquo;m
            <br />
            <span className="text-blue">{profile.displayName}</span>
          </h1>
          <p className="hero__intro">{profile.intro}</p>

          <div className="hero__actions">
            <a href="#projects" className="btn btn--primary">
              View My Work <ArrowRight size={16} aria-hidden="true" />
            </a>
            <a href="#contact" className="btn btn--outline">
              <span className="hero__mail" aria-hidden="true">
                <Mail size={15} />
              </span>
              Get In Touch
            </a>
            {profile.social.linkedin ? (
              <a
                href={profile.social.linkedin}
                className="hero__social"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn profile"
                title="Want to hire me? Connect on LinkedIn"
              >
                <FaLinkedinIn size={20} aria-hidden="true" />
              </a>
            ) : null}
          </div>

          <ul className="hero__stats" aria-label="Highlights">
            {heroStats.map(({ value, label, icon: Icon }) => (
              <li key={label} className={value ? undefined : 'hero__stat--text'}>
                <span className="hero__stat-icon" aria-hidden="true">
                  <Icon size={20} strokeWidth={2.2} />
                </span>
                <span>
                  {value && (
                    <strong>
                      <CountUp value={value} />
                    </strong>
                  )}
                  <small>{label}</small>
                </span>
              </li>
            ))}
          </ul>
        </div>

        <div className="hero__visual">
          <div className="hero__figure">
            <div className="hero__dots" aria-hidden="true" />
            <div className="hero__portrait">
              <img
                className="hero__photo"
                src={profile.photo.src}
                alt={`Portrait of ${profile.displayName}`}
                width={profile.photo.width}
                height={profile.photo.height}
                fetchPriority="high"
                decoding="async"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
