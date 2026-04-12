import { skills } from '../data/content'

export default function Skills() {
  return (
    <section id="skills">
      <h2>Skills</h2>
      <div className="skills-grid">
        {Object.entries(skills).map(([category, items]) => (
          <div key={category} className="skill-category">
            <h3>{category}</h3>
            <ul>
              {items.map((skill, index) => (
                <li key={index}>{skill}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  )
}
