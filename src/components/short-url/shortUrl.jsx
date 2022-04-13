import React, { Fragment, useState } from "react";
import { FormControl, Button, Form } from "react-bootstrap";

export const ShortUrl = () => {
  const [input, setInput] = useState("");

  return (
    <Fragment>
      <div className="mt-3 div-form-short">
        <Form size="lg" className="d-flex form-short">
          <i className="i-link bi bi-link-45deg"></i>
          <FormControl
            md={12}
            value={input}
            type="text"
            placeholder="Enter the URL here"
            className="me-2 form-input-short"
            aria-label="Search"
            onChange={(e) => setInput(e.target.value)}
          />
          <Button variant="success button-short">Shorten</Button>
        </Form>
      </div>
    </Fragment>
  );
};
