import React from "react";
import { Modal, Button, Form } from "react-bootstrap";
import UrlService from "../../services/url";

export const EditUrl = (props) => {
  const [newUrl, setNewUrl] = React.useState("");

  const handleUpdate = async () => {
    try {
      await UrlService.update({
        params: props.url,
        body: {
          url: newUrl,
        },
      });
      props.onHide();
    } catch (error) {
      alert(error);
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
          Update your url
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h4>http//:localhost:300/{props.url}</h4>
        <Form>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Url address</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter url"
              value={newUrl}
              onChange={(e) => setNewUrl(e.target.value)}
            />
            <Form.Text className="text-muted">
              Enter you new url to Shorten
            </Form.Text>
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
        <Button variant="success" onClick={handleUpdate}>
          Update
        </Button>
      </Modal.Footer>
    </Modal>
  );
};
