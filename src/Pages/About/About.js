import React, { useEffect, useState } from 'react';
import Header from '../../Layouts/Header/Header';
import { db } from '../../libs/Firebase';
import WorkExperienceCard from './Components/WorkExperienceCard';

function About() {
  const [work, setWork] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    db.collection('work').onSnapshot((snapshot) => {
      setWork(
        snapshot.docs.map((doc) => ({
          id: doc.id,
          data: doc.data(),
        }))
      );
    });

    setIsLoaded(true);
  }, []);

  return (
    <>
      <Header />
      <div className="mt-24 mx-24">
        {isLoaded &&
          work.map(({ id, data }) => (
            <WorkExperienceCard key={id} work={data} />
          ))}
      </div>
    </>
  );
}

export default About;
