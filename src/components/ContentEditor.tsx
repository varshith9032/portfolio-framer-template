import { useState } from 'react'
import { Pencil, X } from 'lucide-react'
import { useContent } from '../context/ContentContext'
import type { ResumeData } from '../data/content'
import { DARK_THEMES, LIGHT_THEMES, type ThemePreset } from '../data/themes'

type Tab = 'profile' | 'links' | 'work' | 'resume' | 'contact' | 'theme'

const TABS: { id: Tab; label: string }[] = [
  { id: 'profile', label: 'Profile' },
  { id: 'links', label: 'Links' },
  { id: 'work', label: 'Projects' },
  { id: 'resume', label: 'Resume' },
  { id: 'contact', label: 'Contact' },
  { id: 'theme', label: 'Theme' },
]

export function EditFab() {
  const { setEditorOpen } = useContent()
  return (
    <button type="button" className="edit-fab" onClick={() => setEditorOpen(true)} aria-label="Edit portfolio">
      <Pencil size={18} />
      Edit site
    </button>
  )
}

export default function ContentEditor() {
  const { editorOpen, setEditorOpen, resumeData, updateResume, resetToDefault, exportJson, saveToResumeJson, saveStatus } =
    useContent()
  const [tab, setTab] = useState<Tab>('profile')

  if (!editorOpen) return null

  const patch = (fn: (d: ResumeData) => void) => updateResume((prev) => {
    const next = structuredClone(prev)
    fn(next)
    return next
  })

  return (
    <div className="editor-overlay">
      <button type="button" className="editor-backdrop" aria-label="Close editor" onClick={() => setEditorOpen(false)} />
      <aside className="editor-panel" role="dialog" aria-labelledby="editor-title">
        <header className="editor-header">
          <div>
            <h2 id="editor-title" className="editor-title">
              Edit portfolio
            </h2>
            <p className="editor-subtitle">Changes save automatically in this browser</p>
          </div>
          <button type="button" className="editor-icon-btn" aria-label="Close" onClick={() => setEditorOpen(false)}>
            <X size={20} />
          </button>
        </header>

        <div className="editor-tabs">
          {TABS.map((t) => (
            <button
              key={t.id}
              type="button"
              className={`editor-tab${tab === t.id ? ' editor-tab--active' : ''}`}
              onClick={() => setTab(t.id)}
            >
              {t.label}
            </button>
          ))}
        </div>

        <div className="editor-body">
          {tab === 'profile' && (
            <div className="editor-stack">
              <Field label="Full name" value={resumeData.profile.name} onChange={(v) => patch((d) => { d.profile.name = v })} />
              <Field label="Short name (nav)" value={resumeData.profile.shortName} onChange={(v) => patch((d) => { d.profile.shortName = v })} />
              <Field label="Job title" value={resumeData.profile.title} onChange={(v) => patch((d) => { d.profile.title = v })} />
              <TextArea label="Summary" value={resumeData.profile.summary} onChange={(v) => patch((d) => { d.profile.summary = v })} />
              <Field label="Email" value={resumeData.profile.email} onChange={(v) => patch((d) => { d.profile.email = v })} />
              <Field label="Phone" value={resumeData.profile.phone} onChange={(v) => patch((d) => { d.profile.phone = v })} />
              <Field label="Location" value={resumeData.profile.location} onChange={(v) => patch((d) => { d.profile.location = v })} />
              <Field label="Website URL" value={resumeData.profile.website} onChange={(v) => patch((d) => { d.profile.website = v })} />
              <Field label="Resume PDF path" value={resumeData.profile.resumePdf} onChange={(v) => patch((d) => { d.profile.resumePdf = v })} hint="Put PDF in public folder, e.g. /varshith_resume.pdf" />
              <Field label="Hero button — primary" value={resumeData.hero.primaryButton} onChange={(v) => patch((d) => { d.hero.primaryButton = v })} />
              <Field label="Hero button — secondary" value={resumeData.hero.secondaryButton} onChange={(v) => patch((d) => { d.hero.secondaryButton = v })} />
            </div>
          )}

          {tab === 'links' && (
            <div className="editor-stack">
              <p className="editor-block-label">Navigation</p>
              <Field label="CTA button text" value={resumeData.nav.ctaText} onChange={(v) => patch((d) => { d.nav.ctaText = v })} />
              {resumeData.nav.links.map((link, i) => (
                <div key={i} className="editor-card">
                  <Field label="Section id" value={link.id} onChange={(v) => patch((d) => { d.nav.links[i].id = v })} />
                  <Field label="Label" value={link.label} onChange={(v) => patch((d) => { d.nav.links[i].label = v })} />
                  <RemoveBtn onClick={() => patch((d) => { d.nav.links.splice(i, 1) })} />
                </div>
              ))}
              <AddBtn
                label="+ Nav link"
                onClick={() => patch((d) => { d.nav.links.push({ id: 'section', label: 'Section' }) })}
              />
              <p className="editor-block-label" style={{ marginTop: '0.5rem' }}>
                Social links
              </p>
              {resumeData.social.map((s, i) => (
                <div key={i} className="editor-card">
                  <Field label="Label" value={s.label} onChange={(v) => patch((d) => { d.social[i].label = v })} />
                  <Field label="URL" value={s.href} onChange={(v) => patch((d) => { d.social[i].href = v })} />
                  <RemoveBtn onClick={() => patch((d) => { d.social.splice(i, 1) })} />
                </div>
              ))}
              <AddBtn label="+ Social link" onClick={() => patch((d) => { d.social.push({ label: 'Link', href: 'https://' }) })} />
            </div>
          )}

          {tab === 'work' && (
            <div className="editor-stack">
              <Field label="Section label" value={resumeData.sections.workLabel} onChange={(v) => patch((d) => { d.sections.workLabel = v })} />
              <Field label="Title" value={resumeData.sections.workTitle} onChange={(v) => patch((d) => { d.sections.workTitle = v })} />
              <Field label="Title highlight" value={resumeData.sections.workTitleHighlight} onChange={(v) => patch((d) => { d.sections.workTitleHighlight = v })} />
              {resumeData.projects.map((p, i) => (
                <div key={i} className="editor-card">
                  <span className="editor-block-label">Project {i + 1}</span>
                  <Field label="Title" value={p.title} onChange={(v) => patch((d) => { d.projects[i].title = v })} />
                  <Field label="Category" value={p.category} onChange={(v) => patch((d) => { d.projects[i].category = v })} />
                  <Field label="Year" value={p.year} onChange={(v) => patch((d) => { d.projects[i].year = v })} />
                  <TextArea label="Description" value={p.description} onChange={(v) => patch((d) => { d.projects[i].description = v })} />
                  <Field label="Image URL" value={p.image} onChange={(v) => patch((d) => { d.projects[i].image = v })} />
                  <Field label="Link URL" value={p.href} onChange={(v) => patch((d) => { d.projects[i].href = v })} />
                  <RemoveBtn onClick={() => patch((d) => { d.projects.splice(i, 1) })} />
                </div>
              ))}
              <AddBtn
                label="+ Add project"
                onClick={() =>
                  patch((d) => {
                    d.projects.push({
                      title: 'New project',
                      category: 'Web',
                      year: '2025',
                      description: 'Description',
                      image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=800&q=80',
                      href: '#',
                    })
                  })
                }
              />
            </div>
          )}

          {tab === 'resume' && (
            <div className="editor-stack">
              <Field label="Section label" value={resumeData.sections.resumeLabel} onChange={(v) => patch((d) => { d.sections.resumeLabel = v })} />
              <Field label="Section title" value={resumeData.sections.resumeTitle} onChange={(v) => patch((d) => { d.sections.resumeTitle = v })} />
              <Field label="Experience heading" value={resumeData.sections.experienceLabel} onChange={(v) => patch((d) => { d.sections.experienceLabel = v })} />
              <Field label="Education heading" value={resumeData.sections.educationLabel} onChange={(v) => patch((d) => { d.sections.educationLabel = v })} />
              <Field label="Skills heading" value={resumeData.sections.skillsLabel} onChange={(v) => patch((d) => { d.sections.skillsLabel = v })} />
              <Field label="Certifications heading" value={resumeData.sections.certificationsLabel} onChange={(v) => patch((d) => { d.sections.certificationsLabel = v })} />

              <p className="editor-block-label">Experience</p>
              {resumeData.experience.map((job, i) => (
                <div key={i} className="editor-card">
                  <Field label="Role" value={job.role} onChange={(v) => patch((d) => { d.experience[i].role = v })} />
                  <Field label="Company" value={job.company} onChange={(v) => patch((d) => { d.experience[i].company = v })} />
                  <Field label="Location" value={job.location} onChange={(v) => patch((d) => { d.experience[i].location = v })} />
                  <Field label="Period" value={job.period} onChange={(v) => patch((d) => { d.experience[i].period = v })} />
                  <LinesField
                    label="Bullet points (one per line)"
                    lines={job.bullets}
                    onChange={(lines) => patch((d) => { d.experience[i].bullets = lines })}
                  />
                  <RemoveBtn onClick={() => patch((d) => { d.experience.splice(i, 1) })} />
                </div>
              ))}
              <AddBtn
                label="+ Add job"
                onClick={() =>
                  patch((d) => {
                    d.experience.push({
                      role: 'Role',
                      company: 'Company',
                      location: 'City',
                      period: '2024 — Present',
                      bullets: ['Achievement'],
                    })
                  })
                }
              />

              <p className="editor-block-label">Education</p>
              {resumeData.education.map((edu, i) => (
                <div key={i} className="editor-card">
                  <Field label="Degree" value={edu.degree} onChange={(v) => patch((d) => { d.education[i].degree = v })} />
                  <Field label="School" value={edu.school} onChange={(v) => patch((d) => { d.education[i].school = v })} />
                  <Field label="Location" value={edu.location} onChange={(v) => patch((d) => { d.education[i].location = v })} />
                  <Field label="Period" value={edu.period} onChange={(v) => patch((d) => { d.education[i].period = v })} />
                  <Field label="Details (optional)" value={edu.details} onChange={(v) => patch((d) => { d.education[i].details = v })} />
                  <RemoveBtn onClick={() => patch((d) => { d.education.splice(i, 1) })} />
                </div>
              ))}
              <AddBtn
                label="+ Add education"
                onClick={() =>
                  patch((d) => {
                    d.education.push({ degree: 'Degree', school: 'School', location: 'City', period: '2020 — 2024', details: '' })
                  })
                }
              />

              <CommaField
                label="Technical skills (comma-separated)"
                value={resumeData.skills.technical.join(', ')}
                onChange={(v) =>
                  patch((d) => {
                    d.skills.technical = splitComma(v)
                  })
                }
              />
              <CommaField
                label="Soft skills (comma-separated)"
                value={resumeData.skills.soft.join(', ')}
                onChange={(v) =>
                  patch((d) => {
                    d.skills.soft = splitComma(v)
                  })
                }
              />

              <p className="editor-block-label">Certifications</p>
              {resumeData.certifications.map((cert, i) => (
                <div key={i} className="editor-card">
                  <Field label="Name" value={cert.name} onChange={(v) => patch((d) => { d.certifications[i].name = v })} />
                  <Field label="Issuer" value={cert.issuer} onChange={(v) => patch((d) => { d.certifications[i].issuer = v })} />
                  <Field label="Year" value={cert.year} onChange={(v) => patch((d) => { d.certifications[i].year = v })} />
                  <RemoveBtn onClick={() => patch((d) => { d.certifications.splice(i, 1) })} />
                </div>
              ))}
              <AddBtn
                label="+ Add certification"
                onClick={() => patch((d) => { d.certifications.push({ name: 'Cert name', issuer: 'Issuer', year: '2024' }) })}
              />
            </div>
          )}

          {tab === 'contact' && (
            <div className="editor-stack">
              <Field label="Section label" value={resumeData.sections.contactLabel} onChange={(v) => patch((d) => { d.sections.contactLabel = v })} />
              <Field label="Title" value={resumeData.sections.contactTitle} onChange={(v) => patch((d) => { d.sections.contactTitle = v })} />
              <TextArea label="Description" value={resumeData.sections.contactDescription} onChange={(v) => patch((d) => { d.sections.contactDescription = v })} />
              <Field label="Button text" value={resumeData.sections.contactButton} onChange={(v) => patch((d) => { d.sections.contactButton = v })} />
            </div>
          )}

          {tab === 'theme' && (
            <div className="editor-stack">
              <ThemePickerGroup
                label="Light themes"
                presets={LIGHT_THEMES}
                activeId={resumeData.theme.preset ?? 'midnight'}
                onSelect={(preset) =>
                  patch((d) => {
                    d.theme.preset = preset.id
                    d.theme.accent = preset.accent
                  })
                }
              />
              <ThemePickerGroup
                label="Dark themes"
                presets={DARK_THEMES}
                activeId={resumeData.theme.preset ?? 'midnight'}
                onSelect={(preset) =>
                  patch((d) => {
                    d.theme.preset = preset.id
                    d.theme.accent = preset.accent
                  })
                }
              />
              <label className="editor-field">
                <span className="editor-field-label">Custom accent (optional)</span>
                <div className="editor-row">
                  <input
                    type="color"
                    value={resumeData.theme.accent ?? '#6366f1'}
                    onChange={(e) => patch((d) => { d.theme.accent = e.target.value })}
                    style={{ width: 48, height: 40, padding: 4, borderRadius: 8, border: '1px solid var(--border)', background: 'var(--bg)' }}
                  />
                  <input
                    className="editor-input"
                    value={resumeData.theme.accent ?? ''}
                    onChange={(e) => patch((d) => { d.theme.accent = e.target.value })}
                  />
                </div>
              </label>
            </div>
          )}
        </div>

        <footer className="editor-footer editor-footer--stack">
          <button
            type="button"
            className="btn btn-primary editor-footer-btn editor-save-btn"
            disabled={saveStatus === 'saving'}
            onClick={() => void saveToResumeJson()}
          >
            {saveStatus === 'saving'
              ? 'Saving…'
              : saveStatus === 'saved'
                ? 'Saved to resume.json'
                : saveStatus === 'error'
                  ? 'Save failed — use dev server'
                  : 'Save to resume.json'}
          </button>
          <div className="editor-footer-row">
            <button type="button" className="btn btn-ghost editor-footer-btn" onClick={exportJson}>
              Download JSON
            </button>
            <button type="button" className="btn btn-ghost editor-footer-btn" onClick={resetToDefault}>
              Reset
            </button>
          </div>
          {import.meta.env.DEV && <p className="editor-hint editor-footer-hint">Works while npm run dev is running</p>}
        </footer>
      </aside>
    </div>
  )
}

