class ProductoService {
  // Método para crear un producto
  async crearProducto(data) {
    try {
      // Aquí iría la lógica para crear el producto, como una llamada a una base de datos
      return "Producto creado con éxito";
    } catch (error) {
      console.error("Error al crear producto:", error);
    }
  }

  // Método para listar productos
  async listarProductos() {
    try {
      // Aquí iría la lógica para listar los productos, como una consulta a una base de datos
      return ["Producto 1", "Producto 2", "Producto 3"];
    } catch (error) {
      console.error("Error al listar productos:", error);
    }
  }
}
