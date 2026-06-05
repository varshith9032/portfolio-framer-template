import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { ArrowUpRight } from 'lucide-react'
import { useContent } from '../context/ContentContext'
import { easeOut, fadeUp, stagger, viewOnce } from '../lib/motion'

export default function Projects() {
  const { work } = useContent()
  const ref = useRef(null)
  const inView = useInView(ref, viewOnce)

  return (
    <section id="work" ref={ref} className="section-pad">
      <div className="container">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          custom={0}
        >
          <p className="section-label">{work.sectionLabel}</p>
          <h2 className="section-title section-title--spaced">
            {work.title} <span className="gradient-text">{work.titleHighlight}</span>
          </h2>
        </motion.div>
        <motion.div
          className="projects-list"
          variants={stagger}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
        >
          {work.projects.map((project, i) => (
            <motion.a
              key={project.title}
              href={project.href}
              variants={fadeUp}
              custom={i}
              className="project-card"
              whileHover={{ y: -6, transition: { duration: 0.25 } }}
            >
              <div className="project-card-body">
                <div className="project-card-meta">
                  <span className="project-category">{project.category}</span>
                  <span className="project-year">{project.year}</span>
                </div>
                <h3 className="project-title">
                  {project.title}
                  <motion.span className="project-arrow" whileHover={{ x: 4, y: -4 }}>
                    <ArrowUpRight size={22} />
                  </motion.span>
                </h3>
                <p className="project-desc">{project.description}</p>
              </div>
              <motion.div
                className="project-image-wrap"
                whileHover={{ scale: 1.04 }}
                transition={{ duration: 0.45, ease: easeOut }}
              >
                <motion.img
                  src={project.image}
                  alt={project.title}
                  loading="lazy"
                  initial={{ scale: 1.08 }}
                  animate={inView ? { scale: 1 } : {}}
                  transition={{ delay: 0.15 * i, duration: 0.8, ease: easeOut }}
                />
              </motion.div>
            </motion.a>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
