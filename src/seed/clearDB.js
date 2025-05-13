// scripts/clearDB.js
import mongoose from "mongoose";
import dotenv from "dotenv";
import Product from "../models/Product.js";

dotenv.config();

mongoose
  .connect(process.env.MONGO_URI)
  .then(async () => {
    const result = await Product.deleteMany({});
    console.log(`✅ Productos eliminados: ${result.deletedCount}`);
    process.exit();
  })
  .catch((err) => {
    console.error("❌ Error al conectar a MongoDB:", err);
    process.exit(1);
  });
