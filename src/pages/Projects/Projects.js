import React, { useState, useRef, useEffect } from 'react';
import { Button, Col, Container, Nav, Row, Tab } from 'react-bootstrap';
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
import useVisibility from '../../hooks/useVisibility';

const Projects = () => {
  const [text, setText] = useState('all');
  const [currentProject, setCurrentProject] = useState('all');
  const comingRotate = ['say it will coming soon...'];
  const refProjChosen = useRef();
  const refHr = useRef();
  const [isVisible, setIsVisibility] = useState(false);
  // to make sure that hr appear above button
  const [isButtonVisible, setIsButtonVisibility] = useState(false);
  const [isCarousel, setIsCarousel] = useState(false);
  const refProjects = useRef();

  useVisibility(refProjects, setIsVisibility);
  useVisibility(refProjChosen, setIsButtonVisibility);

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
  }, [currentProject, isButtonVisible]);

  return (
    <section
      className={`project ${isVisible ? 'visible' : ''}`}
      id="project"
      ref={refProjects}
    >
      <Stars background />
      <Container>
        <Row>
          <Col>
            <div
              className={` ${
                isVisible
                  ? 'animate__animated animate__bounce animate__slow'
                  : ''
              }`}
            >
              <h2>Projects </h2>
              <p>
                *notice: there is projects have the same appearance but by
                deferent tools like amazon clone built by Redux state
                management, react context or MobX, also lucid clone built by
                react, angular ,and vue{' '}
              </p>
              <p>
                *click pic for details and click X on top-right to disappear
              </p>
            </div>

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
              <Tab.Content
                id="slideInUp"
                className={
                  isVisible
                    ? 'animate__animated animate__slideInUp animate__slow'
                    : ''
                }
              >
                {tabKeys.map((key) => (
                  <Tab.Pane eventKey={key.key} key={key.key}>
                    <div className="btn-change-projects-display d-flex align-items-center justify-content-center">
                      <Button
                        type="btn"
                        onClick={() => setIsCarousel((prev) => !prev)}
                      >
                        {isCarousel ? 'change to cols' : 'change to carousel'}
                      </Button>
                    </div>
                    <div className="d-flex align-items-center justify-content-center">
                      {key.key === 'second' ? (
                        <div className="proj-choose-icon" ref={refProjChosen}>
                          <hr className="proj-choose-icon-active" ref={refHr} />
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
                              <FontAwesomeIcon icon={faReact} color="#33AAFF" />
                            }
                            handleReact={handleReact}
                            categoryName="all"
                          />
                        </div>
                      ) : null}
                    </div>
                    {key.Component ? (
                      <key.Component isCarousel={isCarousel} />
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
              <ProjectCardDetails />
            </Tab.Container>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Projects;
