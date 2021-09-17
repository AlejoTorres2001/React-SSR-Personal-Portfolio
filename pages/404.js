import React from "react";
import Layout from "../components/Layout";
import Link from "next/link";
const custom404 = () => {
  return (
    <Layout isHome={false}>
      <div className="text-center">
        <h1>404</h1>
        <p>
          This page does no exist, please return to{" "}
          <Link href="/">
            <a>Home</a>
          </Link>{" "}
        </p>
      </div>
    </Layout>
  );
};

export default custom404;
