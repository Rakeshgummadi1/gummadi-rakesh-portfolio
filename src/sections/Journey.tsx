import { useState } from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';
import { FaLinkedinIn } from 'react-icons/fa';
import { aboutFacts, aboutFocus, aboutStack, profile, timeline } from '../data/profile';
import { techLogos } from '../data/technologies';
import { ScrollReveal } from '../components/ScrollReveal';
import { CoreStrengths } from '../components/CoreStrengths';

export function Journey() {
  const [expanded, setExpanded] = useState(false);

  return (
    <section className="journey" aria-label="Experience and about">
      <div className="container">
        <ScrollReveal id="experience" className="journey__head">
          <p className="eyebrow eyebrow--blue">Experience</p>
          <h2>
            My Professional <span className="text-gradient">Journey</span>
          </h2>
          <p>From graduation to a full-time engineering role — the path so far.</p>
        </ScrollReveal>

        <ol className="roadmap">
          {timeline.map(({ period, title, subtitle, icon: Icon, tone, badge, current, points }, index) => (
            <li key={title} className={`roadmap__step roadmap__step--${tone}`}>
              <ScrollReveal delay={index * 120}>
                <div className="roadmap__node" aria-hidden="true">
                  <Icon size={20} />
                  {current ? <span className="roadmap__pulse" /> : null}
                </div>
                <article className={`roadmap__card ${current ? 'is-current' : ''}`.trim()}>
                  <div className="roadmap__meta">
                    <span className="roadmap__step-no">Step {String(index + 1).padStart(2, '0')}</span>
                    {badge ? <span className="roadmap__badge">{badge}</span> : null}
                  </div>
                  <p className="roadmap__period">{period}</p>
                  <h3>{title}</h3>
                  <p className="roadmap__subtitle">{subtitle}</p>
                  <ul>
                    {points.map((point) => (
                      <li key={point}>{point}</li>
                    ))}
                  </ul>
                </article>
              </ScrollReveal>
            </li>
          ))}
        </ol>

        <CoreStrengths />

        <ScrollReveal id="about" className="about">
          <aside className="about__profile">
            <span className="about__avatar" aria-hidden="true">
              {profile.initials}
            </span>
            <strong>{profile.displayName}</strong>
            <small>{profile.role}</small>
            <span className="about__status">
              <i aria-hidden="true" />
              Open to opportunities
            </span>
            <dl className="about__facts">
              {aboutFacts.map(({ label, value, icon: Icon }) => (
                <div key={label}>
                  <dt>
                    <Icon size={15} aria-hidden="true" />
                    {label}
                  </dt>
                  <dd>{value}</dd>
                </div>
              ))}
            </dl>
            {profile.social.linkedin ? (
              <a
                href={profile.social.linkedin}
                className="about__linkedin"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedinIn size={16} aria-hidden="true" />
                Want to hire me? Let&apos;s talk
              </a>
            ) : null}
          </aside>

          <div className="about__body">
            <p className="eyebrow eyebrow--blue">About Me</p>
            <h2>
              More <span className="text-gradient">About Me</span>
            </h2>
            <p className="about__lead">{profile.about}</p>

            <ul className="about__focus">
              {aboutFocus.map(({ title, description, icon: Icon, tone }) => (
                <li key={title} className={`about__focus-item about__focus-item--${tone}`}>
                  <span className="about__focus-icon">
                    <Icon size={18} aria-hidden="true" />
                  </span>
                  <strong>{title}</strong>
                  <small>{description}</small>
                </li>
              ))}
            </ul>

            {expanded ? (
              <div className="about__more">
                {profile.aboutMore.map((text) => (
                  <p key={text}>{text}</p>
                ))}
              </div>
            ) : null}

            <div className="about__footer">
              <ul className="about__stack" aria-label="Core stack">
                {aboutStack.map((name) => (
                  <li key={name}>
                    <span className="project-card__tag-logo" aria-hidden="true">
                      {techLogos[name]}
                    </span>
                    {name}
                  </li>
                ))}
              </ul>
              <button
                type="button"
                className="btn btn--primary btn--small"
                onClick={() => setExpanded((value) => !value)}
                aria-expanded={expanded}
              >
                {expanded ? 'Show Less' : 'Read More'}
                {expanded ? (
                  <Sparkles size={15} aria-hidden="true" />
                ) : (
                  <ArrowRight size={15} aria-hidden="true" />
                )}
              </button>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
