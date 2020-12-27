import React, { useState, useEffect } from 'react';
import Hero from './Hero';
import About from './About';
import Education from './Education';
import Projects from './Projects';
import Contact from './Contact';
import Footer from './Footer';

import { PortfolioProvider } from './context';

import {
  heroData,
  aboutData,
  projectsData,
  contactData,
  footerData,
  educationData,
} from '../mock/data';

function App() {
  const [hero, setHero] = useState({});
  const [about, setAbout] = useState({});
  const [projects, setProjects] = useState([]);
  const [contact, setContact] = useState({});
  const [footer, setFooter] = useState({});
  const [education, setEducation] = useState([]);

  useEffect(() => {
    setHero({ ...heroData });
    setAbout({ ...aboutData });
    setProjects([...projectsData]);
    setContact({ ...contactData });
    setFooter({ ...footerData });
    setEducation(educationData);
  }, []);

  return (
    <PortfolioProvider value={{ hero, about, projects, contact, footer, education }}>
      <Hero />
      <About />
      <Projects />
      <Education />
      <Contact />
      <Footer />
    </PortfolioProvider>
  );
}

export default App;
