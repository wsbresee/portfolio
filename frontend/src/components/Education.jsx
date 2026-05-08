import { profile } from '../data/profile'
import { SectionLabel } from './About'

export default function Education() {
  return (
    <section id="education" className="py-24 px-6 border-t border-[var(--color-border)]">
      <div className="max-w-5xl mx-auto">
        <SectionLabel>Education</SectionLabel>
        <div className="mt-12 space-y-5">
          {profile.education.map((edu, i) => (
            <div
              key={i}
              className="bg-[var(--color-surface)] border border-[var(--color-border)] rounded-xl p-6"
            >
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2">
                <div>
                  <h3 className="text-white font-semibold text-lg">{edu.school}</h3>
                  <p className="text-[var(--color-accent)] font-medium">
                    {edu.degree}{edu.field ? ` · ${edu.field}` : ''}
                  </p>
                  {edu.notes && (
                    <p className="text-[var(--color-muted)] text-sm mt-2">{edu.notes}</p>
                  )}
                </div>
                <span className="text-sm font-mono text-[var(--color-muted)] shrink-0 bg-[var(--color-surface-2)] px-3 py-1 rounded-full self-start">
                  {edu.end ? `${edu.start} – ${edu.end}` : edu.start}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
