import { useMemo, useState } from 'react'
import { projects, work, type ProductId, type ProjectFilter } from '../content/site'
import { ProjectCard } from './ProjectCard'
import { ProjectDetail } from './ProjectDetail'
import { Reveal } from './Reveal'

export function ProjectGallery() {
  const [filter, setFilter] = useState<ProjectFilter>('all')
  const [openId, setOpenId] = useState<ProductId | null>(null)

  const visible = useMemo(
    () => (filter === 'all' ? projects : projects.filter((project) => project.filter === filter)),
    [filter],
  )

  const featured = visible[0]
  const rest = visible.slice(1)
  const active = projects.find((project) => project.id === openId) ?? null

  return (
    <section className="section" id="work" aria-labelledby="work-heading">
      <div className="wrap">
        <Reveal>
          <header className="section-head">
            <p className="eyebrow">
              <span className="section-index">02</span> / Work
            </p>
            <h2 id="work-heading">{work.heading}</h2>
            <p className="lede">{work.intro}</p>
          </header>
        </Reveal>

        <div className="filters" role="group" aria-label="Filter projects">
          {work.filters.map((item) => (
            <button
              key={item.id}
              className="filter-btn"
              type="button"
              aria-pressed={filter === item.id}
              onClick={() => setFilter(item.id)}
            >
              {item.label}
            </button>
          ))}
        </div>

        <div className="project-stage">
          {featured ? (
            <Reveal>
              <ProjectCard project={featured} featured={visible.length > 1 && featured.preview === 'desktop'} onOpen={setOpenId} />
            </Reveal>
          ) : null}

          {rest.length ? (
            <div className={rest.length > 1 ? 'project-pair' : undefined}>
              {rest.map((project) => (
                <Reveal key={project.id}>
                  <ProjectCard project={project} onOpen={setOpenId} />
                </Reveal>
              ))}
            </div>
          ) : null}
        </div>
      </div>

      <ProjectDetail project={active} onClose={() => setOpenId(null)} />
    </section>
  )
}
