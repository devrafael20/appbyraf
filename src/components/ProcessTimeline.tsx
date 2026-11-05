import { useState } from 'react'
import { process } from '../content/site'
import { Reveal } from './Reveal'

export function ProcessTimeline() {
  const [active, setActive] = useState(0)
  const current = process.steps[active]

  return (
    <section className="section" aria-labelledby="process-heading">
      <div className="wrap">
        <Reveal>
          <header className="section-head">
            <p className="eyebrow">
              <span className="section-index">05</span> / Process
            </p>
            <h2 id="process-heading">{process.heading}</h2>
          </header>
        </Reveal>

        <Reveal>
          <div className="process">
            <ol className="step-list">
              {process.steps.map((step, index) => (
                <li key={step.number}>
                  <button
                    className="step-btn"
                    type="button"
                    aria-current={active === index ? 'true' : undefined}
                    aria-controls="process-panel"
                    onClick={() => setActive(index)}
                  >
                    <span className="step-num meta">{step.number}</span>
                    <span>
                      <strong>{step.title}</strong>
                    </span>
                  </button>
                </li>
              ))}
            </ol>
            <div className="step-panel" id="process-panel" aria-live="polite">
              <p className="meta" style={{ color: 'var(--accent)', marginBottom: '0.8rem' }}>
                Step {current.number}
              </p>
              <h3>{current.title}</h3>
              <p>{current.body}</p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
