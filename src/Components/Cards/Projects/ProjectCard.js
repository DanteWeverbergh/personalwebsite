import React, { useEffect, useRef } from 'react';
import { FaLinkedin, FaGithubSquare } from 'react-icons/fa';
import { Link } from 'react-router-dom';

function ProjectCard({ project }) {
  const ref = useRef(null);

  useEffect(() => {
    //
    console.log(project.tags);
  }, []);

  return (
    <>
      <div className="relative md:w-96 bg-slate-950 p-6 md:p-0 md:bg-blue-950 rounded-lg ">
        <a
          href={project.url ? project.url : project.github}
          target="_blank"
          rel="noreferrer"
        >
          <div className="relative cursor-pointer group" ref={ref}>
            <img
              src={project.img ? project.img : 'https://picsum.photos/200/300'}
              className="w-96 h-56 object-cover rounded-lg"
              id="image"
            />
            <h1
              className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-md bg-slate-950 px-4 py-2 rounded-lg hidden group-hover:block"
              id="image_click"
            >
              Click to visit website.
            </h1>
          </div>
        </a>

        <div>
          <div>
            <h1 className="font-bold text-2xl mt-4 mb-4">{project.title}</h1>
            <p className="mb-2">{project.description}</p>
            <div className="flex gap-2 ">
              {project.tags.map((tag) => (
                <h3 className="bg-blue-950 md:bg-slate-950 rounded-lg px-2 py-1">
                  {tag}
                </h3>
              ))}
            </div>
          </div>
          <a href={project.github} target="_blank" rel="noreferrer">
            <div className="absolute right-0 bottom-0 color-slate-950">
              <FaGithubSquare className="text-3xl text-slate-950 hover:text-white-950" />
            </div>
          </a>
        </div>
      </div>
    </>
  );
}

export default ProjectCard;
