import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="container">
      <h1 className="neon-text">Welcome to Omar Ahmad Ecoms Store!</h1>
      <Link to="/products">
        <button>View Current Products</button>
      </Link>
    </div>
  );
};

export default Home;
