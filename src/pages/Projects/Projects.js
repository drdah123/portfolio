import React, { useState, useRef, useEffect } from 'react';
import { Col, Container, Nav, Row, Tab } from 'react-bootstrap';
import TrackVisibility from 'react-on-screen';
import Stars from '../../components/Stars/Stars';
import redux from '../../assets/img2/redux.svg';
import mobX from '../../assets/img2/mobx.svg';
import './Projects.css';

import { filterReactProject, tabKeys } from '../../assets/data';
import BannerText from '../../components/BannerText';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faReact } from '@fortawesome/free-brands-svg-icons';
import ProjectCardDetails from '../../components/ProjectCardDetails';
import ProjectFilterButton from '../../components/ProjectFilterButton';

const Projects = () => {
  const [text, setText] = useState('all');
  const [currentProject, setCurrentProject] = useState('all');
  const comingRotate = ['say it will coming soon...'];
  const refProjChosen = useRef();
  const refHr = useRef();

  const handleReact = (type) => {
    filterReactProject(type);
    setCurrentProject(() => type);
  };

  useEffect(() => {
    if (currentProject === 'redux') {
      refHr.current.style.left = `${
        refProjChosen.current.querySelectorAll('button')[0].offsetLeft - 10
      }px`;
    } else if (currentProject === 'mobX') {
      refHr.current.style.left = `${
        refProjChosen.current.querySelectorAll('button')[1].offsetLeft - 10
      }px`;
    } else {
      refHr.current.style.left = `${
        refProjChosen.current.querySelectorAll('button')[2].offsetLeft - 10
      }px`;
    }
  }, [currentProject]);

  return (
    <section className="project" id="project">
      <Stars background />
      <Container>
        <Row>
          <Col>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={` ${
                    isVisible ? 'animate__animated animate__bounce' : ''
                  }`}
                >
                  <h2 style={{ marginBottom: 50 }}>Projects </h2>
                  <p>
                    *notice: there is projects have the same appearance but by
                    deferent tools like amazon clone built by Redux state
                    management, react context or MobX, also lucid clone built by
                    react, angular ,and vue{' '}
                  </p>
                  <p>
                    *click project for details and double click on it to
                    disappear
                  </p>
                </div>
              )}
            </TrackVisibility>
            <Tab.Container id="projects-tabs" defaultActiveKey="first">
              <Nav
                variant="pills"
                defaultActiveKey="/home"
                className="nav-pills mb-5 justify-content-center align-items-center"
              >
                {tabKeys.map((key, i) => (
                  <Nav.Item key={i}>
                    <Nav.Link eventKey={key.key}>{key.title}</Nav.Link>
                  </Nav.Item>
                ))}
              </Nav>
              <TrackVisibility>
                {({ isVisible }) => (
                  <Tab.Content
                    id="slideInUp"
                    className={
                      isVisible ? 'animate__animated animate__slideInUp' : ''
                    }
                  >
                    {tabKeys.map((key) => (
                      <Tab.Pane eventKey={key.key} key={key.key}>
                        <div className="d-flex align-items-center justify-content-center">
                          {key.key === 'first' ? (
                            <div
                              className="proj-choose-icon"
                              ref={refProjChosen}
                            >
                              <hr
                                className="proj-choose-icon-active"
                                ref={refHr}
                              />
                              <ProjectFilterButton
                                currentProject={currentProject}
                                img={redux}
                                handleReact={handleReact}
                                categoryName="redux"
                              />

                              <ProjectFilterButton
                                currentProject={currentProject}
                                img={mobX}
                                handleReact={handleReact}
                                categoryName="mobX"
                              />

                              <ProjectFilterButton
                                currentProject={currentProject}
                                img={
                                  <FontAwesomeIcon
                                    icon={faReact}
                                    color="#33AAFF"
                                  />
                                }
                                handleReact={handleReact}
                                categoryName="all"
                              />
                            </div>
                          ) : null}
                        </div>
                        {key.component ? (
                          key.component()
                        ) : (
                          <h3>
                            <BannerText
                              text={text}
                              setText={setText}
                              toRotate={comingRotate}
                              emptyContent
                            />
                          </h3>
                        )}
                      </Tab.Pane>
                    ))}
                  </Tab.Content>
                )}
              </TrackVisibility>
              <ProjectCardDetails />
            </Tab.Container>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Projects;