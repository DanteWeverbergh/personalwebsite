import React, { useEffect } from 'react';
import { FaBuilding } from 'react-icons/fa';

function WorkExperienceCard({ work }) {
  useEffect(() => {}, []);

  return (
    <>
      <div className="flex items-center  w-1/2 py-2">
        <FaBuilding className="text-6xl" />
        <div className="ml-6">
          <h1 className="text-xl font-bold">{work.functie}</h1>
          <h2 className="font-bold">{work.companyName}</h2>
          <div className="">Datum</div>
          <div className="font-thin">{work.place}</div>
        </div>
      </div>
    </>
  );
}

export default WorkExperienceCard;
