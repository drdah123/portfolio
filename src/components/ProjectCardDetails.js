import { Button, Card, CloseButton, Col, Container } from 'react-bootstrap';
import { useStateContext } from '../context/context';
import {
  VueProject,
  angularProject,
  contributionProjects,
  projectsFrontend,
  fullStackProjects,
} from '../assets/data';
import navIcon2 from '../assets/img/nav-icon2.png';
import { useMemo, useState } from 'react';
import { useEffect } from 'react';

const ProjectCardDetails = () => {
  const { currentHover, handleHoverProj } = useStateContext();
  // const [projHover, setProjHover] = useState([]);
  let allProject = useMemo(
    () => [
      ...projectsFrontend,
      ...fullStackProjects,
      ...VueProject,
      ...angularProject,
      ...contributionProjects,
    ],
    []
  );
  const projHover = useMemo(
    () => allProject.find((proj) => proj.title === currentHover),
    [currentHover]
  );

  const handleHoverOut = () => handleHoverProj();

  return (
    <Container className={`card-details-proj ${currentHover ? 'd-block' : ''}`}>
      <Col>
        <Card>
          <Card.Img src={projHover?.imgUrl} />
          <Card.ImgOverlay style={{ left: 'auto', top: '-0.5rem' }}>
            <CloseButton
              onClick={handleHoverOut}
              style={{ color: '#0ccccc' }}
            />
          </Card.ImgOverlay>
          <Card.Body>
            <Card.Header>{projHover?.title}</Card.Header>
            <Card.Text className="text-sm22">
              {projHover?.description}
            </Card.Text>
            <Col className="mb-2">
              {projHover?.technology?.map((item, i) => (
                <Button
                  style={{ color: '#000' }}
                  className={`proj-card-category-item ${
                    i % 2 === 0 ? 'proj-card-category-item-bg' : ''
                  }`}
                >
                  {item}
                </Button>
              ))}
            </Col>
            <div className="card-details-proj-links">
              {projHover?.appUrl ? (
                <Card.Link
                  target="_blank"
                  href={projHover?.appUrl}
                  className="first-link"
                >
                  Demo
                </Card.Link>
              ) : null}
              <Card.Link target="_blank" href={projHover?.gitUrl} className="">
                {' '}
                <img src={navIcon2} alt="" />
              </Card.Link>
            </div>
          </Card.Body>
        </Card>
      </Col>
    </Container>
  );
};

export default ProjectCardDetails;
