import React, { Fragment } from "react";

import { HeaderPublic } from "../../../components/header/header-public/header-public";
import { RegisterForm } from "../../../components/auth/register-form/RegisterForm";

export const Register = () => {
  return (
    <Fragment>
      <HeaderPublic />
      <section className="body-full center">
        <RegisterForm />
      </section>
    </Fragment>
  );
};
