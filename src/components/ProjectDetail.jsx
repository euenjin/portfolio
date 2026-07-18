import { projects } from '../data/content'
import { GithubIcon } from './Icons'
import { ProjectVisual } from './Projects'

function ProjectMethods({ project }) {
  return (
    <article className="detail-panel detail-tech-panel">
      <div className="detail-panel-heading">
        <h2>{project.methodGroups ? 'Methods' : 'Technologies Used'}</h2>
        {project.github && (
          <a className="detail-github-button" href={project.github} target="_blank" rel="noreferrer">
            <GithubIcon />
            Github
          </a>
        )}
      </div>
      {project.methodGroups ? (
        <div className="method-groups">
          {project.methodGroups.map((group) => (
            <section className="method-group" key={group.title}>
              <h3>{group.title}</h3>
              <div className="tool-row">
                {group.items.map((method) => <span key={method}>{method}</span>)}
              </div>
            </section>
          ))}
        </div>
      ) : (
        <div className="tool-row">
          {project.tools.map((tool) => <span key={tool}>{tool}</span>)}
        </div>
      )}
    </article>
  )
}

function ProjectWorkflow({ project }) {
  return (
    <article className="detail-panel">
      <h2>{project.workflow ? 'Research Workflow' : 'Key Features'}</h2>
      <ul className="detail-list">
        {(project.workflow || project.results).map((item) => (
          typeof item === 'string' ? (
            <li key={item}>{item}</li>
          ) : (
            <li key={item.title}>
              <strong>{item.title}</strong>
              <span>{item.description}</span>
            </li>
          )
        ))}
      </ul>
      {project.scopeNote && <p className="data-scope-note">{project.scopeNote}</p>}
    </article>
  )
}

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
    <main className={`project-page${project.workflow ? ' structured-project-page' : ''}`}>
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
            {project.subtitle && <p className="detail-subtitle">{project.subtitle}</p>}
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

            <ProjectMethods project={project} />
          </div>

          <div className="project-detail-side">
            <ProjectVisual project={project} />
            <ProjectWorkflow project={project} />
          </div>
        </section>

        {project.analysis && (
          <section className="analysis-results" aria-labelledby="project-analysis-results-title">
            <h2 id="project-analysis-results-title">Analysis Results</h2>
            <article className="detail-panel analysis-placeholder">
              <strong>{project.analysis.status}</strong>
              <p>{project.analysis.description}</p>
            </article>
          </section>
        )}
      </div>
    </main>
  )
}
