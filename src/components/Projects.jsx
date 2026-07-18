import { projects } from '../data/content'
import { BrainIcon, GithubIcon } from './Icons'

export default function Projects() {
  return (
    <section id="projects">
      <div className="section-heading">
        <div>
          <p className="eyebrow">Selected Work</p>
          <h2>Main Projects</h2>
        </div>
        <span className="section-icon blue"><BrainIcon /></span>
      </div>

      <div className="project-showcase">
        {projects.map((project) => (
          <article key={project.title} className="project-card">
            <ProjectVisual project={project} />

            <div className="project-card-body">
              <div>
                <p className="eyebrow">{project.type} | {project.period}</p>
                <h3>{project.title}</h3>
                <p>{project.summary}</p>
              </div>

              <div className="project-card-actions">
                {project.github && (
                  <a className="project-link" href={project.github} target="_blank" rel="noreferrer">
                    <GithubIcon />
                    GitHub
                  </a>
                )}
                <a className="project-detail-button" href={`/projects/${project.slug}`}>
                  Details
                </a>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}

export function ProjectVisual({ project }) {
  if (project.image) {
    return (
      <div className="project-visual project-image-visual">
        <img src={project.image} alt={project.imageAlt || project.title} />
      </div>
    )
  }

  if (project.preview === 'glp1-medicare') {
    return (
      <div className="project-visual medicare-visual" aria-label="GLP-1 Medicare analytics visual">
        <div className="medicare-dashboard">
          <div className="medicare-header">
            <span>CMS Part D</span>
            <strong>GLP-1 Analytics</strong>
          </div>
          <div className="medicare-kpis">
            <div><span>Records</span><strong>349K+</strong></div>
            <div><span>Metrics</span><strong>Cost</strong></div>
            <div><span>Output</span><strong>BI</strong></div>
          </div>
          <div className="medicare-bars" aria-hidden="true">
            <span style={{ '--bar': '74%' }} />
            <span style={{ '--bar': '52%' }} />
            <span style={{ '--bar': '88%' }} />
            <span style={{ '--bar': '38%' }} />
          </div>
        </div>
      </div>
    )
  }

  if (project.preview === 'news-pipeline') {
    return (
      <div className="project-visual pipeline-visual" aria-label="Public health news pipeline visual">
        <div className="pipeline-flow">
          <div className="flow-step">
            <span>📰</span>
            <strong>News API</strong>
          </div>
          <i />
          <div className="flow-step">
            <span>🔎</span>
            <strong>Filter</strong>
          </div>
          <i />
          <div className="flow-step">
            <span>⭐</span>
            <strong>Rank</strong>
          </div>
          <i />
          <div className="flow-step">
            <span>✉️</span>
            <strong>Email</strong>
          </div>
        </div>
        <div className="pipeline-card-preview">
          <span>10 daily health articles</span>
          <span>1-2 day recency check</span>
          <span>weekday automation</span>
        </div>
        <strong>Public Health News Pipeline</strong>
        <small>Automated extraction, ranking, archival, and delivery</small>
      </div>
    )
  }

  return (
    <div className="project-visual pipeline-visual" aria-label="Public health news pipeline visual">
      <div className="pipeline-nodes">
        <span>API</span>
        <i />
        <span>Rank</span>
        <i />
        <span>Email</span>
      </div>
      <strong>News Pipeline</strong>
      <small>Automated extraction, filtering, archival, and delivery</small>
    </div>
  )
}
