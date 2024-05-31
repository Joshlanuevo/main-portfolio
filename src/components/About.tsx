import { userData } from '../data/data';

const About = () => {
  const categoryColors = {
    'Frontend': '#4e89ae', 
    'Android': '#52796f', 
    'Backend': 'darkgray', 
    'Dev tools': '#bf6b32'
  };

  return (
    <div className='about' id="about">
      <div className="about-container">
        <h1>About</h1>
        <div className="underline"></div>
        <h2>{userData.about.header}</h2>
        <div className="content">
          <div className="description">
            <p dangerouslySetInnerHTML={{ __html: userData.about.description }} />
          </div>
          <div className="tech-stack">
            <h3>Tech Used</h3>
            <div className="tech-dots">
              <div className="dot-container">
                <div className="dot" style={{ backgroundColor: '#4e89ae' }}></div>
                <p className="dot-title">Frontend</p>
              </div>
              <div className="dot-container">
                <div className="dot" style={{ backgroundColor: '#52796f' }}></div>
                <p className="dot-title">Android</p>
              </div>
              <div className="dot-container">
                <div className="dot" style={{ backgroundColor: 'darkgray' }}></div>
                <p className="dot-title">Backend</p>
              </div>
              <div className="dot-container">
                <div className="dot" style={{ backgroundColor: '#bf6b32' }}></div>
                <p className="dot-title">Dev tools</p>
              </div>
            </div>
            <div className="tech-items">
              {userData.about.tech.map((tech, index) => (
                <div
                  key={index}
                  className="tech-item"
                  style={{ borderLeft: `6px solid ${categoryColors[tech.category as keyof typeof categoryColors]}` }}
                >
                  <img src={tech.icon} alt={tech.name} className="tech-icon" />
                  <p>{tech.name}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
