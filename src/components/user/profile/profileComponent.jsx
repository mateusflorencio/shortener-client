import React, { Fragment, useState } from "react";
import { Button, Form } from "react-bootstrap";
import "../../../assets/styles/styles.css";

import UserService from "../../../services/users";

export default function Profile() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const HandleChangeProfile = async (evt) => {
    evt.preventDefault();
    try {
      await UserService.update({
        name: name,
        email: email,
      });
    } catch (error) {
      alert("error");
    }
  };
  return (
    <Fragment>
      <div>
        <Form onSubmit={HandleChangeProfile}>
          <Form.Group>
            <Form.Label>Change your name</Form.Label>
            <Form.Control
              type="text"
              placeholder="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </Form.Group>
          <Button type="submit" className="mt-2">
            Change
          </Button>

          <Form.Group>
            <Form.Label>Change your email</Form.Label>
            <Form.Control
              type="email"
              placeholder="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </Form.Group>
          <Button type="submit" className="mt-2">
            Change
          </Button>
        </Form>
      </div>
    </Fragment>
  );
}
