import { research } from '../data/content'

export default function Research() {
  return (
    <section id="research">
      <h2>Research Experience</h2>
      <div>
        {research.map((item, index) => (
          <article key={index} className="research-item">
            <h3>{item.title}</h3>
            <p className="text-muted">{item.organization} • {item.period}</p>
            <p>{item.description}</p>
            {item.advisor && (
              <p className="text-muted"><strong>Advisor:</strong> {item.advisor}</p>
            )}
          </article>
        ))}
      </div>
    </section>
  )
}
