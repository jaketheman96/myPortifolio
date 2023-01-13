import React from 'react';
import ProjectsCard from '../components/ProjectsCard';
import TrybeProjects from '../infos/projects';
import '../style/Projects.style.css';

function Projects() {
  return (
    <div className="projects">
      <h1>Projects</h1>
      <div className="all-cards">
        {TrybeProjects.map((project, index) => (
          <ProjectsCard
            key={ index }
            name={ project.name }
            image={ project.image }
            repo={ project.repo }
            deploy={ project.deploy }
          />
        ))}
      </div>
    </div>
  );
}

export default Projects;
