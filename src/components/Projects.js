import React, { useState } from 'react';
import { Col, Container, Nav, Row, Tab } from 'react-bootstrap';
import ProjectCard from './ProjectCard';
import colorSharp2 from '../assets/img/color-sharp.png';
import TrackVisibility from 'react-on-screen';

import { projectsFrontend, projectsFullStack } from '../assets/data';
import BannerText from './BannerText';
import CarouselProjects from './CarouselProjects';

export const Projects = () => {
  const [text, setText] = useState('');
  const comingRotate = ['say it will coming soon...'];

  return (
    <section className="project" id="project">
      <Container>
        <Row>
          <Col>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? 'animate__animated animate__bounce' : ''
                  }
                >
                  <h2 style={{ marginBottom: 50 }}>Projects</h2>
                </div>
              )}
            </TrackVisibility>
            <Tab.Container id="projects-tabs" defaultActiveKey="first">
              <Nav
                variant="pills"
                defaultActiveKey="/home"
                className="nav-pills mb-5 justify-content-center align-items-center"
              >
                <Nav.Item>
                  <Nav.Link eventKey="first">Frontend</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="second">Full stack</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="third">Web3</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="forth">UI UX design</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="fifth">React games</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="sixth">React native</Nav.Link>
                </Nav.Item>
              </Nav>
              <TrackVisibility>
                {({ isVisible }) => (
                  <Tab.Content
                    id="slideInUp"
                    className={
                      isVisible ? 'animate__animated animate__slideInUp' : ''
                    }
                  >
                    <Tab.Pane eventKey="first">
                      <CarouselProjects projects={projectsFrontend} />
                    </Tab.Pane>
                    <Tab.Pane eventKey="second">
                      <CarouselProjects projects={projectsFullStack} />
                    </Tab.Pane>
                    <Tab.Pane
                      eventKey="third"
                      className="d-flex align-items-center justify-content-center"
                    >
                      <h3>
                        <BannerText
                          text={text}
                          setText={setText}
                          toRotate={comingRotate}
                          emptyContent
                        />
                      </h3>
                    </Tab.Pane>
                    <Tab.Pane
                      eventKey="forth"
                      className="d-flex align-items-center justify-content-center"
                    >
                      <h3>
                        <BannerText
                          text={text}
                          setText={setText}
                          toRotate={comingRotate}
                          emptyContent
                        />
                      </h3>
                    </Tab.Pane>
                    <Tab.Pane
                      eventKey="fifth"
                      className="d-flex align-items-center justify-content-center"
                    >
                      <h3>
                        <BannerText
                          text={text}
                          setText={setText}
                          toRotate={comingRotate}
                          emptyContent
                        />
                      </h3>
                    </Tab.Pane>
                    <Tab.Pane
                      eventKey="sixth"
                      className="d-flex align-items-center justify-content-center"
                    >
                      <h3>
                        <BannerText
                          text={text}
                          setText={setText}
                          toRotate={comingRotate}
                          emptyContent
                        />
                      </h3>
                    </Tab.Pane>
                  </Tab.Content>
                )}
              </TrackVisibility>
            </Tab.Container>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2} alt="" />
    </section>
  );
};
