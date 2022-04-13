import React, { Fragment } from "react";
import {
  Button,
  Form,
  FormControl,
  FormGroup,
  FormLabel,
} from "react-bootstrap";

export function ChangePassword() {
  return (
    <Fragment>
      <Form>
        <FormGroup>
          <FormLabel>Change your password</FormLabel>
          <FormControl className="mb-3" type="password" />
        </FormGroup>

        <FormGroup>
          <FormLabel>Enter your new password</FormLabel>
          <FormControl className="mb-3" type="password" />
        </FormGroup>

        <FormGroup>
          <FormLabel>Confirm your new password</FormLabel>
          <FormControl className="mb-3" type="password" />
        </FormGroup>
        <Button>Change the password</Button>
      </Form>
    </Fragment>
  );
}
