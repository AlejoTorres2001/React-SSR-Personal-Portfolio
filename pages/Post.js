import React from "react";
import Layout from "../components/Layout";
import { useRouter } from "next/router";
import { posts } from "../profile";
const Post = () => {
  const router = useRouter();
  const currentPost = posts.filter(
    (post) => post.title === router.query.title
  )[0];
  return (
    <Layout>
      <div className="text-center">
        <h1>{currentPost.title}</h1>
        <img
          src={currentPost.image}
          alt=""
          className="img-fluid"
          style={{ width: "50%" }}
        />
        <p>{currentPost.content}</p>
      </div>
    </Layout>
  );
};

export default Post;
