import React from "react";
import Badge from "../components/Badge";
import Layout from "../components/Layout";
import Error from "./_error";
import { motion } from "framer-motion";
export default function Github({ user, statusCode }) {
  const cardVariants = {
    hidden: {
      y: "-100vh",
    },
    visible: {
      y: 0,
      transition: {
        type: "spring",
        duratin: 1,
        bounce: 0.3,
        delay: 0.5,
        when: "beforeChildren",
        staggerChildren: 0.2,
      },
    },
  };
  const badgesVariant = {
    hidden: {
      y: "100vh",
    },
    visible: {
      y: 0,
      transition: {
        type: "spring",
        duratin: 1,
        bounce: 0.3,
        delay: 0.5,
        when: "beforeChildren",
        staggerChildren: 0.2,
      },
    },
  };
  const childrenVariant = {
    hidden: {
      x: -10,
      opacity: 0,
    },
    visible: {
      x: "0",
      opacity: 1,
    },
  };

  if (statusCode) return <Error errorCode={statusCode}></Error>;
  return (
    <Layout isHome={true}>
      <div className="min-vh-100">
        <motion.div
          variants={cardVariants}
          initial="hidden"
          animate="visible"
          className="container justify-content-center align-content-center card w-50 component-bg"
        >
          <div className="p-1 ">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <motion.img
              variants={childrenVariant}
              src={user.avatar_url}
              alt="imagen"
              className="card-img-top py-1"
            />
            <motion.div className="card-body " variants={childrenVariant}>
              <h3 className="fs-2">{user.name}</h3>
              <p>🚀Currently in college:Science in Computer Engineering</p>
              <p>🏢 Lecturer at IITA</p>
              <a
                href="https://github.com/AlejoTorres2001"
                className="btn btn-dark"
              >
                Visit Profile
              </a>
            </motion.div>
          </div>
        </motion.div>
        <motion.div className="my-2 mt-3 ">
          <motion.div
            variants={cardVariants}
            initial="hidden"
            animate="visible"
          >
            <h1 className="text-center  text-withe">Badges</h1>
          </motion.div>
          <motion.div
            variants={badgesVariant}
            initial="hidden"
            animate="visible"
            className="bg-secondary d-flex justify-content-center align-items-center"
          >
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
            <Badge title={"Building a Netflix Clone with GraphQL Workshop"} img={"https://api.badgr.io/public/assertions/QjjpNAZcRKevsxdvZvfaNg/image"} verify={"https://badgecheck.io?url=https%3A%2F%2Fapi.badgr.io%2Fpublic%2Fassertions%2FQjjpNAZcRKevsxdvZvfaNg%3Fidentity__email%3Dtorres.alejo2001%2540gmail.com&amp;identity__email=torres.alejo2001%40gmail.com"} date={"24 sept. 2021"}></Badge>
          </motion.div>
        </motion.div>
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
