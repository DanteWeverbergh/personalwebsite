import React from 'react';
import { FaLinkedin, FaGithubSquare } from 'react-icons/fa';

function ProjectCard() {
  return (
    <>
      <div className="relative w-96">
        <div className="bg-slate-950 text-white-950 rounded-lg w-96 h-56 flex justify-center items-center text-3xl font-bold">
          Image
        </div>
        <div>
          <div>
            <h1 className="font-bold text-2xl my-4">Title</h1>
            <p className="mb-6">
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum."
            </p>
            <div className="bg-slate-950 px-4 py-2 rounded-lg absolute left-0 hover:bg-white-950 hover:text-slate-950">
              Read more
            </div>
            <FaGithubSquare className="absolute  left-32  text-4xl mb-0 hover:text-slate-950" />
          </div>
        </div>
      </div>
    </>
  );
}

export default ProjectCard;
