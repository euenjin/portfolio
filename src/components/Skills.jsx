import { techStack } from '../data/content'
import { CpuIcon } from './Icons'

export default function Skills() {
  return (
    <section id="stack">
      <div className="section-heading">
        <div>
          <p className="eyebrow">Methods + Tools</p>
          <h2>Tech Stack</h2>
        </div>
        <span className="section-icon plum"><CpuIcon /></span>
      </div>

      <div className="stack-grid">
        {Object.entries(techStack).map(([category, items]) => (
          <div key={category} className="stack-card">
            <h3>{category}</h3>
            <div className="stack-list">
              {items.map((skill) => (
                <span key={skill}>{skill}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
