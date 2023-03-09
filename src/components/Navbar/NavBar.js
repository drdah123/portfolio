import React, { useEffect, useState } from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import navIcon1 from '../../assets/img/nav-icon1.svg';
import navIcon2 from '../../assets/img/nav-icon2.png';
import logoA from '../../assets/img2/logoNavbar2.png';
import './NavBar.css';
import { useRef } from 'react';
import useLinks from '../../hooks/useLinks';

function NavBar() {
  const [activeLink, setActiveLink] = useState('home');
  const [scrolled, setScrolled] = useState(true);
  const [scrolledBG, setScrolledBG] = useState(false);
  const refMenu = useRef();
  const refHr = useRef();

  useEffect(() => {
    let prevScrollY = window.scrollY;

    const onScroll = () => {
      if (window.scrollY < prevScrollY) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
      if (window.scrollY > 50) {
        setScrolledBG(true);
      } else {
        setScrolledBG(false);
        setScrolled(true);
      }
      prevScrollY = window.scrollY;
    };
    window.addEventListener('scroll', onScroll);

    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useLinks(refHr, refMenu, setActiveLink);

  return (
    <header>
      <Navbar
        expand="lg"
        className={`${scrolled ? 'scrolled ' : ''} ${
          scrolledBG ? 'scrolledBG' : ''
        }`}
      >
        <Container>
          <Navbar.Brand>
            <h1>
              <Link to="/" className="navbar navbar-brand">
                <img src={logoA} alt="" />
              </Link>
            </h1>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav">
            <span className="navbar-toggler-icon"></span>
          </Navbar.Toggle>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto" ref={refMenu}>
              <hr className="proj-choose-icon-active-link" ref={refHr} />
              <Link
                to="/skills"
                className={`nav-link 
                ${
                  activeLink === 'skills' ? 'active navbar-link' : 'navbar-link'
                }
              `}
              >
                Skills
              </Link>

              <Link
                className={`nav-link 
                 ${
                   activeLink === 'projects'
                     ? 'active navbar-link'
                     : 'navbar-link'
                 }
               `}
                to="/projects"
              >
                Projects
              </Link>

              <Link
                to="/certifications"
                className={`nav-link 
                ${
                  activeLink === 'certifications'
                    ? 'active navbar-link'
                    : 'navbar-link'
                }
              `}
              >
                Certifications
              </Link>
              <Link
                to="/simple-projects"
                className={`nav-link 
                ${
                  activeLink === 'simple-projects'
                    ? 'active navbar-link'
                    : 'navbar-link'
                }
              `}
              >
                Simple Projects
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
              <Link className="glowing-btn" to="/contact">
                <span className="glowing-txt">
                  <span className="faulty-letter">LETS </span>CONNECT
                </span>
              </Link>
            </span>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
}

export default NavBar;
