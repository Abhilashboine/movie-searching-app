import React, { useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import "./Navbar.css";

function Navbar() {

  const navigate = useNavigate();

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState("");

  useEffect(() => {

    const status = localStorage.getItem("isLoggedIn");

    if (status === "true") {

      setIsLoggedIn(true);

      setUsername(localStorage.getItem("loggedInUser"));

    }

  }, []);

  const logout = () => {

    localStorage.removeItem("isLoggedIn");
    localStorage.removeItem("loggedInUser");

    setIsLoggedIn(false);

    navigate("/login");

    window.location.reload();

  };

  return (

    <nav className="navbar">

      <div className="logo">
        🎬 MovieHub
      </div>

      <ul className="nav-links">

        <li><NavLink to="/">Home</NavLink></li>

        <li><NavLink to="/movies">Movies</NavLink></li>

        <li><NavLink to="/favorites">Favorites</NavLink></li>

        {
          isLoggedIn && (
            <li><NavLink to="/profile">Profile</NavLink></li>
          )
        }

      </ul>

      <div className="right-section">

        {
          isLoggedIn ?

          <>

            <span className="username">
              👤 {username}
            </span>

            <button
              className="logout-btn"
              onClick={logout}
            >
              Logout
            </button>

          </>

          :

          <>

            <NavLink
              to="/login"
              className="login-btn"
            >
              Login
            </NavLink>

            <NavLink
              to="/register"
              className="login-btn"
            >
              Register
            </NavLink>

          </>

        }

      </div>

    </nav>

  );

}

export default Navbar;