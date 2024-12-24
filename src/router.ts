import { Router } from "express";
import { CategoryController } from "./app/controllers/CategoryController";

export const router = Router();

// List Category
router.get("/categories", CategoryController.list);

// Create Category
router.post("/categories", CategoryController.create);

// List Products
router.get("/products", (req, res) => {
  res.send("List of products");
});

// Create Product
router.post("/products", (req, res) => {
  res.send("List of products");
});

// Get Products by category
router.get("/products/:categoryId", (req, res) => {
  res.send("List of products of categorie");
});

// List orders
router.get("/orders", (req, res) => {
  res.send("List of orders");
});

// Create order
router.post("/orders", (req, res) => {
  res.send("Create of orders");
});

// Change order status
router.patch("/orders", (req, res) => {
  res.send("Update status of orders");
});

// Delete/cancel order
router.delete("/orders:orderId", (req, res) => {
  res.send("Delete  orders");
});
