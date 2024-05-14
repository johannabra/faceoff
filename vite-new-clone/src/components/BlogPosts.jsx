import { useContext } from "react";
import { BlogContext } from "../context/BlogContext";

const BlogPosts = () => {
  const { posts } = useContext(BlogContext);
  return (
    <>
      {posts.map((post) => {
        return (
          <p key={post.id}>
            {post.author} {post.text}{" "}
          </p>
        );
      })}
    </>
  );
};

export default BlogPosts;
