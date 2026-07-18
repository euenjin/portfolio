import { experience } from '../data/content'
import { photos } from '../photo'
import { ResearchVisual } from './Research'

function MethodsPanel({ item }) {
  return (
    <article className="detail-panel detail-tech-panel">
      <div className="detail-panel-heading">
        <h2>{item.methodGroups ? 'Methods' : 'Methods Used'}</h2>
        <div className="research-logo-inline text-logo">
          {photos[item.logo] ? (
            <img src={photos[item.logo]} alt={`${item.organization} logo`} />
          ) : (
            <strong>{item.logoText || item.organization.slice(0, 2)}</strong>
          )}
        </div>
      </div>
      {item.methodGroups ? (
        <div className="method-groups">
          {item.methodGroups.map((group) => (
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
          {item.tags.map((tag) => <span key={tag}>{tag}</span>)}
        </div>
      )}
    </article>
  )
}

function WorkflowPanel({ item, expanded = false }) {
  return (
    <article className={`detail-panel${expanded ? ' workflow-panel-expanded' : ''}`}>
      <h2>{item.workflowTitle || (item.workflow ? 'Research Workflow' : 'Key Work')}</h2>
      <ul className="detail-list">
        {item.workflow
          ? item.workflow.map((step) => (
            <li key={step.title}>
              <strong>{step.title}</strong>
              <span>{step.description}</span>
            </li>
          ))
          : item.bullets.map((bullet) => <li key={bullet}>{bullet}</li>)}
      </ul>
    </article>
  )
}

export default function ResearchDetail({ slug }) {
  const item = experience.find((entry) => entry.slug === slug)

  if (!item) {
    return (
      <main className="project-page">
        <a className="back-button" href="/#experience">Back</a>
        <h1>Research not found</h1>
      </main>
    )
  }

  return (
    <main className="project-page research-page">
      <div className="project-page-inner">
        <nav className="project-breadcrumb" aria-label="Experience breadcrumb">
          <a className="back-button" href="/#experience">Back</a>
          <a href="/#experience">Experience</a>
          <span>{item.organization}</span>
        </nav>

        <section className="project-detail-hero">
          <div className="project-detail-copy">
            <p className="eyebrow">{item.organization} | {item.period}</p>
            <h1>{item.role}</h1>
            {item.subtitle && <p className="detail-subtitle">{item.subtitle}</p>}
            <span className="detail-rule" />
            <p>{item.detailFocus || item.focus}</p>

            <div className="detail-metrics">
              {item.metrics.map((metric) => (
                <div key={metric.label}>
                  <strong>{metric.value}</strong>
                  <span>{metric.label}</span>
                </div>
              ))}
            </div>

            {!item.expandedDetail && <MethodsPanel item={item} />}
          </div>

          <div className="project-detail-side">
            <ResearchVisual item={item} />
            {!item.expandedDetail && <WorkflowPanel item={item} />}
          </div>
        </section>

        {item.expandedDetail && (
          <div className="expanded-detail-sections">
            <WorkflowPanel item={item} expanded />

            {item.internalApplication && (
              <section className="internal-application" aria-labelledby="internal-application-title">
                <h2 id="internal-application-title">Internal Application</h2>
                <figure className="detail-panel application-screenshot-card">
                  <img src={item.internalApplication.image} alt={item.internalApplication.alt} />
                  <figcaption>{item.internalApplication.caption}</figcaption>
                </figure>
              </section>
            )}

            <MethodsPanel item={item} />
          </div>
        )}

        {item.analysis && (
          <section className="analysis-results" aria-labelledby="analysis-results-title">
            <h2 id="analysis-results-title">Analysis Results</h2>
            <article className="detail-panel analysis-placeholder">
              <strong>{item.analysis.status}</strong>
              <p>{item.analysis.description}</p>
            </article>
          </section>
        )}
      </div>
    </main>
  )
}
