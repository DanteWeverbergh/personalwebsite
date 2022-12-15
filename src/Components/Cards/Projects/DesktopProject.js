import React from 'react';
import { FaLinkedin, FaGithubSquare } from 'react-icons/fa';

function DesktopProject({ project }) {
  return (
    <div className="w-1/4 relative">
      <h1 className="text-3xl font-bold absolute right-0">{project.title}</h1>
      <div className="bg-slate-950 py-4 px-4 rounded-lg mt-12">
        <a
          href={project.url ? project.url : project.github}
          target="_blank"
          rel="noreferrer"
        >
          <div className="relative cursor-pointer group">
            <img
              src={project.img}
              className="w-full object-cover group-hover:blur-sm h-64 group-hover:scale-75"
            />
            <h1
              className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-md bg-blue-950  px-4 py-2 rounded-lg hidden group-hover:block "
              id="image_click"
            >
              Click to visit website.
            </h1>
          </div>
        </a>
        <div>
          <p className=" h-28">{project.description}</p>
          <div className="flex gap-2 ">
            {project.tags.map((tag) => (
              <h3 className="bg-blue-950 md:bg-blue-950 rounded-lg px-2 py-1">
                {tag}
              </h3>
            ))}
          </div>
          <a href={project.github} target="_blank" rel="noreferrer">
            <div className="absolute right-4 bottom-4 color-slate-950">
              <FaGithubSquare className="text-3xl text-white-950    hover:scale-150 hover:animate-ping" />
            </div>
          </a>
        </div>
      </div>
    </div>
  );
}

export default DesktopProject;
