import { motion } from 'framer-motion'
import { ArrowDown } from 'lucide-react'
import { site, hero } from '../data/content'

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: 0.15 * i, duration: 0.7, ease: [0.22, 1, 0.36, 1] as const },
  }),
}

export default function Hero() {
  return (
    <section
      style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        paddingTop: 'var(--nav-height)',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <motion.div
        aria-hidden
        style={{
          position: 'absolute',
          top: '10%',
          right: '-10%',
          width: '60vw',
          height: '60vw',
          maxWidth: 700,
          borderRadius: '50%',
          background: 'radial-gradient(circle, var(--accent-soft) 0%, transparent 70%)',
          filter: 'blur(60px)',
        }}
        animate={{ scale: [1, 1.1, 1], opacity: [0.5, 0.8, 0.5] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
      />
      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <motion.p
          custom={0}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="section-label"
        >
          {site.role}
        </motion.p>
        <motion.h1
          custom={1}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="gradient-text"
          style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(3rem, 10vw, 6.5rem)',
            fontWeight: 800,
            lineHeight: 1.02,
            letterSpacing: '-0.04em',
            maxWidth: '14ch',
            marginBottom: '1.5rem',
          }}
        >
          {site.name}
        </motion.h1>
        <motion.p
          custom={2}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          style={{ fontSize: '1.25rem', color: 'var(--text-muted)', maxWidth: '42ch', marginBottom: '2.5rem' }}
        >
          {site.tagline}
        </motion.p>
        <motion.div
          custom={3}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}
        >
          <a href="#work" className="btn btn-primary">
            {hero.primaryButton}
          </a>
          <a
            href={site.resumePdf ? site.resumePdf : '#contact'}
            className="btn btn-ghost"
            {...(site.resumePdf ? { download: true, target: '_blank', rel: 'noopener noreferrer' } : {})}
          >
            {hero.secondaryButton}
          </a>
        </motion.div>
      </div>
      <motion.a
        href="#work"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        style={{
          position: 'absolute',
          bottom: '2rem',
          left: '50%',
          transform: 'translateX(-50%)',
          color: 'var(--text-muted)',
        }}
        aria-label="Scroll to work"
      >
        <motion.div animate={{ y: [0, 8, 0] }} transition={{ duration: 1.5, repeat: Infinity }}>
          <ArrowDown size={24} />
        </motion.div>
      </motion.a>
    </section>
  )
}
