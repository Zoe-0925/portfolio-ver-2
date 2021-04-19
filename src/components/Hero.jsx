import React, { useContext, useState, useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Fade from 'react-reveal/Fade';
import { Link } from 'react-scroll';
import PortfolioContext from './context';
// import SocialLinks from './SocialLinks';
import AboutImg from './Image/AboutImg';

const Header = () => {
  const { hero } = useContext(PortfolioContext);
  const { title, name, subtitle, cta } = hero;
  // const { networks } = footer;

  const [isDesktop, setIsDesktop] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    if (window.innerWidth > 769) {
      setIsDesktop(true);
      setIsMobile(false);
    } else {
      setIsMobile(true);
      setIsDesktop(false);
    }
  }, []);

  return (
    <section id="hero" className="jumbotron">
      <Container>
        <Col sm={12} md={8}>
          <Fade left={isDesktop} bottom={isMobile} duration={1000} delay={500} distance="30px">
            <h1 className="hero-title">
              {title || 'I am'}
              <span className="text-color-main">{name || ' Zoe Zhang'}</span>
              <br />
              {subtitle || "I'm a Full Stack Developer."}
            </h1>
          </Fade>
          <Fade left={isDesktop} bottom={isMobile} duration={1000} delay={1000} distance="30px">
            <Row>
              <p className="hero-cta">
                <span className="cta-btn cta-btn--hero">
                  <Link to="projects" smooth duration={1000}>
                    {cta || 'View my projects'}
                  </Link>
                </span>
              </p>
              <p className="hero-cta" style={{ marginLeft: '2rem' }}>
                <span className="cta-btn cta-btn--hero">
                  <Link to="about" smooth duration={1000}>
                    {cta || 'View my CV'}
                  </Link>
                </span>
              </p>
            </Row>
          </Fade>
        </Col>
        <Col sm={12} md={4}>
          <AboutImg file="profile.jpg" />
        </Col>
      </Container>
    </section>
  );
};

export default Header;
