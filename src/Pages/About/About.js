import React, { useEffect, useState } from 'react';
import Header from '../../Layouts/Header/Header';
import { db } from '../../libs/Firebase';
import EducationCard from './Components/EducationCard';
import Skills from './Components/Skills/Skills';
import WorkExperienceCard from './Components/WorkExperienceCard';

function About() {
  const [work, setWork] = useState([]);
  const [education, setEducation] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    db.collection('work')
      .orderBy('endDate', 'desc')
      .onSnapshot((snapshot) => {
        setWork(
          snapshot.docs.map((doc) => ({
            id: doc.id,
            data: doc.data(),
          }))
        );
      });

    db.collection('education')
      .orderBy('endDate', 'desc')
      .onSnapshot((snapshot) => {
        setEducation(
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
      <div className="mt-24 md:mx-24 mx-6">
        <div className="w-full  md:flex">
          <div className="w-1/3">
            <div>
              <h1 className="text-4xl font-semibold text-center md:text-left ">
                Work Experience
              </h1>
              <div>
                {isLoaded &&
                  work.map(({ id, data }) => (
                    <WorkExperienceCard key={id} work={data} />
                  ))}
              </div>
            </div>

            <div className="">
              <h1 className="text-4xl font-semibold text-center md:text-left mt-12">
                Education
              </h1>
              {isLoaded &&
                education.map(({ id, data }) => (
                  <EducationCard key={id} education={data} />
                ))}
            </div>
          </div>

          <div className="w-2/3  ">
            <Skills />
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
