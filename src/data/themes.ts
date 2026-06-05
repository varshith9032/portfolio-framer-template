export type ThemePreset = {
  id: string
  name: string
  mode: 'light' | 'dark'
  accent: string
  bg: string
  bgElevated: string
  text: string
  textMuted: string
  border: string
  gradientFrom: string
  gradientTo: string
  navScrolled: string
  contactGradient: string
  btnPrimaryBg: string
  btnPrimaryColor: string
}

export const THEME_PRESETS: ThemePreset[] = [
  {
    id: 'midnight',
    name: 'Midnight',
    mode: 'dark',
    accent: '#6366f1',
    bg: '#0a0a0b',
    bgElevated: '#141416',
    text: '#f4f4f5',
    textMuted: '#a1a1aa',
    border: 'rgba(255, 255, 255, 0.08)',
    gradientFrom: '#ffffff',
    gradientTo: '#a1a1aa',
    navScrolled: 'rgba(10, 10, 11, 0.85)',
    contactGradient: 'linear-gradient(135deg, var(--bg-elevated) 0%, rgba(99, 102, 241, 0.14) 100%)',
    btnPrimaryBg: '#f4f4f5',
    btnPrimaryColor: '#0a0a0b',
  },
  {
    id: 'ocean',
    name: 'Ocean',
    mode: 'dark',
    accent: '#22d3ee',
    bg: '#060d14',
    bgElevated: '#0f1a24',
    text: '#e0f2fe',
    textMuted: '#7dd3fc',
    border: 'rgba(34, 211, 238, 0.12)',
    gradientFrom: '#e0f2fe',
    gradientTo: '#38bdf8',
    navScrolled: 'rgba(6, 13, 20, 0.9)',
    contactGradient: 'linear-gradient(135deg, var(--bg-elevated) 0%, rgba(34, 211, 238, 0.12) 100%)',
    btnPrimaryBg: '#22d3ee',
    btnPrimaryColor: '#042f3a',
  },
  {
    id: 'sunset',
    name: 'Sunset',
    mode: 'dark',
    accent: '#fb923c',
    bg: '#120c0a',
    bgElevated: '#1c1410',
    text: '#fff7ed',
    textMuted: '#fdba74',
    border: 'rgba(251, 146, 60, 0.14)',
    gradientFrom: '#fff7ed',
    gradientTo: '#fb923c',
    navScrolled: 'rgba(18, 12, 10, 0.9)',
    contactGradient: 'linear-gradient(135deg, var(--bg-elevated) 0%, rgba(251, 146, 60, 0.14) 100%)',
    btnPrimaryBg: '#fb923c',
    btnPrimaryColor: '#1c0a04',
  },
  {
    id: 'forest',
    name: 'Forest',
    mode: 'dark',
    accent: '#34d399',
    bg: '#080f0c',
    bgElevated: '#101a14',
    text: '#ecfdf5',
    textMuted: '#6ee7b7',
    border: 'rgba(52, 211, 153, 0.12)',
    gradientFrom: '#ecfdf5',
    gradientTo: '#34d399',
    navScrolled: 'rgba(8, 15, 12, 0.9)',
    contactGradient: 'linear-gradient(135deg, var(--bg-elevated) 0%, rgba(52, 211, 153, 0.12) 100%)',
    btnPrimaryBg: '#34d399',
    btnPrimaryColor: '#052e1c',
  },
  {
    id: 'rose',
    name: 'Rose',
    mode: 'dark',
    accent: '#f472b6',
    bg: '#10080f',
    bgElevated: '#1a1018',
    text: '#fdf2f8',
    textMuted: '#f9a8d4',
    border: 'rgba(244, 114, 182, 0.14)',
    gradientFrom: '#fdf2f8',
    gradientTo: '#f472b6',
    navScrolled: 'rgba(16, 8, 15, 0.9)',
    contactGradient: 'linear-gradient(135deg, var(--bg-elevated) 0%, rgba(244, 114, 182, 0.14) 100%)',
    btnPrimaryBg: '#f472b6',
    btnPrimaryColor: '#2a0a1a',
  },
  {
    id: 'aurora',
    name: 'Aurora',
    mode: 'dark',
    accent: '#c084fc',
    bg: '#0b0814',
    bgElevated: '#151020',
    text: '#faf5ff',
    textMuted: '#d8b4fe',
    border: 'rgba(192, 132, 252, 0.14)',
    gradientFrom: '#faf5ff',
    gradientTo: '#a78bfa',
    navScrolled: 'rgba(11, 8, 20, 0.9)',
    contactGradient: 'linear-gradient(135deg, var(--bg-elevated) 0%, rgba(192, 132, 252, 0.16) 100%)',
    btnPrimaryBg: '#e9d5ff',
    btnPrimaryColor: '#1e1033',
  },
  {
    id: 'ember',
    name: 'Ember',
    mode: 'dark',
    accent: '#f87171',
    bg: '#140a08',
    bgElevated: '#1f1210',
    text: '#fef2f2',
    textMuted: '#fca5a5',
    border: 'rgba(248, 113, 113, 0.14)',
    gradientFrom: '#fef2f2',
    gradientTo: '#f87171',
    navScrolled: 'rgba(20, 10, 8, 0.9)',
    contactGradient: 'linear-gradient(135deg, var(--bg-elevated) 0%, rgba(248, 113, 113, 0.14) 100%)',
    btnPrimaryBg: '#f87171',
    btnPrimaryColor: '#2a0a08',
  },
  {
    id: 'arctic',
    name: 'Arctic',
    mode: 'light',
    accent: '#2563eb',
    bg: '#f1f5f9',
    bgElevated: '#ffffff',
    text: '#0f172a',
    textMuted: '#64748b',
    border: 'rgba(15, 23, 42, 0.1)',
    gradientFrom: '#0f172a',
    gradientTo: '#2563eb',
    navScrolled: 'rgba(241, 245, 249, 0.92)',
    contactGradient: 'linear-gradient(135deg, var(--bg-elevated) 0%, rgba(37, 99, 235, 0.1) 100%)',
    btnPrimaryBg: '#2563eb',
    btnPrimaryColor: '#ffffff',
  },
  {
    id: 'cream',
    name: 'Cream',
    mode: 'light',
    accent: '#c2410c',
    bg: '#faf7f2',
    bgElevated: '#ffffff',
    text: '#292524',
    textMuted: '#78716c',
    border: 'rgba(41, 37, 36, 0.1)',
    gradientFrom: '#292524',
    gradientTo: '#c2410c',
    navScrolled: 'rgba(250, 247, 242, 0.94)',
    contactGradient: 'linear-gradient(135deg, var(--bg-elevated) 0%, rgba(194, 65, 12, 0.1) 100%)',
    btnPrimaryBg: '#c2410c',
    btnPrimaryColor: '#ffffff',
  },
  {
    id: 'mint',
    name: 'Mint',
    mode: 'light',
    accent: '#059669',
    bg: '#f0fdf9',
    bgElevated: '#ffffff',
    text: '#064e3b',
    textMuted: '#047857',
    border: 'rgba(6, 78, 59, 0.1)',
    gradientFrom: '#064e3b',
    gradientTo: '#10b981',
    navScrolled: 'rgba(240, 253, 249, 0.94)',
    contactGradient: 'linear-gradient(135deg, var(--bg-elevated) 0%, rgba(5, 150, 105, 0.1) 100%)',
    btnPrimaryBg: '#059669',
    btnPrimaryColor: '#ffffff',
  },
  {
    id: 'lavender',
    name: 'Lavender',
    mode: 'light',
    accent: '#7c3aed',
    bg: '#f5f3ff',
    bgElevated: '#ffffff',
    text: '#2e1065',
    textMuted: '#6d28d9',
    border: 'rgba(46, 16, 101, 0.1)',
    gradientFrom: '#2e1065',
    gradientTo: '#8b5cf6',
    navScrolled: 'rgba(245, 243, 255, 0.94)',
    contactGradient: 'linear-gradient(135deg, var(--bg-elevated) 0%, rgba(124, 58, 237, 0.1) 100%)',
    btnPrimaryBg: '#7c3aed',
    btnPrimaryColor: '#ffffff',
  },
  {
    id: 'peach',
    name: 'Peach',
    mode: 'light',
    accent: '#ea580c',
    bg: '#fff7ed',
    bgElevated: '#ffffff',
    text: '#431407',
    textMuted: '#9a3412',
    border: 'rgba(67, 20, 7, 0.1)',
    gradientFrom: '#431407',
    gradientTo: '#f97316',
    navScrolled: 'rgba(255, 247, 237, 0.94)',
    contactGradient: 'linear-gradient(135deg, var(--bg-elevated) 0%, rgba(234, 88, 12, 0.1) 100%)',
    btnPrimaryBg: '#ea580c',
    btnPrimaryColor: '#ffffff',
  },
  {
    id: 'sand',
    name: 'Sand',
    mode: 'light',
    accent: '#0d9488',
    bg: '#fafaf9',
    bgElevated: '#ffffff',
    text: '#1c1917',
    textMuted: '#57534e',
    border: 'rgba(28, 25, 23, 0.1)',
    gradientFrom: '#1c1917',
    gradientTo: '#0d9488',
    navScrolled: 'rgba(250, 250, 249, 0.94)',
    contactGradient: 'linear-gradient(135deg, var(--bg-elevated) 0%, rgba(13, 148, 136, 0.1) 100%)',
    btnPrimaryBg: '#0d9488',
    btnPrimaryColor: '#ffffff',
  },
  {
    id: 'sky',
    name: 'Sky',
    mode: 'light',
    accent: '#0284c7',
    bg: '#f0f9ff',
    bgElevated: '#ffffff',
    text: '#0c4a6e',
    textMuted: '#0369a1',
    border: 'rgba(12, 74, 110, 0.1)',
    gradientFrom: '#0c4a6e',
    gradientTo: '#0ea5e9',
    navScrolled: 'rgba(240, 249, 255, 0.94)',
    contactGradient: 'linear-gradient(135deg, var(--bg-elevated) 0%, rgba(2, 132, 199, 0.1) 100%)',
    btnPrimaryBg: '#0284c7',
    btnPrimaryColor: '#ffffff',
  },
  {
    id: 'blush',
    name: 'Blush',
    mode: 'light',
    accent: '#db2777',
    bg: '#fdf2f8',
    bgElevated: '#ffffff',
    text: '#500724',
    textMuted: '#9d174d',
    border: 'rgba(80, 7, 36, 0.1)',
    gradientFrom: '#500724',
    gradientTo: '#ec4899',
    navScrolled: 'rgba(253, 242, 248, 0.94)',
    contactGradient: 'linear-gradient(135deg, var(--bg-elevated) 0%, rgba(219, 39, 119, 0.1) 100%)',
    btnPrimaryBg: '#db2777',
    btnPrimaryColor: '#ffffff',
  },
  {
    id: 'lemon',
    name: 'Lemon',
    mode: 'light',
    accent: '#ca8a04',
    bg: '#fefce8',
    bgElevated: '#ffffff',
    text: '#422006',
    textMuted: '#854d0e',
    border: 'rgba(66, 32, 6, 0.1)',
    gradientFrom: '#422006',
    gradientTo: '#eab308',
    navScrolled: 'rgba(254, 252, 232, 0.94)',
    contactGradient: 'linear-gradient(135deg, var(--bg-elevated) 0%, rgba(202, 138, 4, 0.12) 100%)',
    btnPrimaryBg: '#ca8a04',
    btnPrimaryColor: '#ffffff',
  },
  {
    id: 'slate',
    name: 'Slate',
    mode: 'light',
    accent: '#475569',
    bg: '#f8fafc',
    bgElevated: '#ffffff',
    text: '#0f172a',
    textMuted: '#64748b',
    border: 'rgba(15, 23, 42, 0.08)',
    gradientFrom: '#0f172a',
    gradientTo: '#64748b',
    navScrolled: 'rgba(248, 250, 252, 0.94)',
    contactGradient: 'linear-gradient(135deg, var(--bg-elevated) 0%, rgba(71, 85, 105, 0.08) 100%)',
    btnPrimaryBg: '#334155',
    btnPrimaryColor: '#ffffff',
  },
]

