import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/grid';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { Grid, Pagination, Navigation } from 'swiper';
import ProjectCard from './ProjectCard';

const CarouselProjects = ({ projects }) => {
  return (
    <div className="project-carousel">
      <Swiper
        grid={{
          rows: 2,
        }}
        breakpoints={{
          300: {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          640: {
            slidesPerView: 2,
            spaceBetween: 10,
          },
          1020: {
            slidesPerView: 3,
            spaceBetween: 20,
          },
        }}
        pagination={{
          type: 'progressbar',
        }}
        modules={[Navigation, Grid, Pagination]}
        navigation={true}
        autoplay={true}
        className="mySwiper"
      >
        {projects?.map((project, i) => (
          <SwiperSlide key={project.title} virtualIndex={i}>
            <ProjectCard {...project} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default CarouselProjects;
