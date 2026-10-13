import { Code2, HeartHandshake, type LucideIcon } from 'lucide-react';
import { interpersonalStrengths, technicalStrengths, type Strength } from '../data/strengths';
import { techLogos } from '../data/technologies';
import { ScrollReveal } from './ScrollReveal';

type StrengthGroupProps = {
  id: string;
  title: string;
  caption: string;
  icon: LucideIcon;
  variant: 'technical' | 'interpersonal';
  items: Strength[];
};

function StrengthGroup({ id, title, caption, icon: GroupIcon, variant, items }: StrengthGroupProps) {
  return (
    <div className={`strengths__group strengths__group--${variant}`} role="group" aria-labelledby={id}>
      <ScrollReveal className="strengths__label">
        <span className="strengths__label-icon" aria-hidden="true">
          <GroupIcon size={18} />
        </span>
        <span>
          <h3 id={id}>{title}</h3>
          <small>{caption}</small>
        </span>
        <span className="strengths__count">{items.length}</span>
      </ScrollReveal>

      <ul className="strengths__grid">
        {items.map(({ title: name, description, icon: Icon, logos }, index) => (
          <li key={name}>
            <ScrollReveal delay={index * 70}>
              <article className="strength-card">
                <div className="strength-card__top">
                  <span className="strength-card__icon" aria-hidden="true">
                    <Icon size={20} />
                  </span>
                  {logos?.length ? (
                    <span className="strength-card__logos" aria-hidden="true">
                      {logos.map((logo) => (
                        <span key={logo} className="project-card__tag-logo" title={logo}>
                          {techLogos[logo]}
                        </span>
                      ))}
                    </span>
                  ) : null}
                </div>
                <h4>{name}</h4>
                <p>{description}</p>
              </article>
            </ScrollReveal>
          </li>
        ))}
      </ul>
    </div>
  );
}

export function CoreStrengths() {
  return (
    <div className="strengths" aria-labelledby="strengths-title" role="region">
      <ScrollReveal className="journey__head strengths__head">
        <p className="eyebrow eyebrow--blue">Core Strengths</p>
        <h2 id="strengths-title">
          What I Bring to the <span className="text-gradient">Team</span>
        </h2>
        <p>Solid backend engineering skills, backed by the way I work with people.</p>
      </ScrollReveal>

      <div className="strengths__groups">
        <StrengthGroup
          id="strengths-technical"
          title="Technical Strengths"
          caption="Backend engineering I deliver every day"
          icon={Code2}
          variant="technical"
          items={technicalStrengths}
        />
        <StrengthGroup
          id="strengths-interpersonal"
          title="Interpersonal Strengths"
          caption="How I work with teams"
          icon={HeartHandshake}
          variant="interpersonal"
          items={interpersonalStrengths}
        />
      </div>
    </div>
  );
}
