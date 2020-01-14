import React from "react";
import { Navbar, Nav } from "react-bootstrap";

export default function Header() {
  return (
    <Navbar bg="dark" variant="dark" expand="sm">
      <Navbar.Brand style={{ marginLeft: "1rem" }} href="/">
        Hossein 2
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="/">Resume</Nav.Link>
          <Nav.Link href="/ ">About</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}
