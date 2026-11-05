import { footer, site } from '../content/site'

export function Footer() {
  return (
    <footer className="footer">
      <div className="wrap footer-inner">
        <div>
          <p>{footer.note}</p>
          <p className="footer-meta" style={{ marginTop: '0.45rem' }}>
            {footer.legal}
          </p>
        </div>
        <div>
          <p className="footer-meta">{footer.stack}</p>
          <p style={{ marginTop: '0.45rem' }}>
            <a href={site.github} target="_blank" rel="noreferrer">
              GitHub
            </a>
          </p>
        </div>
      </div>
    </footer>
  )
}
