import express from "express";
import {
  getProductos,
  getProductBySlug,
  getProductsByCategory,
  getProductsByGender,
} from "../controllers/productController.js";

const router = express.Router();
router.get("/", getProductos);
router.get("/:slug", getProductBySlug);
router.get("/categoria/:categoria", getProductsByCategory);
router.get("/genero/:genero", getProductsByGender);

export default router;
