import React from 'react';
import { useStateContext } from '../context/context';
import { Card } from 'react-bootstrap';
import navIcon2 from '../assets/img/nav-icon2.png';

export default function ProjectCard({
  title,
  imgUrl,
  isCarousel,
  description,
  appUrl,
  gitUrl,
}) {
  const { handleHoverProj } = useStateContext();
  const handleHover = () => handleHoverProj(title);

  return (
    <article className={`proj-imgbx `} onClick={handleHover}>
      <Card>
        <Card.Img src={imgUrl} />

        {isCarousel ? (
          <Card.ImgOverlay>
            <Card.Title>
              <h4>{title}</h4>
            </Card.Title>
          </Card.ImgOverlay>
        ) : (
          <Card.Body>
            <Card.Header>{title}</Card.Header>
            <Card.Text className="text-sm22">{description}</Card.Text>
            <div className="card-details-proj-links">
              <Card.Link target="_blank" href={appUrl} className="first-link">
                Demo
              </Card.Link>
              <Card.Link target="_blank" href={gitUrl} className="">
                {' '}
                <img src={navIcon2} alt="" />
              </Card.Link>
            </div>
          </Card.Body>
        )}
      </Card>
    </article>
  );
}
