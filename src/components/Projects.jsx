import { projects } from '../data/content'

export default function Projects() {
  return (
    <section id="projects">
      <h2>Applied Projects</h2>
      <div style={{ display: 'grid', gap: '40px' }}>
        {projects.map((project, index) => (
          <article key={index}>
            <h3>{project.title}</h3>
            
            <p style={{ marginTop: '15px', marginBottom: '20px' }}>
              <strong>Summary:</strong> {project.summary}
            </p>

            <div style={{ marginBottom: '20px' }}>
              <h4>Key Results</h4>
              <ul style={{ marginLeft: '0', listStyle: 'none' }}>
                {project.results.map((result, i) => (
                  <li key={i} style={{ marginBottom: '8px' }}>
                    • {result}
                  </li>
                ))}
              </ul>
            </div>

            <div style={{ marginBottom: '20px' }}>
              <h4>Methods & Tools</h4>
              <p style={{ margin: 0 }}>{project.tools}</p>
            </div>

            <div style={{ marginBottom: '20px' }}>
              <h4>Impact</h4>
              <p style={{ margin: 0 }}>{project.impact}</p>
            </div>

            {project.github && (
              <div style={{ marginTop: '15px' }}>
                <a href={project.github} target="_blank" rel="noopener noreferrer">
                  View on GitHub →
                </a>
              </div>
            )}

            {project.details && (
              <details>
                <summary>Detailed Process</summary>
                <div>
                  {project.details}
                </div>
              </details>
            )}
          </article>
        ))}
      </div>
    </section>
  )
}
