import React, { Fragment } from "react";
import { FormControl, Button, Form } from "react-bootstrap";

export const ShortUrl = () => {
  return (
    <Fragment>
      <div className="mt-3 div-form-short">
        <Form size="lg" className="d-flex form-short">
          <i class="i-link bi bi-link-45deg"></i>
          <FormControl
            md={12}
            type="search"
            placeholder="Enter the URL here"
            className="me-2 form-input-short"
            aria-label="Search"
          />
          <Button variant="success button-short">Shorten</Button>
        </Form>
      </div>
    </Fragment>
  );
};
