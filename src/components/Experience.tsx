import React from 'react';
import { userData } from '../data/data';
import { FaBriefcase } from "react-icons/fa";

const Experience = () => {
  const { experience } = userData;

  return (
    <div className='experience' id="experience">
        <div className="experience-container">
          <h1 className='exp-title'>Dev Experience</h1>
        </div>
        {/* Divider */}
        <hr className="divider" /> 
      
        <div className='timeline-container'>

          {/* Experience Item 1 */}
          <div className="exp-one">
            {/* Tree Connector */}
            <div className="tree-connector"></div>

            <div className="card">
              <h3>{experience.jobs.one.title}</h3>
              <hr className='line'/>
              <p className="exp-date">{experience.jobs.one.date}</p>
              <p>
                <span>Responsibilities</span>
                {experience.jobs.one.responsibilities.map(responsibility => (
                  <li key={responsibility}>{responsibility}</li>
                ))}
              </p>
              <h4>Tech used: {experience.jobs.one.tech}</h4>
            </div>
          </div>

          {/* Experience Item 2 */}
          <div className="exp-two">
            {/* Tree Connector */}
            <div className="tree-connector-two">
              <div>
                <div></div>
              </div>
            </div>

            <div className="card">
              <h3>{experience.jobs.two.title}</h3>
              <hr className='line'/>
              <p className="exp-date">{experience.jobs.two.date}</p>
              <p>
                <span>Responsibilities</span>
                {experience.jobs.two.responsibilities.map(responsibility => (
                  <li key={responsibility}>{responsibility}</li>
                ))}
              </p>
              <h4>Tech used: {experience.jobs.two.tech}</h4>
            </div>
          </div>
        </div>
    </div>
  );
}

export default Experience;
