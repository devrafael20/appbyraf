import { useEffect, useState } from 'react'
import { site } from '../content/site'
import { useActiveSection } from '../hooks/useActiveSection'

const sectionIds = ['home', 'about', 'work', 'skills', 'contact'] as const

export function Nav() {
  const [open, setOpen] = useState(false)
  const active = useActiveSection(sectionIds)

  useEffect(() => {
    document.body.classList.toggle('nav-open', open)
    return () => document.body.classList.remove('nav-open')
  }, [open])

  function close() {
    setOpen(false)
  }

  return (
    <header className="nav">
      <div className="wrap nav-inner">
        <a className="wordmark" href="#home" onClick={close}>
          DEV<span className="wordmark-accent">RAF</span>
        </a>

        <p className="avail">
          <span className="avail-dot" aria-hidden="true" />
          {site.availability}
        </p>

        <button
          className="nav-toggle"
          type="button"
          aria-expanded={open}
          aria-controls="site-nav"
          onClick={() => setOpen((value) => !value)}
        >
          {open ? 'Close' : 'Menu'}
        </button>

        <nav className={`nav-panel${open ? ' is-open' : ''}`} id="site-nav" aria-label="Primary">
          <p className="avail avail-mobile">
            <span className="avail-dot" aria-hidden="true" />
            {site.availability}
          </p>
          <ul className="nav-links">
            {site.nav.map((item) => {
              const id = item.href.replace('#', '')
              return (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className={active === id ? 'is-active' : undefined}
                    aria-current={active === id ? 'location' : undefined}
                    onClick={close}
                  >
                    {item.label}
                  </a>
                </li>
              )
            })}
          </ul>
        </nav>
      </div>
    </header>
  )
}
