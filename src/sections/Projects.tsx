import { useState } from 'react';
import { ArrowRight, FolderOpen } from 'lucide-react';
import { projects, type Project } from '../data/projects';
import { profile } from '../data/profile';
import { ProjectCard } from '../components/ProjectCard';
import { ProjectModal } from '../components/ProjectModal';
import { ScrollReveal } from '../components/ScrollReveal';

export function Projects() {
  const [selected, setSelected] = useState<Project | null>(null);
  const { github } = profile.social;

  return (
    <section id="projects" className="projects" aria-labelledby="projects-title">
      <div className="container">
        <ScrollReveal className="section-head">
          <div>
            <p className="section-head__eyebrow">
              <FolderOpen size={14} aria-hidden="true" />
              Featured Projects
            </p>
            <h2 id="projects-title">
              Some of My <span>Work</span>
            </h2>
            <p className="section-head__lead">
              Live products I&apos;ve built and shipped. Open a project to see my role, what I delivered and the
              stack behind it.
            </p>
          </div>
          {github ? (
            <a href={github} className="btn btn--pill btn--small section-head__link" target="_blank" rel="noopener noreferrer">
              View All Projects <ArrowRight size={15} aria-hidden="true" />
            </a>
          ) : null}
        </ScrollReveal>

        <div className="project-grid">
          {projects.map((project, index) => (
            <ScrollReveal key={project.id} delay={index * 90}>
              <ProjectCard project={project} index={index} onOpen={setSelected} />
            </ScrollReveal>
          ))}
        </div>
      </div>

      <ProjectModal project={selected} onClose={() => setSelected(null)} />
    </section>
  );
}
