import { contact } from '../content/site'
import { Cta } from './Cta'

export function Contact() {
  return (
    <section className="section contact" id="contact" aria-labelledby="contact-heading">
      <div className="wrap contact-inner">
        <p className="section-label">{contact.label}</p>
        <h2 id="contact-heading">{contact.headline}</h2>
        {contact.body.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
        <div className="contact-actions">
          <Cta className="cta-primary" arrow="ne">
            {contact.primaryCta}
          </Cta>
          <Cta>{contact.secondaryCta}</Cta>
        </div>
        <p className="contact-supporting">{contact.supporting}</p>
      </div>
    </section>
  )
}
