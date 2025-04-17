import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  const isLoggedIn = !!localStorage.getItem("token");
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    alert("Logged out!");
    navigate("/login");
  };

  return (
    <nav className="neon-navbar">
      <Link to="/">Home</Link>
      <Link to="/products">Products</Link>

      {!isLoggedIn && (
        <>
          <Link to="/login">Login</Link>
          <Link to="/signup">Signup</Link>
        </>
      )}

      {isLoggedIn && <button onClick={handleLogout}>Logout</button>}
    </nav>
  );
};

export default Navbar;
