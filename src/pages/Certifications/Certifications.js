import React from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import { certifications } from '../../assets/data';
import Stars from '../../components/Stars/Stars';
import './Certification.css';

const Certifications = () => {
  return (
    <Row className="card-certification-container">
      {/* <Stars background />
      <Stars background bottom /> */}
      {certifications.map((item, i) => (
        <Col xl={6} key={i} className="card-certification">
          <article>
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
          </article>
        </Col>
      ))}
    </Row>
  );
};

export default Certifications;
