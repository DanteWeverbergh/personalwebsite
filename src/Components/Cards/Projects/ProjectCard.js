import React, { useEffect } from 'react';
import { FaLinkedin, FaGithubSquare } from 'react-icons/fa';

function ProjectCard({ project }) {
  useEffect(() => {
    //
    console.log(project.title);
  }, []);

  return (
    <>
      <div className="relative md:w-96 bg-slate-950 p-6 md:p-0 md:bg-blue-950 rounded-lg ">
        <img
          src={project.img ? project.img : 'https://picsum.photos/200/300'}
          className="w-96 h-56 object-cover rounded-lg"
        />
        <div>
          <div>
            <h1 className="font-bold text-2xl my-4">{project.title}</h1>
            <p className="mb-12">{project.description}</p>
            <div className="bg-blue-950  md:bg-slate-950 bottom-0 px-4 py-2 rounded-lg absolute mb-6 md:mb-0 hover:bg-white-950 hover:text-slate-950">
              Read more
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProjectCard;
