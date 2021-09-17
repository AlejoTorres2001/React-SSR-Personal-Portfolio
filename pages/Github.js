import React from "react";
import Layout from "../components/Layout";
import Error from "./_error";
export default function Github({ user, statusCode }) {
  if (statusCode) return <Error errorCode={statusCode}></Error>;
  return (
    <Layout isHome={false}>
      <div className="container p-2 ">
        <div className="container justify-content-center align-content-center card w-50">
          <img
            src={user.avatar_url}
            alt="imagen"
            className="card-img-top py-1"
          />
          <div className="card-body">
            <h3>{user.name}</h3>
            <p>{user.bio}</p>
            <a href="#!">Know More</a>
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
