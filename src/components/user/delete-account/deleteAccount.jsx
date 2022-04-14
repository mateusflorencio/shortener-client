import React, { Fragment, useState, useEffect } from "react";
import { Button, Modal } from "react-bootstrap";
import UserService from "../../../services/users";
import { useNavigate } from "react-router-dom";

export default function DeleteAccount() {
  const [redirectToHome, setRedirectToHome] = useState(false);
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

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
      <div>
        <Button
          style={{ maxHeight: "40px" }}
          variant="danger"
          className="d-grid"
          onClick={handleShow}
        >
          Delete Account
        </Button>
      </div>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Do you sure to delete the account</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          The action is irreversible, you will lose everything
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="danger" onClick={HandlerDelete}>
            Delete
          </Button>
        </Modal.Footer>
      </Modal>
    </Fragment>
  );
}
