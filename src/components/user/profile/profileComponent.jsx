import React, { Fragment } from "react";
import { Button, Form } from "react-bootstrap";
import "../../../assets/styles/styles.css";

export default function Profile() {
  return (
    <Fragment>
      <div>
        <Form>
          <Form.Group>
            <Form.Label>Change your name</Form.Label>
            <Form.Control type="text" placeholder="name" />
          </Form.Group>
          <Button className="mt-2">Change</Button>
        </Form>
        <Form className="mt-3">
          <Form.Group>
            <Form.Label>Change your email</Form.Label>
            <Form.Control type="email" placeholder="name" />
          </Form.Group>
          <Button className="mt-2">Change</Button>
        </Form>
      </div>
    </Fragment>
  );
}
