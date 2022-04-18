import React, { Fragment } from "react";
import { Container } from "react-bootstrap";

import HeaderLogged from "../../components/header/header-logged";
import { ListUrl } from "../../components/list-url/listUrl";

export const ShortenScrenn = () => {
  return (
    <Fragment>
      <HeaderLogged />
      <section className="body-grey-200">
        <Container>
          <ListUrl />
        </Container>
      </section>
    </Fragment>
  );
};
