import { motion, useScroll, useMotionValueEvent } from 'framer-motion'
import { useState } from 'react'
import { site, nav } from '../data/content'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const { scrollY } = useScroll()

  useMotionValueEvent(scrollY, 'change', (y) => setScrolled(y > 40))

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        height: 'var(--nav-height)',
        display: 'flex',
        alignItems: 'center',
        backdropFilter: scrolled ? 'blur(12px)' : 'none',
        background: scrolled ? 'rgba(10, 10, 11, 0.8)' : 'transparent',
        borderBottom: scrolled ? '1px solid var(--border)' : '1px solid transparent',
        transition: 'background 0.3s, border 0.3s',
      }}
    >
      <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: '100%' }}>
        <a href="#" style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '1.125rem' }}>
          {site.shortName}
        </a>
        <nav style={{ display: 'flex', gap: '2rem', alignItems: 'center' }}>
          {nav.links.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              style={{ fontSize: '0.875rem', color: 'var(--text-muted)', transition: 'color 0.2s' }}
              onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--text)')}
              onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--text-muted)')}
            >
              {item.label}
            </a>
          ))}
          <a href="#contact" className="btn btn-primary" style={{ padding: '0.625rem 1.25rem', fontSize: '0.8125rem' }}>
            {nav.ctaText}
          </a>
        </nav>
      </div>
    </motion.header>
  )
}
