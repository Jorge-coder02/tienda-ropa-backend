import cloudinary from "../config/cloudinary.js";
import mongoose from "mongoose";
import Product from "../models/Product.js";

// Obtener todos los productos
export const getProductos = async (req, res) => {
  try {
    const productos = await Product.find();
    res.json(productos);
  } catch (err) {
    res.status(500).json({ error: "Error al obtener productos" });
  }
};

// Obtener un producto por su slug
export const getProductBySlug = async (req, res) => {
  const { slug } = req.params;

  try {
    const producto = await Product.findOne({ slug });

    if (!producto) {
      return res.status(404).json({ error: "Producto no encontrado" });
    }

    res.json(producto);
  } catch (error) {
    console.error("Error al buscar producto:", error);
    res.status(500).json({ error: "Error del servidor" });
  }
};

// 👟 Obtener productos por categoría
export const getProductsByCategory = async (req, res) => {
  const { categoria } = req.params;

  try {
    const productos = await Product.find({ categoria: categoria });

    if (productos.length === 0) {
      return res
        .status(404)
        .json({ error: "No se encontraron productos en esta categoría" });
    }

    res.json(productos);
  } catch (error) {
    console.error("Error al buscar producto:", error);
    res.status(500).json({ error: "Error del servidor" });
  }
};

// 👫 Obtener productos por género
export const getProductsByGender = async (req, res) => {
  const { genero } = req.params;

  try {
    const productos = await Product.find({ genero: genero });

    if (productos.length === 0) {
      return res
        .status(404)
        .json({ error: "No se encontraron productos en este género" });
    }

    res.json(productos);
  } catch (error) {
    console.error("Error al buscar productos:", error);
    res.status(500).json({ error: "Error del servidor" });
  }
};

// 👫👟 Obtener productos relacionados (género + categoría), excluyendo el actual
export const getRelatedProducts = async (req, res) => {
  try {
    const { categoria, genero, excludeId } = req.query;

    const productos = await Product.find({
      categoria,
      genero,
      _id: { $ne: excludeId },
    }).limit(3);

    res.json(productos);
  } catch (error) {
    console.error("Error al obtener productos relacionados:", error);
    res.status(500).json({ error: "Error al obtener productos relacionados" });
  }
};

// 📌👟 Obtener productos por Filtro (género + filtro)
export const getFilteredProducts = async (req, res) => {
  try {
    const { categoria, genero } = req.query;

    if (!genero) {
      return res.status(400).json({ error: "Falta categoría o género" });
    }

    // Añado al filtro siempre el género
    const filtro = { genero };

    // Si se proporciona una categoría, la añado al filtro
    if (categoria && categoria !== "all") {
      filtro.categoria = categoria;
    }

    // Filtrar 📌
    const productos = await Product.find(filtro);

    res.json(productos);
  } catch (error) {
    console.error("Error al obtener productos relacionados:", error);
    res.status(500).json({ error: "Error al obtener productos relacionados" });
  }
};

// ❌ Delete producto por ID
export const deleteProductById = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({ msg: "ID inválido" });
  }

  try {
    const producto = await Product.findById(id);
    if (!producto) {
      return res.status(404).json({ msg: "Producto no encontrado" });
    }

    // Eliminar imagen de Cloudinary si existe public_id
    if (producto.public_id) {
      try {
        console.log(
          `Intentando borrar imagen con public_id: ${producto.public_id}`
        );
        const result = await cloudinary.uploader.destroy(producto.public_id, {
          invalidate: true, // Invalida la caché CDN
        });

        console.log("Resultado de Cloudinary:", result);

        if (result.result !== "ok") {
          return res.status(400).json({
            msg: "La imagen no existe en Cloudinary",
            cloudinaryResult: result,
          });
        }
      } catch (cloudErr) {
        console.error("Error detallado de Cloudinary:", cloudErr);
        return res.status(500).json({
          msg: "Error al comunicarse con Cloudinary",
          error: cloudErr.message,
        });
      }
    }

    // Eliminar de la base de datos
    const deletedProduct = await Product.findByIdAndDelete(id);

    res.json({
      success: true,
      message: "Producto eliminado completamente",
      deletedProduct,
      cloudinaryDeleted: !!producto.public_id,
    });
  } catch (error) {
    console.error("Error completo:", error);
    res.status(500).json({
      success: false,
      msg: "Error en el servidor",
      error: error.message,
      stack: process.env.NODE_ENV === "development" ? error.stack : undefined,
    });
  }
};

// 🔄 Put producto por ID
export const updateProductById = async (req, res) => {
  const { id } = req.params;
  const updates = req.body;

  try {
    const updatedProduct = await Product.findByIdAndUpdate(id, updates, {
      new: true, // devuelve los productos actualizados, no los anteriores
      runValidators: true, // se cumplen las reglas del esquema
    });
    if (!updatedProduct) {
      res.status(404).json({ msg: "No se ha encontrado el producto" });
    }
    res.json(updatedProduct);
  } catch (err) {
    res.status(500).json({ message: "Error actualizando producto" });
  }
};

// 🟢 Get Categorías
export const getCategories = async (req, res) => {
  try {
    const categorias = await Product.distinct("categoria");
    res.json(categorias);
  } catch (err) {
    res.status(500).json({ error: "Error al obtener categorías" });
  }
};

// 🟡 Post Categorías
export const addProduct = async (req, res) => {
  try {
    const nuevoProducto = new Product(req.body);
    const productoGuardado = await nuevoProducto.save();
    res.status(201).json(productoGuardado);
  } catch (error) {
    console.error("Error al crear producto:", error);
    res.status(500).json({ mensaje: "Error al crear el producto", error });
  }
};
