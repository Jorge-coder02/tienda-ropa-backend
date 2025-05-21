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
    const { categoria, genero } = req.query;
    const productos = await Product.find({
      categoria,
      genero,
      _id: { $ne: req.query.excludeId }, // excluir el producto actual
    }).limit(2); // limitar a 3 productos relacionados
    res.json(productos);
  } catch (error) {
    res.status(500).json({ error: "Error al obtener productos relacionados" });
  }
};
