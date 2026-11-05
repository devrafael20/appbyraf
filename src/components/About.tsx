import { about } from '../content/site'
import { PersonalFacts } from './PersonalFacts'
import { Reveal } from './Reveal'

export function About() {
  return (
    <section className="section" id="about" aria-labelledby="about-heading">
      <div className="wrap">
        <Reveal>
          <header className="section-head">
            <p className="eyebrow">
              <span className="section-index">01</span> / About
            </p>
            <h2 id="about-heading">{about.heading}</h2>
          </header>
        </Reveal>
        <div className="about-grid">
          <Reveal>
            <div className="prose">
              {about.body.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </Reveal>
          <Reveal>
            <PersonalFacts />
          </Reveal>
        </div>
      </div>
    </section>
  )
}
