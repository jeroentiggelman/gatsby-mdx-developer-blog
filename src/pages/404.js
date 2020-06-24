import React from "react";
import { Link } from "gatsby";
import { Layout } from "../components/Layout";

const NotFound = () => {
  return (
    <Layout>
      Nope, go <Link to="/">home</Link>
    </Layout>
  );
};

export default NotFound;
