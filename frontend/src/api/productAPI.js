import axios from "axios";

const API_URL = "http://localhost:3001/products";

// Get token from localStorage if available
const getAuthHeaders = () => {
  const token = localStorage.getItem("token");
  return {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
};

// GET all products (public)
export const getProducts = async () => {
  const response = await axios.get(API_URL);
  return response.data;
};

// POST add product (requires auth)
export const addProduct = async (product) => {
  const response = await axios.post(API_URL, product, getAuthHeaders());
  return response.data;
};

// PUT update product (requires auth)
export const updateProduct = async (id, updatedProduct) => {
  const response = await axios.put(
    `${API_URL}/${id}`,
    updatedProduct,
    getAuthHeaders()
  );
  return response.data;
};

// DELETE product (requires auth)
export const deleteProduct = async (id) => {
  const response = await axios.delete(`${API_URL}/${id}`, getAuthHeaders());
  return response.data;
};
