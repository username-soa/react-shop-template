import React from "react";
import { Helmet } from "react-helmet-async";

const CustomHelmet = ({ title, description }) => {
  return (
    <Helmet>
      <meta charSet="utf-8" />
      <title>{`${title} - Digital Era`}</title>
      <meta name="description" content={`Page ${title} Digital Era`} />
    </Helmet>
  );
};
export default CustomHelmet;
