import React from 'react';
import NavbarBootstrap from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';


export default function Navbar() {
  return (
    <NavbarBootstrap bg="light" expand="lg">
      <NavbarBootstrap.Toggle aria-controls="basic-navbar-nav"/>
      <NavbarBootstrap.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="/people">People</Nav.Link>
          <Nav.Link href="/planets">Planets</Nav.Link>
          <Nav.Link href="/starships">Starships</Nav.Link>
        </Nav>
      </NavbarBootstrap.Collapse>
    </NavbarBootstrap>
  )
}
