import React, { Fragment } from "react";
import { Container, Col, Row } from "react-bootstrap";

import "../../assets/styles/styles.css";
import HeaderLogged from "../../components/header/header-logged";
import Profile from "../../components/user/profile/profileComponent";
import ChangePassword from "../../components/user/change-password";

export const UserScreen = () => {
  return (
    <Fragment>
      <HeaderLogged />
      <section className="body-full body-grey-200">
        <Container className="h-100 center">
          <Row className="d-flex  box-form ">
            <h3 className="mb-5">Profile</h3>
            <Col className="d-flex h-100" sm={6}>
              <Profile />
            </Col>
            <Col>
              <ChangePassword />{" "}
            </Col>
          </Row>
        </Container>
      </section>
    </Fragment>
  );
};
