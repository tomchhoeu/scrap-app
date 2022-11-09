import React from 'react'
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';

const NavBar = () => {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="/">SCRAP</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#Characters">Characters</Nav.Link>
            <Nav.Link href="#Rules">Rules</Nav.Link>
            <Nav.Link href="#Guide">Guide</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <br />
    </>
  );
}

export default NavBar;