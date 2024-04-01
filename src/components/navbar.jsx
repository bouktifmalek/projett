import React, { useRef } from 'react';
import './navbar.css';
import logo_light from '../assets/imgo.png';
import search_icon_light from '../assets/search-w.png';
import { Link } from 'react-router-dom';
import { Container, Row, Col, ListGroup, ListGroupItem } from "reactstrap";

const navLinks = [
  {
    display: "Home",
    url: "#",
  },
  {
    display: "About",
    url: "#",
  },

  {
    display: "Courses",
    url: "#",
  },
  {
    display: "Pages",
    url: "#",
  },
  {
    display: "Blog",
    url: "#",
  },
];

const footerQuickLinks = [
  {
    display: "Home",
    url: "#",
  },
  {
    display: "About US",
    url: "#",
  },

  {
    display: "Courses",
    url: "#",
  },

  {
    display: "Blog",
    url: "#",
  },
];

const footerInfoLinks = [
  {
    display: "Privacy Policy",
    url: "#",
  },
  {
    display: "Membership",
    url: "#",
  },

  {
    display: "Purchases Guide",
    url: "#",
  },

  {
    display: "Terms of Service",
    url: "#",
  },
];

const Navbar = () => {
  const menuRef = useRef();

  const menuToggle = () => menuRef.current.classList.toggle("active__menu");

  return (
    <div className='navbar'>
      <img src={logo_light} alt="" className='logo' />

      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/contact">Contact</Link></li>
        <li><Link to="/Courses">Courses</Link></li>
        <li><Link to="/Quiz">Quiz</Link></li>
        <li><Link to="/register">Register</Link></li>
        <li><Link to="/connexion">Connexion</Link></li>
        <li><Link to="/alert">Alert</Link></li>
      </ul>

      <div className='search-box'>
        <input type="text" placeholder='search' />
        <img src={search_icon_light} alt="" />
      </div>

      <header className="header">
        <Container>
          <div className="navigation d-flex align-items-center justify-content-between">
            <div className="logo">
              <h2 className=" d-flex align-items-center gap-1">
                <i className="ri-pantone-line"></i> Learners.
              </h2>
            </div>

            <div className="nav d-flex align-items-center gap-5">
              <div className="nav__menu" ref={menuRef} onClick={menuToggle}>
                <ul className="nav__list">
                  {navLinks.map((item, index) => (
                    <li key={index} className="nav__item">
                      <a href={item.url}>{item.display}</a>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="nav__right">
                <p className="mb-0 d-flex align-items-center gap-2">
                  <i className="ri-phone-line"></i> +88 0123456789
                </p>
              </div>
            </div>

            <div className="mobile__menu">
              <span>
                <i className="ri-menu-line" onClick={menuToggle}></i>
              </span>
            </div>
          </div>
        </Container>
      </header>

      <footer className="footer">
        <Container>
          <Row>
            <Col lg="3" md="6" className="mb-4">
              <h2 className="d-flex align-items-center gap-1">
                <i className="ri-pantone-line"></i> Learners.
              </h2>

              <div className="follows">
                <p className="mb-0">Follow us on social media</p>
                <span>
                  {" "}
                  <a href="facebook.com">
                    <i className="ri-facebook-line"></i>
                  </a>
                </span>

                <span>
                  {" "}
                  <a href="facebook.com">
                    <i className="ri-instagram-line"></i>
                  </a>
                </span>

                <span>
                  {" "}
                  <a href="facebook.com">
                    <i className="ri-linkedin-line"></i>
                  </a>
                </span>

                <span>
                  {" "}
                  <a href="facebook.com">
                    <i className="ri-twitter-line"></i>
                  </a>
                </span>
              </div>
            </Col>

            <Col lg="3" md="6" className="mb-4">
              <h6 className="fw-bold">Explore</h6>
              <ListGroup className="link__list">
                {footerQuickLinks.map((item, index) => (
                  <ListGroupItem key={index} className="border-0 ps-0 link__item">
                    {" "}
                    <a href={item.url}>{item.display}</a>
                  </ListGroupItem>
                ))}
              </ListGroup>
            </Col>

            <Col lg="3" md="6" className="mb-4">
              <h6 className="fw-bold">Information</h6>
              <ListGroup className="link__list">
                {footerInfoLinks.map((item, index) => (
                  <ListGroupItem key={index} className="border-0 ps-0 link__item">
                    {" "}
                    <a href={item.url}>{item.display}</a>
                  </ListGroupItem>
                ))}
              </ListGroup>
            </Col>

            <Col lg="3" md="6">
              <h6 className="fw-bold">Get in Touch</h6>

              <p>Address: Sylhet, Bangladesh</p>
              <p>Phone: +88 0123456789 </p>
              <p>Email: example@gmail.com</p>
            </Col>
          </Row>
        </Container>
      </footer>
    </div>
  );
}

export default Navbar;
