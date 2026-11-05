import type { Project } from '../content/site'

type ProjectCardProps = {
  project: Project
  featured?: boolean
  onOpen: (id: Project['id']) => void
}

function AbstractPreview() {
  return (
    <div className="abstract-preview" aria-hidden="true">
      <div className="abstract-hero" />
      <div className="abstract-row">
        <span className="abstract-tile" />
        <span className="abstract-tile" />
        <span className="abstract-tile" />
      </div>
      <div className="abstract-row">
        <span className="abstract-tile" />
        <span className="abstract-tile" />
        <span className="abstract-tile" />
      </div>
    </div>
  )
}

function ProjectMedia({ project }: { project: Project }) {
  if (project.preview === 'abstract' || !project.screenshot) {
    return <AbstractPreview />
  }

  if (project.preview === 'phone') {
    return (
      <div className="phone-frame">
        <div className="phone-shell">
          <img src={project.screenshot} alt="" loading="lazy" />
        </div>
      </div>
    )
  }

  return (
    <div className="browser-frame">
      <div className="browser-bar" aria-hidden="true">
        <i />
        <i />
        <i />
        <span className="browser-url">{project.id}.appbyraf.com</span>
      </div>
      <img src={project.screenshot} alt="" loading="lazy" />
    </div>
  )
}

export function ProjectCard({ project, featured = false, onOpen }: ProjectCardProps) {
  return (
    <button
      type="button"
      className={`project-card${featured ? ' project-card--wide' : ''}`}
      onClick={() => onOpen(project.id)}
      aria-haspopup="dialog"
    >
      <div className="project-media">
        <ProjectMedia project={project} />
      </div>
      <div className="project-copy">
        <span className="status-pill">{project.statusLabel}</span>
        <h3>{project.name}</h3>
        <p className="meta">{project.category}</p>
        <p>{project.short}</p>
        <ul className="tech-list" aria-label="Technologies">
          {project.technologies.slice(0, 4).map((tech) => (
            <li className="chip" key={tech}>
              {tech}
            </li>
          ))}
        </ul>
      </div>
    </button>
  )
}
