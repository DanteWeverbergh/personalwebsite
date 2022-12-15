import React from 'react';

import { Swiper, SwiperSlide } from 'swiper/react';
import ProjectCard from '../../../Components/Cards/Projects/ProjectCard';
import SwiperCore, { EffectCards, Navigation } from 'swiper';
import { projects } from './Data';

import 'swiper/css';
import 'swiper/css/effect-cards';
import DesktopProject from '../../../Components/Cards/Projects/DesktopProject';

function Projects() {
  return (
    <>
      <div className="md:flex md:justify-evenly  h-screen hidden   bg-blue-950 items-center ">
        {/**
 * 
 * {projects.map((project) => (
          <ProjectCard project={project} />
        ))}
 */}

        {projects.map((project) => (
          <DesktopProject project={project} />
        ))}
      </div>

      <div className=" h-screen flex items-center md:hidden bg-blue-950">
        <Swiper
          effect={'cards'}
          grabCursor={true}
          modules={[EffectCards]}
          className="mySwiper"
        >
          {projects.map((project) => (
            <SwiperSlide>
              <ProjectCard project={project} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
}

export default Projects;
