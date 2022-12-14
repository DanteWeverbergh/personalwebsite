import React from 'react';
import ReactTypingEffect from 'react-typing-effect';
import { MorphTransition } from 'react-svg-morph';
import { FaLinkedin, FaGithubSquare } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { BsFillArrowDownCircleFill } from 'react-icons/bs';

function Banner() {
  return (
    <>
      <svg
        className=" top-0 rotate-180 -z-10 absolute"
        id="wave"
        viewBox="0 0 1440 490"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill="#206FEB"
          d="M0,0L80,49C160,98,320,196,480,212.3C640,229,800,163,960,187.8C1120,212,1280,327,1440,343C1600,359,1760,278,1920,228.7C2080,180,2240,163,2400,179.7C2560,196,2720,245,2880,294C3040,343,3200,392,3360,400.2C3520,408,3680,376,3840,343C4000,310,4160,278,4320,245C4480,212,4640,180,4800,147C4960,114,5120,82,5280,130.7C5440,180,5600,310,5760,326.7C5920,343,6080,245,6240,212.3C6400,180,6560,212,6720,253.2C6880,294,7040,343,7200,351.2C7360,359,7520,327,7680,269.5C7840,212,8000,131,8160,147C8320,163,8480,278,8640,318.5C8800,359,8960,327,9120,294C9280,261,9440,229,9600,245C9760,261,9920,327,10080,351.2C10240,376,10400,359,10560,302.2C10720,245,10880,147,11040,138.8C11200,131,11360,212,11440,253.2L11520,294L11520,490L11440,490C11360,490,11200,490,11040,490C10880,490,10720,490,10560,490C10400,490,10240,490,10080,490C9920,490,9760,490,9600,490C9440,490,9280,490,9120,490C8960,490,8800,490,8640,490C8480,490,8320,490,8160,490C8000,490,7840,490,7680,490C7520,490,7360,490,7200,490C7040,490,6880,490,6720,490C6560,490,6400,490,6240,490C6080,490,5920,490,5760,490C5600,490,5440,490,5280,490C5120,490,4960,490,4800,490C4640,490,4480,490,4320,490C4160,490,4000,490,3840,490C3680,490,3520,490,3360,490C3200,490,3040,490,2880,490C2720,490,2560,490,2400,490C2240,490,2080,490,1920,490C1760,490,1600,490,1440,490C1280,490,1120,490,960,490C800,490,640,490,480,490C320,490,160,490,80,490L0,490Z"
        ></path>
      </svg>

      <div className="md:flex h-screen">
        <div>
          <BsFillArrowDownCircleFill className="animate-bounce absolute  bottom-5 left-1/2 transform -translate-x-1/2  text-4xl" />
        </div>

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

          <div className="mx-12 mt-36 md:mt-0 md:mx-0 z-20 relative">
            {/**
             * 
             * 
              <svg
              className="absolute left-40 -z-20"
              fill="#206FEB"
              viewBox="0 0 100 100"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="50" cy="50" r="50" />
            </svg>
             */}

            <h1 className="font-bold text-2xl ">
              Hi, I'm Dante Weverbergh | software developer.
            </h1>
            {/**
             *    <h2 className="font-bold text-xl">I build things for the web.</h2>
             */}

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
