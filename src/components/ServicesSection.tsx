import { services } from '../content/site'
import { IconBriefcase, IconDatabase, IconFlow, IconLayout } from './Icons'
import { Reveal } from './Reveal'

const icons = {
  web: IconLayout,
  business: IconBriefcase,
  backend: IconDatabase,
  automation: IconFlow,
}

export function ServicesSection() {
  return (
    <section className="section" aria-labelledby="services-heading">
      <div className="wrap">
        <Reveal>
          <header className="section-head">
            <p className="eyebrow">
              <span className="section-index">04</span> / Practice
            </p>
            <h2 id="services-heading">{services.heading}</h2>
          </header>
        </Reveal>
        <div className="service-grid">
          {services.items.map((item) => {
            const Icon = icons[item.id]
            return (
              <Reveal key={item.id}>
                <article className="service-card">
                  <span className="icon-wrap">
                    <Icon />
                  </span>
                  <h3>{item.title}</h3>
                  <p>{item.body}</p>
                </article>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
