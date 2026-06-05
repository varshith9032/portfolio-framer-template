import { motion, useScroll, useMotionValueEvent, useSpring, useTransform } from 'framer-motion'
import { Pencil } from 'lucide-react'
import { useState } from 'react'
import { useContent } from '../context/ContentContext'

export default function Navbar() {
  const { site, nav, setEditorOpen } = useContent()
  const [scrolled, setScrolled] = useState(false)
  const { scrollY } = useScroll()
  const blur = useSpring(useTransform(scrollY, [0, 80], [0, 14]), { stiffness: 120, damping: 28 })
  const navBg = useSpring(useTransform(scrollY, [0, 80], [0, 1]), { stiffness: 120, damping: 28 })
  const backdropFilter = useTransform(blur, (v) => `blur(${v}px)`)
  const background = useTransform(navBg, (v) => (v > 0.5 ? 'var(--nav-scrolled-bg)' : 'transparent'))

  useMotionValueEvent(scrollY, 'change', (y) => setScrolled(y > 40))

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ type: 'spring', stiffness: 90, damping: 22 }}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        height: 'var(--nav-height)',
        display: 'flex',
        alignItems: 'center',
        backdropFilter,
        background,
        borderBottom: scrolled ? '1px solid var(--border)' : '1px solid transparent',
      }}
    >
      <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: '100%' }}>
        <a href="#" style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '1.125rem' }}>
          {site.shortName}
        </a>
        <nav className="navbar-nav">
          <div className="navbar-links">
            {nav.links.map((item) => (
              <a key={item.id} href={`#${item.id}`} className="nav-link">
                {item.label}
              </a>
            ))}
          </div>
          <button type="button" className="nav-edit-btn" onClick={() => setEditorOpen(true)} aria-label="Edit portfolio">
            <Pencil size={16} />
            Edit
          </button>
          <a href="#contact" className="btn btn-primary navbar-cta">
            {nav.ctaText}
          </a>
        </nav>
      </div>
    </motion.header>
  )
}
