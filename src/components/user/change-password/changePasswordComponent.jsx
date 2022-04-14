import React, { Fragment, useEffect, useState } from "react";
import {
  Alert,
  Button,
  Form,
  FormControl,
  FormGroup,
  FormLabel,
} from "react-bootstrap";
import { useNavigate } from "react-router-dom";

import UserService from "../../../services/users";

export function ChangePassword() {
  const [newPassword, setNewPassword] = useState("");
  const [confirmNewPassword, setConfirmNewPassword] = useState("");
  const [error, setError] = useState(false);
  const [msgError, setMsgError] = useState("");

  const navigate = useNavigate();

  const HandlerUpdate = async (evt) => {
    evt.preventDefault();
    try {
      await UserService.update({
        password: newPassword,
      });
      localStorage.removeItem("token", null);
      localStorage.removeItem("user", null);
      navigate("/login");
    } catch (error) {
      setError(true);
      setMsgError("Error for update password");
    }
  };

  useEffect(() => {
    if (confirmNewPassword !== "") {
      if (newPassword !== confirmNewPassword) {
        setError(true);
        setMsgError("senhas não são iguais");
      } else {
        setError(false);
      }
    }
  }, [confirmNewPassword, newPassword]);

  return (
    <Fragment>
      <Form onSubmit={HandlerUpdate}>
        <FormGroup>
          <FormLabel>Enter your new password</FormLabel>
          <FormControl
            className="mb-3"
            type="password"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
          />
        </FormGroup>

        <FormGroup>
          <FormLabel>Confirm your new password</FormLabel>
          <FormControl
            className="mb-3"
            type="password"
            value={confirmNewPassword}
            onChange={(e) => setConfirmNewPassword(e.target.value)}
          />
        </FormGroup>
        <Button type="submit">Change the password</Button>
        {error && (
          <Alert
            className="mt-3 d-flex"
            variant="danger"
            dismissible
            onClose={(e) => setError(false)}
          >
            <p>{msgError}</p>
          </Alert>
        )}
      </Form>
    </Fragment>
  );
}
