import React from 'react';

function Experience() {
  return (
    <div className=" flex flex-col justify-center items-center mx-12 md:mx-0 mb-32">
      <div className="md:w-1/2 w-10/12 relative mt-16">
        <h1 className="font-bold text-3xl z-20 absolute right-0 top-0">
          Work experience
        </h1>
        <div className="bg-blue-950 mt-12 rounded-lg py-4 px-4 text-slate-950 flex gap-6 items-center">
          <div>
            <img className="w-16 object-cover" src="/img/rocksteady_icon.png" />
          </div>
          <div>
            <h1 className="text-xl font-bold">
              Full stack intersnhip @ Rockstady
            </h1>
            <h2>04/2022 - 06-2022</h2>
          </div>
        </div>
      </div>

      <div className="md:w-1/2 w-10/12 relative mt-16">
        <h1 className="font-bold text-3xl z-20 absolute right-0 top-0">
          Education
        </h1>
        <div className="bg-blue-950 mt-12 rounded-lg py-4 px-4 text-slate-950 flex gap-6 items-center">
          <div>
            <img className="w-16 object-cover" src="/img/artevelde_logo.png" />
          </div>
          <div>
            <h1 className="text-xl font-bold">
              Graphic and digital media (new media development)
            </h1>
            <h2>09/2019 - 06-2022</h2>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Experience;
