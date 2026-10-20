import { approach } from '../content/site'

export function Approach() {
  return (
    <section className="section approach" id="approach" aria-labelledby="approach-heading">
      <div className="wrap">
        <header className="section-intro">
          <p className="section-label">{approach.label}</p>
          <h2 id="approach-heading">{approach.headline}</h2>
          <p>{approach.intro}</p>
        </header>
        <ol className="step-list">
          {approach.steps.map((step) => (
            <li key={step.title} className="step">
              <p className="eyebrow">
                {step.number} / {step.title}
              </p>
              <h3>{step.lead}</h3>
              <p>{step.body}</p>
            </li>
          ))}
        </ol>
        <p className="closing-line">{approach.closing}</p>
      </div>
    </section>
  )
}
