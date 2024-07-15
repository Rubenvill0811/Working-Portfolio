import React from "react";
import { Navbar, Nav, Form, Button, Container } from "react-bootstrap";
import { Link } from "react-router-dom";

function Navcomp() {
  return (
    <div>
      <Navbar expand="lg" variant="light">
        <Container>
          <Navbar.Toggle
            aria-controls="navbar-collapse-id"
            className="justify-content-center"
          />
          <Navbar.Collapse id="navbar-collapse-id">
            <div className="links">
              <Nav activeKey="/link">
                <Nav.Link as={Link} to="/#Home">
                  home
                </Nav.Link>
                <Nav.Link as={Link} to="/#About">
                  About Me
                </Nav.Link>
                <Nav.Link as={Link} to="/#Works">
                  Works
                </Nav.Link>
                <Nav.Link as={Link} to="/#Journey">
                  Journey
                </Nav.Link>
              </Nav>
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default Navcomp;
