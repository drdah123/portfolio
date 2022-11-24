import React from 'react';
import { Col } from 'react-bootstrap';
import BannerText from './BannerText';

const SkillsProject = ({ name, text, setText, comingRotate, rate }) => {
  return (
    <Col xl={6} md={6}>
      <div className="skill-container">
        <p className="skill-name">{name}</p>
        <div className="progress-container">
          {rate === 0 ? (
            <>
              <BannerText
                text={text}
                setText={setText}
                toRotate={comingRotate}
                speed={150}
                textSize="10"
                emptyContent
              />
            </>
          ) : (
            <>
              <p>{rate}</p>
              <div className="progress">
                <span className={`progress-rate-${rate}`}></span>
              </div>
            </>
          )}
        </div>
      </div>
    </Col>
  );
};

export default SkillsProject;
