import express from "express";
import {
  getProductos,
  getProductBySlug,
  getProductByCategory,
} from "../controllers/productController.js";

const router = express.Router();
router.get("/", getProductos);
router.get("/:slug", getProductBySlug);
router.get("/categoria", getProductByCategory);

export default router;
