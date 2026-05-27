import { site } from '../data/content'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer
      style={{
        padding: '2rem 0',
        borderTop: '1px solid var(--border)',
      }}
    >
      <div
        className="container"
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '1rem',
        }}
      >
        <span style={{ fontSize: '0.875rem', color: 'var(--text-muted)' }}>
          © {year} {site.name}
        </span>
        <div style={{ display: 'flex', gap: '1.5rem' }}>
          {site.social.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              style={{ fontSize: '0.875rem', color: 'var(--text-muted)' }}
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  )
}
