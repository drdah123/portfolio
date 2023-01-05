import React, { useState } from 'react';
import { Col, Container, Nav, Row, Tab } from 'react-bootstrap';
import TrackVisibility from 'react-on-screen';
import Stars from './Stars';
import redux from '../assets/img2/redux.svg';
import mobX from '../assets/img2/mobx.svg';

import { filterReactProject, tabKeys } from '../assets/data';
import BannerText from './BannerText';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faReact } from '@fortawesome/free-brands-svg-icons';
import ProjectCardDetails from './ProjectCardDetails';

export const Projects = () => {
  const [text, setText] = useState('all');
  const [currentProject, setCurrentProject] = useState('all');
  const comingRotate = ['say it will coming soon...'];

  const handleReact = (type) => {
    filterReactProject(type);
    setCurrentProject(() => type);
  };

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
                  <p>*Hover project for demo and git url</p>
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
                            <div className="proj-choose-icon">
                              <button
                                className={
                                  currentProject === 'redux' ? 'active' : ''
                                }
                                onClick={() => handleReact('redux')}
                              >
                                <img src={redux} alt="" />
                              </button>
                              <button
                                className={
                                  currentProject === 'mobX' ? 'active' : ''
                                }
                                onClick={() => handleReact('mobX')}
                              >
                                <img src={mobX} alt="" />
                              </button>
                              <button
                                className={
                                  currentProject === 'all' ? 'active' : ''
                                }
                                onClick={() => handleReact('all')}
                              >
                                <FontAwesomeIcon
                                  icon={faReact}
                                  color="#33AAFF"
                                />
                              </button>
                            </div>
                          ) : null}
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
                        </div>
                      </Tab.Pane>
                    ))}
                    <ProjectCardDetails />
                  </Tab.Content>
                )}
              </TrackVisibility>
            </Tab.Container>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
