import React from "react";
import { Link } from "react-router-dom";
import Auth from "../../utils/auth";
import Skull from "../../assets/Skull-teeny.jpg";

const Header = () => {
  const logout = event => {
    event.preventDefault();
    Auth.logout();
  };

  return (
    <header className="bg-secondary mb-4 py-2 flex-row align-center">
      <div className="container flex-row justify-space-between-lg justify-center align-center">
        <Link to="/">
          <h1 className="red">dread-it.
          <img src={Skull} alt="skull"></img>

          </h1>
        </Link>

        <main className="text-center sticky-top">
          {Auth.loggedIn() ? (
            <>
              <Link to="/profile">Me</Link>
              <a href="/" onClick={logout}>logout</a>
            </>
          ) : (
            <>
              <Link to="/login" className="white">login </Link>
              <Link to="/signup" className="white">signup </Link>
            </>
          )}
        </main> 
      </div>
    </header>
  );
};

export default Header;
