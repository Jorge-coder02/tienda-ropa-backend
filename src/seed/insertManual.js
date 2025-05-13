import mongoose from "mongoose";
import dotenv from "dotenv";
import Product from "../models/Product.js"; // Asegúrate de que la ruta sea correcta
import productos from "../data/productos.js"; // Importando la lista de productos

dotenv.config();

// Conexión a MongoDB
mongoose
  .connect(process.env.MONGO_URI)
  .then(async () => {
    console.log("Conexión a la base de datos exitosa");

    // Borra todos los productos antes de insertar los nuevos
    await Product.deleteMany({});

    // Insertamos todos los productos de la lista
    const result = await Product.insertMany(productos);

    console.log(`Productos insertados: ${result.length}`);
    process.exit(); // Finaliza el proceso
  })
  .catch((error) => {
    console.error("Error de conexión o al insertar productos:", error);
    process.exit(1);
  });
