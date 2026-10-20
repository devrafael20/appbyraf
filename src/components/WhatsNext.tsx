import { next } from '../content/site'

export function WhatsNext() {
  return (
    <section className="section next" aria-labelledby="next-heading">
      <div className="wrap">
        <header className="section-intro">
          <p className="section-label">{next.label}</p>
          <h2 id="next-heading">{next.headline}</h2>
          {next.body.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </header>
        <ul className="interest-list">
          {next.interests.map((item, index) => (
            <li key={item}>
              <span className="interest-number">{String(index + 1).padStart(2, '0')}</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
