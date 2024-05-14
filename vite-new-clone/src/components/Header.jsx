import { Link } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "../context/UserContext";
import NavBar from "./NavBar";
const Header = () => {
  return (
    <header className="grid grid-cols-2 mt-6 mx-10 items-center">
      <h1 className="font-bold">Global state</h1>
      <NavBar />
    </header>
  );
};

export default Header;
