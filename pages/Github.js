import React from "react";
import Layout from "../components/Layout";
import Error from "./_error";
export default function Github({ user, statusCode }) {
  if (statusCode) return <Error errorCode={statusCode}></Error>;
  return (
    <Layout isHome={true}>
      <div className="min-vh-100 ">
        <div className="container justify-content-center align-content-center card w-50 component-bg">
          <div className="p-1 ">
           {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={user.avatar_url}
            alt="imagen"
            className="card-img-top py-1"
          />
          <div className="card-body ">
            <h3 className="fs-2">{user.name}</h3>
            <p>🚀Currently in college:Science in Computer Engineering</p>
            <p>🏢 Lecturer at IITA</p>
            <a href="https://github.com/AlejoTorres2001" className="btn btn-dark">Visit Profile</a>
          </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
export async function getServerSideProps() {
  const res = await fetch("https://api.github.com/users/AlejoTorres2001");
  const data = await res.json();
  const statusCode = res.status > 200 ? res.status : false;
  return {
    props: {
      user: data,
      statusCode,
    },
  };
}
