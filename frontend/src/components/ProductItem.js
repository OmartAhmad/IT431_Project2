import React from "react";
import { Link, useNavigate } from "react-router-dom";

const ProductItem = ({ product, onDelete, isLoggedIn }) => {
  const navigate = useNavigate();

  return (
    <li style={{ marginBottom: "20px" }}>
      <strong className="neon-text">{product.name}</strong> - ${product.price} -{" "}
      {product.category}
      <p>{product.description}</p>
      {/* Only show buttons if user is logged in */}
      {isLoggedIn && (
        <>
          <button onClick={() => navigate(`/edit/${product._id}`)}>
            Edit Product
          </button>
          <button onClick={() => onDelete(product._id)}>Delete Product</button>
        </>
      )}
    </li>
  );
};

export default ProductItem;
