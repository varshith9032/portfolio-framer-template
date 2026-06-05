import fs from 'node:fs'
import path from 'node:path'
import type { Plugin } from 'vite'

export function saveResumePlugin(): Plugin {
  return {
    name: 'save-resume',
    apply: 'serve',
    configureServer(server) {
      server.middlewares.use((req, res, next) => {
        if (req.url !== '/api/save-resume' || req.method !== 'POST') {
          next()
          return
        }

        const chunks: Buffer[] = []
        req.on('data', (chunk) => chunks.push(chunk))
        req.on('end', () => {
          try {
            const parsed = JSON.parse(Buffer.concat(chunks).toString('utf-8'))
            const file = path.resolve(server.config.root, 'src/data/resume.json')
            fs.writeFileSync(file, `${JSON.stringify(parsed, null, 2)}\n`, 'utf-8')
            res.statusCode = 200
            res.setHeader('Content-Type', 'application/json')
            res.end(JSON.stringify({ ok: true }))
          } catch (err) {
            res.statusCode = 500
            res.setHeader('Content-Type', 'application/json')
            res.end(JSON.stringify({ ok: false, error: err instanceof Error ? err.message : 'Save failed' }))
          }
        })
        req.on('error', () => {
          res.statusCode = 500
          res.end()
        })
      })
    },
  }
}
