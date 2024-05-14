import useInput from "../hooks/useInput";
import { useContext } from "react";
import { UserContext } from "../context/UserContext";

const FormCreatePost = () => {
  const { setUserName } = useContext(UserContext);
  const authorInput = useInput();
  const titleInput = useInput();
  const blogPostInput = useInput();

  const handleSubmit = (e) => {
    e.preventDefault();

    setUserName(authorInput.value);
    titleInput.reset();
    blogPostInput.reset();
  };

  return (
    <section>
      <h1>Create post</h1>
      <form onSubmit={handleSubmit}>
        <label>Title</label>
        <input type="text" {...titleInput} />
        <label>Write blogpost</label>
        <input type="text" {...blogPostInput} />
        <button type="submit">Submit</button>
      </form>
    </section>
  );
};

export default FormCreatePost;
