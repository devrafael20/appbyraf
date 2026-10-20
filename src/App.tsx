import { About } from './components/About'
import { Approach } from './components/Approach'
import { CommonThread } from './components/CommonThread'
import { Contact } from './components/Contact'
import { Footer } from './components/Footer'
import { Hero } from './components/Hero'
import { Nav } from './components/Nav'
import { SelectedWork } from './components/SelectedWork'
import { WhatsNext } from './components/WhatsNext'

export default function App() {
  return (
    <>
      <a className="skip-link" href="#work">
        Skip to work
      </a>
      <Nav />
      <main>
        <Hero />
        <SelectedWork />
        <CommonThread />
        <Approach />
        <About />
        <WhatsNext />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
