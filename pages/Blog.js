import React from "react";
import Layout from "../components/Layout";
import PostCards from "../components/PostCards";
import { posts } from "../profile";
export default function Blog() {
  return (
    <Layout isHome={false}>
      <h1 className="text-center">My Blog</h1>
      <div className="row">
        {posts.map((post, id) => (
          <PostCards post={post} key={id} />
        ))}
      </div>
    </Layout>
  );
}
