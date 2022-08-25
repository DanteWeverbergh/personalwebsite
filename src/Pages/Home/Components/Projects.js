import React from 'react';

import { Swiper, SwiperSlide } from 'swiper/react';
import ProjectCard from '../../../Components/Cards/Projects/ProjectCard';
import SwiperCore, { EffectCards, Navigation } from 'swiper';

import 'swiper/css';
import 'swiper/css/effect-cards';

function Projects() {
  return (
    <>
      <div className="md:flex md:justify-around h-screen hidden  bg-blue-950 items-center ">
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
      </div>

      <div className=" h-screen flex items-center md:hidden bg-blue-950">
        <Swiper
          effect={'cards'}
          grabCursor={true}
          modules={[EffectCards]}
          className="mySwiper"
        >
          <SwiperSlide>
            <ProjectCard />
          </SwiperSlide>
          <SwiperSlide>
            <ProjectCard />
          </SwiperSlide>
          <SwiperSlide>
            <ProjectCard />
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  );
}

export default Projects;
