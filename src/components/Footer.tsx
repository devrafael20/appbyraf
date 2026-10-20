import { footer, site } from '../content/site'

export function Footer() {
  return (
    <footer className="footer">
      <div className="wrap footer-inner">
        <div className="footer-brand">
          <p className="wordmark">
            <span>{site.logo.name}</span>
            <span className="wordmark-slash" aria-hidden="true">
              /
            </span>
            <span>{site.logo.mark}</span>
          </p>
          <p>{footer.tagline}</p>
        </div>
        <nav aria-label="Footer">
          <ul className="footer-links">
            {site.footerNav.map((item) => (
              <li key={item.href}>
                <a href={item.href}>{item.label}</a>
              </li>
            ))}
          </ul>
        </nav>
        <p className="footer-legal">{footer.legal}</p>
      </div>
    </footer>
  )
}
