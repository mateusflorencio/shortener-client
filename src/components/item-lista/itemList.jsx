import React, { Fragment, useState } from "react";
import { ListGroup, Button, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import { EditUrl } from "../edit-url/editUrl";
import { DeleteUrl } from "../delete-url/deleteUrl";

export const ItemList = (props) => {
  const [modalShowEditUrl, setModalShowEditUrl] = useState(false);
  const [modalShowDeleteUrl, setModalShowDeleteUrl] = useState(false);

  const handleOnHide = () => {
    setModalShowDeleteUrl(false);
    setModalShowEditUrl(false);
    props.fetchurl();
  };

  return (
    <Fragment>
      <div>
        <ListGroup>
          {props.urls.map((item, key) => (
            <ListGroup.Item key={key}>
              <Row className="w-100">
                {/* column content */}
                <Col md={8} className="divContent">
                  <p className="word-wrap">{item.url}</p>
                  <Link to="">http//:localhost:3030/{item.codUrl}</Link>
                  <p>Date created {item.date_create}</p>
                </Col>
                {/* column click */}
                <Col md={3}>
                  <h5>Clicks</h5> <br />
                  <label className=""> {item.click} </label>
                </Col>
                <Col md={1}>
                  {/* button delete url */}
                  <Button
                    variant="danger"
                    className="bi bi-trash-fill"
                    onClick={() => setModalShowDeleteUrl(true)}
                  ></Button>

                  <DeleteUrl
                    show={modalShowDeleteUrl}
                    onHide={handleOnHide}
                    url={item.url}
                    cod={item.codUrl}
                  />

                  {/* button edit url */}
                  <Button
                    className="mt-3"
                    onClick={() => setModalShowEditUrl(true)}
                  >
                    <i className="bi bi-pencil-square"></i>
                  </Button>

                  <EditUrl
                    show={modalShowEditUrl}
                    onHide={handleOnHide}
                    url={item.codUrl}
                  />
                </Col>
              </Row>
            </ListGroup.Item>
          ))}
        </ListGroup>
      </div>
    </Fragment>
  );
};
