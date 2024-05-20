import { useState } from 'react';
import './App.css';
import Header from './components/Header';
import Main from './components/Main';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Contact from './components/Contact';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='portfolio-container'>

        {/* Navbar */}
        <div className='portfolio-header'>
          <Header />
        </div>

        {/* Main */}
        <div className='portfolio-main'>
          <Main />
        </div>

        {/* About */}
        <div className="portfolio-about">
          <About />
        </div>

        {/* Experience */}
        <div className="portfolio-experience">
          <Experience />
        </div>

        {/* Projects */}
        <div className="portfolio-projects">
          <Projects />
        </div>

        {/* Contact */}
        <div className="portfolio-contact">
          <Contact />
        </div>
      </div>
    </>
  )
}

export default App;
