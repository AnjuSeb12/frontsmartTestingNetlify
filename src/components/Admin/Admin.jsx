import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import "./Admin.css"

function Admin() {
  return (
    <Navbar expand="lg" className="bg-dark">
      <Container>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link as={Link} to="/add">Add</Nav.Link>
            <Nav.Link as={Link} to="/users">Users List</Nav.Link>
            <Nav.Link as={Link} to="/order">Orders List</Nav.Link>




          </Nav>

        </Navbar.Collapse>
      </Container>
    </Navbar>
    
  )
}

export default Admin