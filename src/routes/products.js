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
router.get("/relacionados", getRelatedProducts); // Mover esta ruta arriba
router.get("/categoria/:categoria", getProductsByCategory); // sin uso
router.get("/genero/:genero", getProductsByGender);
router.get("/:slug", getProductBySlug); // Mover esta ruta abajo

export default router;
