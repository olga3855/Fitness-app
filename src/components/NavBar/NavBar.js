import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { Redirect } from "react-router-dom";
import { Link as LinkScroll } from "react-scroll";

const NavBar = (props) => {
  return (
    <Navbar
      fixed="top"
      variant="dark"
      expand="md"
    >
      <Redirect push to={props.redirectPath} />

      <Container>
        <Navbar.Brand>
          <i className="fas fa-apple-alt"></i> CALMAC
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="text-center ml-auto">
            <LinkScroll
              to="jumbotronContainer"
              name="/"
              onClick={props.onClick}
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              className=" navbar nav-links text-white mx-1 "
            >
              Home
            </LinkScroll>

            <LinkScroll
              to="about"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              className=" navbar nav-links text-white mx-1 "
            >
              About
            </LinkScroll>

            <LinkScroll
              to="jumbotronContainer"
              name="/calories"
              onClick={props.onClick}
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              className=" navbar nav-links text-white mx-1 "
            >
              Calculator
            </LinkScroll>

            <LinkScroll
              to="jumbotronContainer"
              name="/table"
              onClick={props.onClick}
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              className=" navbar nav-links text-white mx-1 "
            >
              Counter
            </LinkScroll>

            <LinkScroll
              to="jumbotronContainer"
              name="/register"
              onClick={props.onClick}
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              className=" navbar nav-links text-white mx-1 "
            >
              Sign Up
            </LinkScroll>

          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;