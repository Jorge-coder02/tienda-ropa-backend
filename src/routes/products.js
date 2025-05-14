import express from "express";
import {
  getProductos,
  getProductBySlug,
} from "../controllers/productController.js";

const router = express.Router();
router.get("/", getProductos);
router.get("/:slug", getProductBySlug);

export default router;
