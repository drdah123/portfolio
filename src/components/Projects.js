import React, { useState } from 'react';
import { Col, Container, Nav, Row, Tab } from 'react-bootstrap';
import colorSharp2 from '../assets/img/color-sharp.png';
import TrackVisibility from 'react-on-screen';
import Stars from './Stars';

import { tabKeys } from '../assets/data';
import BannerText from './BannerText';

export const Projects = () => {
  const [text, setText] = useState('');
  const comingRotate = ['say it will coming soon...'];

  return (
    <section className="project" id="project">
      <Stars background />
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
                    {tabKeys.map((key, i) => (
                      <Tab.Pane
                        eventKey={key.key}
                        key={key.key}
                        className={
                          i >= 2
                            ? 'd-flex align-items-center justify-content-center'
                            : ''
                        }
                      >
                        {key.component ? (
                          key.component
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
            </Tab.Container>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
