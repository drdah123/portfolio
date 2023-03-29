import React, { useRef } from 'react';
import Slider from 'react-slick';
import ProjectCard from './ProjectCard';
import { CaretRightFill, CaretLeftFill } from 'react-bootstrap-icons';
import { Col, Row } from 'react-bootstrap';

const settings = {
  slidesToShow: 3,
  speed: 1000,
  className: 'center carousel-react-slick',
  autoplay: true,
  autoplaySpeed: 3000,
  dots: true,
  slidesToScroll: 1,
  adaptiveHeight: true,
  arrows: false,
};

const settings2 = {
  nextArrow: <CaretRightFill color="white" />,
  prevArrow: <CaretLeftFill color="white" />,
};

const Carousel = ({ projects, isCarousel }) => {
  const refFirstSlide = useRef();
  const refSecondSlide = useRef();

  return (
    <>
      {isCarousel ? (
        <>
          <Slider
            className="carousel-react-slick-big"
            asNavFor={refSecondSlide.current}
            ref={refFirstSlide}
            {...settings2}
          >
            {projects.map((item) => (
              <React.Fragment key={item.title}>
                <ProjectCard {...item} isCarousel={isCarousel} />
              </React.Fragment>
            ))}
          </Slider>
          <Slider
            {...settings}
            asNavFor={refFirstSlide.current}
            ref={refSecondSlide}
            focusOnSelect
          >
            {projects.map((item) => (
              <React.Fragment key={item.title}>
                <ProjectCard {...item} isCarousel={isCarousel} isBigCarousel />
              </React.Fragment>
            ))}
          </Slider>
        </>
      ) : (
        <Row>
          {projects.map((item) => (
            <Col md={6} xl={4} key={item.title}>
              <ProjectCard {...item} isCarousel={isCarousel} />
            </Col>
          ))}
        </Row>
      )}
    </>
  );
};

export default Carousel;
