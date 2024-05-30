import React from 'react';
import projectOneImage from '../images/project-images/mern-homework.jpg';
import projectTwoImage from '../images/project-images/5j-company.jpg';
import projectThreeImage from '../images/project-images/e-portfolio.jpg';

const Projects = () => {
  const projectList = [
    {
      image: projectOneImage,
      name: 'Mern Homework',
      description: 'A Web Application Homework todo app with user authentication that allows you to perform CRUD operations on your homework tasks.',
      techUsed: ['React', 'NodeJS', 'Express', 'MongoDB', 'Material-UI'],
      link: 'https://mernapp-homework.herokuapp.com/login',
      type: 'Personal Project',
      date: 'October 2022'
    },
    {
      image: projectTwoImage,
      name: '5J Company',
      description: 'A product prototype for our Subject Technopreneurship.',
      techUsed: ['React with React styled component'],
      link: 'https://j-company-b7e2d.web.app/',
      type: 'Schoolwork',
      date: 'May 2022'
    },
    {
      image: projectThreeImage,
      name: 'E-portfolio',
      description: 'A compilation of seminars and certificates for my subject Seminars & Fieldtrips.',
      techUsed: ['React', 'TailwindCSS'],
      link: 'https://e-portfolio-2022-lanuevo.web.app',
      type: 'Schoolwork',
      date: 'December 2022'
    },
  ];

  const ProjectCard = ({ image, name, description, techUsed, link, type, date }) => {
    return (
      <div className='project-card'>
        <img src={image} alt={`${name} screenshot`} className='project-image' />
        <div className='project-details'>
          <h2 className='project-name'>{name}</h2>
          <p className='project-type'>{type}</p>
          <p className='project-date'>{date}</p>
          <p className='project-description'>{description}</p>
          <p className='project-tech'>Tech Used: {techUsed.join(', ')}</p>
          <a href={link} className='project-button' target='_blank' rel='noopener noreferrer'>View Project</a>
        </div>
      </div>
    );
  };

  return (
    <div className='projects' id='projects'>
      <h1>Projects</h1>
      <div className="underline"></div>
      <div className='project-list'>
        {projectList.map((project, index) => (
          <ProjectCard
            key={index}
            image={project.image}
            name={project.name}
            description={project.description}
            techUsed={project.techUsed}
            link={project.link}
            type={project.type}
            date={project.date}
          />
        ))}
      </div>
    </div>
  );
}

export default Projects;
