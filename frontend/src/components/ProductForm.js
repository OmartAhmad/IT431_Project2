import React, { useState, useEffect } from "react";

const ProductForm = ({ initialProduct, onSubmit }) => {
  const [product, setProduct] = useState(
    initialProduct || { name: "", price: "", category: "", description: "" }
  );

  useEffect(() => {
    if (initialProduct) {
      setProduct(initialProduct);
    }
  }, [initialProduct]);

  const handleChange = (e) => {
    setProduct({ ...product, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(product);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="name"
        placeholder="Please enter the products name"
        value={product.name}
        onChange={handleChange}
        required
      />
      <input
        type="number"
        name="price"
        placeholder="What is the products price"
        value={product.price}
        onChange={handleChange}
        required
      />
      <input
        type="text"
        name="category"
        placeholder="What Category does this product belong to"
        value={product.category}
        onChange={handleChange}
        required
      />
      <input
        type="text"
        name="description"
        placeholder="Enter the Description of the product"
        value={product.description}
        onChange={handleChange}
        required
      />
      <button type="submit">{initialProduct ? "Update" : "Add"} Product</button>
    </form>
  );
};

export default ProductForm;
