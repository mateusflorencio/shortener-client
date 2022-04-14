import React, { Fragment } from "react";
import { Container, Col, Row } from "react-bootstrap";

import "../../assets/styles/styles.css";
import HeaderLogged from "../../components/header/header-logged";
import Profile from "../../components/user/profile/profileComponent";
import ChangePassword from "../../components/user/change-password";
import DeleteAccount from "../../components/user/delete-account/deleteAccount";

export const UserScreen = () => {
  return (
    <Fragment>
      <HeaderLogged />
      <section className="body-full body-grey-200">
        <Container className="h-100 center ">
          <div className=" box-form flex-column">
            <Row>
              <h3>Profile</h3>

              <Col className="d-flex h-100" sm={6}>
                <Profile />
              </Col>
              <Col>
                <ChangePassword />
              </Col>
            </Row>
            <Row className="mt-3">
              <DeleteAccount />
            </Row>
          </div>
        </Container>
      </section>
    </Fragment>
  );
};