export const LIGHT_THEMES = THEME_PRESETS.filter((t) => t.mode === 'light')
export const DARK_THEMES = THEME_PRESETS.filter((t) => t.mode === 'dark')

export type ThemeConfig = {
  preset?: string
  accent?: string
}

export function getThemePreset(id?: string): ThemePreset {
  return THEME_PRESETS.find((t) => t.id === id) ?? THEME_PRESETS[0]
}

function hexToRgb(hex: string) {
  const raw = hex.replace('#', '')
  const h = raw.length === 3 ? raw.split('').map((c) => c + c).join('') : raw
  return {
    r: parseInt(h.slice(0, 2), 16),
    g: parseInt(h.slice(2, 4), 16),
    b: parseInt(h.slice(4, 6), 16),
  }
}

function accentSoft(hex: string, alpha = 0.15) {
  const { r, g, b } = hexToRgb(hex)
  return `rgba(${r}, ${g}, ${b}, ${alpha})`
}

export function applyTheme(config: ThemeConfig) {
  const preset = getThemePreset(config.preset)
  const accent = config.accent || preset.accent
  const root = document.documentElement

  root.style.setProperty('--bg', preset.bg)
  root.style.setProperty('--bg-elevated', preset.bgElevated)
  root.style.setProperty('--text', preset.text)
  root.style.setProperty('--text-muted', preset.textMuted)
  root.style.setProperty('--border', preset.border)
  root.style.setProperty('--accent', accent)
  root.style.setProperty('--accent-soft', accentSoft(accent))
  root.style.setProperty('--gradient-from', preset.gradientFrom)
  root.style.setProperty('--gradient-to', preset.gradientTo)
  root.style.setProperty('--nav-scrolled-bg', preset.navScrolled)
  root.style.setProperty('--contact-gradient', preset.contactGradient)
  root.style.setProperty('--btn-primary-bg', preset.btnPrimaryBg)
  root.style.setProperty('--btn-primary-color', preset.btnPrimaryColor)
  root.dataset.theme = preset.id
}
