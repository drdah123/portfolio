import React, { useRef, useState } from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import { certifications } from '../../assets/data';
import Stars from '../../components/Stars/Stars';
import './Certification.css';
import useVisibility from '../../hooks/useVisibility';

const Certifications = () => {
  const refContainer = useRef();
  const [isVisible, setIsVisibility] = useState(false);

  useVisibility(refContainer, setIsVisibility);
  return (
    <div
      className={`card-certification-container row ${
        isVisible
          ? 'animate__animated animate__fadeInRightBig animate__slower visible'
          : ''
      }`}
      ref={refContainer}
    >
      <Stars background />
      <Stars background bottom />
      {certifications.map((item, i) => (
        <Col sm={6} md={4} lg={3} key={i} className="card-certification">
          <article>
            <a href={item.url} target="_blank" rel="noreferrer">
              <Card className="single-project">
                <Card.Img src={item.img} />
                <Card.ImgOverlay>
                  <Card.Title>
                    <h4>{item.name}</h4>
                  </Card.Title>
                  <Card.Text className="projects-content">
                    {item.degree}
                  </Card.Text>
                  <Card.Text className="projects-content mt-5">
                    {item.date}
                  </Card.Text>
                </Card.ImgOverlay>
              </Card>
            </a>
          </article>
        </Col>
      ))}
    </div>
  );
};

export default Certifications;
