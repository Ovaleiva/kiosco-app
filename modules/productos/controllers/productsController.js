const productModel = require("../models/ProductModel");

exports.getAll = async (req, res) => {
  try {
    const products = await productModel.getAll();
    res.render("products", { products });
  } catch (error) {
    console.log(error);
    console.error("Error al obtener los productos:", error);
    return res.status(500).json({ error: "Error al obtener productos" });
  }
};

exports.create = async (req, res) => {
  const { name, price } = req.body;

  // Verificar que el precio es un número válido
  const priceNumeric = parseFloat(price);

  // Agregar un log para verificar el valor recibido
  console.log("Precio recibido:", price, "Precio como número:", priceNumeric);

  // Si el precio no es un número válido, devolver un error
  if (isNaN(priceNumeric)) {
    return res
      .status(400)
      .json({ error: "El precio debe ser un número válido" });
  }

  try {
    await productModel.createProduct({ name, price: priceNumeric });
    res.redirect("/products");
  } catch (error) {
    console.error("Error al crear el producto:", error);
    return res
      .status(500)
      .json({ error: "Error al crear producto", details: error.message });
  }
};

exports.delete = async (req, res) => {
  const { id } = req.params;
  try {
    await productModel.deleteProduct(id);
    res.redirect("/products");
  } catch (error) {
    console.error("Error al eliminar el producto:", error);
    return res.status(500).json({ error: "Error al eliminar producto" });
  }
};
