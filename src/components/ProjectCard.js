import React from 'react';
import { useStateContext } from '../context/context';
import { Card } from 'react-bootstrap';

const ProjectCard = ({ title, description, imgUrl, appUrl, gitUrl, index }) => {
  const { currentHover, handleHoverProj } = useStateContext();
  const handleHover = () => handleHoverProj(title);

  return (
    <article
      className={`proj-imgbx ${
        currentHover && currentHover !== title ? 'd-none' : ''
      } ${currentHover && currentHover === title ? 'd-invisible-proj' : ''}`}
      onClick={handleHover}
      key={index}
    >
      <Card className="card-proj-imgbx">
        <Card.Img src={imgUrl} />
        <Card.ImgOverlay>
          <Card.Title>
            <h4>{title}</h4>
          </Card.Title>
        </Card.ImgOverlay>
      </Card>
    </article>
  );
};

export default ProjectCard;
