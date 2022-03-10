import React from 'react'
import 'react-bootstrap'
import { Col, Container, Nav, Navbar, NavDropdown, Row } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';

function Header() {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="/">Bookworm</Navbar.Brand>
          <Nav className="ms-auto">
          <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/shop-pages">Shop</Nav.Link>
            <Nav.Link href="/cart-pages">Cart</Nav.Link>
            <Nav.Link href="/about-pages">About</Nav.Link>
            <Nav.Link href="/login">Login</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  )
}

export default Header;