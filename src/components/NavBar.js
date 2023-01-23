import React, { Suspense, useEffect, useState } from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';
import { Link, Outlet } from 'react-router-dom';
import navIcon1 from '../assets/img/nav-icon1.svg';
import navIcon2 from '../assets/img/nav-icon2.png';
import logoA from '../assets/img2/logoNavbar2.png';

function NavBar() {
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
    <header>
      <Navbar expand="lg" className={scrolled ? 'scrolled ' : ''}>
        <Container>
          <Navbar.Brand>
            <h1>
              <Link
                to="/"
                className="navbar navbar-brand"
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
              <Link
                to="/skill"
                className={`nav-link 
                ${
                  activeLink === 'Skills' ? 'active navbar-link' : 'navbar-link'
                }
              `}
                onClick={() => onUpdateActiveLink('Skills')}
              >
                Skills
              </Link>

              <Link
                className={`nav-link 
                 ${
                   activeLink === 'Projects'
                     ? 'active navbar-link'
                     : 'navbar-link'
                 }
               `}
                onClick={() => onUpdateActiveLink('Projects')}
                to="/project"
              >
                Projects
              </Link>

              <Link
                to="/Certification"
                className={`nav-link 
                ${
                  activeLink === 'Certifications'
                    ? 'active navbar-link'
                    : 'navbar-link'
                }
              `}
                onClick={() => onUpdateActiveLink('Certifications')}
              >
                Certifications
              </Link>
            </Nav>
            <span className="navbar-text">
              <div className="social-icon">
                <a
                  href="https://www.linkedin.com/in/abdlarahman-eid-778067235/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img src={navIcon1} alt="" />
                </a>
                <a
                  href="https://github.com/drdah123"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img src={navIcon2} alt="" />
                </a>
              </div>
              <Link className="vvd" to="/contact">
                <span>lets connect</span>
              </Link>
            </span>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
}

export default NavBar;
