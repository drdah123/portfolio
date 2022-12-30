import { Card, Col, Container } from 'react-bootstrap';
import { useStateContext } from '../context/context';
import { projectsFrontend } from '../assets/data';
import navIcon2 from '../assets/img/nav-icon2.png';

const ProjectCardDetails = () => {
  const { currentHover, handleHoverProj } = useStateContext();

  const projHover = projectsFrontend.find(
    (proj) => proj.title === currentHover
  );

  const handleHoverOut = () => handleHoverProj();

  return (
    <Container
      className={`card-details-proj ${currentHover ? 'd-block' : ''}`}
      onMouseLeave={handleHoverOut}
    >
      <Col>
        <Card>
          <Card.Img src={projHover?.imgUrl} />
          <Card.Body>
            <Card.Header>{projHover?.title}</Card.Header>
            <Card.Text className="text-sm22">
              {projHover?.description}
            </Card.Text>
            <div className="card-details-proj-links">
              <Card.Link href={projHover?.appUrl} className="first-link">
                Demo
              </Card.Link>
              <Card.Link href={projHover?.gitUrl} className="">
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
