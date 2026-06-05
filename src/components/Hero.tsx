import { motion, useScroll, useTransform } from 'framer-motion'
import { ArrowDown } from 'lucide-react'
import { useRef } from 'react'
import { useContent } from '../context/ContentContext'
import { easeOut, fadeUp, framerSpringSnappy } from '../lib/motion'

export default function Hero() {
  const { site, hero } = useContent()
  const ref = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] })
  const contentY = useTransform(scrollYProgress, [0, 1], [0, 120])
  const glowY = useTransform(scrollYProgress, [0, 1], [0, -80])
  const opacity = useTransform(scrollYProgress, [0, 0.6], [1, 0])

  const words = site.name.split(' ')

  return (
    <section className="hero" ref={ref}>
      <motion.div
        aria-hidden
        className="hero-glow hero-glow--1"
        style={{ y: glowY }}
        animate={{ scale: [1, 1.14, 1], opacity: [0.4, 0.8, 0.4] }}
        transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        aria-hidden
        className="hero-glow hero-glow--2"
        style={{ y: useTransform(scrollYProgress, [0, 1], [0, 60]) }}
        animate={{ scale: [1.08, 1, 1.08], opacity: [0.25, 0.5, 0.25] }}
        transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div className="container hero-content" style={{ y: contentY, opacity }}>
        <motion.p custom={0} variants={fadeUp} initial="hidden" animate="visible" className="section-label">
          {site.role}
        </motion.p>
        <h1 className="gradient-text hero-title">
          <span className="hero-title-words">
            {words.map((word, i) => (
              <span key={word + i} className="hero-title-word">
                <motion.span
                  initial={{ y: '115%', rotate: 2 }}
                  animate={{ y: 0, rotate: 0 }}
                  transition={{ delay: 0.12 + i * 0.09, duration: 0.85, ease: easeOut }}
                >
                  {word}
                </motion.span>
              </span>
            ))}
          </span>
        </h1>
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
            whileHover={{ scale: 1.05, y: -4 }}
            whileTap={{ scale: 0.96 }}
            transition={framerSpringSnappy}
          >
            {hero.primaryButton}
          </motion.a>
          <motion.a
            href={site.resumePdfUrl || '#contact'}
            className="btn btn-ghost"
            whileHover={{ scale: 1.05, y: -4 }}
            whileTap={{ scale: 0.96 }}
            transition={framerSpringSnappy}
            {...(site.resumePdfUrl ? { download: site.resumePdf.split('/').pop() || 'resume.pdf' } : {})}
          >
            {hero.secondaryButton}
          </motion.a>
        </motion.div>
      </motion.div>
      <motion.a
        href="#work"
        className="hero-scroll"
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.2, duration: 0.7, ease: easeOut }}
        aria-label="Scroll to work"
      >
        <motion.div animate={{ y: [0, 12, 0] }} transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}>
          <ArrowDown size={24} />
        </motion.div>
      </motion.a>
    </section>
  )
}
