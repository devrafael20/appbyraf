import { useMemo, useState } from 'react'
import { contact } from '../content/site'
import { Cta } from './Cta'
import { Reveal } from './Reveal'

async function copyText(value: string) {
  try {
    await navigator.clipboard.writeText(value)
    return true
  } catch {
    const field = document.createElement('textarea')
    field.value = value
    field.setAttribute('readonly', '')
    field.style.position = 'fixed'
    field.style.left = '-9999px'
    document.body.appendChild(field)
    field.select()
    const ok = document.execCommand('copy')
    document.body.removeChild(field)
    return ok
  }
}

export function Contact() {
  const [selected, setSelected] = useState<(typeof contact.options)[number]['id']>(contact.options[0].id)
  const [idea, setIdea] = useState('')
  const [status, setStatus] = useState('')

  const optionLabel = contact.options.find((option) => option.id === selected)?.label ?? contact.options[0].label

  const message = useMemo(() => {
    const detail = idea.trim() || 'I’d like to talk through the idea in more detail.'
    return `Hi Rafael,\n\nI’m thinking of building a ${optionLabel.toLowerCase()}.\n\n${detail}\n\n— sent from DEVRAF`
  }, [idea, optionLabel])

  async function handleCopy() {
    const ok = await copyText(message)
    setStatus(ok ? contact.copiedLabel : 'Copy failed. You can select the message and copy it manually.')
  }

  return (
    <section className="section" id="contact" aria-labelledby="contact-heading">
      <div className="wrap">
        <Reveal>
          <header className="section-head">
            <p className="eyebrow">
              <span className="section-index">07</span> / Contact
            </p>
            <h2 id="contact-heading">{contact.heading}</h2>
            <div className="prose">
              {contact.body.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </header>
        </Reveal>

        <Reveal>
          <form
            className="composer"
            onSubmit={(event) => {
              event.preventDefault()
              void handleCopy()
            }}
          >
            <p>{contact.prompt}</p>
            <div className="option-grid" role="group" aria-label="Project type">
              {contact.options.map((option) => (
                <button
                  key={option.id}
                  className="option"
                  type="button"
                  aria-pressed={selected === option.id}
                  onClick={() => setSelected(option.id)}
                >
                  {option.label}
                </button>
              ))}
            </div>
            <label>
              {contact.ideaLabel}
              <textarea
                value={idea}
                onChange={(event) => setIdea(event.target.value)}
                placeholder="A workflow that’s getting messy, a product you want to start, or a system that needs a clearer shape."
              />
            </label>
            <label>
              Inquiry preview
              <textarea readOnly value={message} aria-label="Generated inquiry message" />
            </label>
            <div className="copy-row">
              <Cta variant="accent" type="submit" arrow>
                {contact.copyLabel}
              </Cta>
              <p className="copy-status" role="status" aria-live="polite">
                {status}
              </p>
            </div>
          </form>
        </Reveal>
      </div>
    </section>
  )
}
