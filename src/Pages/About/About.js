import React, { useEffect } from 'react';
import Header from '../../Layouts/Header/Header';
import WorkExperienceCard from './Components/WorkExperienceCard';

function About() {
  useEffect(() => {}, []);

  return (
    <>
      <Header />
      <div className="mt-24 mx-24">
        <WorkExperienceCard />

        <button className="bg-blue-950 px-4 py-2 rounded-lg">Dowload CV</button>
      </div>
    </>
  );
}

export default About;
