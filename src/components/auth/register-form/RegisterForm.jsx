import React, { Fragment } from "react";
import { Form, Button } from "react-bootstrap";

export const RegisterForm = () => {
  return (
    <Fragment>
      <div className="box-form">
        <Form>
          <Form.Group className="mb-3" controlId="formBasicName">
            <Form.Label className="text-secondary">Full name</Form.Label>
            <Form.Control type="email" placeholder="Enter name" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label className="text-secondary">Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label className="text-secondary">Password</Form.Label>
            <Form.Control
              className="aa"
              type="password"
              placeholder="Password"
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPasswordConfirm">
            <Form.Label className="text-secondary">
              Confirm your Password
            </Form.Label>
            <Form.Control
              className="aa"
              type="password"
              placeholder="Confirm your Password"
            />
          </Form.Group>

          <Button variant="primary" type="submit">
            Register
          </Button>
          <Button
            href="/login"
            variant="secondary"
            type="submit"
            className="ms-3"
          >
            Login
          </Button>
        </Form>
      </div>
    </Fragment>
  );
};
