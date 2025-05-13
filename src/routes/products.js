import express from "express";
import { getProductos } from "../controllers/productController.js";

const router = express.Router();
router.get("/", getProductos);

export default router;
