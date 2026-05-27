import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { Mail, MapPin } from 'lucide-react'
import { site, contact } from '../data/content'

export default function Contact() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="contact" ref={ref} style={{ padding: '8rem 0' }}>
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          style={{
            padding: '4rem',
            borderRadius: 'var(--radius)',
            background: 'linear-gradient(135deg, var(--bg-elevated) 0%, rgba(99, 102, 241, 0.12) 100%)',
            border: '1px solid var(--border)',
            textAlign: 'center',
          }}
        >
          <p className="section-label">{contact.sectionLabel}</p>
          <h2
            className="section-title"
            style={{ marginBottom: '1rem', maxWidth: '20ch', marginInline: 'auto' }}
          >
            {contact.title}
          </h2>
          <p style={{ color: 'var(--text-muted)', marginBottom: '2rem', maxWidth: '40ch', marginInline: 'auto' }}>
            {contact.description}
          </p>
          <div style={{ display: 'flex', gap: '1.5rem', justifyContent: 'center', flexWrap: 'wrap', marginBottom: '2rem' }}>
            <span style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--text-muted)', fontSize: '0.9375rem' }}>
              <Mail size={18} /> {site.email}
            </span>
            <span style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--text-muted)', fontSize: '0.9375rem' }}>
              <MapPin size={18} /> {site.location}
            </span>
          </div>
          <a href={`mailto:${site.email}`} className="btn btn-primary">
            {contact.buttonText}
          </a>
        </motion.div>
      </div>
    </section>
  )
}
