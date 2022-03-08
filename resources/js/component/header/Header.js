import React from 'react'
import 'react-bootstrap'
import { Col, Container, Nav, Navbar, NavDropdown, Row } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';

function Header() {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Bookworm</Navbar.Brand>
          <Nav className="ms-auto">
          <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#home">Shop</Nav.Link>
            <Nav.Link href="#features">Cart</Nav.Link>
            <Nav.Link href="#pricing">About</Nav.Link>
            <Nav.Link href="#pricing">Login</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  )
}

export default Header;