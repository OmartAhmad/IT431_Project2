const express = require("express");
const fs = require("fs-extra");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 8000;
const FILE_PATH = "./products.json";

app.use(express.json());
app.use(cors());

const readProducts = async () => {
  try {
    return await fs.readJson(FILE_PATH);
  } catch (err) {
    return [];
  }
};

const writeProducts = async (products) => {
  await fs.writeJson(FILE_PATH, products, { spaces: 2 });
};

app.get("/products", async (req, res) => {
  const products = await readProducts();
  res.json(products);
});

app.get("/products/:id", async (req, res) => {
  const products = await readProducts();
  const product = products.find((p) => p.id === parseInt(req.params.id));

  if (!product) {
    return res.status(404).json({ message: "Product not found" });
  }

  res.json(product);
});

app.post("/products", async (req, res) => {
  const { name, price, category, description } = req.body;

  if (!name || !price || !category || !description) {
    return res.status(400).json({ message: "Missing required product fields" });
  }

  const products = await readProducts();
  const newProduct = { id: Date.now(), name, price, category, description };

  products.push(newProduct);
  await writeProducts(products);

  res.status(201).json(newProduct);
});

app.put("/products/:id", async (req, res) => {
  const products = await readProducts();
  const productId = parseInt(req.params.id);
  const index = products.findIndex((p) => p.id === productId);

  if (index === -1) {
    return res.status(404).json({ message: "Product not found" });
  }

  products[index] = { ...products[index], ...req.body };
  await writeProducts(products);

  res.json(products[index]);
});

app.delete("/products/:id", async (req, res) => {
  const products = await readProducts();
  const productId = parseInt(req.params.id);
  const newProducts = products.filter((p) => p.id !== productId);

  if (products.length === newProducts.length) {
    return res.status(404).json({ message: "Product not found" });
  }

  await writeProducts(newProducts);
  res.json({ message: "Product deleted successfully" });
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
