import React from "react";
import Layout from "../components/Layout";
import PostCards from "../components/PostCards";
import { posts } from "../profile";
export default function Blog() {
  return (
    <Layout isHome={true}>
      <h1 className="text-center">My Blog</h1>
      <div className="row justify-content-center min-vh-100">
        {posts.map((post, id) => (
          <PostCards post={post} key={id} />
        ))}
      </div>
    </Layout>
  );
}
