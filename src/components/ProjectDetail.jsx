import { projects } from '../data/content'
import { GithubIcon } from './Icons'
import { ProjectVisual } from './Projects'

export default function ProjectDetail({ slug }) {
  const project = projects.find((item) => item.slug === slug)

  if (!project) {
    return (
      <main className="project-page">
        <a className="back-button" href="/#projects">Back</a>
        <h1>Project not found</h1>
      </main>
    )
  }

  return (
    <main className="project-page">
      <div className="project-page-inner">
        <nav className="project-breadcrumb" aria-label="Project breadcrumb">
          <a className="back-button" href="/#projects">Back</a>
          <a href="/#projects">Projects</a>
          <span>{project.title}</span>
        </nav>

        <section className="project-detail-hero">
          <div className="project-detail-copy">
            <p className="eyebrow">{project.type} | {project.period}</p>
            <h1>{project.title}</h1>
            <span className="detail-rule" />
            <p>{project.summary}</p>

            <div className="detail-metrics">
              {project.metrics.map((metric) => (
                <div key={metric.value}>
                  <strong>{metric.value}</strong>
                  <span>{metric.label}</span>
                </div>
              ))}
            </div>

            <article className="detail-panel detail-tech-panel">
              <div className="detail-panel-heading">
                <h2>Technologies Used</h2>
                {project.github && (
                  <a className="detail-github-button" href={project.github} target="_blank" rel="noreferrer">
                    <GithubIcon />
                    Github
                  </a>
                )}
              </div>
              <div className="tool-row">
                {project.tools.map((tool) => (
                  <span key={tool}>{tool}</span>
                ))}
              </div>
            </article>
          </div>

          <div className="project-detail-side">
            <ProjectVisual project={project} />
            <article className="detail-panel">
              <h2>Key Features</h2>
              <ul className="detail-list">
                {project.results.map((result) => (
                  <li key={result}>{result}</li>
                ))}
              </ul>
            </article>
          </div>
        </section>
      </div>
    </main>
  )
}
