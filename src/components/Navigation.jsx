import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';

const Navigation = () => (
  <Navbar collapseOnSelect expand="lg" bg="white" variant="light" sticky="top">
    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
    <Navbar.Collapse id="responsive-navbar-nav">
      <Nav className="mr-auto" />
      <Nav>
        <Nav.Link href="#projects">Projects</Nav.Link>
        <Nav.Link href="#education">Experience</Nav.Link>
        <Nav.Link href="#education">Education</Nav.Link>
        <Nav.Link href="#education">CV</Nav.Link>
        <Nav.Link href="#about">About Me</Nav.Link>
      </Nav>
    </Navbar.Collapse>
  </Navbar>
);

export default Navigation;
