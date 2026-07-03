import { experience, leadership } from '../data/content'
import { photos } from '../photo'
import { PulseIcon } from './Icons'

export default function Research() {
  return (
    <section id="experience" className="section-band">
      <div className="section-heading">
        <div>
          <p className="eyebrow">Professional Experience + Leadership</p>
          <h2>Experience</h2>
        </div>
        <span className="section-icon coral"><PulseIcon /></span>
      </div>

      <div className="research-showcase">
        {experience.map((item) => (
          <article key={item.slug} className="research-card">
            <ResearchVisual item={item} />

            <div className="research-card-body">
              <div>
                <p className="eyebrow">{item.organization} | {item.period}</p>
                <h3>{item.role}</h3>
                <p>{item.focus}</p>
              </div>

              <div className="tool-row">
                {item.tags.map((tag) => (
                  <span key={tag}>{tag}</span>
                ))}
              </div>

              <a className="project-detail-button" href={`/research/${item.slug}`}>
                Details
              </a>
            </div>
          </article>
        ))}
      </div>

      {leadership.length > 0 && (
        <div className="leadership-grid">
          {leadership.map((item) => (
            <div key={item.organization} className="leadership-card">
              <p className="eyebrow">{item.period}</p>
              <h3>{item.role}</h3>
              <strong>{item.organization}</strong>
              <p>{item.detail}</p>
            </div>
          ))}
        </div>
      )}
    </section>
  )
}

export function ResearchVisual({ item }) {
  const visual = photos[item.visual]
  const logo = photos[item.logo]

  if (!visual) {
    return (
      <div className={`research-card-visual generated-visual ${item.visual}`}>
        <div className="generated-chart" aria-hidden="true">
          <span />
          <span />
          <span />
          <span />
        </div>
        <div className="research-logo-badge text-logo">
          {logo ? <img src={logo} alt={`${item.organization} logo`} /> : <strong>{item.logoText || item.organization.slice(0, 2)}</strong>}
        </div>
        <div className="research-visual-caption">
          <strong>{item.organization}</strong>
          <span>{item.location}</span>
        </div>
      </div>
    )
  }

  return (
    <div className="research-card-visual">
      <img src={visual} alt={item.focus} />
      <div className="research-logo-badge">
        {logo ? <img src={logo} alt={`${item.organization} logo`} /> : <strong>{item.logoText || item.organization.slice(0, 2)}</strong>}
      </div>
      <div className="research-visual-caption">
        <strong>{item.organization}</strong>
        <span>{item.location}</span>
      </div>
    </div>
  )
}
