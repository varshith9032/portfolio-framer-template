export const easeOut = [0.22, 1, 0.36, 1] as const

export const framerSpring = { type: 'spring' as const, stiffness: 80, damping: 22, mass: 0.8 }

export const framerSpringSnappy = { type: 'spring' as const, stiffness: 400, damping: 28 }

export const viewFramer = { once: true, margin: '-12%' as const, amount: 0.15 as const }

export const viewOnce = viewFramer

export const fadeUp = {
  hidden: { opacity: 0, y: 48, filter: 'blur(10px)' },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: { ...framerSpring, delay: i * 0.08 },
  }),
}

export const fadeIn = {
  hidden: { opacity: 0 },
  visible: (i = 0) => ({
    opacity: 1,
    transition: { delay: i * 0.06, duration: 0.55, ease: easeOut },
  }),
}

export const slideLeft = {
  hidden: { opacity: 0, x: -56, filter: 'blur(8px)' },
  visible: {
    opacity: 1,
    x: 0,
    filter: 'blur(0px)',
    transition: framerSpring,
  },
}

export const slideRight = {
  hidden: { opacity: 0, x: 56, filter: 'blur(8px)' },
  visible: {
    opacity: 1,
    x: 0,
    filter: 'blur(0px)',
    transition: framerSpring,
  },
}

export const scaleIn = {
  hidden: { opacity: 0, scale: 0.94, filter: 'blur(12px)' },
  visible: {
    opacity: 1,
    scale: 1,
    filter: 'blur(0px)',
    transition: { type: 'spring' as const, stiffness: 90, damping: 20 },
  },
}

export const stagger = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.09, delayChildren: 0.06 },
  },
}

export const cardHover = {
  rest: { y: 0, scale: 1 },
  hover: { y: -8, scale: 1.01, transition: framerSpringSnappy },
}
