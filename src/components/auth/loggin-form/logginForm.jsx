import React, { Fragment, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Form, Button, Alert } from "react-bootstrap";

import UserService from "../../../services/users";

export const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const [redirectToShort, setRedirectToShort] = useState(false);

  const Handlerlogin = async (evt) => {
    evt.preventDefault();
    try {
      await UserService.login({
        email: email,
        password: password,
      });
      setRedirectToShort(true);
    } catch (error) {
      setError(true);
    }
  };

  const navigate = useNavigate();

  useEffect(() => {
    if (redirectToShort) navigate("/shorten");
  });

  return (
    <Fragment>
      <div className="box-form">
        <Form onSubmit={Handlerlogin}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label className="text-secondary">Email address</Form.Label>
            <Form.Control
              required
              type="email"
              placeholder="Enter email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label className="text-secondary">Password</Form.Label>
            <Form.Control
              required
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </Form.Group>
          {error && (
            <Alert dismissible variant="danger" onClose={() => setError(false)}>
              <p>Email or password incorrect</p>
            </Alert>
          )}

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
