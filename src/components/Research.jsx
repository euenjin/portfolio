import { experience, leadership } from '../data/content'
import { photos } from '../photo'
import { PulseIcon } from './Icons'

export default function Research() {
  return (
    <section id="experience" className="section-band">
      <div className="section-heading">
        <div>
          <p className="eyebrow">Research + Leadership</p>
          <h2>Research Experience</h2>
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
    </section>
  )
}

export function ResearchVisual({ item }) {
  return (
    <div className="research-card-visual">
      <img src={photos[item.visual]} alt={item.focus} />
      <div className="research-logo-badge">
        <img src={photos[item.logo]} alt={`${item.organization} logo`} />
      </div>
      <div className="research-visual-caption">
        <strong>{item.organization}</strong>
        <span>{item.location}</span>
      </div>
    </div>
  )
}
