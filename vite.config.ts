import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig(({ mode }) => ({
  base: mode === 'pages' ? '/portfolio-framer-template/' : '/',
  plugins: [react()],
  server: {
    port: 5173,
    open: true,
    host: true,
  },
}))
