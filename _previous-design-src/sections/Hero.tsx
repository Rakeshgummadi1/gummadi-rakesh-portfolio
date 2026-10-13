import { ArrowDownToLine, ArrowRight, BriefcaseBusiness } from 'lucide-react';
import { heroStats, profile, typingPhrases } from '../data/profile';
import { Button } from '../components/Button';
import { CountUp } from '../components/CountUp';
import { TypingText } from '../components/TypingText';
import profileImage from '../assets/profile.jpg';

export function Hero() {
  return (
    <section id="home" className="hero section-wrap" aria-labelledby="hero-title">
      <div className="hero__copy">
        <p className="availability">
          <span className="availability__dot" aria-hidden="true" />
          Available for Opportunities
        </p>

        <h1 id="hero-title">
          Hello, I&apos;m
          <br />
          <span className="gradient-text">{profile.fullName}</span>
        </h1>

        <p className="hero__role">
          <span className="hero__role-line" aria-hidden="true" />
          {profile.shortRole}
        </p>

        <p className="hero__typing">
          I build <TypingText phrases={typingPhrases} />
        </p>

        <p className="hero__description">
          I&apos;m a {profile.shortRole} with{' '}
          <strong>{profile.experienceYears} years of experience</strong> building scalable
          backend systems using Spring Boot, Microservices, REST APIs and Kafka. Passionate
          about solving real-world problems and building impactful products.
        </p>

        <div className="hero__actions">
          <Button href="#projects">
            <BriefcaseBusiness size={18} aria-hidden="true" />
            View My Work
            <ArrowRight size={16} aria-hidden="true" />
          </Button>
          <Button href={profile.resumeUrl} variant="secondary" download>
            <ArrowDownToLine size={18} aria-hidden="true" />
            Download Resume
          </Button>
        </div>
      </div>

      <div className="hero__visual">
        <div className="portrait">
          <img
            src={profileImage}
            alt={`Portrait of ${profile.fullName}`}
            width={640}
            height={800}
            fetchPriority="high"
          />
        </div>

        <p className="handwritten" aria-hidden="true">
          Build
          <br />
          Learn
          <br />
          Grow
          <svg className="handwritten__swoosh" viewBox="0 0 90 20">
            <path d="M3 14 C25 4, 55 3, 87 8" />
          </svg>
        </p>
      </div>

      <ul className="stats accent-cycle" aria-label="Highlights">
        {heroStats.map(({ icon: Icon, value, label }) => (
          <li key={label} className="stats__item">
            <Icon className="stats__icon" size={24} aria-hidden="true" />
            <span>
              <strong>
                <CountUp value={value} />
              </strong>
              <small>{label}</small>
            </span>
          </li>
        ))}
      </ul>
    </section>
  );
}
