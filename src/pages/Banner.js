import { useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { ArrowDown } from 'react-bootstrap-icons';
import headerImg from '../assets/img/header-img.svg';
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import BannerText from '../components/BannerText';
import Stars from '../components/Stars';
import { Link } from 'react-router-dom';

export const Banner = () => {
  const [text, setText] = useState('');
  const [textCv, setTextCv] = useState('');
  const headRotate = [
    'Web app developer',
    'Frontend developer',
    'Full stack developer',
  ];
  const cvRotate = [
    'simple guy want to explore a new things',
    'My old is 24',
    ' I am living in Saudi Arabia ',
    'I started actually learning in 6/2022',
    'I Learned many things about javascript',
    'Now I am learning ui ux design, Web3, Typescript, React native and some of Machine learning (Tensorflow.js)',
  ];

  return (
    <div className="banner">
      <section id="home">
        <Stars />
        <Stars background />
        <Container>
          <Row className="align-items-center">
            <Col xs={12} md={6} xl={7}>
              <TrackVisibility>
                {({ isVisible }) => (
                  <div
                    className={
                      isVisible ? 'animate__animated animate__fadeIn' : ''
                    }
                  >
                    <span className="tagline">Welcome to my portfolio </span>
                    <h1>
                      {`Hey I am abdalrahman`}{' '}
                      <span className="wrap">
                        <BannerText
                          toRotate={headRotate}
                          text={text}
                          setText={setText}
                        />
                      </span>
                    </h1>
                    <p>
                      <BannerText
                        toRotate={cvRotate}
                        text={textCv}
                        setText={setTextCv}
                        speed={50}
                      />
                    </p>
                    <Link to="/contact" className="lets-connect">
                      lets connect <ArrowDown color="#753aa2" size={29} />
                    </Link>
                  </div>
                )}
              </TrackVisibility>
            </Col>
            <Col xs={12} md={6} xl={7}>
              <img src={headerImg} alt="Header Img" />
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  );
};
