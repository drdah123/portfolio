import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import navIcon1 from '../assets/img/nav-icon1.svg';
import navIcon2 from '../assets/img/nav-icon2.png';
import logoA from '../assets/img2/logoNavbar2.png';

const Footer = () => {
  return (
    <footer>
      <Container>
        <Row className="align-items-center">
          <Col size={12} sm={6}>
            <h1 className="logo">
              <img src={logoA} alt="" />
            </h1>
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon-footer">
              <a
                href="https://www.linkedin.com/in/abdlarahman-eid-778067235/"
                target="_blank"
                rel="noreferrer"
              >
                <img src={navIcon1} alt="" />
              </a>
              <a
                href="https://github.com/drdah123"
                target="_blank"
                rel="noreferrer"
              >
                <img src={navIcon2} alt="" />
              </a>
            </div>
            <p>CopyRight 2022</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
