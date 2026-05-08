import { profile } from '../data/profile'
import { SectionLabel } from './About'

const categoryColors = {
  Languages: 'text-[var(--color-accent)] bg-[var(--color-accent-dim)]',
  Frontend: 'text-[var(--color-blue)] bg-[rgba(125,207,255,0.12)]',
  Backend: 'text-[var(--color-green)] bg-[rgba(158,206,106,0.12)]',
  'Data & ML': 'text-orange-300 bg-orange-300/10',
  Tools: 'text-slate-300 bg-slate-300/10',
}

export default function Skills() {
  return (
    <section id="skills" className="py-24 px-6 border-t border-[var(--color-border)]">
      <div className="max-w-5xl mx-auto">
        <SectionLabel>Skills</SectionLabel>
        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {profile.skills.map((group) => (
            <div
              key={group.category}
              className="bg-[var(--color-surface)] border border-[var(--color-border)] rounded-xl p-5"
            >
              <h3 className="text-xs font-mono tracking-widest uppercase text-[var(--color-muted)] mb-4">
                {group.category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {group.items.map(skill => (
                  <span
                    key={skill}
                    className={`text-sm px-3 py-1 rounded-full font-medium ${categoryColors[group.category] ?? 'text-slate-300 bg-slate-300/10'}`}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
