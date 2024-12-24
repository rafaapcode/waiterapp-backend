import { Router } from "express";
import multer from "multer";
import path from "node:path";
import { createCategory } from "./app/useCases/categories/createCategory";
import { listCategory } from "./app/useCases/categories/listCategory";
import { listProductByCategorie } from "./app/useCases/categories/listProductsByCategorie";
import { changeStatusOrder } from "./app/useCases/orders/changeOrderStatus";
import { createOrder } from "./app/useCases/orders/createOrder";
import { listOrders } from "./app/useCases/orders/listOrders";
import { createProduct } from "./app/useCases/products/createProduct";
import { listProducts } from "./app/useCases/products/listProducts";

export const router = Router();
const upload = multer({
  storage: multer.diskStorage({
    destination(req, file , cb) {
      cb(null, path.resolve(__dirname, "..", "uploads"));
    },
    filename(req, file, cb) {
      cb(null, `${Date.now()}-${file.originalname}`);
    }
  })
})

// List Category
router.get("/categories", listCategory);

// Create Category
router.post("/categories", createCategory);

// List Products
router.get("/products", listProducts);

// Create Product
router.post("/products", upload.single('image'), createProduct);

// Get Products by category
router.get("/categories/:categoryId/products", listProductByCategorie);

// List orders
router.get("/orders", listOrders);

// Create order
router.post("/orders", createOrder);

// Change order status
router.patch("/orders/:orderId", changeStatusOrder);

// Delete/cancel order
router.delete("/orders/:orderId", (req, res) => {
  res.send("Delete  orders");
});
