import React from 'react';
import { FaBuilding } from 'react-icons/fa';

function WorkExperienceCard() {
  return (
    <>
      <div className="flex">
        <FaBuilding className="text-5xl" />
        <div>
          <h1>Company title</h1>
        </div>
      </div>
    </>
  );
}

export default WorkExperienceCard;
