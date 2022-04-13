import React, { Fragment } from "react";
import { Container } from "react-bootstrap";

import HeaderLogged from "../../components/header/header-logged";
import { ShortUrl } from "../../components/short-url/shortUrl";
import { ListUrl } from "../../components/list-url/listUrl";

export const ShortenScrenn = () => {
  return (
    <Fragment>
      <HeaderLogged />
      <section className="body-full body-grey-200">
        <Container className="body-grey-200">
          <ShortUrl />
          <ListUrl />
        </Container>
      </section>
    </Fragment>
  );
};
