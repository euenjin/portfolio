import Hero from './components/Hero'
import Research from './components/Research'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Contact from './components/Contact'
import ProjectDetail from './components/ProjectDetail'
import ResearchDetail from './components/ResearchDetail'

function App() {
  const projectMatch = window.location.pathname.match(/^\/projects\/([^/]+)\/?$/)
  const researchMatch = window.location.pathname.match(/^\/research\/([^/]+)\/?$/)

  if (projectMatch) {
    return <ProjectDetail slug={projectMatch[1]} />
  }

  if (researchMatch) {
    return <ResearchDetail slug={researchMatch[1]} />
  }

  return (
    <div className="portfolio">
      <Hero />
      <Research />
      <Projects />
      <Skills />
      <Contact />
    </div>
  )
}

export default App
