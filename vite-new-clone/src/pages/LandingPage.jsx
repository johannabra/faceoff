import { useContext } from "react";
import { BlogContext } from "../context/BlogContext";
import BlogPosts from "../components/BlogPosts";

const LandingPage = () => {
  const { posts } = useContext(BlogContext);
  return (
    <>
      <h1 className="text-pink-700">Home page</h1>

      <BlogPosts />
    </>
  );
};

export default LandingPage;
