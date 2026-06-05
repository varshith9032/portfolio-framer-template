import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { saveResumePlugin } from './vite-plugins/saveResume'

export default defineConfig(({ mode }) => ({
  base: mode === 'pages' ? '/portfolio-framer-template/' : '/',
  plugins: [react(), saveResumePlugin()],
  server: {
    port: 5173,
    open: true,
    host: true,
  },
}))
