import type { ResumeData } from '../data/content'

export async function saveResumeToFile(data: ResumeData): Promise<void> {
  if (!import.meta.env.DEV) {
    throw new Error('Run npm run dev to save directly to resume.json')
  }

  const res = await fetch('/api/save-resume', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data, null, 2),
  })

  const result = (await res.json()) as { ok?: boolean; error?: string }
  if (!res.ok || !result.ok) {
    throw new Error(result.error ?? 'Could not save resume.json')
  }
}
