import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { about } from '../data/content'

export default function About() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="about" ref={ref} style={{ padding: '8rem 0', borderTop: '1px solid var(--border)' }}>
      <div className="container">
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', alignItems: 'start' }} className="about-grid">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <p className="section-label">{about.sectionLabel}</p>
            <h2 className="section-title" style={{ marginBottom: '1.5rem' }}>
              {about.title}
            </h2>
            {about.paragraphs.map((text, i) => (
              <p
                key={i}
                style={{
                  color: 'var(--text-muted)',
                  marginBottom: i < about.paragraphs.length - 1 ? '1rem' : 0,
                  maxWidth: '48ch',
                }}
              >
                {text}
              </p>
            ))}
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.15 }}
          >
            <h3 style={{ fontSize: '0.875rem', fontWeight: 600, marginBottom: '1.25rem', color: 'var(--text-muted)' }}>
              {about.experienceLabel}
            </h3>
            <ul style={{ listStyle: 'none', marginBottom: '2.5rem' }}>
              {about.experience.map((item) => (
                <li
                  key={`${item.company}-${item.role}`}
                  style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    padding: '1rem 0',
                    borderBottom: '1px solid var(--border)',
                    gap: '1rem',
                    flexWrap: 'wrap',
                  }}
                >
                  <div>
                    <strong style={{ display: 'block', fontWeight: 500 }}>{item.role}</strong>
                    <span style={{ color: 'var(--text-muted)', fontSize: '0.875rem' }}>{item.company}</span>
                  </div>
                  <span style={{ color: 'var(--text-muted)', fontSize: '0.875rem' }}>{item.period}</span>
                </li>
              ))}
            </ul>
            <h3 style={{ fontSize: '0.875rem', fontWeight: 600, marginBottom: '1rem', color: 'var(--text-muted)' }}>
              {about.skillsLabel}
            </h3>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
              {about.skills.map((skill, i) => (
                <motion.span
                  key={skill}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={inView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ delay: 0.3 + i * 0.05 }}
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
          </motion.div>
        </div>
      </div>
      <style>{`
        @media (max-width: 768px) {
          .about-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  )
}
