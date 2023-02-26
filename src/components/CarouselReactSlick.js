import React from 'react';
import Slider from 'react-slick';
import ProjectCard from './ProjectCard';
import { CaretRightFill, CaretLeftFill } from 'react-bootstrap-icons';
import { Col, Row } from 'react-bootstrap';

const settings = {
  infinite: true,
  centerPadding: '60px',
  slidesToShow: 3,
  speed: 500,
  className: 'center carousel-react-slick',
  autoplay: true,
  autoplaySpeed: 3000,
  dots: true,
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
      },
    },

    {
      breakpoint: 760,
      settings: {
        slidesToShow: 1,
      },
    },
  ],
};

const Carousel = ({ projects, isCarousel }) => {
  return (
    <>
      {isCarousel ? (
        <Slider {...settings}>
          {projects.map((item) => (
            <React.Fragment key={item.title}>
              <ProjectCard {...item} isCarousel={isCarousel} />
            </React.Fragment>
          ))}
        </Slider>
      ) : (
        <Row className="ee">
          {projects.map((item) => (
            <Col md={6} lg={4} key={item.title}>
              <ProjectCard {...item} isCarousel={isCarousel} />
            </Col>
          ))}
        </Row>
      )}
    </>
  );
};

export default Carousel;
