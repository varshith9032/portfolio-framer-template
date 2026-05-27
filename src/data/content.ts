// ═══════════════════════════════════════════════════════════════════
// EDIT THIS FILE — all your name, work, and copy lives here only.
// Save the file → browser refreshes automatically (npm run dev).
// ═══════════════════════════════════════════════════════════════════

export const site = {
  /** Full name shown in the hero */
  name: 'Your Name',
  /** Short label in the top-left logo (e.g. first name or initials) */
  shortName: 'You',
  role: 'Your Role — e.g. Designer & Developer',
  tagline: 'One line about what you do.',
  email: 'you@email.com',
  location: 'Your City, Country',
  social: [
    { label: 'LinkedIn', href: 'https://linkedin.com/in/yourprofile' },
    { label: 'GitHub', href: 'https://github.com/yourusername' },
    { label: 'Twitter', href: 'https://twitter.com/yourhandle' },
    // Add or remove links — copy the line above
  ],
}

export const hero = {
  primaryButton: 'View work',
  secondaryButton: 'Get in touch',
}

export const work = {
  sectionLabel: 'Selected work',
  title: 'My',
  titleHighlight: 'projects',
  /**
   * Your projects — add, remove, or duplicate blocks.
   * image: use a URL, or put files in public/projects/ and use "/projects/photo.jpg"
   * href: link to case study, live site, or "#" if none yet
   */
  projects: [
    {
      title: 'Project One',
      category: 'Web Design',
      year: '2025',
      description: 'Short sentence about what you built or designed.',
      image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800&q=80',
      href: 'https://example.com',
    },
    {
      title: 'Project Two',
      category: 'Branding',
      year: '2024',
      description: 'Another one-line summary of the project.',
      image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=800&q=80',
      href: '#',
    },
    // {
    //   title: 'Project Three',
    //   category: 'Development',
    //   year: '2023',
    //   description: 'Describe the outcome or your role.',
    //   image: '/projects/my-screenshot.png',
    //   href: 'https://github.com/you/repo',
    // },
  ],
}

export const about = {
  sectionLabel: 'About',
  title: 'About me',
  /** Each string = one paragraph */
  paragraphs: [
    'Write your bio here. Who you are, what you focus on, and who you work with.',
    'Optional second paragraph — hobbies, tools you love, or what you are looking for next.',
  ],
  experienceLabel: 'Experience',
  experience: [
    { role: 'Your Job Title', company: 'Company Name', period: '2024 — Present' },
    { role: 'Previous Role', company: 'Previous Company', period: '2022 — 2024' },
  ],
  skillsLabel: 'Skills',
  skills: ['Skill 1', 'Skill 2', 'Skill 3', 'Skill 4'],
}

export const contact = {
  sectionLabel: 'Contact',
  title: "Let's work together",
  description: 'How people can reach you — availability, reply time, types of work you take.',
  buttonText: 'Email me',
}

export const nav = {
  links: [
    { id: 'work', label: 'Work' },
    { id: 'about', label: 'About' },
    { id: 'contact', label: 'Contact' },
  ],
  ctaText: 'Hire me',
}

// Optional: accent color (also update --accent in src/index.css if you want)
export const theme = {
  accent: '#6366f1',
}
