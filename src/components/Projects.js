import React from 'react';
import MernLogo from '../assets/img2/pngaaa.com-7365622.png';
import { Col, Container, Nav, Row, Tab } from 'react-bootstrap';
import ProjectCard from './ProjectCard';
import colorSharp2 from '../assets/img/color-sharp.png';
import TrackVisibility from 'react-on-screen';
import {
  faCss3,
  faGitAlt,
  faHtml5,
  faJsSquare,
  faReact,
} from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { projectsFrontend, projectsFullStack } from '../assets/data';

export const Projects = () => {
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
                  <h2>Projects</h2>
                  <p>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to make a
                    type specimen book.
                  </p>
                  <div className="cubespinner-container">
                    <div className="cubespinner">
                      <div className="face1">
                        <FontAwesomeIcon icon={faGitAlt} color="#DD0031" />
                      </div>
                      <div className="face2">
                        <FontAwesomeIcon icon={faHtml5} color="#F06529" />
                      </div>
                      <div className="face3">
                        <FontAwesomeIcon icon={faCss3} color="#28A4D9" />
                      </div>
                      <div className="face4">
                        <FontAwesomeIcon icon={faReact} color="#5ED4F4" />
                      </div>
                      <div className="face5">
                        <FontAwesomeIcon icon={faJsSquare} color="#EFD81D" />
                      </div>
                      <div className="face6">
                        <img src={MernLogo} alt="mern-logo" />
                      </div>
                    </div>
                  </div>
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
                      <Row>
                        {projectsFrontend.map((project, index) => {
                          return <ProjectCard key={index} {...project} />;
                        })}
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="second">
                      {' '}
                      <Row>
                        {projectsFullStack.map((project, index) => {
                          return <ProjectCard key={index} {...project} />;
                        })}
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane
                      eventKey="third"
                      className="d-flex align-items-center justify-content-center"
                    >
                      <h3>if god say it It will coming close...</h3>
                    </Tab.Pane>
                  </Tab.Content>
                )}
              </TrackVisibility>
            </Tab.Container>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2} />
    </section>
  );
};
