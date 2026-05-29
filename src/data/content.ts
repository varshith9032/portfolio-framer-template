import resumeData from './resume.json'

export type ResumeData = typeof resumeData

export const resume = resumeData

export const site = {
  name: resume.profile.name,
  shortName: resume.profile.shortName,
  role: resume.profile.title,
  tagline: resume.profile.summary,
  email: resume.profile.email,
  phone: resume.profile.phone,
  location: resume.profile.location,
  website: resume.profile.website,
  resumePdf: resume.profile.resumePdf,
  social: resume.social,
}

export const hero = resume.hero
export const work = {
  sectionLabel: resume.sections.workLabel,
  title: resume.sections.workTitle,
  titleHighlight: resume.sections.workTitleHighlight,
  projects: resume.projects,
}
export const resumeSection = {
  sectionLabel: resume.sections.resumeLabel,
  title: resume.sections.resumeTitle,
  experienceLabel: resume.sections.experienceLabel,
  educationLabel: resume.sections.educationLabel,
  skillsLabel: resume.sections.skillsLabel,
  certificationsLabel: resume.sections.certificationsLabel,
  experience: resume.experience,
  education: resume.education,
  skills: resume.skills,
  certifications: resume.certifications,
}
export const contact = {
  sectionLabel: resume.sections.contactLabel,
  title: resume.sections.contactTitle,
  description: resume.sections.contactDescription,
  buttonText: resume.sections.contactButton,
}
export const nav = resume.nav
export const theme = resume.theme
