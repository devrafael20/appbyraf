import { useId, useState } from 'react'
import { skills } from '../content/site'
import { Reveal } from './Reveal'

export function SkillsExplorer() {
  const [active, setActive] = useState<(typeof skills.categories)[number]['id']>(skills.categories[0].id)
  const tabPrefix = useId()
  const selected = skills.categories.find((category) => category.id === active) ?? skills.categories[0]

  return (
    <section className="section" id="skills" aria-labelledby="skills-heading">
      <div className="wrap">
        <Reveal>
          <header className="section-head skills-intro">
            <p className="eyebrow">
              <span className="section-index">03</span> / Skills
            </p>
            <h2 id="skills-heading">{skills.heading}</h2>
            <div className="prose">
              {skills.intro.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </header>
        </Reveal>

        <Reveal>
          <div className="skill-tabs" role="tablist" aria-label="Skill categories">
            {skills.categories.map((category) => {
              const selectedTab = category.id === active
              return (
                <button
                  key={category.id}
                  className="skill-tab"
                  type="button"
                  role="tab"
                  id={`${tabPrefix}-${category.id}`}
                  aria-selected={selectedTab}
                  aria-controls={`${tabPrefix}-panel`}
                  tabIndex={selectedTab ? 0 : -1}
                  onClick={() => setActive(category.id)}
                  onKeyDown={(event) => {
                    if (event.key !== 'ArrowRight' && event.key !== 'ArrowLeft') return
                    event.preventDefault()
                    const index = skills.categories.findIndex((item) => item.id === active)
                    const offset = event.key === 'ArrowRight' ? 1 : -1
                    const next = skills.categories[(index + offset + skills.categories.length) % skills.categories.length]
                    setActive(next.id)
                  }}
                >
                  {category.label}
                </button>
              )
            })}
          </div>
          <div
            className="skill-panel"
            role="tabpanel"
            id={`${tabPrefix}-panel`}
            aria-labelledby={`${tabPrefix}-${selected.id}`}
          >
            <ul className="chip-list">
              {selected.items.map((item) => (
                <li className="chip" key={item}>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
