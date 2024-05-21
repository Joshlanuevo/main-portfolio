import React from 'react';
import { userData } from '../data/data';

const Experience = () => {
  const { experience } = userData

  return (
    <div className='experience' id="experience">
        <h1>Experience</h1>
        <div className="underline"></div>
        {experience.jobs.map((job, index) => (
          <div key={index} className="job">
            <div className="job-header">
              <h2>{job.title}</h2>
              <p className="date">{job.date}</p>
            </div>
            <ul className="responsibilities">
            {job.responsibilities.map((responsibility, idx) => (
              <li key={idx}>{responsibility}</li>
            ))}
          </ul>
            <div className="job-tech">
              <p className="tech"><strong>Technologies used:</strong> {job.tech}</p>
            </div>
          </div>
        ))}
    </div>
  )
}

export default Experience;