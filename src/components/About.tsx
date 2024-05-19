import React from 'react';
import { userData } from '../data/data';

const About = () => {
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
          <div className="tech-items">
            {userData.about.tech.map((tech, index) => (
              <div key={index} className="tech-item">
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