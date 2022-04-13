import React, { Fragment } from "react";
import { Row, Col, Button } from "react-bootstrap";

import Homebg from "../../assets/images/home.jpg";
import { HeaderPublic } from "../../components/header/header-public/header-public";

export const HomeScreen = () => {
  return (
    <Fragment>
      <HeaderPublic />
      <section className="container body-full">
        <Row className="w-100">
          <Col
            md={12}
            lg={6}
            className="d-flex flex-column justify-content-center"
          >
            <h1>Encurtador de URL</h1>
            <p>
              Contrary to popular belief, Lorem Ipsum is not simply random text.
              It has roots in a piece of classical Latin literature from 45 BC,
              making it over 2000 years old. Richard McClintock, a Latin
              professor at Hampden-Sydney College in Virginia, looked up one of
              the more obscure Latin words, consectetur, from a Lorem Ipsum
              passage, and going through the cites of the word in classical
              literature, discovered the undoubtable source.
            </p>

            <Button href="/register" size="lg">
              Register Account Now
            </Button>
          </Col>
          <Col md={12} lg={6} className="center">
            <img src={Homebg} alt="" className="img-fluid " />
          </Col>
        </Row>
      </section>
    </Fragment>
  );
};
