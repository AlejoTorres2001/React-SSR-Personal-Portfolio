import React from "react";
import Link from "next/link";
const PostCards = ({ post }) => {
  return (
    <div className="col-md-4">
      <div className="card component-bg">
        <div className="overflow">
          <img src={post.image} alt="imagen" className="card-img-top" />
        </div>
        <div className="card-body">
          <h1>{post.title}</h1>
          <p>{post.content}</p>
          <Link href={`/Post?title=${post.title}`}>
            <button className="btn btn-dark">Read More</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PostCards;
