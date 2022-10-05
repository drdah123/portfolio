import React from 'react';
import { Col } from 'react-bootstrap';

const ProjectCard = ({ title, description, imgUrl, appUrl }) => {
  return (
    <Col size={12} sm={6} md={4} className="mt-4">
      <div className="proj-imgbx">
        <img src={imgUrl} alt="" />

        <div className="proj-txtx">
          <h4>{title}</h4>
          <span>{description}</span>
          <a href={appUrl} target="_blank" rel="noopener noreferrer">
            Go
          </a>
        </div>
      </div>
    </Col>
  );
};

export default ProjectCard;
