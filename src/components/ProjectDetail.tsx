import { useEffect, useRef } from 'react'
import type { Project } from '../content/site'
import { Cta } from './Cta'
import { IconClose } from './Icons'

type ProjectDetailProps = {
  project: Project | null
  onClose: () => void
}

export function ProjectDetail({ project, onClose }: ProjectDetailProps) {
  const dialogRef = useRef<HTMLDialogElement>(null)

  useEffect(() => {
    const dialog = dialogRef.current
    if (!dialog) return

    if (project && !dialog.open) {
      dialog.showModal()
      document.body.classList.add('modal-open')
    }

    if (!project && dialog.open) {
      dialog.close()
    }

    return () => document.body.classList.remove('modal-open')
  }, [project])

  function handleClose() {
    document.body.classList.remove('modal-open')
    onClose()
  }

  return (
    <dialog
      ref={dialogRef}
      className="modal"
      aria-labelledby={project ? `${project.id}-detail-heading` : undefined}
      onClose={handleClose}
      onClick={(event) => {
        if (event.target === dialogRef.current) handleClose()
      }}
    >
      {project ? (
        <div className="modal-inner">
          <div className="modal-top">
            <div>
              <p className="meta">{project.category}</p>
              <h2 id={`${project.id}-detail-heading`}>{project.name}</h2>
              <p className="status-pill" style={{ marginTop: '0.75rem' }}>
                {project.statusLabel}
              </p>
            </div>
            <button className="modal-close" type="button" onClick={handleClose} aria-label="Close project details">
              <IconClose />
            </button>
          </div>

          {project.screenshot ? (
            <div className="modal-shot">
              <img src={project.screenshot} alt={project.screenshotAlt} />
            </div>
          ) : (
            <div className="modal-shot" aria-hidden="true">
              <div className="abstract-preview">
                <div className="abstract-hero" />
                <div className="abstract-row">
                  <span className="abstract-tile" />
                  <span className="abstract-tile" />
                  <span className="abstract-tile" />
                </div>
              </div>
            </div>
          )}

          <div className="detail-grid">
            <section className="detail-block">
              <h3>Project overview</h3>
              <p>{project.overview}</p>
            </section>
            <section className="detail-block">
              <h3>The problem</h3>
              <p>{project.problem}</p>
            </section>
            <section className="detail-block">
              <h3>My role</h3>
              <p>{project.role}</p>
            </section>
            <section className="detail-block">
              <h3>What I worked on</h3>
              <ul>
                {project.workedOn.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </section>
            <section className="detail-block">
              <h3>Technologies</h3>
              <ul className="chip-list">
                {project.technologies.map((tech) => (
                  <li className="chip" key={tech}>
                    {tech}
                  </li>
                ))}
              </ul>
            </section>
            <section className="detail-block">
              <h3>Challenges</h3>
              <p>{project.challenges}</p>
            </section>
            <section className="detail-block">
              <h3>Lessons learned</h3>
              <p>{project.lessons}</p>
            </section>
          </div>

          {(project.liveUrl || project.repoUrl) && (
            <div className="modal-links">
              {project.liveUrl ? (
                <Cta variant="primary" href={project.liveUrl} arrow>
                  Live demo
                </Cta>
              ) : null}
              {project.repoUrl ? (
                <Cta href={project.repoUrl} arrow>
                  Repository
                </Cta>
              ) : null}
            </div>
          )}
        </div>
      ) : null}
    </dialog>
  )
}
