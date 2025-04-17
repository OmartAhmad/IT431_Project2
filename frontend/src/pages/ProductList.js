import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { getProducts, deleteProduct } from "../api/productAPI";
import ProductItem from "../components/ProductItem";

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();
  const isLoggedIn = !!localStorage.getItem("token");

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    const data = await getProducts();
    setProducts(data);
  };

  const handleDelete = async (id) => {
    await deleteProduct(id);
    fetchProducts();
  };

  return (
    <div className="container">
      <button className="back-button" onClick={() => navigate(-1)}>
        ⬅ Back
      </button>

      <h2 className="neon-text">Product List</h2>
      {isLoggedIn && (
        <Link to="/add">
          <button>Add a Product</button>
        </Link>
      )}
      <ul>
        {products.map((product) => (
          <ProductItem
            key={product.id}
            product={product}
            onDelete={handleDelete}
            isLoggedIn={isLoggedIn}
          />
        ))}
      </ul>
    </div>
  );
};

export default ProductList;
