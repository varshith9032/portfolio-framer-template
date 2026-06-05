import type { CSSProperties } from 'react'
import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { useContent } from '../context/ContentContext'
import { fadeUp, slideLeft, slideRight, stagger, viewOnce } from '../lib/motion'

export default function Resume() {
  const { resumeSection } = useContent()
  const ref = useRef(null)
  const inView = useInView(ref, viewOnce)
  const { skills, certifications } = resumeSection

  return (
    <section id="resume" ref={ref} className="section-pad section-border">
      <div className="container">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          custom={0}
          className="section-header"
        >
          <p className="section-label">{resumeSection.sectionLabel}</p>
          <h2 className="section-title">{resumeSection.title}</h2>
        </motion.div>

        <div className="resume-grid">
          <motion.div
            variants={slideLeft}
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
          >
            <h3 style={headingStyle}>{resumeSection.experienceLabel}</h3>
            <motion.div variants={stagger} initial="hidden" animate={inView ? 'visible' : 'hidden'}>
              {resumeSection.experience.map((job, i) => (
                <motion.article
                  key={`${job.company}-${job.role}`}
                  variants={fadeUp}
                  custom={i}
                  className="resume-item"
                  whileHover={{ x: 4 }}
                  transition={{ type: 'spring', stiffness: 300, damping: 24 }}
                >
                  <div className="resume-item-head">
                    <div>
                      <strong className="resume-item-role">{job.role}</strong>
                      <span className="resume-item-sub">
                        {job.company} · {job.location}
                      </span>
                    </div>
                    <span className="resume-item-period">{job.period}</span>
                  </div>
                  <ul className="resume-bullets">
                    {job.bullets.map((bullet) => (
                      <motion.li
                        key={bullet}
                        initial={{ opacity: 0, x: -8 }}
                        animate={inView ? { opacity: 1, x: 0 } : {}}
                        transition={{ delay: 0.15 + i * 0.08 }}
                      >
                        {bullet}
                      </motion.li>
                    ))}
                  </ul>
                </motion.article>
              ))}
            </motion.div>

            {resumeSection.education.length > 0 && (
              <>
                <h3 style={{ ...headingStyle, marginTop: '2.5rem' }}>{resumeSection.educationLabel}</h3>
                {resumeSection.education.map((edu, i) => (
                  <motion.article
                    key={`${edu.school}-${edu.degree}`}
                    className="resume-item resume-item--compact"
                    initial={{ opacity: 0, y: 16 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 0.2 + i * 0.1 }}
                  >
                    <strong className="resume-item-role">{edu.degree}</strong>
                    <span className="resume-item-sub">
                      {edu.school} · {edu.location} · {edu.period}
                    </span>
                    {edu.details && <p className="resume-details">{edu.details}</p>}
                  </motion.article>
                ))}
              </>
            )}
          </motion.div>

          <motion.div
            variants={slideRight}
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
          >
            <h3 style={headingStyle}>{resumeSection.skillsLabel}</h3>
            <p className="skills-group-label">Technical</p>
            <SkillTags items={skills.technical} inView={inView} />
            {skills.soft.length > 0 && (
              <>
                <p className="skills-group-label skills-group-label--spaced">Soft skills</p>
                <SkillTags items={skills.soft} inView={inView} delay={0.15} />
              </>
            )}

            {certifications.length > 0 && (
              <>
                <h3 style={{ ...headingStyle, marginTop: '2.5rem' }}>{resumeSection.certificationsLabel}</h3>
                <ul className="cert-list">
                  {certifications.map((cert, i) => (
                    <motion.li
                      key={cert.name}
                      className="cert-item"
                      initial={{ opacity: 0, x: 20 }}
                      animate={inView ? { opacity: 1, x: 0 } : {}}
                      transition={{ delay: 0.25 + i * 0.1 }}
                      whileHover={{ x: 6 }}
                    >
                      <strong>{cert.name}</strong>
                      <span>
                        {cert.issuer} · {cert.year}
                      </span>
                    </motion.li>
                  ))}
                </ul>
              </>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  )
}

const headingStyle: CSSProperties = {
  fontSize: '0.875rem',
  fontWeight: 600,
  marginBottom: '1.25rem',
  color: 'var(--text-muted)',
  letterSpacing: '0.06em',
  textTransform: 'uppercase',
}

function SkillTags({ items, inView, delay = 0 }: { items: string[]; inView: boolean; delay?: number }) {
  return (
    <div className="skill-tags">
      {items.map((skill, i) => (
        <motion.span
          key={skill}
          className="skill-tag"
          initial={{ opacity: 0, scale: 0.85 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ delay: delay + 0.2 + i * 0.05, type: 'spring', stiffness: 200, damping: 16 }}
          whileHover={{ scale: 1.08, y: -2 }}
        >
          {skill}
        </motion.span>
      ))}
    </div>
  )
}
