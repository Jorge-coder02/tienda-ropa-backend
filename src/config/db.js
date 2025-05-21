import mongoose from "mongoose";

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("✅ BBDD MongoDB conectado");
  } catch (err) {
    console.error("❌ Error en conexión MongoDB:", err.message);
    process.exit(1);
  }
};

export default connectDB;
