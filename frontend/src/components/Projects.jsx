import { profile } from '../data/profile'
import { SectionLabel } from './About'

export default function Projects() {
  return (
    <section id="projects" className="py-24 px-6 border-t border-[var(--color-border)]">
      <div className="max-w-5xl mx-auto">
        <SectionLabel>Projects</SectionLabel>
        <div className="mt-12 grid sm:grid-cols-2 gap-5">
          {profile.projects.map((project, i) => (
            <ProjectCard key={i} project={project} />
          ))}
        </div>
      </div>
    </section>
  )
}

function ProjectCard({ project }) {
  return (
    <a
      href={project.github}
      target="_blank"
      rel="noopener noreferrer"
      className="group flex flex-col bg-[var(--color-surface)] border border-[var(--color-border)] rounded-xl p-6 hover:border-[var(--color-accent)]/50 hover:bg-[var(--color-surface-2)] transition-all"
    >
      <div className="flex items-start justify-between gap-4 mb-3">
        <h3 className="text-white font-semibold text-base group-hover:text-[var(--color-accent)] transition-colors">
          {project.name}
        </h3>
        <GithubArrow />
      </div>

      <p className="text-[var(--color-muted)] text-sm leading-relaxed flex-1 mb-4">
        {project.description}
      </p>

      <div className="flex flex-wrap gap-1.5">
        {project.tech.map(t => (
          <span
            key={t}
            className="text-xs px-2 py-0.5 rounded-full bg-[var(--color-accent-dim)] text-[var(--color-accent)] font-mono"
          >
            {t}
          </span>
        ))}
      </div>
    </a>
  )
}

function GithubArrow() {
  return (
    <svg
      className="w-4 h-4 text-[var(--color-muted)] group-hover:text-[var(--color-accent)] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all shrink-0 mt-0.5"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
    </svg>
  )
}
