import React, { useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { SkillsData } from '../assets/data';

import Stars from './Stars';

import SkillsLogo from './SkillsLogo';
import SkillsProject from './SkillsProject';

const Skills = () => {
  const [text, setText] = useState('');
  const comingRotate = ['say it will coming soon...'];
  return (
    <div id="skills" className="pt-2 skill">
      <Stars background />
      <Container>
        <div>
          <h2 className="skill-h2">My Skills</h2>
        </div>
        <Row>
          <Col>
            <SkillsLogo />
          </Col>
          <Col className="mb-5 skill-big-container">
            <Row>
              {SkillsData.map((skill) => {
                return (
                  <>
                    <SkillsProject
                      {...skill}
                      text={text}
                      setText={setText}
                      comingRotate={comingRotate}
                    />
                  </>
                );
              })}
            </Row>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Skills;
