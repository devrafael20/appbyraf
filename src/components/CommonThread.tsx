import { thread } from '../content/site'

export function CommonThread() {
  return (
    <section className="section thread" aria-labelledby="thread-heading">
      <div className="wrap">
        <header className="section-intro">
          <p className="section-label">{thread.label}</p>
          <h2 id="thread-heading">{thread.headline}</h2>
          {thread.body.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </header>
        <ul className="principle-grid">
          {thread.principles.map((principle) => (
            <li key={principle.title} className="principle">
              <p className="eyebrow">
                Principle {principle.number} — {principle.title}
              </p>
              <h3>{principle.title}</h3>
              <p>{principle.body}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
