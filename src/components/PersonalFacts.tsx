import { useState } from 'react'
import { about } from '../content/site'
import { IconPlus } from './Icons'

export function PersonalFacts() {
  const [open, setOpen] = useState<number | null>(0)

  return (
    <div className="facts">
      <p className="facts-title eyebrow">{about.factsTitle}</p>
      {about.facts.map((fact, index) => {
        const expanded = open === index
        const panelId = `fact-panel-${index}`
        return (
          <div className="fact" key={fact.title}>
            <button
              className="fact-btn"
              type="button"
              aria-expanded={expanded}
              aria-controls={panelId}
              onClick={() => setOpen(expanded ? null : index)}
            >
              <span>{fact.title}</span>
              <IconPlus />
            </button>
            <div className="fact-panel" id={panelId} hidden={!expanded}>
              <p>{fact.body}</p>
            </div>
          </div>
        )
      })}
    </div>
  )
}
