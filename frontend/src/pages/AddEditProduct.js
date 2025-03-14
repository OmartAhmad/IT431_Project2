import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { addProduct, updateProduct, getProducts } from "../api/productAPI";
import ProductForm from "../components/ProductForm";

const AddEditProduct = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    if (id) {
      fetchProductDetails();
    }
  }, [id]);

  const fetchProductDetails = async () => {
    const products = await getProducts();
    const existingProduct = products.find((p) => p.id === parseInt(id));
    if (existingProduct) setProduct(existingProduct);
  };

  const handleSubmit = async (updatedProduct) => {
    if (id) {
      await updateProduct(id, updatedProduct);
    } else {
      await addProduct(updatedProduct);
    }
    navigate("/products");
  };

  return (
    <div className="container">
      <button className="back-button" onClick={() => navigate(-1)}>
        ⬅ Back
      </button>

      <h2>{id ? "Edit Product" : "Add Product"}</h2>
      <ProductForm initialProduct={product} onSubmit={handleSubmit} />
    </div>
  );
};

export default AddEditProduct;
