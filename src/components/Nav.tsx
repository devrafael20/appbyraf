import { useEffect, useState } from 'react'
import { site } from '../content/site'
import { Cta } from './Cta'

export function Nav() {
  const [open, setOpen] = useState(false)

  useEffect(() => {
    document.body.classList.toggle('nav-open', open)
    return () => document.body.classList.remove('nav-open')
  }, [open])

  function close() {
    setOpen(false)
  }

  return (
    <header className="nav" id="top">
      <div className="wrap nav-inner">
        <a className="wordmark" href="#top" onClick={close}>
          <span>{site.logo.name}</span>
          <span className="wordmark-slash" aria-hidden="true">
            /
          </span>
          <span>{site.logo.mark}</span>
        </a>

        <button
          className="nav-toggle"
          type="button"
          aria-expanded={open}
          aria-controls="site-nav"
          onClick={() => setOpen((value) => !value)}
        >
          {open ? 'Close' : 'Menu'}
        </button>

        <nav className={`nav-panel${open ? ' is-open' : ''}`} id="site-nav">
          <ul className="nav-links">
            {site.nav.map((item) => (
              <li key={item.href}>
                <a href={item.href} onClick={close}>
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
          <Cta className="nav-cta" href={site.navCta.href} arrow="ne">
            {site.navCta.label}
          </Cta>
        </nav>
      </div>
    </header>
  )
}
