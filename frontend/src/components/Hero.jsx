import { profile } from '../data/profile'

export default function Hero() {
  return (
    <section id="top" className="min-h-screen flex flex-col justify-center px-6 pt-14">
      <div className="max-w-5xl mx-auto w-full py-24">
        <p className="text-[var(--color-accent)] text-sm font-mono tracking-widest uppercase mb-4">
          Hello, I'm
        </p>
        <h1 className="text-6xl sm:text-7xl md:text-8xl font-bold text-white tracking-tight leading-none mb-4">
          {profile.name}
        </h1>
        <h2 className="text-2xl sm:text-3xl font-medium text-[var(--color-muted)] mb-6">
          {profile.title}
        </h2>
        <p className="text-lg text-[var(--color-muted)] mb-2 flex items-center gap-2">
          <svg className="w-4 h-4 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>
          {profile.location}
        </p>
        <p className="text-lg text-[var(--color-text)] max-w-xl mb-10">
          {profile.tagline}
        </p>
        <div className="flex flex-wrap gap-3">
          <a
            href="#projects"
            className="px-5 py-2.5 rounded-lg bg-[var(--color-accent)] text-[#0b0d14] font-semibold text-sm hover:opacity-90 transition-opacity"
          >
            View Projects
          </a>
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2.5 rounded-lg border border-[var(--color-border)] text-[var(--color-text)] text-sm hover:border-[var(--color-accent)] hover:text-[var(--color-accent)] transition-all"
          >
            LinkedIn
          </a>
          <a
            href={`mailto:${profile.email}`}
            className="px-5 py-2.5 rounded-lg border border-[var(--color-border)] text-[var(--color-text)] text-sm hover:border-[var(--color-accent)] hover:text-[var(--color-accent)] transition-all"
          >
            Get in Touch
          </a>
        </div>
      </div>

      {/* scroll cue */}
      <div className="max-w-5xl mx-auto w-full pb-10 flex justify-start">
        <svg className="w-5 h-5 text-[var(--color-muted)] animate-bounce" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
        </svg>
      </div>
    </section>
  )
}
