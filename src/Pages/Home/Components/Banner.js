import React from 'react';
import ReactTypingEffect from 'react-typing-effect';
import { MorphTransition } from 'react-svg-morph';
import { FaLinkedin, FaGithubSquare } from 'react-icons/fa';
import { Link } from 'react-router-dom';

function Banner() {
  return (
    <>
      <div className="md:flex h-screen">
        <div className="md:w-1/2 h-1/4  flex items-center justify-center md:h-screen">
          {/* <svg
            className="absolute z-10"
            id="visual"
            viewBox="0 0 900 600"
            width="900"
            height="600"
            xmlns="http://www.w3.org/2000/svg"
            version="1.1"
          >
            <g transform="translate(412.7340895872808 349.36060917920014)">
              <path
                id="blob1"
                d="M181.8 -186.3C222.1 -141.4 232 -70.7 218.1 -13.9C204.2 42.9 166.5 85.8 126.1 110.8C85.8 135.8 42.9 142.9 2.8 140.1C-37.2 137.2 -74.5 124.5 -102.5 99.5C-130.5 74.5 -149.2 37.2 -149.5 -0.2C-149.7 -37.7 -131.4 -75.4 -103.4 -120.3C-75.4 -165.1 -37.7 -217 16.5 -233.5C70.7 -250 141.4 -231.1 181.8 -186.3"
                fill="#206FEB"
              ></path>
            </g>
           
          </svg> */}

          {/* <ReactTypingEffect
            className="text-3xl md:text-6xl flex items-center justify-center z-20 "
            text={['Hi,', "I'm Dante Weverbergh."]}
            speed={200}
            eraseSpeed={150}
            eraseDelay={250}
          /> */}

          <div>
            <h1 className="font-bold text-2xl">
              Hi, I'm Dante Weverbergh | software developer.
            </h1>
            <h2 className="font-bold text-xl">I build things for the web.</h2>
            <div className="flex text-4xl mt-6">
              <a
                href="https://www.linkedin.com/in/dante-weverbergh"
                target={'_blank'}
                rel="noreferrer"
              >
                <FaLinkedin className="hover:text-blue-950" />
              </a>

              <a
                href="https://github.com/DanteWeverbergh"
                target={'_blank'}
                rel="noreferrer"
              >
                <FaGithubSquare className="ml-2 hover:text-blue-950" />
              </a>
            </div>
          </div>
        </div>
        <div className="md:w-1/2 h-3/4  md:h-screen flex justify-center  md:block ">
          <img
            src="ikke_transparant.webp"
            className="md:h-screen object-cover "
          />
        </div>
      </div>

      {/* <svg
        id="visual"
        viewBox="0 0 900 600"
        className=" w-full absolute bottom-0 "
      >
        <path
          d="M0 510L21.5 512.2C43 514.3 86 518.7 128.8 514.5C171.7 510.3 214.3 497.7 257.2 494C300 490.3 343 495.7 385.8 498.5C428.7 501.3 471.3 501.7 514.2 506C557 510.3 600 518.7 642.8 521.8C685.7 525 728.3 523 771.2 515.7C814 508.3 857 495.7 878.5 489.3L900 483L900 601L878.5 601C857 601 814 601 771.2 601C728.3 601 685.7 601 642.8 601C600 601 557 601 514.2 601C471.3 601 428.7 601 385.8 601C343 601 300 601 257.2 601C214.3 601 171.7 601 128.8 601C86 601 43 601 21.5 601L0 601Z"
          fill="#206FEB"
          stroke-linecap="round"
          stroke-linejoin="miter"
        ></path>
      </svg> */}
    </>
  );
}

export default Banner;
