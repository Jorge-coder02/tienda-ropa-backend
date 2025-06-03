import express from "express";
import {
  getProductos,
  getProductBySlug,
  getProductsByCategory,
  getProductsByGender,
  getRelatedProducts,
  getFilteredProducts,
  deleteProductById,
} from "../controllers/productController.js";

const router = express.Router();

// Get
router.get("/", getProductos);
router.get("/relacionados", getRelatedProducts); // Mover esta ruta arriba
router.get("/filtro", getFilteredProducts); // 📌 por filtro
router.get("/categoria/:categoria", getProductsByCategory); // sin uso
router.get("/genero/:genero", getProductsByGender);
router.get("/:slug", getProductBySlug); // Mover esta ruta abajo

// Delete
router.delete("/:id", deleteProductById); // Delete producto por id

export default router;
