import express from "express";
import {
  getProductos,
  getProductBySlug,
  getProductsByCategory,
} from "../controllers/productController.js";

const router = express.Router();
router.get("/", getProductos);
router.get("/:slug", getProductBySlug);
router.get("/categoria/:categoria", getProductsByCategory);

export default router;
