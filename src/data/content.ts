import resumeData from './resume.json'

type Certification = { name: string; issuer: string; year: string }

export type ResumeData = Omit<typeof resumeData, 'certifications'> & {
  certifications: Certification[]
}

export const defaultResume: ResumeData = resumeData as ResumeData

/** Path to a file in /public (works on dev server and GitHub Pages). */
export function resolvePublicAsset(path: string): string {
  if (!path) return ''
  if (/^https?:\/\//i.test(path)) return path
  const file = path.replace(/^\//, '')
  const base = import.meta.env.BASE_URL
  return `${base}${file}`
}

export function buildContent(data: ResumeData) {
  return {
    site: {
      name: data.profile.name,
      shortName: data.profile.shortName,
      role: data.profile.title,
      tagline: data.profile.summary,
      email: data.profile.email,
      phone: data.profile.phone,
      location: data.profile.location,
      website: data.profile.website,
      resumePdf: data.profile.resumePdf,
      resumePdfUrl: resolvePublicAsset(data.profile.resumePdf),
      social: data.social,
    },
    hero: data.hero,
    work: {
      sectionLabel: data.sections.workLabel,
      title: data.sections.workTitle,
      titleHighlight: data.sections.workTitleHighlight,
      projects: data.projects,
    },
    resumeSection: {
      sectionLabel: data.sections.resumeLabel,
      title: data.sections.resumeTitle,
      experienceLabel: data.sections.experienceLabel,
      educationLabel: data.sections.educationLabel,
      skillsLabel: data.sections.skillsLabel,
      certificationsLabel: data.sections.certificationsLabel,
      experience: data.experience,
      education: data.education,
      skills: data.skills,
      certifications: data.certifications,
    },
    contact: {
      sectionLabel: data.sections.contactLabel,
      title: data.sections.contactTitle,
      description: data.sections.contactDescription,
      buttonText: data.sections.contactButton,
    },
    nav: data.nav,
    theme: data.theme,
  }
}
