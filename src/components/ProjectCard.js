import React from 'react';
import { useStateContext } from '../context/context';
import { Button, Card, Col } from 'react-bootstrap';
import navIcon2 from '../assets/img/nav-icon2.png';

export default function ProjectCard({
  title,
  imgUrl,
  isCarousel,
  description,
  appUrl,
  gitUrl,
  technology,
  isBigCarousel,
}) {
  const { handleHoverProj } = useStateContext();
  const handleHover = () => handleHoverProj(title);

  return (
    <article
      className={`proj-imgbx card`}
      onClick={isCarousel && !isBigCarousel ? handleHover : null}
    >
      <Card.Img onClick={handleHover} src={imgUrl} />
      {isCarousel ? (
        <Card.ImgOverlay>
          <Card.Title>
            <h4>{title}</h4>
          </Card.Title>
        </Card.ImgOverlay>
      ) : (
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text className="text-sm22">
            {description.slice(0, 100)} {description.length > 160 ? '...' : ''}
          </Card.Text>

          <Col className="mb-2">
            {technology?.slice(0, 3).map((item, i) => (
              <Button
                style={{ color: '#000' }}
                className={`proj-card-category-item ${
                  i % 2 === 0 ? 'proj-card-category-item-bg' : ''
                }`}
                key={i}
              >
                {item}
              </Button>
            ))}
            {technology?.length > 3 ? (
              <Button>+ {technology.length - 3}</Button>
            ) : null}
          </Col>
          <div className="card-details-proj-links">
            {appUrl ? (
              <Card.Link target="_blank" href={appUrl} className="first-link">
                Demo
              </Card.Link>
            ) : null}
            <Card.Link target="_blank" href={gitUrl} className="">
              {' '}
              <img src={navIcon2} alt="" />
            </Card.Link>
          </div>
        </Card.Body>
      )}
    </article>
  );
}
