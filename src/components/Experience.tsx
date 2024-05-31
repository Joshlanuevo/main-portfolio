import { userData } from '../data/data';

const Experience = () => {
  const { experience } = userData;

  return (
    <div className='experience' id="experience">
        <div className="experience-container">
          <h1 className='exp-title'>Dev Experience</h1>
          <div className="underline"></div>
        </div>      
        <div className='timeline-container'>
          {/* Experience Item 1 */}
          <div className="job-exp">
            {/* Tree Connector */}
            <div className="tree-connector"></div>

            <div className="card">
              <h3>{experience.jobs.one.title}</h3>
              <hr className='line'/>
              <p className="exp-date">{experience.jobs.one.date}</p>
              <p className='responsibilities'>
                <p className='project-type'>Project: {experience.jobs.one.project}</p>
                <span className='responsibilities-title'>Responsibilities</span>
                <ul className='responsibilities-desc'>
                  {experience.jobs.one.responsibilities.map(responsibility => (
                    <li key={responsibility}>{responsibility}</li>
                  ))}
                </ul>
              </p>
              <h4>Tech used: {experience.jobs.one.tech}</h4>
            </div>
          </div>

          {/* Experience Item 2 */}
          <div className="job-exp">
            {/* Tree Connector */}
            <div className="tree-connector-two">
              <div className="outer-circle">
                  <div className="inner-circle"></div>
              </div>
            </div>

            <div className="card">
              <h3>{experience.jobs.two.title}</h3>
              <hr className='line'/>
              <p className="exp-date">{experience.jobs.two.date}</p>
              <p className='responsibilities'>
              <p className='project-type'>Project: {experience.jobs.two.project}</p>
                <span className='responsibilities-title'>Responsibilities</span>
                <ul className='responsibilities-desc'>
                  {experience.jobs.two.responsibilities.map(responsibility => (
                    <li key={responsibility}>{responsibility}</li>
                  ))}
                </ul>
              </p>
              <h4>Tech used: {experience.jobs.two.tech}</h4>
            </div>
          </div>
        </div>
    </div>
  );
}

export default Experience;
