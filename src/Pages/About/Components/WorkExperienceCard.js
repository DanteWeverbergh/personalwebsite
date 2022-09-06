import React, { useEffect } from 'react';
import { useState } from 'react';
import { FaBuilding } from 'react-icons/fa';
import { getDate } from '../../../libs/Firestore';

function WorkExperienceCard({ work }) {
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');

  useEffect(() => {
    if (work.startDate) {
      getDate(work.startDate, setStartDate);
    }

    if (work.endDate) {
      getDate(work.endDate, setEndDate);
    }
  }, []);

  return (
    <>
      <div className="flex items-center  w-1/2 py-2 mt-6 ">
        <FaBuilding className="text-6xl" />
        <div className="ml-6">
          <h1 className="text-xl font-bold">{work.functie}</h1>
          <h2 className="font-bold">{work.companyName}</h2>
          <div className="">
            {startDate} - {endDate}
          </div>
          <div className="font-thin">{work.place}</div>
        </div>
      </div>
    </>
  );
}

export default WorkExperienceCard;
