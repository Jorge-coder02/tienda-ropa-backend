// models/Product.js
import mongoose from "mongoose";

// Definimos el esquema para los productos
const productSchema = new mongoose.Schema({
  nombre: { type: String, required: true },
  slug: { type: String, required: true, unique: true },
  precio: { type: Number, required: true },
  descripcion: { type: String, required: true },
  imagen: { type: String, required: true },
  categoria: { type: String, required: true },
  genero: { type: String, required: true },
  stock: { type: Number, required: true },
});

// Creamos el modelo 'Product' basado en el esquema
const Product = mongoose.model("Product", productSchema);

export default Product;
