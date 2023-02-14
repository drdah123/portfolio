import React, { useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { SkillsData } from '../../assets/data';

import Stars from '../../components/Stars/Stars';
import './Skills.css';

import SkillsLogo from '../../components/SkillsLogo/SkillsLogo';
import SkillsProject from '../../components/SkillsProject';

const Skills = () => {
  const [text, setText] = useState('');
  const comingRotate = ['whish it will coming soon...'];
  return (
    <section id="skills" className="pt-2 skill">
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
};

export default Skills;
