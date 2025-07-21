import { BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Main from './components/Main';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Maintenance from './pages/MaintenancePage';

const isMaintenanceMode = import.meta.env.VITE_MAINTENANCE_MODE === 'true';

function App() {
  if (isMaintenanceMode) {
    return <Maintenance />;
  }
  
  return (
    <>
    <Router>
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

      {/* Footer */}
      <div className="portfolio-footer">
        <Footer />
      </div>
      </Router>
    </>
  )
}

export default App;
