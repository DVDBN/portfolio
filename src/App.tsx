import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Education from './components/Education';
import Experience from './components/Experience';
import Skills from './components/Skills';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      <Projects />
      <Education />
      <Experience />
      <Skills />
    </div>
  );
}

export default App;