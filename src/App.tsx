import { About } from './components/About'
import { Contact } from './components/Contact'
import { Footer } from './components/Footer'
import { Hero } from './components/Hero'
import { Nav } from './components/Nav'
import { ProcessTimeline } from './components/ProcessTimeline'
import { ProjectGallery } from './components/ProjectGallery'
import { ServicesSection } from './components/ServicesSection'
import { SkillsExplorer } from './components/SkillsExplorer'
import { WorkbenchSection } from './components/WorkbenchSection'

export default function App() {
  return (
    <>
      <a className="skip-link" href="#work">
        Skip to work
      </a>
      <Nav />
      <main>
        <Hero />
        <About />
        <ProjectGallery />
        <SkillsExplorer />
        <ServicesSection />
        <ProcessTimeline />
        <WorkbenchSection />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
