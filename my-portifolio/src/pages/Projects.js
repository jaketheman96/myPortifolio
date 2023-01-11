import React from 'react';
import ProjectsCard from '../components/ProjectsCard';
import TrybeProjects from '../datas/projects';

function Projects() {
  return (
    <div>
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
  );
}

export default Projects;
