import React from "react";

function Experience() {
  return (
    <div className=" flex flex-col justify-center items-center mx-12 md:mx-0 mb-32">
      <div className="md:w-1/2 w-10/12 relative mt-16">
        <h1 className="font-bold text-3xl z-20 absolute right-0 top-0">Work experience</h1>
        <div className="bg-blue-950 mt-12 rounded-lg py-4 px-4 text-slate-950 flex gap-6 items-center">
          <div>
            <img className="w-16 object-cover " src="/img/ladbrokes.png" alt="aa-logo" />
          </div>
          <div>
            <h1 className="text-xl font-bold">Full-stack developer @ Ladbrokes.be (Brussels, Belgium)</h1>
            <h2>08/2023 - ...</h2>
          </div>
        </div>

        <div className="bg-blue-950 mt-12 rounded-lg py-4 px-4 text-slate-950 flex gap-6 items-center">
          <div>
            <div>{"<Dante/>"}</div>
          </div>
          <div>
            <h1 className="text-xl font-bold">Freelance Full-stack developer </h1>
            <h2>05/2023 - ...</h2>
          </div>
        </div>

        <div className="bg-blue-950 mt-12 rounded-lg py-4 px-4 text-slate-950 flex gap-6 items-center">
          <div>
            <img className="w-16 object-cover invert" src="/img/aa-logo.png" alt="aa-logo" />
          </div>
          <div>
            <h1 className="text-xl font-bold">Front-end developer @ Audience Advantage (Antwerp, Belgium)</h1>
            <h2>02/2023 - 07/2023</h2>
          </div>
        </div>

        <div className="bg-blue-950 mt-12 rounded-lg py-4 px-4 text-slate-950 flex gap-6 items-center">
          <div>
            <img className="w-16 object-cover " src="/img/rocksteady_icon.png" alt="rocksteady-logo" />
          </div>
          <div>
            <h1 className="text-xl font-bold">Full stack intersnhip @ Rocksteady (Birkirkara, Malta)</h1>
            <h2>04/2022 - 06/2022</h2>
          </div>
        </div>
      </div>

      <div className="md:w-1/2 w-10/12 relative mt-16">
        <h1 className="font-bold text-3xl z-20 absolute right-0 top-0">Education</h1>
        <div className="bg-blue-950 mt-12 rounded-lg py-4 px-4 text-slate-950 flex gap-6 items-center">
          <div>
            <img className="w-16 object-cover" src="/img/artevelde_logo.png" />
          </div>
          <div>
            <h1 className="text-xl font-bold">Graphic and digital media (new media development)</h1>
            <h2>09/2019 - 06-2022</h2>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Experience;
