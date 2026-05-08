import { profile } from '../data/profile'

const links = [
  { label: 'About', href: '#about' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Education', href: '#education' },
  { label: 'Skills', href: '#skills' },
]

export default function Nav() {
  return (
    <header className="fixed top-0 inset-x-0 z-50 border-b border-[var(--color-border)] bg-[var(--color-bg)]/90 backdrop-blur-sm">
      <div className="max-w-5xl mx-auto px-6 h-14 flex items-center justify-between">
        <a href="#top" className="font-semibold text-white tracking-tight hover:text-[var(--color-accent)] transition-colors">
          {profile.name}
        </a>
        <nav className="hidden sm:flex items-center gap-6">
          {links.map(l => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm text-[var(--color-muted)] hover:text-[var(--color-text)] transition-colors"
            >
              {l.label}
            </a>
          ))}
        </nav>
        <a
          href={profile.github}
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm px-3 py-1.5 rounded-md border border-[var(--color-border)] text-[var(--color-muted)] hover:text-white hover:border-[var(--color-accent)] transition-all"
        >
          GitHub
        </a>
      </div>
    </header>
  )
}
