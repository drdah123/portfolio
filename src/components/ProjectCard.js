import React from 'react';
import { useStateContext } from '../context/context';
import { Card } from 'react-bootstrap';

const ProjectCard = ({ title, imgUrl }) => {
  const { handleHoverProj } = useStateContext();
  const handleHover = () => handleHoverProj(title);

  return (
    <article className={`proj-imgbx `} onClick={handleHover}>
      <Card>
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
