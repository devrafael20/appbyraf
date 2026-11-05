import { hero } from '../content/site'
import { Cta } from './Cta'
import { TerminalIntro } from './TerminalIntro'

export function Hero() {
  return (
    <section className="hero" id="home" aria-labelledby="hero-heading">
      <div className="wrap hero-grid">
        <div className="hero-copy">
          <p className="kicker">{hero.kicker}</p>
          <h1 id="hero-heading">
            <span>{hero.heading[0]}</span>
            <span>{hero.heading[1]}</span>
          </h1>
          <p className="lede">{hero.body}</p>
          <p className="hero-highlights" aria-label="Current projects">
            {hero.highlights.map((name) => (
              <span key={name}>{name}</span>
            ))}
          </p>
          <div className="hero-actions">
            <Cta variant="primary" href={hero.primaryCta.href} arrow>
              {hero.primaryCta.label}
            </Cta>
            <Cta href={hero.secondaryCta.href}>{hero.secondaryCta.label}</Cta>
          </div>
        </div>
        <TerminalIntro />
      </div>
    </section>
  )
}
