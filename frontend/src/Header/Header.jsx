import React from 'react'
import {
  Navbar,
  Container,
  Nav,
  NavDropdown,
  Form,
  FormControl
} from "react-bootstrap";


const Header = () => (
  <Navbar bg="primary" expand="lg" variant="light">
    <Container>
      <Navbar.Brand href="#home">Note Zipper</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="m-auto">
          <Form className="d-flex">
            <FormControl
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
          </Form>
        </Nav>
        <Nav className="me-auto">
          <Nav.Link href="#home">My Notes</Nav.Link>
          <NavDropdown title="Riya Shah" id="basic-nav-dropdown">
            <NavDropdown.Item href="#action/3.1">My Profile</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Logout</NavDropdown.Item>
          </NavDropdown>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
);

export default Header;
