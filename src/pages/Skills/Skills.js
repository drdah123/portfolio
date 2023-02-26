import React, { useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { SkillsData } from '../../assets/data';

import Stars from '../../components/Stars/Stars';
import './Skills.css';

import SkillsLogo from '../../components/SkillsLogo/SkillsLogo';
import SkillsProject from '../../components/SkillsProject';
import { useRef } from 'react';
import useVisibility from '../../hooks/useVisibility';

function SkillsBio() {
  return (
    <>
      <Col className="skill-bio">
        <h3>I love building stuff </h3>
        <p>
          My goal is to be one of 10 the best programmers in history
          <br /> also I love learn or explore a new new things
          <br />I started learning Javascript and Typescript in 3/2022 and since
          that I building many projects by many libraries and tools <br />* all
          assessments from what I think about my skills
        </p>
      </Col>
    </>
  );
}

export default function Skills() {
  const [text, setText] = useState('');
  const refContainer = useRef();
  const [isVisible, setIsVisibility] = useState(false);

  useVisibility(refContainer, setIsVisibility);

  const comingRotate = ['whish it will coming soon...'];
  return (
    <section
      id="skills"
      className={`pt-2 skill ${isVisible ? 'visible' : ''}`}
      ref={refContainer}
    >
      <Stars background />
      <Container>
        <div
          className={
            isVisible ? 'animate__animated animate__fadeInDownBig ' : ''
          }
        >
          <h2 className="skill-h2">My Skills</h2>
          <SkillsBio />
        </div>
        <Row>
          <Col>
            <SkillsLogo isVisible={isVisible} />
          </Col>
          <Col
            className={`mb-5 skill-big-container ${
              isVisible
                ? 'animate__animated animate__fadeInRightBig animate__slow animate__delay-2s'
                : ''
            }`}
          >
            <Row className="skills-list">
              {SkillsData.map((skill) => {
                return (
                  <React.Fragment key={skill.name}>
                    <SkillsProject
                      {...skill}
                      text={text}
                      setText={setText}
                      comingRotate={comingRotate}
                    />
                  </React.Fragment>
                );
              })}
            </Row>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
