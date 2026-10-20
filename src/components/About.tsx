import { about } from '../content/site'

export function About() {
  return (
    <section className="section about" id="about" aria-labelledby="about-heading">
      <div className="wrap">
        <header className="section-intro">
          <p className="section-label">{about.label}</p>
          <h2 id="about-heading">{about.headline}</h2>
        </header>
        <div className="about-body">
          {about.body.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
        <blockquote className="pullquote">
          <p>{about.principle}</p>
        </blockquote>
      </div>
    </section>
  )
}
