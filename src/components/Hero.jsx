export default function Hero() {
  return (
    <section id="hero">
      <div className="hero-content">
        <div className="hero-text">
          <div className="role-title">Clinical Data Scientist</div>
          <h1>Eunjin Ahn</h1>
          <p className="hero-description">
            Turning complex healthcare data into reliable, interpretable insights. I build 
            predictive models on real-world clinical datasets—from data exploration through 
            model evaluation—with a focus on reliability and real-world impact.
          </p>
          <nav>
            <a href="#about">About</a>
            <a href="#research">Research</a>
            <a href="#projects">Projects</a>
            <a href="#skills">Skills</a>
            <a href="#contact">Contact</a>
          </nav>
        </div>
        <div className="hero-image">
          <img src="/profile.jpg" alt="Eunjin Ahn" />
        </div>
      </div>
    </section>
  )
}
