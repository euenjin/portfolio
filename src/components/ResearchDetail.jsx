import { experience } from '../data/content'
import { photos } from '../photo'
import { ResearchVisual } from './Research'

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
    <main className="project-page">
      <div className="project-page-inner">
        <nav className="project-breadcrumb" aria-label="Research breadcrumb">
          <a className="back-button" href="/#experience">Back</a>
          <a href="/#experience">Research</a>
          <span>{item.organization}</span>
        </nav>

        <section className="project-detail-hero">
          <div className="project-detail-copy">
            <p className="eyebrow">{item.organization} | {item.period}</p>
            <h1>{item.role}</h1>
            <span className="detail-rule" />
            <p>{item.focus}</p>

            <div className="detail-metrics">
              {item.metrics.map((metric) => (
                <div key={metric.label}>
                  <strong>{metric.value}</strong>
                  <span>{metric.label}</span>
                </div>
              ))}
            </div>

            <article className="detail-panel detail-tech-panel">
              <div className="detail-panel-heading">
                <h2>Methods Used</h2>
                <div className="research-logo-inline">
                  <img src={photos[item.logo]} alt={`${item.organization} logo`} />
                </div>
              </div>
              <div className="tool-row">
                {item.tags.map((tag) => (
                  <span key={tag}>{tag}</span>
                ))}
              </div>
            </article>
          </div>

          <div className="project-detail-side">
            <ResearchVisual item={item} />
            <article className="detail-panel">
              <h2>Key Work</h2>
              <ul className="detail-list">
                {item.bullets.map((bullet) => (
                  <li key={bullet}>{bullet}</li>
                ))}
              </ul>
            </article>
          </div>
        </section>
      </div>
    </main>
  )
}
