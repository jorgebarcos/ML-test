import React from "react";
import CardContent from "../components/CardContent";
import { Helmet } from "react-helmet";

const NotFound = () => {
  return (
    <>
      <Helmet>
        <title>{`Ups, Algo salio mal! | Mercado Libre`}</title>
      </Helmet>
      <CardContent textContent="Ups, Algo salio mal!" />
    </>
  );
};

export default NotFound;
