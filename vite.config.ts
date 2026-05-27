import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: process.env.PAGES === '1' ? '/portfolio-framer-template/' : '/',
  plugins: [react()],
  server: {
    port: 5173,
    open: true,
    host: true,
  },
})
