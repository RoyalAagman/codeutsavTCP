import React from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import loghite from "./logo-white.png";
import "./First.css";

const Navigation = () => {
  return (
    <Navbar
      className="container-fluid Navibar bg-transparent "
      style={{ color: "whitesmoke" }}
      expand="lg"
    >
      <Container className="">
        <Navbar.Brand className=" col" href="#home">
          {" "}
          <img src={loghite} alt=" litho" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <div className="">
            <Nav className="me-auto d-flex justify-content-center">
              <Nav.Link href="" style={{ color: "whitesmoke" }}>
                Home
              </Nav.Link>
              <Nav.Link href="" style={{ color: "whitesmoke" }}>
                Pages
              </Nav.Link>
              <Nav.Link href="" style={{ color: "whitesmoke" }}>
                Portfolio
              </Nav.Link>
              <Nav.Link href="" style={{ color: "whitesmoke" }}>
                Elements
              </Nav.Link>
              <Nav.Link href="" style={{ color: "whitesmoke" }}>
                Features
              </Nav.Link>
              <Nav.Link href="" style={{ color: "whitesmoke" }}>
                Blog
              </Nav.Link>
              <Nav.Link href="" style={{ color: "whitesmoke" }}>
                Shop
              </Nav.Link>
            </Nav>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navigation;
