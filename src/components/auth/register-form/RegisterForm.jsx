import React, { Fragment, useState, useEffect } from "react";
import { Form, Button, Alert } from "react-bootstrap";
import UserService from "../../../services/users";
import { useNavigate } from "react-router-dom";

export const RegisterForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassoword] = useState("");
  const [redirectToLogin, setRedirectToLogin] = useState(false);
  const [error, setError] = useState(false);

  const HandleSubmit = async (evt) => {
    evt.preventDefault();
    try {
      await UserService.register({
        name: name,
        email: email,
        password: password,
      });
      setRedirectToLogin(true);
    } catch (error) {
      setError(true);
    }
  };
  const navigate = useNavigate();

  useEffect(() => {
    if (redirectToLogin) navigate("/login");
  });

  return (
    <Fragment>
      <div className="box-form">
        <Form onSubmit={HandleSubmit}>
          <Form.Group className="mb-3" controlId="formBasicName">
            <Form.Label className="text-secondary">Full name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label className="text-secondary">Email address</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label className="text-secondary">Password</Form.Label>
            <Form.Control
              className="aa"
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassoword(e.target.value)}
            />
          </Form.Group>
          {error && (
            <Alert variant="danger" onClose={() => setError(false)} dismissible>
              <p>Email or password incorrect</p>
            </Alert>
          )}

          <Button variant="primary" type="submit">
            Register
          </Button>
          <Button href="/login" variant="secondary" className="ms-3">
            Login
          </Button>
        </Form>
      </div>
    </Fragment>
  );
};
