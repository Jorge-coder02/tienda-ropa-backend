import express from "express";
import {
  getProductos,
  getProductBySlug,
  getProductsByCategory,
  getProductsByGender,
  getRelatedProducts,
} from "../controllers/productController.js";

const router = express.Router();
router.get("/", getProductos);
router.get("/:slug", getProductBySlug);
router.get("/categoria/:categoria", getProductsByCategory); // sin uso
router.get("/genero/:genero", getProductsByGender);
router.get("/relacionados", getRelatedProducts); //

export default router;
