import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from 'react'
import { buildContent, defaultResume, type ResumeData } from '../data/content'
import { saveResumeToFile } from '../lib/saveResume'

const STORAGE_KEY = 'portfolio-framer-content'

type BuiltContent = ReturnType<typeof buildContent>

type ContentContextValue = BuiltContent & {
  resumeData: ResumeData
  updateResume: (updater: (prev: ResumeData) => ResumeData) => void
  resetToDefault: () => void
  exportJson: () => void
  saveToResumeJson: () => Promise<void>
  saveStatus: 'idle' | 'saving' | 'saved' | 'error'
  editorOpen: boolean
  setEditorOpen: (open: boolean) => void
}

const ContentContext = createContext<ContentContextValue | null>(null)

function loadStored(): ResumeData | null {
  try {
    const raw = localStorage.getItem(STORAGE_KEY)
    if (!raw) return null
    return JSON.parse(raw) as ResumeData
  } catch {
    return null
  }
}

export function ContentProvider({ children }: { children: ReactNode }) {
  const [resumeData, setResumeData] = useState<ResumeData>(() => loadStored() ?? defaultResume)
  const [editorOpen, setEditorOpen] = useState(false)
  const [saveStatus, setSaveStatus] = useState<'idle' | 'saving' | 'saved' | 'error'>('idle')

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(resumeData))
  }, [resumeData])

  const updateResume = useCallback((updater: (prev: ResumeData) => ResumeData) => {
    setResumeData((prev) => updater(prev))
  }, [])

  const resetToDefault = useCallback(() => {
    if (window.confirm('Reset all content to defaults from resume.json?')) {
      setResumeData(defaultResume)
      localStorage.removeItem(STORAGE_KEY)
    }
  }, [])

  const exportJson = useCallback(() => {
    const blob = new Blob([JSON.stringify(resumeData, null, 2)], { type: 'application/json' })
    const url = URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = 'resume.json'
    a.click()
    URL.revokeObjectURL(url)
  }, [resumeData])

  const saveToResumeJson = useCallback(async () => {
    setSaveStatus('saving')
    try {
      await saveResumeToFile(resumeData)
      setSaveStatus('saved')
      window.setTimeout(() => setSaveStatus('idle'), 2500)
    } catch {
      setSaveStatus('error')
      window.setTimeout(() => setSaveStatus('idle'), 3000)
    }
  }, [resumeData])

  const built = useMemo(() => buildContent(resumeData), [resumeData])

  const value = useMemo<ContentContextValue>(
    () => ({
      ...built,
      resumeData,
      updateResume,
      resetToDefault,
      exportJson,
      saveToResumeJson,
      saveStatus,
      editorOpen,
      setEditorOpen,
    }),
    [built, resumeData, updateResume, resetToDefault, exportJson, saveToResumeJson, saveStatus, editorOpen],
  )

  return <ContentContext.Provider value={value}>{children}</ContentContext.Provider>
}

export function useContent() {
  const ctx = useContext(ContentContext)
  if (!ctx) throw new Error('useContent must be used within ContentProvider')
  return ctx
}
