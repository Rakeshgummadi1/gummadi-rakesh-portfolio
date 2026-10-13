import { BriefcaseBusiness, CircleCheck, GraduationCap, MapPin, Server } from 'lucide-react';
import { profile } from '../data/profile';
import { SectionHeading } from '../components/SectionHeading';
import { ScrollReveal } from '../components/ScrollReveal';

export function About() {
  return (
    <section id="about" className="content-section section-wrap" aria-labelledby="about-title">
      <ScrollReveal>
        <SectionHeading
          id="about-title"
          eyebrow="A LITTLE ABOUT ME"
          title="Building reliable systems,"
          highlight="one service at a time."
        />
      </ScrollReveal>

      <div className="about">
        <ScrollReveal className="about__copy">
          <p>{profile.about}</p>
          <p>{profile.summary}</p>
          <ul className="about__facts accent-cycle">
            <li>
              <BriefcaseBusiness size={18} aria-hidden="true" />
              <span>
                <strong>{profile.experienceYears} Years</strong>
                <small>Experience</small>
              </span>
            </li>
            <li>
              <Server size={18} aria-hidden="true" />
              <span>
                <strong>Java Backend</strong>
                <small>Focus</small>
              </span>
            </li>
            <li>
              <GraduationCap size={18} aria-hidden="true" />
              <span>
                <strong>B.Tech CS</strong>
                <small>JNTUH</small>
              </span>
            </li>
            <li>
              <MapPin size={18} aria-hidden="true" />
              <span>
                <strong>Hyderabad</strong>
                <small>Telangana</small>
              </span>
            </li>
          </ul>
        </ScrollReveal>

        <div className="about__notes accent-cycle">
          <ScrollReveal delay={80}>
            <article className="card note">
              <CircleCheck className="note__icon" size={22} aria-hidden="true" />
              <div>
                <h3>How I work</h3>
                <ul>
                  {profile.strengths.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            </article>
          </ScrollReveal>
          <ScrollReveal delay={160}>
            <article className="card note">
              <GraduationCap className="note__icon" size={22} aria-hidden="true" />
              <div>
                <h3>Education</h3>
                <p>{profile.education}</p>
              </div>
            </article>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
