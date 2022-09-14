import React, { useEffect, useState } from 'react';
import SkillCard from './SkillCard';
import { FaReact, FaWordpress } from 'react-icons/fa';

function Skills() {
  const [skills, setSkills] = useState([]);

  useEffect(() => {
    console.log('fghj');
  }, []);

  return (
    <>
      <h1 className="text-4xl font-semibold text-center md:text-left ">
        Education
      </h1>

      <div>
        {/* <SkillCard /> */}

        <SkillCard />
      </div>
    </>
  );
}

export default Skills;
