import React from "react";
import "./NavBar.css";
import { Link } from "react-router-dom";
import { AiFillHome } from "react-icons/ai";
import { FaUserFriends } from "react-icons/fa";
import UserList from './../users/UserList';



const NavBar = () => {
  return (
    <div>
      <nav className="nav">
        <ul className="links">
          <Link to="/">
            <li>
              <AiFillHome />
              Home
            </li>
          </Link>
          <Link to="/usuarios">
            <li>
              <FaUserFriends />
              Usuarios
            </li>
          </Link>
        </ul>
      </nav>
    </div>
  );
};

export default NavBar;
