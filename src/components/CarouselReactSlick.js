import React from 'react';
import Slider from 'react-slick';
import { projectsFrontend } from '../assets/data';
import ProjectCard from './ProjectCard';
import { CaretRightFill, CaretLeftFill } from 'react-bootstrap-icons';

const settings = {
  infinite: true,
  centerPadding: '60px',
  slidesToShow: 3,
  speed: 500,
  className: 'center carousel-react-slick',
  autoplay: true,
  autoplaySpeed: 3000,
  dots: true,
  // lazyLoad: true,
  slidesPerRow: 2,
  slidesToScroll: 1,
  adaptiveHeight: true,
  nextArrow: <CaretRightFill color="white" />,
  prevArrow: <CaretLeftFill color="white" />,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
        infinite: true,
        dots: true,
      },
    },

    {
      breakpoint: 640,
      settings: {
        slidesToShow: 1,
      },
    },
  ],
};

const Carousel = ({ projects }) => {
  return (
    <div className="carousel-container-slick ">
      <Slider {...settings}>
        {projects?.map((item, i) => (
          <ProjectCard {...item} index={i} />
        ))}
      </Slider>
    </div>
  );
};

export default Carousel;
