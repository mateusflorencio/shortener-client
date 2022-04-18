import React from "react";
import { Modal, Button } from "react-bootstrap";
import UrlService from "../../services/url";

export const DeleteUrl = (props) => {
  const handleClick = async () => {
    try {
      await UrlService.delete(props.cod);
      props.onHide();
    } catch (error) {
      alert("error delete");
    }
  };

  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Are you sure you want to erase?
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h4>{props.cod}</h4>
        <p>{props.url}</p>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
        <Button variant="danger" onClick={handleClick}>
          Delete
        </Button>
      </Modal.Footer>
    </Modal>
  );
};
