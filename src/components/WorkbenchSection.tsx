import { useState } from 'react'
import { workbench } from '../content/site'
import { Reveal } from './Reveal'

export function WorkbenchSection() {
  const [open, setOpen] = useState<string | null>(workbench.items[0].id)

  return (
    <section className="section" aria-labelledby="workbench-heading">
      <div className="wrap">
        <Reveal>
          <header className="section-head">
            <p className="eyebrow">
              <span className="section-index">06</span> / Now
            </p>
            <h2 id="workbench-heading">{workbench.heading}</h2>
            <p className="lede">{workbench.intro}</p>
          </header>
        </Reveal>

        <div className="workbench-grid">
          {workbench.items.map((item) => {
            const expanded = open === item.id
            const panelId = `bench-${item.id}`
            return (
              <Reveal key={item.id}>
                <button
                  className="bench-card"
                  type="button"
                  aria-expanded={expanded}
                  aria-controls={panelId}
                  onClick={() => setOpen(expanded ? null : item.id)}
                >
                  <span className="status-pill">{item.statusLabel}</span>
                  <h3>{item.name}</h3>
                  <p>{item.summary}</p>
                  <div className="bench-more" id={panelId} hidden={!expanded}>
                    <p>
                      <span className="meta" style={{ display: 'block', marginBottom: '0.3rem' }}>
                        Currently working on
                      </span>
                      {item.workingOn}
                    </p>
                    <p>
                      <span className="meta" style={{ display: 'block', marginBottom: '0.3rem' }}>
                        Exploring
                      </span>
                      {item.exploring}
                    </p>
                  </div>
                </button>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
