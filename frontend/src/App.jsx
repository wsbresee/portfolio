import Nav from './components/Nav'
import Hero from './components/Hero'
import About from './components/About'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Education from './components/Education'
import Skills from './components/Skills'
import { profile } from './data/profile'

export default function App() {
  return (
    <div className="min-h-screen bg-[var(--color-bg)] text-[var(--color-text)]">
      <Nav />
      <main>
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Education />
        <Skills />
      </main>
      <footer className="border-t border-[var(--color-border)] py-8 px-6 mt-12">
        <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-[var(--color-muted)] text-sm">
            Built with React + Vite · {new Date().getFullYear()}
          </p>
          <div className="flex gap-6">
            <a href={profile.github} target="_blank" rel="noopener noreferrer"
              className="text-sm text-[var(--color-muted)] hover:text-[var(--color-accent)] transition-colors">
              GitHub
            </a>
            <a href={profile.linkedin} target="_blank" rel="noopener noreferrer"
              className="text-sm text-[var(--color-muted)] hover:text-[var(--color-accent)] transition-colors">
              LinkedIn
            </a>
            <a href={`mailto:${profile.email}`}
              className="text-sm text-[var(--color-muted)] hover:text-[var(--color-accent)] transition-colors">
              Email
            </a>
          </div>
        </div>
      </footer>
    </div>
  )
}
