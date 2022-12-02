import React, { useEffect } from 'react';
import { FaLinkedin, FaGithubSquare } from 'react-icons/fa';

function ProjectCard() {
  useEffect(() => {
    //
  }, []);

  return (
    <>
      <div className="relative md:w-96 bg-slate-950 p-6 md:p-0 md:bg-blue-950 rounded-lg ">
        <img
          src="https://picsum.photos/200/300"
          className="w-96 h-56 object-cover rounded-lg"
        />
        <div>
          <div>
            <h1 className="font-bold text-2xl my-4">Project title</h1>
            <p className="mb-12">
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum."
            </p>
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
