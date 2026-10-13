import { projects } from '../data/projects';
import { ProjectCard } from '../components/ProjectCard';
import { SectionHeading } from '../components/SectionHeading';
import { ScrollReveal } from '../components/ScrollReveal';

export function Projects() {
  return (
    <section id="projects" className="content-section section-wrap band band--sky" aria-labelledby="projects-title">
      <ScrollReveal>
        <SectionHeading
          id="projects-title"
          eyebrow="SELECTED WORK"
          title="Projects with a"
          highlight="purpose."
          aside="Production systems I've built and maintained as a Java developer."
        />
      </ScrollReveal>

      <div className="project-grid">
        {projects.map((project, index) => (
          <ScrollReveal key={project.id} delay={index * 100}>
            <ProjectCard project={project} index={index} />
          </ScrollReveal>
        ))}
      </div>
    </section>
  );
}
