import React, { Fragment } from "react";

import { HeaderPublic } from "../../../components/header/header-public/header-public";
import { LoginForm } from "../../../components/auth/loggin-form/logginForm";

import "../../../assets/styles/styles.css";

export const Login = () => {
  return (
    <Fragment>
      <HeaderPublic />
      <section className="body-full center">
        <LoginForm />
      </section>
    </Fragment>
  );
};
