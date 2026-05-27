import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { ArrowUpRight } from 'lucide-react'
import { work } from '../data/content'

export default function Projects() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="work" ref={ref} style={{ padding: '8rem 0' }}>
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <p className="section-label">{work.sectionLabel}</p>
          <h2 className="section-title" style={{ marginBottom: '4rem' }}>
            {work.title} <span className="gradient-text">{work.titleHighlight}</span>
          </h2>
        </motion.div>
        <div style={{ display: 'grid', gap: '2rem' }}>
          {work.projects.map((project, i) => (
            <motion.a
              key={project.title}
              href={project.href}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.1 * i, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ y: -4 }}
              style={{
                display: 'grid',
                gridTemplateColumns: '1fr 1.2fr',
                gap: '2rem',
                alignItems: 'center',
                padding: '1.5rem',
                borderRadius: 'var(--radius)',
                border: '1px solid var(--border)',
                background: 'var(--bg-elevated)',
                overflow: 'hidden',
              }}
              className="project-card"
            >
              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.75rem' }}>
                  <span style={{ fontSize: '0.8125rem', color: 'var(--accent)' }}>{project.category}</span>
                  <span style={{ fontSize: '0.8125rem', color: 'var(--text-muted)' }}>{project.year}</span>
                </div>
                <h3
                  style={{
                    fontFamily: 'var(--font-display)',
                    fontSize: 'clamp(1.5rem, 3vw, 2rem)',
                    fontWeight: 700,
                    marginBottom: '0.5rem',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.5rem',
                  }}
                >
                  {project.title}
                  <ArrowUpRight size={22} style={{ opacity: 0.6 }} />
                </h3>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.9375rem' }}>{project.description}</p>
              </div>
              <motion.div
                style={{ borderRadius: '12px', overflow: 'hidden', aspectRatio: '16/10' }}
                whileHover={{ scale: 1.03 }}
                transition={{ duration: 0.4 }}
              >
                <img
                  src={project.image}
                  alt={project.title}
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  loading="lazy"
                />
              </motion.div>
            </motion.a>
          ))}
        </div>
      </div>
      <style>{`
        @media (max-width: 768px) {
          .project-card {
            grid-template-columns: 1fr !important;
          }
          .project-card > div:last-child {
            order: -1;
          }
        }
      `}</style>
    </section>
  )
}
