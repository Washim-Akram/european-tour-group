import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import './Header.css';

const Header = () => {
    return (
        <div>
            <div className = "header-bg">
            <Navbar collapseOnSelect expand="lg" bg="info" variant="light">
  <Container>
  <Navbar.Brand href="#home">European Tour Group</Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="ms-auto">
      <Nav.Link href="#Home">Home</Nav.Link>
      <Nav.Link href="#About">About</Nav.Link>
      <Nav.Link href="#Events">Events</Nav.Link>
      <Nav.Link href="#Contacts">Contacts</Nav.Link>
    </Nav>
  </Navbar.Collapse>
  </Container>
</Navbar>
            </div>
            <h1 className = "header-title">Beyond The Usual Lifestyle</h1>
            <h2 className = "header-budget">Our Total Budget : 1.5 Billion</h2>
        </div>
    );
};

export default Header;