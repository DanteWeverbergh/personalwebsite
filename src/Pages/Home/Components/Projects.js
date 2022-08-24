import React from 'react';
import { Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import ProjectCard from '../../../Components/Cards/Projects/ProjectCard';

function Projects({ ref }) {
  return (
    <>
      <div
        className="md:flex md:justify-around h-screen  bg-blue-950 items-center "
        ref={ref}
      >
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
      </div>

      {/* <div className=" h-screen  bg-blue-950  " ref={ref}>
        <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
          <SwiperSlide>1</SwiperSlide>
          <SwiperSlide>2</SwiperSlide>
          <SwiperSlide>3</SwiperSlide>
        </Swiper>
      </div> */}
    </>
  );
}

export default Projects;
