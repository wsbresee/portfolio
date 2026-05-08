import { profile } from '../data/profile'
import { SectionLabel } from './About'

export default function Experience() {
  return (
    <section id="experience" className="py-24 px-6 border-t border-[var(--color-border)]">
      <div className="max-w-5xl mx-auto">
        <SectionLabel>Experience</SectionLabel>
        <div className="mt-12 space-y-8">
          {profile.experience.map((company, i) => (
            <CompanyBlock key={i} company={company} />
          ))}
        </div>
      </div>
    </section>
  )
}

function CompanyBlock({ company }) {
  const multiRole = company.roles.length > 1

  return (
    <div className="bg-[var(--color-surface)] border border-[var(--color-border)] rounded-xl overflow-hidden hover:border-[var(--color-accent)]/30 transition-colors">
      {/* Company header */}
      <div className="px-6 py-4 border-b border-[var(--color-border)] flex items-start justify-between gap-4">
        <div>
          <h3 className="text-white font-semibold text-lg">{company.company}</h3>
          <p className="text-[var(--color-muted)] text-sm">{company.location}</p>
          {company.tagline && (
            <p className="text-[var(--color-muted)] text-xs mt-1.5 leading-relaxed max-w-xl italic">
              {company.tagline}
            </p>
          )}
        </div>
        <span className="text-xs font-mono text-[var(--color-muted)] bg-[var(--color-surface-2)] px-3 py-1 rounded-full shrink-0 mt-0.5">
          {company.total}
        </span>
      </div>

      {/* Roles */}
      <div className={multiRole ? 'divide-y divide-[var(--color-border)]' : ''}>
        {company.roles.map((role, i) => (
          <RoleEntry key={i} role={role} indented={multiRole} />
        ))}
      </div>
    </div>
  )
}

function RoleEntry({ role, indented }) {
  const dateStr = role.end
    ? `${role.start} – ${role.end}`
    : `${role.start} – Present`

  return (
    <div className={`px-6 py-5 ${indented ? 'pl-8' : ''}`}>
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 mb-2">
        <div className="flex items-center gap-2">
          {indented && (
            <div className="w-1.5 h-1.5 rounded-full bg-[var(--color-accent)] shrink-0" />
          )}
          <h4 className="text-[var(--color-text)] font-semibold">{role.title}</h4>
        </div>
        <span className="text-xs font-mono text-[var(--color-muted)]">{dateStr}</span>
      </div>
      <p className="text-[var(--color-muted)] text-sm leading-relaxed mb-3">
        {role.description}
      </p>
      {role.skills && role.skills.length > 0 && (
        <div className="flex flex-wrap gap-1.5">
          {role.skills.map(s => (
            <span
              key={s}
              className="text-xs px-2 py-0.5 rounded-full bg-[var(--color-surface-2)] text-[var(--color-muted)] font-mono border border-[var(--color-border)]"
            >
              {s}
            </span>
          ))}
        </div>
      )}
    </div>
  )
}
