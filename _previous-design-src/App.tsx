import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { ScrollProgress } from './components/ScrollProgress';
import { SectionRail } from './components/SectionRail';
import { useSpotlight } from './hooks/useSpotlight';
import { Hero } from './sections/Hero';
import { TechStrip } from './sections/TechStrip';
import { About } from './sections/About';
import { Services } from './sections/Services';
import { Skills } from './sections/Skills';
import { Projects } from './sections/Projects';
import { Architecture } from './sections/Architecture';
import { Experience } from './sections/Experience';
import { Approach } from './sections/Approach';
import { AIAssisted } from './sections/AIAssisted';
import { Contact } from './sections/Contact';

function App() {
  useSpotlight();

  return (
    <div className="app">
      <a href="#main-content" className="skip-link">
        Skip to content
      </a>
      <ScrollProgress />
      <SectionRail />
      <div className="ambient ambient--one" aria-hidden="true" />
      <div className="ambient ambient--two" aria-hidden="true" />
      <Navbar />
      <main id="main-content">
        <Hero />
        <TechStrip />
        <About />
        <Services />
        <Skills />
        <Projects />
        <Architecture />
        <Experience />
        <Approach />
        <AIAssisted />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
