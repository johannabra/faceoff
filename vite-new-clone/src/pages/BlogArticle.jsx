import { useContext } from "react";
import { BlogContext } from "../context/BlogContext";

const BlogArticle = () => {
  const { posts } = useContext(BlogContext);
  return (
    <>
      <h1 className="text-pink-700">Blog article</h1>
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

export default BlogArticle;
