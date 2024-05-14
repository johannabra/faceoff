import { Link } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "../context/UserContext";
const NavBar = () => {
  const { userName, isLoggedIn, login, logout } = useContext(UserContext);
  return (
    <nav className="flex justify-end">
      <Link to="/" className="mr-4">
        Home
      </Link>
      <Link className="mr-4" to="/profile">
        Profile
      </Link>

      {isLoggedIn ? (
        <>
          <p className="mx-5 font-bold">{userName}</p>
          <button onClick={logout}>Log out</button>
        </>
      ) : (
        <button className="ml-5" onClick={login}>
          Log in
        </button>
      )}
    </nav>
  );
};

export default NavBar;
