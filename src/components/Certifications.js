import React from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import { certifications } from '../assets/data';

const Certifications = () => {
  return (
    <section>
      <article>
        <Row className="card-certification-container">
          {certifications.map((item, i) => (
            <Col xl={6} key={i} className="card-certification">
              <div className="single-project">
                <a href={item.url}>
                  <img src={item.img} alt="" />
                  <div className="projects-content">
                    <h4>{item.name}</h4>
                    <p>{item.degree}</p>
                    <p>{item.date}</p>
                  </div>
                </a>
              </div>
            </Col>
          ))}
        </Row>
      </article>
    </section>
  );
};

export default Certifications;
