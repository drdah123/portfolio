import React, { useEffect, useState } from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import navIcon1 from '../assets/img/nav-icon1.svg';
import navIcon2 from '../assets/img/nav-icon2.png';
import logoA from '../assets/img2/logoNavbar2.png';

export const NavBar = () => {
  const [activeLink, setActiveLink] = useState('Home');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', onScroll);

    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
  };

  return (
    <Navbar expand="lg" className={scrolled ? 'scrolled ' : ''}>
      <Container>
        <Navbar.Brand>
          <h1>
            <Link
              to="/"
              className="nav.navbar navbar-brand"
              onClick={() => onUpdateActiveLink('Home')}
            >
              <img src={logoA} alt="" />
            </Link>
          </h1>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav">
          <span className="navbar-toggler-icon"></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link
              className={
                activeLink === 'Skills' ? 'active navbar-link' : 'navbar-link'
              }
              onClick={() => onUpdateActiveLink('Skills')}
            >
              <Link to="/skill">Skills</Link>
            </Nav.Link>
            <Nav.Link
              className={
                activeLink === 'Project' ? 'active navbar-link' : 'navbar-link'
              }
              onClick={() => onUpdateActiveLink('Project')}
            >
              <Link to="/project">Project</Link>
            </Nav.Link>
          </Nav>
          <span className="navbar-text">
            <div className="social-icon">
              <Link
                to="https://www.linkedin.com/in/abdlarahman-eid-778067235/"
                target="_blank"
                rel="noreferrer"
              >
                <img src={navIcon1} alt="" />
              </Link>
              <Link
                to="https://github.com/drdah123"
                target="_blank"
                rel="noreferrer"
              >
                <img src={navIcon2} alt="" />
              </Link>
            </div>
            <Link className="vvd" to="/contact">
              <span>lets connect</span>
            </Link>
          </span>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
