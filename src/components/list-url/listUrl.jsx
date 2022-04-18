import React, { Fragment, useEffect, useState } from "react";
import UrlService from "../../services/url";
import { ItemList } from "../item-lista/itemList";
import { FormEnterEditor } from "../form-enter-url/formEnterUrl";

export const ListUrl = () => {
  const [urls, setUrl] = useState([]);

  async function fetchUrl() {
    const response = await UrlService.getAll();
    if (response.data.length >= 1) {
      setUrl(response.data.reverse());
    } else {
      setUrl([]);
    }
  }

  useEffect(() => {
    fetchUrl();
  }, []);

  return (
    <Fragment>
      <div className="boddy-full mt-3">
        <FormEnterEditor fetchUrl={fetchUrl} />
        <ItemList urls={urls} fetchurl={fetchUrl} />
      </div>
    </Fragment>
  );
};
