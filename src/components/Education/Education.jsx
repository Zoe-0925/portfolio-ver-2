import React, { useContext, useState, useEffect } from 'react';
import Fade from 'react-reveal/Fade';
import { Container, Row, Col } from 'react-bootstrap';
import Title from '../Title/Title';
import PortfolioContext from '../../context/context';

const Education = () => {
  const { education } = useContext(PortfolioContext);

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
    <section id="education">
      <Container>
        <Title title="Education" />
        <Row className="about-wrapper">
          <Col md={6} sm={12}>
            <Fade left={isDesktop} bottom={isMobile} duration={1000} delay={1000} distance="30px">
              <div className="about-wrapper__info">
                {education.map((record) => {
                  const { id, degree, uni } = record;

                  return (
                    <Row key={id}>
                      <Fade
                        left={isDesktop}
                        bottom={isMobile}
                        duration={1000}
                        delay={500}
                        distance="30px"
                      >
                        <div className="project-wrapper__text">
                          <h3 className="project-wrapper__text-title">
                            {degree || 'Project Title'}
                          </h3>
                          <p>{uni || 'University'}</p>
                        </div>
                      </Fade>
                    </Row>
                  );
                })}
              </div>
            </Fade>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Education;
