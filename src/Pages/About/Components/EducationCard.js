import React, { useEffect, useState } from 'react';
import { MdSchool } from 'react-icons/md';
import { getDate } from '../../../libs/Firestore';

function EducationCard({ education }) {
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');

  useEffect(() => {
    if (education.startDate) {
      getDate(education.startDate, setStartDate);
    }

    if (education.endDate) {
      getDate(education.endDate, setEndDate);
    }

    console.log(education.orientation);
  }, []);

  return (
    <>
      <div className="flex items-center   py-2 mt-6 w-full">
        <MdSchool className="text-6xl" />
        <div className="ml-6">
          <h1 className="text-xl font-bold">{education.degree}</h1>
          <h2 className="font-bold">{education.School}</h2>
          <div className="">
            {startDate} - {endDate}
          </div>
          <div className="font-thin">Gent</div>
        </div>
      </div>
    </>
  );
}

export default EducationCard;
