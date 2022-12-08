import { dblClick } from '@testing-library/user-event/dist/click';
import React, { useEffect, useState } from 'react';
import { db } from '../../../libs/Firebase';
import * as FontAwsome from 'react-icons/fa';
import { IoLogoJavascript } from 'react-icons/io';
import { SiTailwindcss } from 'react-icons/si';

function About() {
  const [isLoaded, setIsLoaded] = useState(false);

  const skills = [
    { name: 'HTML', icon: <FontAwsome.FaHtml5 /> },
    { name: 'CSS', icon: <FontAwsome.FaCss3Alt /> },
    { name: 'Javescript', icon: <IoLogoJavascript /> },
    { name: 'React', icon: <FontAwsome.FaReact /> },
    { name: 'Laravel', icon: <FontAwsome.FaLaravel /> },
    { name: 'Tailwind css', icon: <SiTailwindcss /> },
  ];

  return (
    <>
      <div className="relative ">
        <svg
          id="visual"
          viewBox="0 0 900 600"
          className="rotate-180  -z-10 absolute md:-top-24"
        >
          <path
            d="M0 547L30 532.8C60 518.7 120 490.3 180 490.7C240 491 300 520 360 520.5C420 521 480 493 540 472.8C600 452.7 660 440.3 720 450C780 459.7 840 491.3 870 507.2L900 523L900 601L870 601C840 601 780 601 720 601C660 601 600 601 540 601C480 601 420 601 360 601C300 601 240 601 180 601C120 601 60 601 30 601L0 601Z"
            fill="#206FEB"
            stroke-linecap="round"
            stroke-linejoin="miter"
          ></path>
        </svg>
        <div className="h-screen flex justify-center items-center mx-12 md:mx-0 ">
          <div className="md:w-1/2 w-10/12 relative">
            <h1 className="font-bold text-3xl z-20 absolute right-0 top-0">
              Skills
            </h1>
            <div className="mt-12">
              <ul className="bg-blue-950 py-4 px-4 flex flex-col gap-4 rounded-lg">
                {skills.map((skill) => (
                  <li className="flex text-4xl gap-6 text-slate-950">
                    {skill.icon} <h2 className=" text-xl">{skill.name}</h2>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
