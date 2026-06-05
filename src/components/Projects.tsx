import { motion, useInView, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import { ArrowUpRight } from 'lucide-react'
import { useContent } from '../context/ContentContext'
import { easeOut, fadeUp, framerSpringSnappy, stagger, viewFramer } from '../lib/motion'

const cardVariants = {
  rest: { y: 0, scale: 1 },
  hover: { y: -8, scale: 1.01, transition: framerSpringSnappy },
}

const arrowVariants = {
  rest: { x: 0, y: 0, opacity: 0.6 },
  hover: { x: 6, y: -6, opacity: 1, transition: framerSpringSnappy },
}

const imageVariants = {
  rest: { scale: 1.1 },
  hover: { scale: 1.18, transition: { duration: 0.6, ease: easeOut } },
}

function ProjectCard({
  project,
  index,
}: {
  project: { title: string; category: string; year: string; description: string; image: string; href: string }
  index: number
}) {
  const wrapRef = useRef(null)
  const cardRef = useRef<HTMLAnchorElement>(null)
  const inView = useInView(wrapRef, viewFramer)
  const { scrollYProgress } = useScroll({ target: cardRef, offset: ['start end', 'end start'] })
  const imageY = useTransform(scrollYProgress, [0, 1], ['8%', '-8%'])

  return (
    <motion.div
      ref={wrapRef}
      variants={fadeUp}
      custom={index}
      initial="hidden"
      animate={inView ? 'visible' : 'hidden'}
    >
      <motion.a
        ref={cardRef}
        href={project.href}
        className="project-card"
        variants={cardVariants}
        initial="rest"
        whileHover="hover"
        animate="rest"
      >
        <div className="project-card-body">
          <div className="project-card-meta">
            <span className="project-category">{project.category}</span>
            <span className="project-year">{project.year}</span>
          </div>
          <h3 className="project-title">
            {project.title}
            <motion.span className="project-arrow" variants={arrowVariants}>
              <ArrowUpRight size={22} />
            </motion.span>
          </h3>
          <p className="project-desc">{project.description}</p>
        </div>
        <div className="project-image-wrap">
          <motion.img
            src={project.image}
            alt={project.title}
            loading="lazy"
            style={{ y: imageY }}
            variants={imageVariants}
          />
        </div>
      </motion.a>
    </motion.div>
  )
}

export default function Projects() {
  const { work } = useContent()
  const ref = useRef(null)
  const inView = useInView(ref, viewFramer)

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
            {work.title}{' '}
            <motion.span
              className="gradient-text"
              initial={{ opacity: 0, filter: 'blur(8px)' }}
              animate={inView ? { opacity: 1, filter: 'blur(0px)' } : {}}
              transition={{ delay: 0.2, ...framerSpringSnappy }}
            >
              {work.titleHighlight}
            </motion.span>
          </h2>
        </motion.div>
        <motion.div className="projects-list" variants={stagger} initial="hidden" animate={inView ? 'visible' : 'hidden'}>
          {work.projects.map((project, i) => (
            <ProjectCard key={project.title} project={project} index={i} />
          ))}
        </motion.div>
      </div>
    </section>
  )
}
