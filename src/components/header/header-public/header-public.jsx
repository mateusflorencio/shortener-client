import React, { Fragment } from "react";
import { Navbar, Container, Nav, NavLink } from "react-bootstrap";
import "../../../assets/styles/styles.css";

import Logo from "../../../assets/images/logo.png";

export const HeaderPublic = () => {
  return (
    <Fragment>
      <header>
        <Navbar collapseOnSelect expand="lg" bg="white">
          <Container>
            <Navbar.Brand href="/">
              {" "}
              <img src={Logo} alt="" />{" "}
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="ms-auto">
                <Nav.Item>
                  <div className="d-flex mt-2">
                    <NavLink
                      exact="true"
                      href="/register"
                      className="w-100 me-3 btn btn-secondary text-white"
                    >
                      Register
                    </NavLink>
                    <NavLink
                      exact="true"
                      href="/login"
                      className="w-100 btn btn-primary text-white"
                    >
                      Login
                    </NavLink>
                  </div>
                </Nav.Item>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </header>
    </Fragment>
  );
};
