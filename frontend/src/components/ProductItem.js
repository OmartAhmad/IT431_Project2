import React from "react";
import { Link } from "react-router-dom";

const ProductItem = ({ product, onDelete }) => {
  return (
    <li>
      <strong className="neon-text">{product.name}</strong> - ${product.price} -{" "}
      {product.category} - <p>{product.description}</p>
      <Link to={`/edit/${product.id}`}>
        <button>Edit Product</button>
      </Link>
      <button onClick={() => onDelete(product.id)}>Delete Product</button>
    </li>
  );
};

export default ProductItem;
