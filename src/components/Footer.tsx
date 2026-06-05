import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { useContent } from '../context/ContentContext'
import { fadeUp, viewOnce } from '../lib/motion'

export default function Footer() {
  const { site } = useContent()
  const ref = useRef(null)
  const inView = useInView(ref, viewOnce)
  const year = new Date().getFullYear()

  return (
    <footer ref={ref} className="site-footer">
      <motion.div
        className="container site-footer-inner"
        variants={fadeUp}
        initial="hidden"
        animate={inView ? 'visible' : 'hidden'}
        custom={0}
      >
        <span className="footer-copy">
          © {year} {site.name}
        </span>
        <div className="footer-links">
          {site.social.map((link, i) => (
            <motion.a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="footer-link"
              initial={{ opacity: 0, y: 8 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.1 + i * 0.08 }}
              whileHover={{ y: -2, color: 'var(--accent)' }}
            >
              {link.label}
            </motion.a>
          ))}
        </div>
      </motion.div>
    </footer>
  )
}
