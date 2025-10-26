import {React, use, useEffect} from 'react';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import AOS from 'aos'
import 'aos/dist/aos.css'

function App() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <main className="">
        <Navbar />
             <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
      


    </main>
      
  )
}

export default App
