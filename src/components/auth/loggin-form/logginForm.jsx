import React, { Fragment } from "react";
import { Form, Button } from "react-bootstrap";

export const LoginForm = () => {
  return (
    <Fragment>
      <div className="box-form">
        <Form>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label className="text-secondary">Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label className="text-secondary">Password</Form.Label>
            <Form.Control
              className="aa"
              type="password"
              placeholder="Password"
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="Check me out" />
          </Form.Group>
          <Button variant="primary" type="submit">
            Login
          </Button>
          <Button
            href="/register"
            variant="secondary"
            type="submit"
            className="ms-3"
          >
            Register
          </Button>
        </Form>
      </div>
    </Fragment>
  );
};
