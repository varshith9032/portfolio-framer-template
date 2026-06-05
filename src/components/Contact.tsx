import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { Mail, MapPin } from 'lucide-react'
import { useContent } from '../context/ContentContext'
import { fadeUp, scaleIn, stagger, viewOnce } from '../lib/motion'

export default function Contact() {
  const { site, contact } = useContent()
  const ref = useRef(null)
  const inView = useInView(ref, viewOnce)

  return (
    <section id="contact" ref={ref} className="section-pad">
      <div className="container">
        <motion.div
          className="contact-card"
          variants={scaleIn}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
        >
          <motion.div variants={stagger} initial="hidden" animate={inView ? 'visible' : 'hidden'}>
            <motion.p variants={fadeUp} custom={0} className="section-label">
              {contact.sectionLabel}
            </motion.p>
            <motion.h2 variants={fadeUp} custom={1} className="section-title contact-title">
              {contact.title}
            </motion.h2>
            <motion.p variants={fadeUp} custom={2} className="contact-desc">
              {contact.description}
            </motion.p>
            <motion.div variants={fadeUp} custom={3} className="contact-meta">
              <motion.span className="contact-meta-item" whileHover={{ scale: 1.03 }}>
                <Mail size={18} /> {site.email}
              </motion.span>
              <motion.span className="contact-meta-item" whileHover={{ scale: 1.03 }}>
                <MapPin size={18} /> {site.location}
              </motion.span>
            </motion.div>
            <motion.a
              variants={fadeUp}
              custom={4}
              href={`mailto:${site.email}`}
              className="btn btn-primary contact-btn"
              whileHover={{ scale: 1.05, y: -3 }}
              whileTap={{ scale: 0.97 }}
            >
              {contact.buttonText}
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
