import React, { Fragment, useEffect, useState } from "react";
import { Navbar, Container, DropdownButton, Dropdown } from "react-bootstrap";
import UserService from "../../../services/users";
import "../../../assets/styles/styles.css";

import Logo from "../../../assets/images/logo.png";

export const HeaderLogged = () => {
  const [user, setUser] = useState("");

  useEffect(() => {
    let userLocal = JSON.parse(localStorage.getItem("user"));
    setUser(userLocal);
  }, []);

  return (
    <Fragment>
      <header>
        <Navbar collapseOnSelect expand="lg" bg="white">
          <Container>
            <Navbar.Brand href="/">
              <img src={Logo} alt="" />{" "}
            </Navbar.Brand>
            <DropdownButton id="dropdown-basic-button" title={user.name}>
              <Dropdown.Item href="/user">Settings</Dropdown.Item>
              <Dropdown.Item href="/shorten">Painel</Dropdown.Item>
              <Dropdown.Divider />
              <Dropdown.Item href="/" onClick={() => UserService.logout()}>
                Logout
              </Dropdown.Item>
            </DropdownButton>
          </Container>
        </Navbar>
      </header>
    </Fragment>
  );
};
