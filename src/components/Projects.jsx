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
  if (project.preview === 'apple-health') {
    return (
      <div className="project-visual apple-health-visual" aria-label="Apple Health dashboard visual">
        <div className="apple-dashboard-shot">
          <aside>
            <b>app</b>
            <span>Daily Trends</span>
            <span>Workouts</span>
            <span>Sync Apple Health</span>
          </aside>
          <main>
            <div className="shot-title">
              <strong>Apple Health Personal Dashboard</strong>
              <span>A personal Apple Watch and Apple Health dashboard.</span>
            </div>
            <div className="shot-stats">
              <div><span>Tracked Days</span><strong>1,417</strong></div>
              <div><span>Latest Steps</span><strong>26,156</strong></div>
              <div><span>Resting HR</span><strong>52.6</strong></div>
              <div><span>Workouts</span><strong>24</strong></div>
            </div>
            <div className="shot-content">
              <div className="shot-chart">
                <svg viewBox="0 0 260 112" aria-hidden="true">
                  <polyline points="6,78 28,88 46,62 68,96 90,70 112,64 134,86 156,54 178,82 200,24 222,44 250,30" />
                  <polyline className="soft" points="6,100 28,99 46,101 68,100 90,99 112,100 134,99 156,100 178,99 200,99 222,100 250,99" />
                </svg>
              </div>
              <div className="shot-table">
                <span />
                <span />
                <span />
                <span />
              </div>
            </div>
          </main>
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
