import { productUrls, projects, work } from '../content/site'
import { Cta } from './Cta'

export function SelectedWork() {
  return (
    <section className="section work" id="work" aria-labelledby="work-heading">
      <div className="wrap">
        <header className="section-intro">
          <p className="section-label">{work.label}</p>
          <h2 id="work-heading">{work.headline}</h2>
          {work.body.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </header>

        <div className="project-list">
          {projects.map((project) => {
            const href = productUrls[project.id]
            return (
              <article
                key={project.id}
                className={`project${project.flip ? ' project--flip' : ''}`}
                aria-labelledby={`${project.id}-heading`}
              >
                <div className="project-copy">
                  <p className="eyebrow">
                    PROJECT {project.number} — {project.name}
                  </p>
                  <p className="project-category">{project.category}</p>
                  <h3 id={`${project.id}-heading`}>{project.headline}</h3>
                  <p className="project-lead">{project.lead}</p>
                  <p>{project.body}</p>
                  <p className="project-focus">
                    <span className="meta-label">Product focus</span>
                    {project.focus}
                  </p>
                  <p className="project-statement">
                    <span className="meta-label">Project statement</span>
                    {project.statement}
                  </p>
                  <Cta href={href || undefined} arrow="ne" disabled={!href}>
                    {project.cta}
                  </Cta>
                </div>
                <div className={`project-panel project-panel--${project.tone}`} aria-hidden="true">
                  <span className="project-panel-number">{project.number}</span>
                  <span className="project-panel-name">{project.name}</span>
                  <span className="project-panel-cat">{project.category}</span>
                </div>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
