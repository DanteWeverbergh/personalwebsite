import React from 'react';
import ProjectCard from '../../../Components/Cards/Projects/ProjectCard';

function Projects() {
  return (
    <>
      <div className="flex justify-around h-screen  bg-blue-950 items-center">
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
      </div>
    </>
  );
}

export default Projects;
