import Layout from "../components/Layout";

import React from "react";

const _error = ({ errorCode }) => {
  return (
    <>
      <h1>{errorCode}</h1>
      <p className="text-center">Could not load your page</p>
    </>
  );
};

export default _error;