function splitComma(s: string) {
  return s
    .split(',')
    .map((x) => x.trim())
    .filter(Boolean)
}

function Field({
  label,
  value,
  onChange,
  hint,
}: {
  label: string
  value: string
  onChange: (v: string) => void
  hint?: string
}) {
  return (
    <label className="editor-field">
      <span className="editor-field-label">{label}</span>
      <input className="editor-input" value={value} onChange={(e) => onChange(e.target.value)} />
      {hint && <span className="editor-hint">{hint}</span>}
    </label>
  )
}

function TextArea({ label, value, onChange }: { label: string; value: string; onChange: (v: string) => void }) {
  return (
    <label className="editor-field">
      <span className="editor-field-label">{label}</span>
      <textarea className="editor-textarea" value={value} onChange={(e) => onChange(e.target.value)} rows={4} />
    </label>
  )
}

function CommaField({ label, value, onChange }: { label: string; value: string; onChange: (v: string) => void }) {
  return (
    <label className="editor-field">
      <span className="editor-field-label">{label}</span>
      <input className="editor-input" value={value} onChange={(e) => onChange(e.target.value)} />
    </label>
  )
}

function LinesField({
  label,
  lines,
  onChange,
}: {
  label: string
  lines: string[]
  onChange: (lines: string[]) => void
}) {
  return (
    <label className="editor-field">
      <span className="editor-field-label">{label}</span>
      <textarea
        className="editor-textarea"
        value={lines.join('\n')}
        onChange={(e) => onChange(e.target.value.split('\n').filter((l) => l.trim()))}
        rows={4}
      />
    </label>
  )
}

function ThemePickerGroup({
  label,
  presets,
  activeId,
  onSelect,
}: {
  label: string
  presets: ThemePreset[]
  activeId: string
  onSelect: (preset: ThemePreset) => void
}) {
  return (
    <div className="editor-block">
      <p className="editor-block-label">{label}</p>
      <div className="theme-grid">
        {presets.map((preset) => (
          <button
            key={preset.id}
            type="button"
            className={`theme-card${activeId === preset.id ? ' theme-card--active' : ''}`}
            onClick={() => onSelect(preset)}
          >
            <span
              className="theme-swatch"
              style={{
                background: `linear-gradient(135deg, ${preset.bg} 40%, ${preset.accent} 100%)`,
              }}
            />
            <span className="theme-card-name">{preset.name}</span>
          </button>
        ))}
      </div>
    </div>
  )
}

function AddBtn({ label, onClick }: { label: string; onClick: () => void }) {
  return (
    <button type="button" className="editor-add" onClick={onClick}>
      {label}
    </button>
  )
}

function RemoveBtn({ onClick }: { onClick: () => void }) {
  return (
    <button type="button" className="editor-remove" onClick={onClick}>
      Remove
    </button>
  )
}
