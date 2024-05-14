import FormCreatePost from "../components/FormCreatePost";

const UserPage = () => {
  return (
    <>
      <section className="grid grid-cols-2 mt-6 mx-10 items-center">
        <h1 className="text-pink-700">Profil</h1>
        <FormCreatePost />
      </section>
    </>
  );
};

export default UserPage;
