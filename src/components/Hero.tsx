import { motion } from 'framer-motion'
import { ArrowDown } from 'lucide-react'
import { useContent } from '../context/ContentContext'
import { easeOut, fadeUp } from '../lib/motion'

export default function Hero() {
  const { site, hero } = useContent()

  return (
    <section className="hero">
      <motion.div
        aria-hidden
        className="hero-glow hero-glow--1"
        animate={{ scale: [1, 1.12, 1], opacity: [0.45, 0.75, 0.45], x: [0, 20, 0] }}
        transition={{ duration: 9, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        aria-hidden
        className="hero-glow hero-glow--2"
        animate={{ scale: [1.1, 1, 1.1], opacity: [0.3, 0.55, 0.3], y: [0, -30, 0] }}
        transition={{ duration: 11, repeat: Infinity, ease: 'easeInOut' }}
      />
      <div className="container hero-content">
        <motion.p custom={0} variants={fadeUp} initial="hidden" animate="visible" className="section-label">
          {site.role}
        </motion.p>
        <motion.h1
          custom={1}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="gradient-text hero-title"
        >
          {site.name}
        </motion.h1>
        <motion.p
          custom={2}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="hero-tagline"
        >
          {site.tagline}
        </motion.p>
        <motion.div
          custom={3}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="hero-actions"
        >
          <motion.a
            href="#work"
            className="btn btn-primary"
            whileHover={{ scale: 1.04, y: -3 }}
            whileTap={{ scale: 0.98 }}
            transition={{ type: 'spring', stiffness: 400, damping: 20 }}
          >
            {hero.primaryButton}
          </motion.a>
          <motion.a
            href={site.resumePdfUrl || '#contact'}
            className="btn btn-ghost"
            whileHover={{ scale: 1.04, y: -3 }}
            whileTap={{ scale: 0.98 }}
            transition={{ type: 'spring', stiffness: 400, damping: 20 }}
            {...(site.resumePdfUrl ? { download: site.resumePdf.split('/').pop() || 'resume.pdf' } : {})}
          >
            {hero.secondaryButton}
          </motion.a>
        </motion.div>
      </div>
      <motion.a
        href="#work"
        className="hero-scroll"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.1, duration: 0.6, ease: easeOut }}
        aria-label="Scroll to work"
      >
        <motion.div animate={{ y: [0, 10, 0] }} transition={{ duration: 1.6, repeat: Infinity, ease: 'easeInOut' }}>
          <ArrowDown size={24} />
        </motion.div>
      </motion.a>
    </section>
  )
}
