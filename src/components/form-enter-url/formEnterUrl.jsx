import React, { useState } from "react";
import { Form, Button, FormControl } from "react-bootstrap";
import UrlService from "../../services/url";

export const FormEnterEditor = (props) => {
  const [input, setInput] = useState("");

  async function handlerCreateShorter(evt) {
    evt.preventDefault();
    try {
      UrlService.create({
        url: input,
      });
      props.fetchUrl();
    } catch (error) {
      alert(error);
    }
  }
  return (
    <div className="mt-3 div-form-short">
      <Form
        onSubmit={handlerCreateShorter}
        size="lg"
        className="d-flex form-short"
      >
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
        <Button type="submit" variant="success button-short">
          Shorten
        </Button>
      </Form>
    </div>
  );
};
