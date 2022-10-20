import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import logo from '../assets/img/logo.svg';
import MailchimpForm from './MailchimpForm';
import navICon1 from '../assets/img/nav-icon1.svg';
import navICon2 from '../assets/img/nav-icon2.svg';
import navICon3 from '../assets/img/nav-icon3.svg';

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
              <a herf="">
                <img src={navICon1} alt="" />
              </a>
              <a herf="">
                <img src={navICon2} alt="" />
              </a>
              <a herf="">
                <img src={navICon3} alt="" />
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
