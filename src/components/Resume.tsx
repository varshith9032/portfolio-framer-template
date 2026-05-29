import type { CSSProperties } from 'react'
import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { resumeSection } from '../data/content'

export default function Resume() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  const { skills, certifications } = resumeSection

  return (
    <section id="resume" ref={ref} style={{ padding: '8rem 0', borderTop: '1px solid var(--border)' }}>
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          style={{ marginBottom: '3rem' }}
        >
          <p className="section-label">{resumeSection.sectionLabel}</p>
          <h2 className="section-title">{resumeSection.title}</h2>
        </motion.div>

        <div className="resume-grid" style={{ display: 'grid', gridTemplateColumns: '1.2fr 1fr', gap: '4rem' }}>
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <h3 style={headingStyle}>{resumeSection.experienceLabel}</h3>
            {resumeSection.experience.map((job) => (
              <article key={`${job.company}-${job.role}`} style={{ marginBottom: '2rem' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '0.5rem' }}>
                  <div>
                    <strong style={{ display: 'block', fontWeight: 600 }}>{job.role}</strong>
                    <span style={{ color: 'var(--text-muted)', fontSize: '0.875rem' }}>
                      {job.company} · {job.location}
                    </span>
                  </div>
                  <span style={{ color: 'var(--text-muted)', fontSize: '0.875rem' }}>{job.period}</span>
                </div>
                <ul style={{ margin: 0, paddingLeft: '1.25rem', color: 'var(--text-muted)', fontSize: '0.9375rem' }}>
                  {job.bullets.map((bullet) => (
                    <li key={bullet} style={{ marginBottom: '0.35rem' }}>
                      {bullet}
                    </li>
                  ))}
                </ul>
              </article>
            ))}

            {resumeSection.education.length > 0 && (
              <>
                <h3 style={{ ...headingStyle, marginTop: '2.5rem' }}>{resumeSection.educationLabel}</h3>
                {resumeSection.education.map((edu) => (
                  <article key={`${edu.school}-${edu.degree}`} style={{ marginBottom: '1.5rem' }}>
                    <strong style={{ display: 'block', fontWeight: 600 }}>{edu.degree}</strong>
                    <span style={{ color: 'var(--text-muted)', fontSize: '0.875rem' }}>
                      {edu.school} · {edu.location} · {edu.period}
                    </span>
                    {edu.details && (
                      <p style={{ color: 'var(--text-muted)', fontSize: '0.875rem', marginTop: '0.35rem' }}>{edu.details}</p>
                    )}
                  </article>
                ))}
              </>
            )}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h3 style={headingStyle}>{resumeSection.skillsLabel}</h3>
            <p style={{ fontSize: '0.8125rem', color: 'var(--text-muted)', marginBottom: '0.5rem' }}>Technical</p>
            <SkillTags items={skills.technical} inView={inView} />
            {skills.soft.length > 0 && (
              <>
                <p style={{ fontSize: '0.8125rem', color: 'var(--text-muted)', margin: '1.25rem 0 0.5rem' }}>Soft skills</p>
                <SkillTags items={skills.soft} inView={inView} />
              </>
            )}

            {certifications.length > 0 && (
              <>
                <h3 style={{ ...headingStyle, marginTop: '2.5rem' }}>{resumeSection.certificationsLabel}</h3>
                <ul style={{ listStyle: 'none' }}>
                  {certifications.map((cert) => (
                    <li
                      key={cert.name}
                      style={{
                        padding: '0.75rem 0',
                        borderBottom: '1px solid var(--border)',
                        fontSize: '0.9375rem',
                      }}
                    >
                      <strong style={{ fontWeight: 500 }}>{cert.name}</strong>
                      <span style={{ display: 'block', color: 'var(--text-muted)', fontSize: '0.875rem' }}>
                        {cert.issuer} · {cert.year}
                      </span>
                    </li>
                  ))}
                </ul>
              </>
            )}
          </motion.div>
        </div>
      </div>
      <style>{`
        @media (max-width: 768px) {
          .resume-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  )
}

const headingStyle: CSSProperties = {
  fontSize: '0.875rem',
  fontWeight: 600,
  marginBottom: '1.25rem',
  color: 'var(--text-muted)',
  letterSpacing: '0.06em',
  textTransform: 'uppercase',
}

function SkillTags({ items, inView }: { items: string[]; inView: boolean }) {
  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
      {items.map((skill, i) => (
        <motion.span
          key={skill}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ delay: 0.2 + i * 0.04 }}
          style={{
            padding: '0.5rem 1rem',
            borderRadius: '999px',
            fontSize: '0.8125rem',
            border: '1px solid var(--border)',
            background: 'var(--accent-soft)',
          }}
        >
          {skill}
        </motion.span>
      ))}
    </div>
  )
}
