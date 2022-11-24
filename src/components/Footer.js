import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import MailchimpForm from './MailchimpForm';
import navIcon1 from '../assets/img/nav-icon1.svg';
import navIcon2 from '../assets/img/nav-icon2.png';

const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <MailchimpForm />
          <Col size={12} sm={6}>
            <h1 className="logo">Abdalrahman</h1>
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
              <div className="social-icon">
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
            </div>
            <p>CopyRight 2022</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
