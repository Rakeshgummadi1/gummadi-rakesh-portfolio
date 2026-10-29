'use client';

import { Navbar } from './components/Navbar';
import { ScrollProgress } from './components/ScrollProgress';
import { Hero } from './sections/Hero';
import { Skills } from './sections/Skills';
import { Projects } from './sections/Projects';
import { Journey } from './sections/Journey';
import { ContactFooter } from './sections/ContactFooter';

function App() {
  return (
    <div className="app">
      <a href="#main-content" className="skip-link">
        Skip to content
      </a>
      <ScrollProgress />
      <Navbar />
      <main id="main-content">
        <Hero />
        <Skills />
        <Projects />
        <Journey />
      </main>
      <ContactFooter />
    </div>
  );
}

export default App;
