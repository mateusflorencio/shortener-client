import React, { Fragment, useEffect, useState } from "react";
import { Container, Col, Row, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

import "../../assets/styles/styles.css";
import HeaderLogged from "../../components/header/header-logged";
import Profile from "../../components/user/profile/profileComponent";
import ChangePassword from "../../components/user/change-password";

import UserService from "../../services/users";

export const UserScreen = () => {
  const [redirectToHome, setRedirectToHome] = useState(false);
  const HandlerDelete = async () => {
    try {
      await UserService.delete();
      setRedirectToHome(true);
    } catch (error) {
      alert(error);
    }
  };
  const navigate = useNavigate();

  useEffect(() => {
    if (redirectToHome) navigate("/");
  });

  return (
    <Fragment>
      <HeaderLogged />
      <section className="body-full body-grey-200">
        <Container className="h-100 center">
          <Row className="d-flex  box-form ">
            <div className="d-flex flex-row justify-content-between">
              <h3 className="mb-5">Profile</h3>{" "}
              <Button
                style={{ maxHeight: "40px" }}
                variant="danger"
                onClick={() => HandlerDelete()}
              >
                Delete Account
              </Button>{" "}
            </div>
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
