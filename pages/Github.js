import React from "react";
import Badge from "../components/Badge";
import Layout from "../components/Layout";
import Error from "./_error";
export default function Github({ user, statusCode }) {
  if (statusCode) return <Error errorCode={statusCode}></Error>;
  return (
    <Layout isHome={true}>
      <div className="min-vh-100">
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
              <a
                href="https://github.com/AlejoTorres2001"
                className="btn btn-dark"
              >
                Visit Profile
              </a>
            </div>
          </div>
        </div>
        <div className="my-2 mt-3 ">
        <div>
              <h1 className="text-center  text-withe">Badges</h1>
            </div>
          <div className="bg-secondary d-flex justify-content-center align-items-center">
           
            <Badge
              title={"Building a TodoApp with Javascript Workshop"}
              date={"Sep 10th 2021"}
              img={
                "https://api.badgr.io/public/assertions/9LCsS9AVSiaZOtCu-yNf9w/image"
              }
              verify={
                "https://badgecheck.io?url=https%3A%2F%2Fapi.badgr.io%2Fpublic%2Fassertions%2F9LCsS9AVSiaZOtCu-yNf9w"
              }
            ></Badge>

            <Badge
              date={"20 sept. 2021"}
              title={"Introduction to GraphQL with Javascript Workshop"}
              img={
                "https://api.badgr.io/public/assertions/Vs-epAjIR1iqQa7xOHEB2A/image"
              }
              verify={
                "https://badgecheck.io?url=https%3A%2F%2Fapi.badgr.io%2Fpublic%2Fassertions%2FVs-epAjIR1iqQa7xOHEB2A%3Fidentity__email%3Dtorres.alejo2001%2540gmail.com&amp;identity__email=torres.alejo2001%40gmail.com"
              }
            ></Badge>
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
