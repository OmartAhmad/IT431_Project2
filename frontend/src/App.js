import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import ProductList from "./pages/ProductList";
import AddEditProduct from "./pages/AddEditProduct";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<ProductList />} />
        <Route path="/add" element={<AddEditProduct />} />
        <Route path="/edit/:id" element={<AddEditProduct />} />
      </Routes>
    </Router>
  );
}

export default App;
