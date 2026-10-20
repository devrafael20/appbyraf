import { hero } from '../content/site'
import { Cta } from './Cta'

export function Hero() {
  return (
    <section className="hero" aria-labelledby="hero-heading">
      <div className="wrap hero-grid">
        <div className="hero-copy">
          <p className="eyebrow">{hero.eyebrow}</p>
          <h1 id="hero-heading">{hero.headline}</h1>
          {hero.body.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
          <div className="hero-actions">
            <Cta className="cta-primary" href={hero.primaryCta.href} arrow={hero.primaryCta.arrow}>
              {hero.primaryCta.label}
            </Cta>
            <Cta href={hero.secondaryCta.href} arrow={hero.secondaryCta.arrow}>
              {hero.secondaryCta.label}
            </Cta>
          </div>
        </div>
        <aside className="hero-index" aria-label="Practice summary">
          {hero.sideLabels.map((item) => (
            <p key={item.label} className="hero-index-item">
              <span className="hero-index-number">{item.number}</span>
              <span>{item.label}</span>
            </p>
          ))}
        </aside>
      </div>
    </section>
  )
}
