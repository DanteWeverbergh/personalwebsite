import React from 'react';

import { Swiper, SwiperSlide } from 'swiper/react';
import ProjectCard from '../../../Components/Cards/Projects/ProjectCard';
import SwiperCore, { EffectCards, Navigation } from 'swiper';
import { projects } from './Data';

import 'swiper/css';
import 'swiper/css/effect-cards';

function Projects() {
  return (
    <>
      <div className="md:flex md:justify-around h-screen hidden  bg-blue-950 items-center ">
        {projects.map((project) => (
          <ProjectCard project={project} />
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
