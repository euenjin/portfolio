import { profile } from '../data/content'

export default function Hero() {
  return (
    <header id="hero" className="hero-section">
      <nav className="top-nav" aria-label="Primary navigation">
        <a href="#experience">Experience</a>
        <a href="#projects">Projects</a>
        <a href="#stack">Tech Stack</a>
        <a href="#contact">Contact</a>
      </nav>

      <div className="hero-grid">
        <div className="hero-copy">
          <div className="hero-identity">
            <img src="/profile.jpg" alt={profile.name} className="profile-photo inline" />
            <div>
              <p className="eyebrow">{profile.role}</p>
              <h1>{profile.name}</h1>
            </div>
          </div>
          <p className="hero-description">{profile.headline}</p>

          <div className="hero-actions">
            <a className="button primary" href="#projects">View Projects</a>
            <a className="button secondary" href={profile.resume} target="_blank" rel="noreferrer">
              Resume PDF
            </a>
          </div>
        </div>

        <div className="profile-panel" aria-label="Profile summary">
          <div className="mri-visual" aria-hidden="true">
            <div className="mri-ring">
              <div className="scan-sweep" />
              <div className="mri-core">
                <svg viewBox="0 0 180 68" role="img">
                  <polyline
                    points="0,42 18,42 26,30 34,52 44,18 56,42 78,42 88,34 100,46 112,24 124,42 148,42 158,36 168,42 180,42"
                  />
                </svg>
                <div className="data-readout">
                  <span>HR 072</span>
                  <span>SpO2 98</span>
                  <span>RISK 0.18</span>
                </div>
              </div>
            </div>
          </div>
          <div className="profile-note">
            <span>Based in {profile.location}</span>
            <strong>Clinical data science with recall-first modeling and interpretable evidence.</strong>
          </div>
          <div className="metric-grid">
            {profile.highlights.map((item) => (
              <div key={item.label} className="metric-card">
                <strong>{item.value}</strong>
                <span>{item.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </header>
  )
}
