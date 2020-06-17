import React from "react";

export const Post = ({ post }) => {
  return (
    <article className="post-excerpt">
      <h1>{post.title}</h1>
      <p>{post.body.substring(0, 100)}</p>
    </article>
  );
};
